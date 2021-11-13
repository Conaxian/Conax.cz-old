<?php declare(strict_types=1);

namespace Errors;

const ERROR_CODES = [
  400 => "Bad Request",
  404 => "Not Found",
  405 => "Method Not Allowed",
  500 => "Internal Server Error",
];

class ErrorPage {
  function __construct(public int $code) {}

  private function getName() {
    $text = ERROR_CODES[$this->code];
    return "{$this->code} $text";
  }

  private function getBody() {
    ob_start();
    require "bodies/{$this->code}.phtml";
    return ob_get_clean();
  }

  function show() {
    $name = $this->getName();
    $body = $this->getBody();
    require "error.phtml";
  }
}

?>
