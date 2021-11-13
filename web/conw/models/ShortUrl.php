<?php declare(strict_types=1);

namespace Models;

require_once __DIR__ . "/../lib/resp/Response.php";

abstract class ShortUrl {
  static function process(\Resp\Response $response, string $id) {
    $json = file_get_contents("data/short-url/urls.json");
    $url = json_decode($json, true)[$id];

    if (!$url) {
      $response->errorPage(404);
      $response->send();
    }

    $response->redirect($url);
    $response->send();
  }
}

?>
