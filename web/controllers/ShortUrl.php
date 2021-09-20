<?php declare(strict_types=1);

class ShortUrlControl extends Controller {
  public function process(array $args) {
    $shortUrl = new ShortUrlMod();
    $id = explode("/", $args["path"])[1];
    $newUrl = $shortUrl->getUrl($id);
    if ($newUrl) {
      $this->redirect($newUrl);
    }
    $this->error = 404;
  }
}

?>
