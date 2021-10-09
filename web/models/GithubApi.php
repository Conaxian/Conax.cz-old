<?php declare(strict_types=1);

const API_URL = "https://api.github.com";

class GithubApiMod {
  private function requestGeneric(string $endpoint, string $acceptType) {
    $url = API_URL . $endpoint;
    $token = getenv("GITHUB_AUTH_TOKEN");

    $curl = curl_init();
    curl_setopt_array($curl, [
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_HTTPHEADER => [
        "User-Agent: curl/7.72.0",
        "Accept: application/vnd.github.v3$acceptType",
        "Authorization: token $token",
      ],
    ]);
    $response = curl_exec($curl);
    return $response;
  }

  public function request(string $endpoint, string $acceptType) {
    $acceptType = mb_strtoupper($acceptType);
    switch ($acceptType) {
      case "JSON":
        $acceptTypeExt = "+json";
        break;
      default:
        $acceptTypeExt = ".raw";
        break;
    }

    $response = $this->requestGeneric($endpoint, $acceptTypeExt);

    if ($acceptType === "JSON") return json_decode($response, true);
    return $response;
  }
}

?>
