<?php declare(strict_types=1);

namespace Models;

require_once __DIR__ . "/../lib/resp/Response.php";
require_once __DIR__ . "/../lib/url/Url.php";

abstract class ShortenApi {
  private static function setUrl(string $url) {
    $json = file_get_contents("data/short-url/urls.json");
    $urls = json_decode($json, true);

    do {
      $id = \Url\Url::genId(4);
    } while (array_key_exists($id, $urls));
    $urls[$id] = $url;

    $json = json_encode($urls);
    file_put_contents("data/short-url/urls.json", $json);
    return $id;
  }

  static function process(\Resp\Response $response) {
    $url = $_GET["url"] ?? null;
    if (!$url or !filter_var($url, FILTER_VALIDATE_URL)) {
      $response->errorPage(400);
      $response->send();
    }

    $id = self::setUrl($url);
    $shortUrl = \Url\Url::getSelf() . "/a/$id";

    $response->created($shortUrl);
    $response->jsonBody([
      "success" => true,
      "id" => $id,
      "url" => $shortUrl,
    ]);
    $response->send();
  }
}

?>
