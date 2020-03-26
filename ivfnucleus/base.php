<?php

$con = mysqli_connect('localhost','ivfnucleus','ivfnucleus','ivfnucleus');

if (!$con) {
	die('dark');
}

function logout(){
	session_start();
	if (!isset($_SESSION['sprashasan'])) {
		header('Location: logout.php');
	}
}
?>