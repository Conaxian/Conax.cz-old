<?php declare(strict_types=1);

use Router\Redirect;

Redirect::add(
  "^osmium$",
  "https://discord.com/api/oauth2/authorize".
  "?client_id=866703310350057482&permissions=8".
  "&scope=bot+applications.commands",
);

// TODO: Deprecate
Redirect::add(
  "^conbot$",
  "https://discord.com/api/oauth2/authorize".
  "?client_id=620175026972393472&permissions=8&scope=bot",
);

?>
