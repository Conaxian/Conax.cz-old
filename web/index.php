<?php declare(strict_types=1);

try {
  require "coxnw/main.php";
} catch (Throwable) {
  http_response_code(500);
  if ($_ENV["MODE"] ?? null === "PRODUCTION") {
    echo "
<!DOCTYPE html>
<html lang=\"env\">
  <head>
    <meta charset=\"utf-8\">
    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">
    <title>500 Internal Server Error</title>
    <meta name=\"description\" content=\"500 Internal Server Error\">
    <meta name=\"author\" content=\"Conax\">
    <meta name=\"viewport\"
    content=\"minimum-scale=1, initial-scale=1, width=device-width\">
    <meta name=\"theme-color\" content=\"#ffffff\">
    <link rel=\"icon\" href=\"/content/images/favicon.png\">
    <link rel=\"apple-touch-icon\" href=\"/content/images/icon192.png\">
    <link rel=\"manifest\" href=\"/manifest.json\">
  </head>
  <body>
    <h1>500 Internal Server Error</h1>
    <hr>
    <p>
      Something went wrong. We're not sure what exactly.
      <br>
      This isn't your fault - try checking in later to see if it's fixed.
    </p>
  </body>
</html>
    ";
  } else {}
}

?>
