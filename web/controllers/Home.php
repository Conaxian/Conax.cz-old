<?php declare(strict_types=1);

class HomeControl extends Controller {
  public function process(array $args) {
    $this->head["title"] = "Conax";
    $this->head["keywords"] = "conax, programming";
    $this->head["description"] = "The Website of Conax";
    $this->view = "pages/home";
  }
}

?>
