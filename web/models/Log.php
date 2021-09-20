<?php declare(strict_types=1);

class LogMod {
  private function makeMessage(array $data) {
    $date = date('d-m-Y H:i:s');
    $message = "
[$date]
{$data['method']} {$data['url']}
";

    if ($data["ipInfo"]) {
      $proxy = $data["ipInfo"]["proxy"] ? " (Proxy)" : "";
      $message .= "
{$data['ipInfo']['ip']}$proxy
{$data['userAgent']}
{$data['referer']}
{$data['ipInfo']['city']}, {$data['ipInfo']['country']}
{$data['ipInfo']['isp']}
";
    } else {
      $message .= "
{$data['ipInfo']['ip']} (Unknown)
{$data['userAgent']}
";
    }

    return $message;
  }

  public function logUser(array $data) {
    $message = $this->makeMessage($data);
    file_put_contents("data/logs/log.txt", $message . "\n", FILE_APPEND);
  }
}

?>
