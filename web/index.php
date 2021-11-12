<?php declare(strict_types=1);

try {
  try {
    error_reporting(E_ALL);
    header_remove("X-Powered-By");
    require_once "conw/main.php";
  } catch (Throwable) {
    $devMode = ($_ENV["MODE"] ?? null) !== "PRODUCTION";
    if ($devMode) throw new Exception;

    require_once "conw/errors/ErrorPage.php";
    $error = new Errors\ErrorPage(500);
    $error->display();
  }
} catch (Throwable) {
  http_response_code(500);
  if ($devMode) exit;

  echo "
    <h1>500 Internal Server Error</h1>
    <hr>
    <p>[<strong>FATAL</strong>] Double error: fallback error handling failed</p>
    ";
}

?>
