<?php declare(strict_types=1);

class ShortenApiControl extends Controller {
  public function process(array $args) {
    $query = $args["url"]["query"];
    $parts = explode("=", $query);
    $id = mb_strtolower($parts[0]);
    $url = filter_var($parts[1], FILTER_SANITIZE_URL);

    if ($id !== "url" or !filter_var($url, FILTER_VALIDATE_URL)
    or count($parts) !== 2) {
      $this->error = 400;
      return;
    }

    $shortUrl = new ShortUrlMod();
    $id = $shortUrl->setUrl($url);
    http_response_code(201);
    echo "{\"success\": true, \"id\": \"$id\"}";
    exit;
  }
}

?>
