<?php declare(strict_types=1);

namespace Buffer;

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

class Buffer {
  private ?string $compression;
  private ?string $compressFunction;

  private function supportedCompressions() {
    $acceptEncoding = $_SERVER["HTTP_ACCEPT_ENCODING"] ?? "";

    $brotli = preg_match("/\\bbr\\b/i", $acceptEncoding);
    if ($brotli && function_exists("brotli_compress")) {
      $this->compression = "brotli";
      $this->compressFunction = "brotli_compress";
      return;
    }

    $gzip = preg_match("/\\bgzip\\b/i", $acceptEncoding);
    if ($gzip) {
      $this->compression = "gzip";
      $this->compressFunction = "ob_gzhandler";
      return;
    }
  }

  function __construct() {
    $this->supportedCompressions();
  }

  function filter(string $buffer, int $phase) {
    if ($this->compressFunction) {
      return ($this->compressFunction)($buffer, $phase);
    } else {
      return $buffer;
    }
  }

  function start() {
    if ($this->compression === "brotli") {
      header("Content-Encoding: br");
    }

    ob_start([ $this, "filter" ]);
  }

  function flush() {
    $content = ob_get_contents();
    $length = strlen($content);
    header("Content-Length: $length");

    ob_flush();
  }

  function sendResource(string $resource, string $mimeType) {
    if (!array_key_exists($mimeType, CACHED_TYPES)) {
      echo $resource;
      return;
    }

    $age = CACHED_TYPES[$mimeType];
    $etag = '"' . md5($resource) . '"';

    header("Cache-Control: max-age=$age");
    header("ETag: $etag");

    if (($_SERVER["HTTP_IF_NONE_MATCH"] ?? null) === $etag) {
      \Resp\Response::notModified();
    }

    echo $resource;
  }

}

?>
