<?php declare(strict_types=1);

const REDIRECTS = [
  "conbot" => "https://discord.com/api/oauth2/authorize".
    "?client_id=620175026972393472&permissions=8&scope=bot",
  "osmium" => "https://discord.com/api/oauth2/authorize".
    "?client_id=866703310350057482&permissions=8".
    "&scope=bot+applications.commands",
];

class RedirectControl extends Controller {
  public function process(array $args) {
    $newUrl = REDIRECTS[$args["path"]];
    $this->redirect($newUrl);
  }
}

?>
