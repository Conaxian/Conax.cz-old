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

class NotesControl extends Controller {
  private function pathData(string $path) {
    $parts = explode("/", $path);

    if ($parts[1]) {
      $subject = $this->resolveSubject($parts[1]);
    }

    if (!$parts[1]) return [ "menu" => true ];
    if ($parts[3] || !$subject) return [];

    if ($parts[2]) {
      return [ "subject" => $subject, "num" => $parts[2]];
    } else {
      return [ "subject" => $subject ];
    }
  }

  private function resolveSubject(string $subject): ?string {
    if (!$subject) return null;
    foreach (SUBJECTS as $pattern => $result) {
      if (preg_match($pattern, $subject)) {
        return $result;
      }
    }
    return null;
  }

  public function process(array $args) {
    $pathData = $this->pathData($args["path"]);

    if (!$pathData["subject"] && !$pathData["menu"]) {
      $this->error = 404;
      return;
    } elseif (!$pathData["subject"]) {
      $this->head["title"] = "Conax | Notes";
      $this->head["keywords"] = "conax, programming";
      $this->head["description"] = "The Website of Conax - Notes";
      $this->view = "pages/notes";
      return;
    }

    $pathData["num"] ??= 1;
    $controller = new NoteViewControl();
    $controller->process($args + $pathData);

    $this->head = $controller->head;
    $this->data = $controller->data;
    $this->view = $controller->view;
  }
}

?>
