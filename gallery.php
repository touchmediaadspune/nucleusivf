<?php ob_start('ob_gzhandler'); ?>
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>

<!-- Meta Tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
<meta name="description" content="Nucleus IVF" />
<meta name="keywords" content="Nucleus IVF" />
<meta name="author" content="Nucleus IVF" />
<meta name="theme-color" content="#e97195" />
<meta name="apple-mobile-web-app-status-bar-style" content="#e97195">
<title>Nucleus IVF</title>

<!-- Favicon and Touch Icons -->
<link href="myimg/favicon.png" rel="shortcut icon" type="image/png">

<!-- Stylesheet -->
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="css/jquery-ui.min.css" rel="stylesheet" type="text/css">
<link href="css/animate.css" rel="stylesheet" type="text/css">
<link href="css/css-plugin-collections.css" rel="stylesheet"/>
<!-- CSS | menuzord megamenu skins -->
<link id="menuzord-menu-skins" href="css/menuzord-skins/menuzord-boxed.css" rel="stylesheet"/>
<!-- CSS | Main style file -->
<link href="css/style-main.css" rel="stylesheet" type="text/css">
<!-- CSS | Preloader Styles -->
<link href="css/preloader.css" rel="stylesheet" type="text/css">
<!-- CSS | Custom Margin Padding Collection -->
<link href="css/custom-bootstrap-margin-padding.css" rel="stylesheet" type="text/css">
<!-- CSS | Responsive media queries -->
<link href="css/responsive.css" rel="stylesheet" type="text/css">

<link href="css/colors/theme-skin-blue.css" rel="stylesheet" type="text/css">
<link href="css/style.css" rel="stylesheet" type="text/css">
<!-- external javascripts -->
<script src="js/jquery-2.2.0.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- JS | jquery plugin collection for this theme -->
<script src="js/jquery-plugin-collection.js"></script>

</head>
<body class="">
<div id="wrapper">

  <?php include 'header.php'; ?>
  
  <div class="main-content">
    <section class="inner-header divider layer-overlay overlay-deep" data-bg-img="myimg/abou.jpg">
      <div class="container pt-40 pb-40">
        <div class="section-content">
          <div class="row"> 
            <div class="col-md-12 xs-text-center">
              <h3 class="AD font-28">Gallery</h3>
              <ol class="Homeb breadcrumb white mt-10">
                <li><a href="Nucleus-IVF">Home</a></li>
                <li class="active aboutd text-theme-colored">Gallery</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <br>
            <div class="portfolio-gallery grid-4 gutter-small clearfix" data-lightbox="gallery">
              <?php 
                $a = array('ser1.jpg','ser2.jpg','ser3.jpg','ser4.jpg','ser5.jpg','ser6.jpg');
                $b = array('Nucleus','Nucleus','Nucleus','Nucleus','Nucleus','Nucleus');
                for ($i=0; $i < count($a); $i++) { 
                  
              ?>
              <div class="portfolio-item">
                <a href="myimg/<?= $a[$i]; ?>" data-lightbox="gallery-item" title="<?= $b[$i]; ?>"><img src="myimg/<?= $a[$i]; ?>" alt=""></a>
              </div>
              <?php } ?>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <?php include 'footer.php'; ?>

</div>

<script src="js/custom.js"></script>

</body>
</html>