<?php declare(strict_types=1);

namespace Req;

class Request {
  public string $path;
  public string $method;
  public array $route = [];

  private function setRequestPath() {
    $url = $_SERVER["REQUEST_URI"];
    $matches = [];
    preg_match("/[^\/]*([^?]*)\??.*/", $url, $matches);

    $this->path = $matches[1] ?? "";
    $this->path = urldecode($this->path);
    $this->path = trim($this->path, "/");
    $this->path = preg_replace("{/+}", "/", $this->path);
  }

  function __construct() {
    $this->setRequestPath();
    $this->method = $_SERVER["REQUEST_METHOD"];
  }
}

?>
