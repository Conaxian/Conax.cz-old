<?php declare(strict_types=1);

try {
  error_reporting(E_ALL);
  require "conw/main.php";
} catch (Throwable) {
  $devMode = ($_ENV["MODE"] ?? null) !== "PRODUCTION";

  try {
    if ($devMode) throw new Exception;

    require "conw/errors/ErrorPage.php";
    Errors\ErrorPage::display(500);
  } catch (Throwable) {
    http_response_code(500);
    if ($devMode) exit;

    echo "
    <h1>500 Internal Server Error</h1>
    <hr>
    <p>[<strong>FATAL</strong>] Double error: fallback error handling failed</p>
    ";
  }
}

?>
