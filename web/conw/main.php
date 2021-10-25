<?php declare(strict_types=1);

require "lib/env/Environment.php";
$env = new Env\Environment(".env");
$env->load();

$displayErrors = ($_ENV["MODE"] ?? null) === "PRODUCTION" ? "0" : "1";
ini_set("display_errors", $displayErrors);
ini_set("display_startup_errors", $displayErrors);

session_start();

require "lib/client/Log.php";
Client\Log::log();

require "lib/router/Router.php";
require "routes/routes.php";

Router\Router::process();

?>
