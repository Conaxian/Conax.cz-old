<?php declare(strict_types=1);

class ShortenApiControl extends Controller {
  public function process(array $args) {
    $url = $args["query"]["url"];
    if (!$url or !filter_var($url, FILTER_VALIDATE_URL)) {
      $this->error = 400;
      return;
    }

    $shortUrl = new ShortUrlMod();
    $id = $shortUrl->setUrl($url);
    http_response_code(201);
    header("Content-Type: application/json; charset=utf-8");
    echo "{\"success\": true, \"id\": \"$id\"}";
    exit;
  }
}

?>
