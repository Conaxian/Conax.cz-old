<?php declare(strict_types=1);

const SUBJECTS = [
  "/^(ZSV?|(Basic[ _]?)?Humanities)$/i" => "BasicHumanities",
  "/^(BI|Biology)$/i" => "Biology",
  "/^(CH|Chemistry)$/i" => "Chemistry",
  "/^(CJ|Czech)$/i" => "Czech",
  "/^(AJ|English)$/i" => "English",
  "/^(ZE?|Geography)$/i" => "Geography",
  "/^(DE?|History)$/i" => "History",
  "/^(MA?|Math(ematics)?)$/i" => "Mathematics",
  "/^(EV?H|Music)$/i" => "Music",
  "/^(FY|Physics)$/i" => "Physics",
  "/^(SJ|Spanish)$/i" => "Spanish",
];

class SchoolNotesControl extends Controller {
  private function resolveSubject(string $subject): ?string {
    foreach (SUBJECTS as $pattern => $result) {
      if (preg_match($pattern, $subject)) {
        return $result;
      }
    }
    return null;
  }

  public function process(array $args) {
    $subject = $args["query"]["subject"];
    $num = $args["query"]["num"];

    $subject = $this->resolveSubject($subject);

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
