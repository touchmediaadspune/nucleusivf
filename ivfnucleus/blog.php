<?php 
session_start();
require_once('base.php');
if (isset($_SESSION['sprashasan'])) {
   
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Nucleus IVF Blog</title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <!-- bootstrap 3.0.2 -->
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- font Awesome -->
        <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <!-- Ionicons -->
        <link href="css/ionicons.min.css" rel="stylesheet" type="text/css" />
        <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="css/AdminLTE.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" rel="stylesheet" type="text/css" />

    </head>
    <body class="skin-blue">
        <?php include 'header.php'; ?>

            <aside class="right-side">

                <section class="content-header">
                    <h1>
                        Blog
                    </h1>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="box box-primary">
                                <div class="box-header">
                                    <h3 class="box-title">Blog</h3>
                                </div>

                                <form role="form" id="edttt2" action="insertblog.php" method="post" enctype="multipart/form-data">
                                    <div class="box-body">
                                        <div class="xyz1"></div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Enter Blog Title</label>
                                            <input type="text" name="bname" class="form-control" id="exampleInputEmail1" placeholder="Enter Blog Title">
                                        </div>
                                        <div class="form-group edtokart">
                                            <label>Description</label>
                                            <textarea id="editor1" name="bdesc" rows="10" cols="80"></textarea>
                                        </div>
                                        <div class="form-group dseoo">
                                            <label>SEO</label>
                                            <textarea id="facio" name="bseo" rows="10" class="form-control"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputFile">File input</label>
                                            <input name="image1" type="file">
                                        </div>
                                    </div>

                                    <div class="box-footer" id="upudt">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div> 
                </section>
            </aside>

            <aside class="right-side">
                 <section class="content">
                    <div class="row">
                        <div class="col-xs-12">
                            
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">List of upcoming events</h3>                                    
                                </div>

                                <button class="btn btn-success" id="edti2">Edit</button>
                                <button class="btn btn-danger" id="dlet2">Delete</button>

                                <div class="box-body table-responsive slct">
                                    <table id="example1" class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Blog Title</th>
                                                <th>Seo</th>
                                                <th>Description</th>
                                                <th>Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php 
                                              $l = 1;
                                              $tre = mysqli_query($con, "select * from e_blog order by id desc");
                                              while ($trk = mysqli_fetch_array($tre)) {
                                                $b_seo = substr($trk['b_seo'], 0, 95);
                                                $b_content = substr($trk['b_content'], 0, 50);
                                            ?>
                                            <tr data="<?php echo $trk['id']; ?>">
                                                <td><?php echo $l; ?></td>
                                                <td class="b_name"><?php echo $trk['name']; ?></td>
                                                <td class="b_date"><?php echo $b_seo; ?></td>
                                                <td class="b_content"><?php echo $b_content; ?></td>
                                                <td class="b_img"><?php echo $trk['b_img']; ?></td>
                                            </tr>
                                            <?php 
                                             $l++;}
                                            ?>
                                        </tbody>
                                    </table>
                                </div><!-- /.box-body -->
                            </div><!-- /.box -->
                        </div>
                    </div>

                </section><!-- /.content -->
            </aside>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
        
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/plugins/datatables/jquery.dataTables.js" type="text/javascript"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js" type="text/javascript"></script>
        <script src="js/AdminLTE/app.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/new.js"></script>
        <script type="text/javascript">
            $(function() {
                $("#example1").dataTable();
                $('#example2').dataTable({
                    "bPaginate": true,
                    "bLengthChange": false,
                    "bFilter": false,
                    "bSort": true,
                    "bInfo": true,
                    "bAutoWidth": false
                });
            });
        </script>
        
        <script src="js/plugins/ckeditor/ckeditor.js" type="text/javascript"></script>
        <script src="js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" type="text/javascript"></script>
        <script type="text/javascript">
            $(function() {
                // Replace the <textarea id="editor1"> with a CKEditor
                // instance, using default configuration.
                CKEDITOR.replace('editor1');
                //bootstrap WYSIHTML5 - text editor
                $(".textarea").wysihtml5();
            });
        </script>
        
    </body>
</html>
<?php
}
else{
    header('location:logout.php');
}
?>