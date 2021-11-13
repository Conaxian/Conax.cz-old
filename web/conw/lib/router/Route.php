<?php declare(strict_types=1);

namespace Router;

require_once __DIR__ . "/../req/Request.php";
require_once __DIR__ . "/../resp/Response.php";
require_once __DIR__ . "/../../views/View.php";

const HTTP_METHODS = [
  "GET",
  "HEAD",
  "POST",
  "PUT",
  "DELETE",
  "CONNECT",
  "OPTIONS",
  "TRACE",
  "PATCH",
];

abstract class Route {
  private static \Req\Request $request;

  private static function getRequest() {
    if (empty(self::$request)) {
      self::$request = new \Req\Request();
    }
    return self::$request;
  }

  private static function process(
    string $pattern,
    callable $resolver,
    array $data = [],
  ) {
    $request = self::getRequest();
    $pattern = "{" . preg_replace('/\s+/', "", $pattern) . "}i";
    $methods = $data["methods"] ?? [];
    if (in_array("GET", $methods, true)) {
      array_push($methods, "HEAD");
    }

    if ($data["final"] ?? false) {
      $response = new \Resp\Response();
      $response->errorPage(404);
      $response->send();
    }

    $matches = [];
    if (preg_match($pattern, $request->path, $matches)) {
      $response = new \Resp\Response();

      if (!in_array($request->method, $methods, true)) {
        $allowed = implode(", ", $methods);
        $response->errorPage(405);
        $response->header("Allow", $allowed);
        $response->send();
      }

      $request->route = $matches;
      $resolver($request, $response);
      $response->send();
    }
  }

  static function get(string $pattern, callable $resolver, array $data = []) {
    $data = array_merge_recursive($data, [ "methods" => ["GET"] ]);
    self::process($pattern, $resolver, $data);
  }

  static function post(string $pattern, callable $resolver, array $data = []) {
    $data = array_merge_recursive($data, [ "methods" => ["POST"] ]);
    self::process($pattern, $resolver, $data);
  }

  private static function subLocation(string $location, array $params) {
    for ($i = 0; $i < count($params); $i++) {
      $location = preg_replace("/(^|[^\\\\])\\$$i/",
      '${1}' . $params[$i], $location);
    }
    return $location;
  }

  static function redirect(string $pattern, string $url) {
    $resolver = function($request, $response) use ($url) {
      $url = self::subLocation($url, $request->route);
      $response->redirect($url);
      $response->send();
    };

    self::process($pattern, $resolver, [ "methods" => HTTP_METHODS ]);
  }

  static function resource(
    string $pattern,
    string $path,
    string $mimeType,
    bool $includeEncoding = true,
  ) {
    $resolver = function($request, $response)
    use ($path, $mimeType, $includeEncoding) {
      $path = self::subLocation($path, $request->route);
      $path = getcwd() . "/" . $path;
      $resource = file_get_contents($path);

      if (!$resource) {
        $response->errorPage(404);
        return;
      }

      $response->resourceBody($resource, $mimeType, $includeEncoding);
    };

    self::get($pattern, $resolver);
  }

  static function staticPage(
    string $pattern,
    string $title,
    string $keywords,
    string $description,
    string $page,
  ) {
    $resolver = function($request, $response)
    use ($title, $keywords, $description, $page) {
      $response->startBody();

      $view = new \Views\View($title, $keywords, $description, $page);
      $view->show();

      $response->endBody();
    };

    self::get($pattern, $resolver);
  }

  static function final() {
    self::process("", function() {}, [ "final" => true ]);
  }
}

?>
