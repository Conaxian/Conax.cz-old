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
  public ?string $compression;
  private ?string $compressFunction;

  private function supportedCompressions() {
    $acceptEncoding = $_SERVER["HTTP_ACCEPT_ENCODING"] ?? "";

    $gzip = preg_match('/\bgzip\b/i', $acceptEncoding);
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
    ob_start();
    ob_start([ $this, "filter" ]);
  }

  function flush() {
    ob_start();

    ob_end_flush();
    ob_end_flush();
    $length = ob_get_length();

    $content = ob_get_clean();
    return [$content, $length];
  }
}

?>
