<?php declare(strict_types=1);

namespace Models;

require_once __DIR__ . "/../lib/resp/Response.php";
require_once __DIR__ . "/../lib/curl/CurlRequest.php";
require_once __DIR__ . "/../views/View.php";

const SUBJECTS = [
  "ZSV?|(Basic[ _]?)?Humanities" => ["BasicHumanities", "ZSV"],
  "BI|Biology" => ["Biology", "BI"],
  "CH|Chemistry" => ["Chemistry", "CH"],
  "CJ|Czech" => ["Czech", "CJ"],
  "AJ|English" => ["English", "AJ"],
  "ZE?|Geography" => ["Geography", "Z"],
  "DE?|History" => ["History", "D"],
  "MA?|Math(ematics)?" => ["Mathematics", "M"],
  "EV?H|Music" => ["Music", "EH"],
  "FY|Physics" => ["Physics", "FY"],
  "SJ|Spanish" => ["Spanish", "SJ"],
];

const API_URL = "https://api.github.com";

const SCHOOL_REPO = "Conaxian/School";

abstract class SchoolNote {
  private static function resolveSubject(string $subject): ?array {
    foreach (SUBJECTS as $pattern => $info) {
      $pattern = "{^(" . $pattern . ")$}i";
      if (preg_match($pattern, $subject)) {
        return $info;
      }
    }
    return null;
  }

  private static function requestNote(
    \Resp\Response $response,
    string $subject,
    string $name,
    string|int $num,
    bool $src,
    bool $lenient,
  ) {
    $endpoint = "/repos/" . SCHOOL_REPO .
      "/contents/2021_22/$name/notes/$num.md";
    $url = API_URL . $endpoint;
    $token = $_ENV["GITHUB_AUTH_TOKEN"];

    $request = new \Curl\CurlRequest($url, [
      "Accept: application/vnd.github.v3.raw",
      "Authorization: token $token",
    ]);

    if ($lenient and $request->code() !== 200 and ($num = intval($num)) > 1) {
      return self::requestNote(
        $response, $subject, $name, $num - 1, $src, false
      );
    } else if ($request->code() !== 200) {
      $response->errorPage(404);
      $response->send();
    } else if (!$lenient) {
      $response->redirect("/notes/$subject/$num" . ($src ? "/source" : ""));
      $response->send();
    }

    return $request->body();
  }

  static function process(
    \Resp\Response $response,
    string $subject,
    string $num,
    bool $src,
  ) {
    [$name, $abbr] = self::resolveSubject($subject);

    $num = intval($num);
    if (!$num) {
      $response->redirect("/notes/$subject/1" . ($src ? "/source" : ""));
      $response->send();
    }

    if (!$name || !(
      $note = self::requestNote($response, $subject, $name, $num, $src, true)
    )) {
      $response->errorPage(404);
      $response->send();
    }

    if ($src) {
      $response->resourceBody($note, "text/markdown");
      $response->send();
    }

    $view = \Views\View::static(
      title: "Conax | Note $abbr/$num",
      keywords: "conax, programming",
      description: "The Website of Conax - Note $abbr/$num",
      page: "Note",
      data: [
        "note" => $note,
        "subject" => $subject,
        "num" => intval($num),
      ],
    );
    $response->viewPage($view);
    $response->send();
  }
}
