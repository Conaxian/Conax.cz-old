<?php declare(strict_types=1);

mb_internal_encoding("UTF-8");

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

$envVars = explode(PHP_EOL, file_get_contents(".env"));
foreach ($envVars as $envVar) {
  try {
    putenv($envVar);
  } catch (Error) {}
}

$ipInfoMod = new IpInfoMod();
$ipInfo = $ipInfoMod->getIpInfo($_SERVER["REMOTE_ADDR"]);

$router = new Router();
try {
  $router->process([
    "url" => $_SERVER["REQUEST_URI"],
    "ipInfo" => $ipInfo,
    "method" => $_SERVER["REQUEST_METHOD"],
    "userAgent" => $_SERVER["HTTP_USER_AGENT"],
    "referer" => $_SERVER["HTTP_REFERER"],
    "query" => $_GET,
  ]);
} catch (Error) {
  $router->error(500);
}
$router->showView();

?>
