<?php declare(strict_types=1);

namespace Client;

require "IpInfo.php";

abstract class Log {
  static function log() {
    $date = date("d-m-Y H:i:s");
    $ipInfo = IpInfo::get($_SERVER["REMOTE_ADDR"]);

    $message = "
[$date]
{$_SERVER['REQUEST_METHOD']} {$_SERVER['REQUEST_URI']}
";

    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? "(No User-Agent)";
    $referer = $_SERVER['REFERER'] ?? "(No Referer)";

    if ($ipInfo["ipInfo"]) {
      $proxy = $ipInfo["proxy"] ? " (Proxy)" : "";
      $message .= "
{$ipInfo['ip']}$proxy
$userAgent
$referer
{$ipInfo['city']}, {$ipInfo['country']}
{$ipInfo['isp']}
";
    } else {
      $message .= "
{$ipInfo['ip']} (Unknown)
$userAgent
$referer
";
    }

    file_put_contents("data/logs/log.txt", "$message\n", FILE_APPEND);
  }
}

?>
