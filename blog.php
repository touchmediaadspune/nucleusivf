<?php 
  ob_start('ob_gzhandler'); 
  require_once('ivfnucleus/base.php');
?>
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

<!-- CSS | Theme Color -->
<link href="css/colors/theme-skin-blue.css" rel="stylesheet" type="text/css">
<link href="css/style.css" rel="stylesheet" type="text/css">

<!-- external javascripts -->
<script src="js/jquery-2.2.0.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- JS | jquery plugin collection for this theme -->
<script src="js/jquery-plugin-collection.js"></script>


</head>
<body class="has-side-panel side-panel-right fullwidth-page side-push-panel">

<div id="wrapper" class="clearfix">
  
  <?php include 'header.php'; ?>
  
  <!-- Start main-content -->
  <div class="main-content">
    <!-- Section: inner-header -->
    <section class="inner-header divider layer-overlay overlay-deep" data-bg-img="myimg/abou.jpg">
      <div class="container pt-40 pb-40">
        <div class="section-content">
          <div class="row"> 
            <div class="col-md-12 xs-text-center">
              <h3 class="AD font-28">Blog</h3>
              <ol class="Homeb breadcrumb white mt-10">
                <li><a href="Nucleus-IVF">Home</a></li>
                <li class="active aboutd text-theme-colored">Blog</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container pt-30 pb-30">
        <div class="section-title text-center">
          <div class="row">
            <div class="col-md-12 mb-30">
              <h2 class="mt-0">Blog</h2>
            </div>
            <?php 
              $l = 1;
              $tre = mysqli_query($con, "select * from e_blog order by id desc");
              while ($trk = mysqli_fetch_array($tre)) {
                $b_content = substr($trk['b_content'], 0, 50);
            ?>
            <div class="col-md-3">
              <div class="blog-box">
                <a href="ContentBlog/<?= $trk['id']; ?>">
                  <div class="blogimg">
                    <img src="ivfnucleus/<?= $trk['b_img']; ?>" alt="ab" class="img-responsive">
                  </div>
                </a>
                <div class="blogcontent">
                  <h4><a href="ContentBlog/<?= $trk['id']; ?>"><?= $trk['name']; ?></a></h4>
                  <div class="giri">
                    <?= $b_content; ?>...
                  </div>
                  <a href="ContentBlog/<?= $trk['id']; ?>" class="btn">Read More</a>
                </div>
              </div>
            </div>
            <?php
                $l++;}
            ?>
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