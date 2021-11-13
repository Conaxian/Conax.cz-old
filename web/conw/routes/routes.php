<?php declare(strict_types=1);

namespace Routes;

require_once __DIR__ . "/../lib/router/Route.php";

require_once "resources.php";
require_once "redirects.php";

use Router\Route;

# General

Route::staticPage(
  "^(home)?$",
  title: "Conax",
  keywords: "conax, programming",
  description: "The Website of Conax - Home",
  page: "Home",
);

Route::staticPage(
  "^about$",
  title: "Conax | About",
  keywords: "conax, programming",
  description: "The Website of Conax - About",
  page: "About",
);

# URL Shortener

Route::get("^api/shorten$",
  function($request, $response) {
    require_once __DIR__ . "/../models/ShortenApi.php";
    \Models\ShortenApi::process($response);
  }
);

Route::get("^a/([0-9a-z-_]{4})$",
  function($request, $response) {
    require_once __DIR__ . "/../models/ShortUrl.php";
    \Models\ShortUrl::process($response, $request->route[1]);
  }
);

# School Notes

Route::staticPage(
  "^notes$",
  title: "Conax | Notes",
  keywords: "conax, programming",
  description: "The Website of Conax - Notes",
  page: "NoteMenu",
);

Route::get(
  "^notes/([^/]+)(?:/([0-9]+)(?:/(source))?)?$",
  function($request, $response) {
    require_once __DIR__ . "/../models/SchoolNote.php";
    \Models\SchoolNote::process(
      $response,
      $request->route[1],
      $request->route[2] ?? "1",
      boolval($request->route[3] ?? false),
    );
  }
);

Route::final();

?>
