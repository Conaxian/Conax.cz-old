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
  public bool $gzip;

  function __construct() {
    $reqEncoding = $_SERVER["HTTP_ACCEPT_ENCODING"];
    $result = preg_match("/gzip/i", $reqEncoding);
    $this->gzip = boolval($result);
  }

  function filter(string $buffer, int $phase) {
    if ($this->gzip) {
      return ob_gzhandler($buffer, $phase);
    } else {
      return $buffer;
    }
  }

  function start() {
    ob_start([ $this, "filter" ]);
  }

  function flush() {
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
