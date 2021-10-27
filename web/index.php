<?php declare(strict_types=1);

try {
  try {
    error_reporting(E_ALL);

    header_remove("X-Powered-By");
    header_remove("Server");
    header_remove("Pragma");

    require "conw/main.php";
  } catch (Throwable) {
    $devMode = ($_ENV["MODE"] ?? null) !== "PRODUCTION";
    if ($devMode) throw new Exception;

    require "conw/errors/ErrorPage.php";
    Errors\ErrorPage::display(500);
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
