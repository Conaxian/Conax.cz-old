<?php declare(strict_types=1);

namespace Routes;

require_once __DIR__ . "/../lib/router/Route.php";

use Router\Route;

# /app/*

Route::resource(
  "^app/(.*\\.js)$",
  path: "app/$1",
  mimeType: "application/javascript",
);

Route::resource(
  "^app/(.*\\.ttf)$",
  path: "app/$1",
  mimeType: "font/ttf",
  includeEncoding: false,
);

Route::resource(
  "^app/(.*\\.woff)$",
  path: "app/$1",
  mimeType: "font/woff",
  includeEncoding: false,
);

Route::resource(
  "^app/(.*\\.woff2)$",
  path: "app/$1",
  mimeType: "font/woff2",
  includeEncoding: false,
);

Route::resource(
  "^app/(.*\\.txt)$",
  path: "app/$1",
  mimeType: "text/plain",
);

# Styles

Route::resource(
  "^styles/error\\.css$",
  path: "conw/errors/style.css",
  mimeType: "text/css",
);

# Manifest & robots

Route::resource(
  "^manifest\\.json$",
  path: "data/manifest.json",
  mimeType: "application/json",
);

Route::resource(
  "^robots\\.txt$",
  path: "data/robots.txt",
  mimeType: "text/plain",
);

# Icons

Route::resource(
  "^favicon\\.ico$",
  path: "content/images/favicon.ico",
  mimeType: "image/x-icon",
);

Route::resource(
  "^icon-(180|192|512)\\.png$",
  path: "content/images/$0",
  mimeType: "image/png",
  includeEncoding: false,
);

# Osmium resources

Route::resource(
  "^content/osmium/(logo|footer|ok|error|info|warn|music|loading)\\.png$",
  path: "$0",
  mimeType: "image/png",
  includeEncoding: false,
);

# Game resources

Route::resource(
  "^game/res/(.*\\.png)",
  path: "content/game/images/$1",
  mimeType: "image/png",
  includeEncoding: false,
)

?>
