<?php declare(strict_types=1);

const BASE_64 = "0123456789abcdefghijklmnopqrstuvwxyz".
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_";

class ShortUrlMod {
  private function makeId() {
    $id = "";
    for ($i = 0; $i < 4; $i++) {
      $id .= BASE_64[mt_rand(0, 63)];
    }
    return $id;
  }

  public function setUrl(string $url) {
    $json = file_get_contents("data/short-url/urls.json");
    $urls = json_decode($json, true);
    $id = $this->makeId();
    while (array_key_exists($id, $urls)) {
      $id = $this->makeId();
    }

    $urls += [$id => $url];
    $urls[$id] = $url;
    $json = json_encode($urls);
    file_put_contents("data/short-url/urls.json", $json);
    return $id;
  }

  public function getUrl(string $id) {
    $json = file_get_contents("data/short-url/urls.json");
    $url = json_decode($json, true)[$id];
    return $url;
  }
}

?>
