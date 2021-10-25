<?php

$email = $_POST['log-email'];
$password = $_POST['log-password'];

//prevent mysql injection
$email = stripcslashes($email);
$password = stripcslashes($password);
$email = mysql_real_escape_string($email);
$password = mysql_real_escape_string($password);

//connect to the server
mysql_connect("localhost" , "root" , "");
mysql_select_db("gymx_login");

//query the database for user
$result = mysql_query("SELECT * FROM `gymx_login`.`user` WHERE email = '$username' AND password = 'password'")
    or die("failed to query database ".mysql_error());

$row = mysql_fetch_array($result);
if($row['email'] == $email && $row['password'] == $password){
    echo "Login successful! Welcome".$row['email'];
} else "Failed to login..."


>