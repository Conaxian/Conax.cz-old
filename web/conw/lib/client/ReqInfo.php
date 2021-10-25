<?php declare(strict_types=1);

namespace Client;

abstract class ReqInfo {
  static function gzipSupport(): bool {
    $reqEncoding = $_SERVER["HTTP_ACCEPT_ENCODING"];
    $result = preg_match("/gzip/i", $reqEncoding);
    return boolval($result);
  }
}

?>
