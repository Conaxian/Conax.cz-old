<?php declare(strict_types=1);

class ErrorControl extends Controller {
  public function process(array $args) {
    header("HTTP/1.1 404 Not Found");
    $this->head["title"] = "404 Not Found";
    $this->view = "errors/404";
  }
}

?>
