<?php declare(strict_types=1);

namespace Client;

require __DIR__ . "/../curl/CurlRequest.php";

abstract class IpInfo {
  private static function fetch(string $ip): array {
    $url = "http://ip-api.com/json/$ip?fields=66846719";
    $request = new \Curl\CurlRequest($url);
    return $request->json();
  }

  private static function cache(string $ip) {
    if (!array_key_exists("ipCache", $_SESSION)) {
      $_SESSION["ipCache"] = [];
    }
    $ipCache = &$_SESSION["ipCache"];
    if (!array_key_exists($ip, $ipCache)) {
      $ipCache[$ip] = self::fetch($ip);
    };
    return $ipCache[$ip];
  }

  static function get(string $ip) {
    $data = self::cache($ip);

    if ($data["status"] === "fail") {
      return [ "ipInfo" => false, "ip" => $ip ];
    }

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

?>
