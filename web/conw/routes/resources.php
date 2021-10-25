<?php declare(strict_types=1);

use Router\Resource;

Resource::add("^app/(.*)$", "app/$1", "text/plain");

Resource::add("^styles/error\\.css$", "conw/errors/style.css", "text/css");

Resource::add("^manifest\\.json$", "data/manifest.json", "application/json");

Resource::add(
  "^favicon\\.(png|ico)$",
  "content/images/favicon.png",
  "image/png",
);

Resource::add(
  "^icon-(192|512)\\.png$",
  "content/images/$0",
  "image/png",
);

Resource::add(
  "^content/osmium/(logo|footer|ok|error|info|warn|music|loading)\\.png$",
  "$0",
  "image/png",
);

?>