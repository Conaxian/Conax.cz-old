<?php declare(strict_types=1);

require __DIR__ . "/../lib/url/Url.php";
require __DIR__ . "/../errors/ErrorPage.php";

abstract class ShortUrl {
  static function process(string $id) {
    $json = file_get_contents("data/short-url/urls.json");
    $url = json_decode($json, true)[$id];

    if (!$url) {
      Errors\ErrorPage::display(404);
    }

    Resp\Response::redirect($url);
  }
}

?>
