<?php declare(strict_types=1);

namespace Views;

class View {
  function __construct(
    public string $title,
    public string $keywords,
    public string $description,
    public string $page,
    public array $data = [],
  ) {}

  private function getNoscript() {
    ob_start();
    require "noscript.phtml";
    return ob_get_clean();
  }

  function show() {
    $title = $this->title;
    $keywords = $this->keywords;
    $description = $this->description;
    $data = json_encode([ "page" => $this->page, "data" => $this->data ]);
    $noscript = $this->getNoscript();
    require "page.phtml";
  }
}

?>
