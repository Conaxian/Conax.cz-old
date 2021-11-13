<?php declare(strict_types=1);

namespace Env;

class Environment {
  function __construct(public string $envPath) {}

  function load() {
    $envVars = file_get_contents($this->envPath);
    $envVars = explode(PHP_EOL, $envVars);

    foreach ($envVars as $envVar) {
      $trimmedLine = trim($envVar);
      if (!$trimmedLine) continue;

      putenv($envVar);
      $envParts = explode("=", $trimmedLine, 2);
      $_ENV[$envParts[0]] = $envParts[1];
    }
  }
}

?>
