<?php
  function write_log($userdata) {
    $msg = "
[{$userdata['timestamp']}]
{$userdata['method']} {$userdata['url']}";
    if ($userdata["ip_info"]) {
      $proxy = $userdata["proxy"] ? " (Proxy)" : "";
      $msg .= "
{$userdata['ip']}$proxy
{$userdata['ua']}
{$userdata['referer']}
{$userdata['city']}, {$userdata['country']}
{$userdata['isp']}";
    } else {
      $msg .= "
{$userdata['ip']} (Unknown)
{$userdata['ua']}";
    }
    $file = fopen("logs/log.txt", "a");
    fwrite($file, $msg . "\n");
    fclose($file);
  }
  include_once "userdata.php";
  write_log($userdata);
?>
