<?php declare(strict_types=1);

class AboutControl extends Controller {
  public function process(array $args) {
    $this->head["title"] = "Conax | About";
    $this->head["keywords"] = "conax, programming";
    $this->head["description"] = "The Website of Conax - About";
    $this->view = "pages/about";
  }
}

?>
