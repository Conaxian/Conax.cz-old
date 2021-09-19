<?php declare(strict_types=1);

function autoload(string $class) {
  if (preg_match("/Mod$/", $class)) {
    $class = preg_replace("/Mod$/", "", $class);
    require("models/" . $class . ".php");
  } else {
    $class = preg_replace("/Control$/", "", $class);
    require("controllers/" . $class . ".php");
  }
}

spl_autoload_register("autoload");

$router = new Router();
$router->process([
  "url" => $_SERVER["REQUEST_URI"],
]);
$router->showView();

?>
