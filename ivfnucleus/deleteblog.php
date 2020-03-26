<?php 
session_start();
require_once('base.php');
if (isset($_SESSION['sprashasan'])) {
	$strp = $_POST['edideel'];
	$deltd = "DELETE FROM e_blog WHERE id = '$strp' ";
 
	$r = mysqli_fetch_array(mysqli_query($con, "select * from e_blog where id = '$strp' "));

	$file = $r['b_img'];
	$qr = mysqli_query($con, $deltd);
	if($qr){
		$f = unlink($file);
		if ($f) {
		 	echo "yes";    
		}
	}
	else {
		echo "no";
	}
}

?>