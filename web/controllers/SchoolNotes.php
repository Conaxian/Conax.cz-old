<?php declare(strict_types=1);

class SchoolNotesControl extends Controller {
  public function process(array $args) {
    $subject = $args["query"]["subject"];
    $num = $args["query"]["num"];

    if (!$subject or !$num) {
      $this->error = 400;
      return;
    }

    $schoolNotes = new SchoolNotesMod();
    $note = $schoolNotes->getNote("2021_22", $subject, $num);

    if (json_decode($note, true)["message"] === "Not Found") {
      $this->error = 404;
      return;
    }

    $note = preg_replace("/\\\\/", "\\\\\\\\", $note);
    $note = preg_replace("/([`$])/", "\\\\$1", $note);

    $this->head["title"] = "Conax | Note $subject/$num";
    $this->head["keywords"] = "conax, programming";
    $this->head["description"] = "The Website of Conax - Note $subject/$num";
    $this->data = [
      "note" => $note,
    ];
    $this->view = "pages/note";
  }
}

?>
