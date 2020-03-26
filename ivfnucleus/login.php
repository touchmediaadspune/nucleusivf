<?php 
require_once('base.php');

$user = md5($_POST['userid']);
$pass = md5($_POST['password']);

$prashas = mysqli_query($con, "select * from nucleus where user = '$user' and pass = '$pass' ");

$count = mysqli_num_rows($prashas);
if ($count==1) {
	session_start();
	$_SESSION['sprashasan'] = $user;
	header('Location: blog.php');
}
else{
	echo "invalid username & password";
}

?>