<?php declare(strict_types=1);

namespace Errors;

const ERROR_CODES = [
  400 => "Bad Request",
  404 => "Not Found",
  405 => "Method Not Allowed",
  500 => "Internal Server Error",
];

abstract class ErrorPage {
  static function getText(int $code) {
    $text = ERROR_CODES[$code];
    return "{$code} $text";
  }

  static function getBody(int $code) {
    include "bodies/{$code}.phtml";
  }

  static function display(int $code, array $headers = []) {
    if (ob_get_contents()) ob_clean();

    http_response_code($code);
    foreach ($headers as $header) {
      header($header);
    }

    $title = self::getText($code);
    include "error.phtml";
    exit;
  }
}

?>
