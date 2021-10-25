<?php declare(strict_types=1);

namespace Url;

const BASE_64 = "0123456789abcdefghijklmnopqrstuvwxyz".
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_";

abstract class Url {
  static function getSelf() {
    $scheme = ($_SERVER["HTTPS"] ?? null) ? "https" : "http";
    $host = $_SERVER["SERVER_NAME"] ?? "conax.cz";
    $port = $_SERVER["SERVER_PORT"] ??
      ($scheme === "https" ? 443 : 80);
    $url = "$scheme://$host";
    if (
      ($port === 80 && $scheme === "http") ||
      ($port === 443 && $scheme === "https")
    ) {
      return $url;
    } else {
      return "$url:$port";
    }
  }

  static function genId(int $length) {
    $id = "";
    for ($i = 0; $i < $length; $i++) {
      $id .= BASE_64[mt_rand(0, 63)];
    }
    return $id;
  }
}

?>
