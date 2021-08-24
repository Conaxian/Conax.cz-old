<!DOCTYPE html>
<html lang="en">
  <?php
    $code = $_SERVER["REDIRECT_STATUS"];
    $codes = array(
      403 => "Forbidden",
      404 => "Not Found",
      500 => "Internal Server Error"
    );
    $source = $_SERVER["REQUEST_URI"];
    $error = "$code {$codes[$code]}";

    $title = "$error";
    $desc = "The Website of Conax";
    $keywords = "";
    $styles = array();
    $scripts = array();
    include "includes/head.php";
  ?>
  <body>
    <h1><?php echo $error?></h1>
  </body>
</html>
