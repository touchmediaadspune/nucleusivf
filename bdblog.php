<?php 
  ob_start("ob_gzhandler");
    $n = $_GET['n'];
    $h = '../';
    if (isset($n)) {
    require_once('ivfnucleus/base.php');
    $tre = mysqli_query($con, "select * from e_blog where id = '$n' ");
    $lk = mysqli_fetch_array($tre);
?>
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>

<!-- Meta Tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
<?= $lk['b_seo']; ?>
<meta name="description" content="<?= $lk['name']; ?>">
<meta name="keywords" content="<?= $lk['name']; ?>">
<meta name="theme-color" content="#e97195" />
<meta name="apple-mobile-web-app-status-bar-style" content="#e97195">
<title><?= $lk['name']; ?></title>

<!-- Favicon and Touch Icons -->
<link href="<?= $h; ?>myimg/favicon.png" rel="shortcut icon" type="image/png">

<!-- Stylesheet -->
<link href="<?= $h; ?>css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="<?= $h; ?>css/jquery-ui.min.css" rel="stylesheet" type="text/css">
<link href="<?= $h; ?>css/animate.css" rel="stylesheet" type="text/css">
<link href="<?= $h; ?>css/css-plugin-collections.css" rel="stylesheet"/>
<!-- CSS | menuzord megamenu skins -->
<link id="menuzord-menu-skins" href="<?= $h; ?>css/menuzord-skins/menuzord-boxed.css" rel="stylesheet"/>
<!-- CSS | Main style file -->
<link href="<?= $h; ?>css/style-main.css" rel="stylesheet" type="text/css">
<!-- CSS | Preloader Styles -->
<link href="<?= $h; ?>css/preloader.css" rel="stylesheet" type="text/css">
<!-- CSS | Custom Margin Padding Collection -->
<link href="<?= $h; ?>css/custom-bootstrap-margin-padding.css" rel="stylesheet" type="text/css">
<!-- CSS | Responsive media queries -->
<link href="<?= $h; ?>css/responsive.css" rel="stylesheet" type="text/css">
<!-- CSS | Style css. This is the file where you can place your own custom css code. Just uncomment it and use it. -->
<!-- <link href="<?= $h; ?>css/style.css" rel="stylesheet" type="text/css"> -->

<!-- CSS | Theme Color -->
<link href="<?= $h; ?>css/colors/theme-skin-blue.css" rel="stylesheet" type="text/css">
<link href="<?= $h; ?>css/style.css" rel="stylesheet" type="text/css">


<!-- external javascripts -->
<script src="<?= $h; ?>js/jquery-2.2.0.min.js"></script>
<script src="<?= $h; ?>js/jquery-ui.min.js"></script>
<script src="<?= $h; ?>js/bootstrap.min.js"></script>
<!-- JS | jquery plugin collection for this theme -->
<script src="<?= $h; ?>js/jquery-plugin-collection.js"></script>

</head>
<body class="">
<div id="wrapper">

  <?php include 'header.php'; ?>
  
  <!-- Start main-content -->
  <div class="main-content">
    <!-- Section: inner-header -->
    <section class="inner-header divider layer-overlay overlay-deep" data-bg-img="<?= $h; ?>img/i.jpg">
      <div class="container pt-40 pb-40">
        <!-- Section Content -->
        <div class="section-content">
          <div class="row"> 
            <div class="col-md-12 xs-text-center">
              <h3 class=" AD font-28"><?= $lk['name']; ?></h2>
              <ol class=" Homeb breadcrumb white mt-10">
                <li><a href="<?= $h; ?>Nucleus-IVF">Home</a></li>
                <li class="active  aboutd text-theme-colored">Blog</li>
              </ol>
            </div>
          </div>
        </div>
      </div>      
    </section>
    
    <section>
      <div class="container mt-30 mb-30 pt-30 pb-30">
        <div class="row multi-row-clearfix">
          <div class="col-md-9 bisyh">
            <div class="blog-posts">
              <div class="col-md-12">
                <div class="row list-dashed">
                  <article class="post clearfix mb-50 pb-30">
                    <div class="entry-header">
                      <div class="post-thumb"> <img alt="" src="<?= $h; ?>ivfnucleus/<?= $lk['b_img']; ?>" class="center-block"> </div>
                    </div>
                    <div class="entry-content">
                      <?= $lk['b_content']; ?>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        
          <?php include 'sideblog.php'; ?>

        </div>
      </div>
    </section>
  </div>
  
  <?php include 'footer.php'; ?>

</div>
<!-- end wrapper -->

<!-- Footer Scripts -->
<!-- JS | Custom script for all pages -->
<script src="<?= $h; ?>js/custom.js"></script>

</body>
</html>
</html>
<?php 
}
else{
    header('Location: index.php');
}
?>