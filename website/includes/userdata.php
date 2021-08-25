<?php
  function get_user_data() {
    $ip = $_SERVER["REMOTE_ADDR"] ?? null;
    if (function_exists("curl_version")) {
      $curl = curl_init();
      curl_setopt_array($curl, [
        CURLOPT_URL => "http://ip-api.com/json/$ip?fields=66846719",
        CURLOPT_RETURNTRANSFER => 1
      ]);
      $json = curl_exec($curl);
      $data = json_decode($json, true);
    } else {
      $data = ["status" => "fail"];
    }

    if ($data["status"] === "fail") {
      $ipdata = [];
    } else {
      $ipdata = [
        "reverse" => $data["reverse"],
        "continent" => $data["continent"],
        "continent_code" => $data["continentCode"],
        "country" => $data["country"],
        "country_code" => $data["countryCode"],
        "region" => $data["regionName"],
        "region_code" => $data["region"],
        "city" => $data["city"],
        "district" => $data["district"],
        "zip" => $data["zip"],
        "lat" => $data["lat"],
        "lon" => $data["lon"],
        "timezone" => $data["timezone"],
        "tz_offset" => $data["offset"],
        "currency" => $data["currency"],
        "isp" => $data["isp"],
        "org" => $data["org"],
        "as" => $data["asname"],
        "as_code" => $data["as"],
        "mobile" => $data["mobile"],
        "proxy" => $data["proxy"],
        "hosting" => $data["hosting"]
      ];
    }

    $miscdata = [
      "ip" => $_SERVER["REMOTE_ADDR"] ?? null,
      "ip_info" => boolval($ipdata),
      "url" => $_SERVER["REQUEST_URI"] ?? null,
      "ua" => $_SERVER["HTTP_USER_AGENT"] ?? null,
      "protocol" => $_SERVER["SERVER_PROTOCOL"] ?? null,
      "method" => $_SERVER["REQUEST_METHOD"] ?? null,
      "timestamp" => date("d-m-Y H:i:s"),
      "time_unix" => time(),
      "query" => $_SERVER["QUERY_STRING"] ?? null,
      "accept" => $_SERVER["HTTP_ACCEPT"] ?? null,
      "accept_charset" => $_SERVER["HTTP_ACCEPT_CHARSET"] ?? null,
      "accept_encoding" => $_SERVER["HTTP_ACCEPT_ENCODING"] ?? null,
      "accept_language" => $_SERVER["HTTP_ACCEPT_LANGUAGE"] ?? null,
      "connection" => $_SERVER["HTTP_CONNECTION"] ?? null,
      "host" => $_SERVER["HTTP_HOST"] ?? null,
      "referer" => $_SERVER["HTTP_REFERER"] ?? null,
      "user" => $_SERVER["REMOTE_USER"] ?? null
    ];
    return array_merge($ipdata, $miscdata, ["a" => $_SERVER["SERVER_SOFTWARE"]]);
  }

  $userdata = get_user_data();
?>
