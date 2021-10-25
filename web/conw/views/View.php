<?php declare(strict_types=1);

namespace Views;

use Resp\Response;

abstract class View {
  static function show(
    string $title,
    string $keywords,
    string $description,
    string $page,
    array $data = [],
  ) {
    $data = json_encode([ "page" => $page, "data" => $data ]);
    Response::contentType("text/html");
    require "page.phtml";
    exit;
  }
}

?>
