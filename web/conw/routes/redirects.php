<?php declare(strict_types=1);

namespace Routes;

require_once __DIR__ . "/../lib/router/Route.php";

use Router\Route;

Route::redirect(
  "^osmium$",
  url: "https://discord.com/api/oauth2/authorize".
  "?client_id=866703310350057482&permissions=8".
  "&scope=bot+applications.commands",
);

?>
