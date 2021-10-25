<?php declare(strict_types=1);

namespace Resp;

abstract class Response {
  static function redirect(string $url) {
    http_response_code(302);
    header("Location: $url");
    header("Connection: close");
    exit;
  }

  static function created(string $url) {
    http_response_code(201);
    header("Location: $url");
  }

  static function contentType(string $type) {
    header("Content-Type: $type; charset=utf-8");
  }

  static function jsonApi(array $array) {
    self::contentType("application/json");
    $json = json_encode($array, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    echo $json;
    exit;
  }
}

?>
