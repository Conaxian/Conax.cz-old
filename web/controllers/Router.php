<?php declare(strict_types=1);

const ROUTES = [
  "/^(home)?$/i" => "Home",
  "/^conbot|osmium$/i" => "Redirect",
  "/^a\/[0-9A-Za-z-=]{4}$/i" => "ShortUrl",
  "/^api\/shorten$/i" => "ShortenApi",
];

class Router extends Controller {
  protected Controller $controller;

  private function parseUrl(string $url) {
    $url = parse_url($url);
    $path = trim($url["path"], "/");
    $path = trim($path);
    $fragment = trim($url["fragment"] ?? "");

    return [
      "path" => $path,
      "fragment" => $fragment,
    ];
  }

  public function process(array $args) {
    $url = $this->parseUrl($args["url"]);
    $path = $url["path"];
    foreach (ROUTES as $route => $value) {
      if (preg_match($route, $path)) {
        $controllerName = $value . "Control";
      }
    }

    if (!$controllerName) {
      $this->error(404);
      return;
    }

    $this->controller = new $controllerName;
    $this->controller->process([
      "path" => $path,
      "url" => $url,
      "query" => $args["query"],
    ]);

    if ($this->controller->error) {
      $this->error($this->controller->error);
      return;
    }

    $this->data["title"] = $this->controller->head["title"];
    $this->data["keywords"] = $this->controller->head["keywords"];
    $this->data["description"] = $this->controller->head["description"];
    $this->view = "base";

    $log = new LogMod();
    $log->logUser($args);
  }

  public function error(int $code) {
    $this->controller = new ErrorControl();
    $this->controller->process([
      "code" => $code,
    ]);
    $this->data["title"] = $this->controller->head["title"];
    $this->view = "error";
  }
}

?>
