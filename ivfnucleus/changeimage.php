<?php 
session_start();

require_once('base.php');
if (isset($_SESSION['sprashasan'])) {
    $idf = $_POST['idf2'];
    $dm = $_FILES['image1']['name'];
    $target1 = '';
   
    $jjh = false;
    if ($dm != "") {
    	
    	$rd = mt_rand(0000,9999);
		$target1 = "upload_image/$rd".basename($_FILES['image1']['name']);

		$image1 = $_FILES['image1']['name'];

			if (move_uploaded_file($_FILES['image1']['tmp_name'], $target1)) {
				$jjh = true;
			}
	}
    else{
    	
    	$ii = mysqli_fetch_array(mysqli_query($con, "select * from e_blog where id = '$idf' "));
    	$target1 = $ii['b_img'];
    	$jjh = true;

    }
    if ($jjh) {
    	
    	$name = $_POST['bname'];
		$desc = addslashes($_POST['bdesc']);
		$bseo = $_POST['bseo'];
		
		$starep = "UPDATE e_blog SET name = '$name', b_content = '$desc', b_seo = '$bseo' , b_img = '$target1' WHERE id = '$idf'";

		$r = mysqli_query($con, $starep);

		if ($r) {
			echo "<script>alert('Data Added Successfully');
			window.location.href='blog.php';</script>";
		}
		else{
			echo "<script>alert('Not Able to Add Data');
			window.location.href='blog.php';</script>";
		}
	}
	else{
	echo "Unable To save the image";
    }

}
else{
	header('Location: logout.php');
}
?>