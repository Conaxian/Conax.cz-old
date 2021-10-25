<?php declare(strict_types=1);

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

require __DIR__ . "/../errors/ErrorPage.php";
require __DIR__ . "/../lib/req/Request.php";

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

  private static function requestNote(string $name, string $num) {
    $endpoint = "/repos/" . SCHOOL_REPO .
      "/contents/2021_22/$name/notes/$num.md";
    $url = API_URL . $endpoint;
    $token = $_ENV["GITHUB_AUTH_TOKEN"];

    $request = new Req\Request($url, [
      "Accept: application/vnd.github.v3.raw",
      "Authorization: token $token",
    ]);

    if ($request->code() !== 200) {
      Errors\ErrorPage::display(404);
    }

    return $request->body();
  }

  static function process(string $subject, string $num) {
    [$name, $abbr] = self::resolveSubject($subject);

    if (!$name || !(
      $note = self::requestNote($name, $num)
    )) {
      Errors\ErrorPage::display(404);
    }

    Views\View::show(
      title: "Conax | Note $abbr/$num",
      keywords: "conax, programming",
      description: "The Website of Conax - Note $abbr/$num",
      page: "Note",
      data: [
        "note" => $note,
        "subject" => $subject,
        "num" => intval($num),
      ]
    );
  }
}

?>