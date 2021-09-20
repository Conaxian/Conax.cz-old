<?php declare(strict_types=1);

abstract class Controller {
  protected $data = [];
  protected $view = "";
  protected $head = [
    "title" => "",
    "keywords" => "",
    "description" => "",
  ];
  protected $error = 0;

  abstract function process(array $args);

  public function showView() {
    if ($this->view) {
      extract($this->data);
      require("views/" . $this->view . ".phtml");
    }
  }

  public function redirect(string $url) {
    header("Location: $url");
    header("Connection: close");
    exit;
  }
}

?>
