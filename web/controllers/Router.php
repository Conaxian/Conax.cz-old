<?php declare(strict_types=1);

const ROUTES = [
  "/^(home)?$/i" => "Home",
  "/^conbot|osmium$/i" => "Redirect",
];

class Router extends Controller {
  protected Controller $controller;

  public function process(array $args) {
    $path = $this->parseUrl($args["url"]);
    $route = array_shift($path);
    foreach (ROUTES as $key => $value) {
      if (preg_match($key, $route)) {
        $controllerName = $value . "Control";
      }
    }
    $controllerName ??= "ErrorControl";

    $this->controller = new $controllerName;
    $this->controller->process([
      "path" => $path,
    ]);

    $this->data["title"] = $this->controller->head["title"];
    $this->data["keywords"] = $this->controller->head["keywords"];
    $this->data["description"] = $this->controller->head["description"];

    $this->view = $controllerName !== "ErrorControl" ? "base" : "error";
  }

  private function parseUrl(string $url) {
    $url = parse_url($url);
    $url["path"] = ltrim($url["path"], "/");
    $url["path"] = trim($url["path"]);
    $path = explode("/", $url["path"]);
    return $path;
  }
}

?>
