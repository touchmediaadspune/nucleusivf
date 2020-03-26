<?php

function validate($m, $k='')
{
	$m = trim($m);
	if($m == "")
		die("Please Fill the missing Field");

	$val = array('url', 'www', 'http', '.com', 'disclaimar');
    
	if($k == "email")
	{
		if(!filter_var($m, FILTER_VALIDATE_EMAIL))
			die('Enter the valid mail');
	}
	else if($k == "phone")
	{
		if(!preg_match('/^[0-9]+$/', $m))
			die('Enter the valid Phone Number');
		else if(strlen($m) < 10 || strlen($m) > 12 )
			die('Enter the valid 10 digit Phone Number');
	}	
    else{
		if(strlen($m) > 100){
			die('Message should be at most 100 char');
		}
		else{
			foreach($val as $v){
				if(strpos(strtolower($m), $v) !== false){
					die('It seem you are Bot!  ... Not Allowed');
				}
			}
		}
		
	}
    return $m;
}
function send_it($n, $e, $p, $date, $msg, $send_mail){
	$name = validate($n);
	$email = validate($e, 'email');
	$phone = validate($p, 'phone');
	$date = validate($date);
	$msg = validate($msg);

	$Username  = "touchmediatransaction";
	$Password = "Touchmediaads@123";
	$Senderid = "TCHMED";
	$dest_mobileno = "+91".$phone;
	$can = "+918149143338";
	$data = "username=".$Username."&pass=".$Password."&senderid=".$Senderid."&dest_mobileno=".$dest_mobileno."&tempid=66933&F1=".$name."&F2=".$dr."&F5=".$can."&response=Y";
	$ch = curl_init('http://www.smsjust.com/blank/sms/user/urlsmstemp.php?');
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$result = curl_exec($ch); // This is the result from the API
	curl_close($ch);


	$Username  = "touchmediatransaction";
	$Password = "Touchmediaads@123";
	$Senderid = "TCHMED";
	$dest_mobileno = "+918149143338";
	$data = "username=".$Username."&pass=".$Password."&senderid=".$Senderid."&dest_mobileno=".$dest_mobileno."&tempid=67158&F1=".$web."\n &F2=".$name."\n &F3=".$phone."\n &F4=".$email."\n &F5=".$place."\n &F8=".$msg."&response=Y";
	$ch = curl_init('http://www.smsjust.com/blank/sms/user/urlsmstemp.php?');
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$result = curl_exec($ch); // This is the result from the API
	curl_close($ch);
	
	$to = "gulshanprajapati5105@gmail.com, abhijit.mishra08@gmail.com, ".$send_mail;
	$headers = "MIME-Version: 1.1";
	$headers .= "Content-type: text/html; charset=iso-8859-1";
	$headers .= "From: " . $email . "\r\n"; // Sender's E-mail
	$headers .= "Return-Path:". $email;
	$subject = 'New Booking by Client from Website'; // Subject of your email
	
	$send_msg = "You have an Appointment by \n Name: $name, \n Phone No: $phone \n Email : $email \n Date: $date \n Message: $msg\n";
	
	if(@mail($to,$subject,$send_msg,$headers))
	{
		echo "y";
	}
	else
	{
		echo "Not able to send the Message";
	}
}
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];

$msg = $_POST['msg'];
$send_mail = "nucleusfrgc@gmail.com";


send_it($name, $email, $phone, $date, $msg, $send_mail);

?>