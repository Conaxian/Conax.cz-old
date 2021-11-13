<?php declare(strict_types=1);

namespace Resp;

require_once __DIR__ . "/../buffer/Buffer.php";
require_once __DIR__ . "/../../views/View.php";
require_once __DIR__ . "/../../errors/ErrorPage.php";

const CACHED_TYPES = [
  "application/javascript" => 172800,
  "text/css" => 172800,
  "font/ttf" => 31536000,
  "font/woff2" => 31536000,
  "image/png" => 31536000,
  "image/jpeg" => 31536000,
  "image/gif" => 31536000,
  "image/x-icon" => 31536000,
];

class Response {
  private int $code = 200;
  private array $headers = [];
  private \Buffer\Buffer $body;
  private string $bodyString = "";

  function __construct() {
    $this->body = new \Buffer\Buffer();
  }

  function code(int $code) {
    $this->code = $code;
  }

  function header(string $name, string $value) {
    $this->headers[$name] = $value;
  }

  function startBody() {
    $this->body->start();
    if ($this->body->compression) {
      $this->header("Content-Encoding", $this->body->compression);
    }
  }

  function endBody() {
    [$body, $length] = $this->body->flush();
    $this->bodyString = $body;
    if ($length) {
      $this->header("Content-Length", "$length");
    }
  }

  function send() {
    http_response_code($this->code);
    foreach ($this->headers as $name => $value) {
      header("$name: $value");
    }

    if ($_SERVER["REQUEST_METHOD"] !== "HEAD") {
      echo $this->bodyString;
    }
    exit;
  }

  function viewPage(\Views\View $view) {
    $this->startBody();
    $view->show();
    $this->endBody();
  }

  function errorPage(int $code) {
    $this->code($code);

    $this->startBody();
    $error = new \Errors\ErrorPage($code);
    $error->show();
    $this->endBody();
  }

  function contentType(string $mimeType, bool $includeEncoding = true) {
    if ($includeEncoding) $mimeType .= "; charset=utf-8";
    $this->header("Content-Type", $mimeType);
  }

  function resourceBody(
    string $resource,
    string $mimeType,
    bool $includeEncoding = true,
  ) {
    $this->contentType($mimeType, $includeEncoding);

    $this->startBody();

    if (array_key_exists($mimeType, CACHED_TYPES)) {
      $age = CACHED_TYPES[$mimeType];
      $etag = '"' . md5($resource) . '"';

      $this->header("Cache-Control", "max-age=$age");
      $this->header("ETag", $etag);

      if (($_SERVER["HTTP_IF_NONE_MATCH"] ?? null) === $etag) {
        $this->code(304);
      } else {
        echo $resource;
      }
    } else {
      echo $resource;
    }

    $this->endBody();
  }

  function jsonBody(array $array) {
    $this->contentType("application/json");

    $this->startBody();
    $json = json_encode($array, JSON_UNESCAPED_SLASHES);
    echo $json;
    $this->endBody();
  }

  function created(string $url) {
    $this->code(201);
    $this->header("Location", $url);
  }

  function redirect(string $url) {
    $this->code(302);
    $this->header("Location", $url);
    $this->header("Connection", "close");
  }
}

?>
