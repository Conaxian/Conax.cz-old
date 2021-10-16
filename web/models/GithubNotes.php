<?php declare(strict_types=1);

const SCHOOL_REPO = "Conaxian/School";

class GithubNotesMod {
  public function getNote(string $year, string $subject, string | int $number) {
    $apiEndpoint = "/repos/" . SCHOOL_REPO .
      "/contents/$year/$subject/notes/$number.md";
    $githubApi = new GithubApiMod();
    $note = $githubApi->request($apiEndpoint, "RAW");
    return $note;
  }
}

?>
