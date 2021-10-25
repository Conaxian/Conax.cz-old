<?php declare(strict_types=1);

namespace Router;

require __DIR__ . "/../resp/Response.php";

use \Resp\Response;

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

abstract class Router {
  static $routes = [];

  public static function error(int $code, array $headers = []) {
    require __DIR__ . "/../../errors/ErrorPage.php";
    \Errors\ErrorPage::display($code, $headers);
  }

  private static function getRequestPath() {
    $url = $_SERVER["REQUEST_URI"];
    $matches = [];
    preg_match("/([^?]*)\\??.*/", $url, $matches);

    $path = $matches[1] ?? "";
    $path = urldecode($path);
    $path = trim($path, "/");
    $path = preg_replace("{/+}", "/", $path);
    return $path;
  }

  static function process() {
    foreach (self::$routes as $pattern => $data) {
      $path = self::getRequestPath();
      $method = $_SERVER["REQUEST_METHOD"];
      $matches = [];

      if (preg_match($pattern, $path, $matches)) {
        if (!in_array($method, $data->methods, true)) {
          $allowed = implode(", ", $data->methods);
          self::error(405, ["Allow: $allowed"]);
        }

        $context = [ "groups" => $matches ];

        ob_start();
        ($data->resolver)($context);
        ob_flush();
        return;
      }
    }

    self::error(404);
  }
}

class RouteData {
  function __construct(
    public $resolver,
    public array $methods,
  ) {}
}

abstract class Route {
  private static function add(
    string $pattern,
    callable $resolver,
    array $data = [],
  ) {
    $pattern = "{". $pattern . "}i";
    $data = new RouteData(
      $resolver,
      $data["methods"] ?? [],
    );
    Router::$routes[$pattern] = $data;
  }

  public static function get(
    string $pattern,
    callable $resolver,
    array $data = [],
  ) {
    $data = array_merge_recursive($data, [ "methods" => ["GET"] ]);
    self::add($pattern, $resolver, $data);
  }

  public static function post(
    string $pattern,
    callable $resolver,
    array $data = [],
  ) {
    $data = array_merge_recursive($data, [ "methods" => ["POST"] ]);
    self::add($pattern, $resolver, $data);
  }
}

abstract class Resource {
  static function add(
    string $pattern,
    string $location,
    string $contentType,
  ) {
    $pattern = "{". $pattern . "}i";

    $resolver = function($context) use ($location, $contentType) {
      $groups = $context["groups"];
      for ($i = 0; $i < count($groups); $i++) {
        $location = preg_replace("/(^|[^\\\\])\\$$i/", '${1}' . $groups[$i], $location);
      }

      $path = getcwd() . "/" . $location;
      $resource = file_get_contents($path);
      if (!$resource) Router::error(404);
      Response::contentType($contentType);
      echo $resource;
    };

    $data = new RouteData($resolver, ["GET"]);
    Router::$routes[$pattern] = $data;
  }
}

abstract class Redirect {
  static function add(
    string $pattern,
    string $url,
  ) {
    $pattern = "{" . $pattern . "}i";

    $resolver = function($context) use ($url) {
      $groups = $context["groups"];
      for ($i = 0; $i < count($groups); $i++) {
        preg_replace("/(^|[^\\\\])\\$$i/", '${1}' . $groups[$i], $url);
      }

      Response::redirect($url);
    };

    $data = new RouteData($resolver, HTTP_METHODS);
    Router::$routes[$pattern] = $data;
  }
}

?>
