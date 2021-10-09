<?php declare(strict_types=1);

class IpInfoMod {
  private $cache = [];

  private function fetchIpInfo(string $ip): array {
    $curl = curl_init();
    curl_setopt_array($curl, [
      CURLOPT_URL => "http://ip-api.com/json/$ip?fields=66846719",
      CURLOPT_RETURNTRANSFER => true,
    ]);
    $json = curl_exec($curl);
    $data = json_decode($json, true);
    return $data;
  }

  public function getIpInfo(string $ip) {
    if (!$this->cache) $this->cache = $this->fetchIpInfo($ip);
    $data = $this->cache;

    if ($data["status"] === "fail") {
      return [
        "ipInfo" => false,
        "ip" => $ip,
      ];
    } else {
      return [
        "ipInfo" => true,
        "ip" => $ip,
        "continent" => $data["continent"],
        "country" => $data["country"],
        "region" => $data["regionName"],
        "city" => $data["city"],
        "district" => $data["district"],
        "zip" => $data["zip"],
        "lat" => $data["lat"],
        "lon" => $data["lon"],
        "timezone" => $data["timezone"],
        "timezoneOffset" => $data["offset"],
        "currency" => $data["currency"],
        "isp" => $data["isp"],
        "mobile" => $data["mobile"],
        "proxy" => $data["proxy"],
      ];
    }
  }
}

?>
