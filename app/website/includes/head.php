<head>

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-6XYC8N2887">
  </script>
  <script>
    window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a("js",new Date());a("config","G-6XYC8N2887");
  </script>
  <meta name="google-site-verification"
  content="po0dwLpIsRp5K7kWRuhNoTx2E3RpNfrVDVXFnzNrp2s">

  <title><?php print $title;?></title>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="description" content="<?php print $desc;?>">
  <meta name="keywords" content="<?php print $keywords;?>">
  <meta name="author" content="Conax">
  <meta name="robots" content="all">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#000000">

  <link rel="icon" href="/images/icons/favicon.png">
  <línk rel="apple-touch-icon" href="/images/icons/icon192.png">
  <link rel="manifest" href="/manifest.json">
  <link rel="stylesheet"
  href="https://fonts.googleapis.com/css
  ?family=Roboto:300,400,500,700&display=swap"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon
  ?family=Material+Icons"/>

  <?php
  foreach ($styles as $style) {
    print '<link rel="stylesheet" href="' . $style . '">';
  }
  unset($style);

  foreach ($scripts as $script) {
    print '<script type="application/javascript"
    src="' . $script . '"></script>';
  }
  unset($script);

  include "log.php";
  ?>

</head>
