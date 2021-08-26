<head>

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-6XYC8N2887"></script>
  <script>
    window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a("js",new Date());a("config","G-6XYC8N2887");
  </script>
  <meta name="google-site-verification" content="po0dwLpIsRp5K7kWRuhNoTx2E3RpNfrVDVXFnzNrp2s">

  <title><?php print $title;?></title>
  <meta charset="utf-8">
  <meta name="description" content="<?php print $desc;?>">
  <meta name="keywords" content="<?php print $keywords;?>">
  <meta name="author" content="Conax">
  <meta name="robots" content="all">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="shortcut icon" type="image/png"
  href="/images/favicon/favicon.png"/>

  <script src="https://unpkg.com/react@17/umd/react.production.min.js"
  crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
  crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <?php
  foreach ($styles as $style) {
    print '<link rel="stylesheet" href="' . $style . '">';
  }
  unset($style);

  foreach ($scripts as $script) {
    print '<script type="text/babel" src="' . $script . '"></script>';
  }
  unset($script);

  include "log.php";
  ?>

</head>
