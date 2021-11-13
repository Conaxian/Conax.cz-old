<?php declare(strict_types=1);

namespace Curl;

class CurlRequest {
  private ?array $response = null;

  function __construct(public string $url, public array $headers = []) {}

  private function execute() {
    $curl = curl_init();
    curl_setopt_array($curl, [
      CURLOPT_URL => $this->url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_HTTPHEADER => $this->headers,
      CURLOPT_USERAGENT => "curl/7.72.0",
    ]);

    if (PHP_OS_FAMILY === "Windows") {
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    }

    $this->response = [
      "body" => curl_exec($curl),
      "code" => curl_getinfo($curl, CURLINFO_HTTP_CODE),
    ];
  }

  private function getField(string $key) {
    if (!$this->response) $this->execute();
    return $this->response[$key];
  }

  function code(): int {
    return $this->getField("code");
  }

  function body(): string {
    return $this->getField("body");
  }

  function json() {
    $body = $this->body();
    return json_decode($body, true);
  }

  function reset() {
    $this->response = null;
  }
}

?>
