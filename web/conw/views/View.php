<?php declare(strict_types=1);

namespace Views;

class View {
  function __construct(
    public string $title,
    public string $keywords,
    public string $description,
    public string $page,
    public string $type,
    public array $data = [],
  ) {}

  static function static(
    string $title,
    string $keywords,
    string $description,
    string $page,
    array $data = [],
  ) {
    return new self($title, $keywords, $description, $page, "static", $data);
  }

  static function app(
    string $title,
    string $keywords,
    string $description,
    string $page,
    array $data = [],
  ) {
    return new self($title, $keywords, $description, $page, "app", $data);
  }

  private function getNoscript() {
    ob_start();
    require "noscript.phtml";
    return ob_get_clean();
  }

  function show() {
    $title = $this->title;
    $keywords = $this->keywords;
    $description = $this->description;

    $data = json_encode([
      "page" => [
        "id" => $this->page,
        "type" => $this->type,
      ],
      "sessionId" => session_id(),
      "data" => $this->data,
    ], JSON_FORCE_OBJECT);

    $noscript = $this->getNoscript();
    require "page.phtml";
  }
}

?>
