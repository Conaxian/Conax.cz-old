<?php declare(strict_types=1);

use Router\Route;

require "resources.php";
require "redirects.php";

require __DIR__ . "/../views/View.php";

use Views\View;

// General

Route::get("^(home)?$", function() {
  View::show(
    title: "Conax",
    keywords: "conax, programming",
    description: "The Website of Conax - Home",
    page: "Home",
  );
});

Route::get("^about$", function() {
  View::show(
    title: "Conax | About",
    keywords: "conax, programming",
    description: "The Website of Conax - About",
    page: "About",
  );
});

// URL Shortener

Route::get("^api/shorten$", function() {
  require __DIR__ . "/../models/ShortenApi.php";
  ShortenApi::process();
});

Route::get("^a/([0-9a-z-_]{4})$", function($context) {
  require __DIR__ . "/../models/ShortUrl.php";
  ShortUrl::process($context["groups"][1]);
});

// School Notes

Route::get("^notes$", function() {
  View::show(
    title: "Conax | Notes",
    keywords: "conax, programming",
    description: "The Website of Conax - Notes",
    page: "NoteMenu",
  );
});

Route::get("^notes/([^/]+)(?:/([0-9]+)(?:/(source))?)?$", function($context) {
  require __DIR__ . "/../models/SchoolNote.php";
  SchoolNote::process(
    $context["groups"][1],
    $context["groups"][2] ?? "1",
    boolval($context["groups"][3] ?? false),
  );
});

?>
