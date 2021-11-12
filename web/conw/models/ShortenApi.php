<?php declare(strict_types=1);

require_once __DIR__ . "/../lib/url/Url.php";
require_once __DIR__ . "/../errors/ErrorPage.php";

abstract class ShortenApi {
  private static function setUrl(string $url) {
    $json = file_get_contents("data/short-url/urls.json");
    $urls = json_decode($json, true);
    do {
      $id = Url\Url::genId(4);
    } while (array_key_exists($id, $urls));

    $urls[$id] = $url;
    $json = json_encode($urls);
    file_put_contents("data/short-url/urls.json", $json);
    return $id;
  }

  static function process() {
    $url = $_GET["url"] ?? null;
    if (!$url or !filter_var($url, FILTER_VALIDATE_URL)) {
      $error = new Errors\ErrorPage(400);
      $error->display();
    }

    $id = self::setUrl($url);
    $shortUrl = Url\Url::getSelf() . "/a/$id";

    Resp\Response::created($shortUrl);
    Resp\Response::jsonApi([
      "success" => true,
      "id" => $id,
      "url" => $shortUrl,
    ]);
  }
}

?>
