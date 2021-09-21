<?php declare(strict_types=1);

class ErrorControl extends Controller {
  public function process(array $args) {
    $code = $args["code"];
    $details = [
      400 => "Bad Request",
      404 => "Not Found",
      500 => "Internal Server Error",
    ][$code];
    http_response_code($code);
    $this->head["title"] = "$code $details";
    $this->view = "errors/$code";
  }
}

?>
