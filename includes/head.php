<head>

  <!-- Google Analytics and Search Console-->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-6XYC8N2887"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", "G-6XYC8N2887");
  </script>
  <meta name="google-site-verification" content="po0dwLpIsRp5K7kWRuhNoTx2E3RpNfrVDVXFnzNrp2s">

  <!-- General Meta -->
  <title><?php echo $title;?></title>
  <meta charset="utf-8">
  <meta name="description" content="<?php echo $desc;?>">
  <meta name="keywords" content="<?php echo $keywords;?>">
  <meta name="author" content="Conax">
  <meta name="robots" content="all">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/png"
  href="/images/favicon/favicon.png"/>

  <!-- External Files -->

  <!-- Styles -->
  <?php
  foreach ($styles as $style) {
    echo '<link rel="stylesheet" href="' . $style . '">';
  }
  unset($style);
  ?>

  <!-- Scripts -->
  <?php
  foreach ($scripts as $script) {
    echo '<script type="application/javascript"
    src="' . $script . '"></script>';
  }
  unset($script);
  ?>

</head>
