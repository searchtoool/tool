<?php
$dbhost = "localhost";
$dbname = "searchtool";
$user = "root";
$pass = "";

  try{
$db = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=utf8", $user, $pass);
}
catch(PDOException $e) {
  echo "Error conecting with database.";
  file_put_contents('PDOErrors.txt', $e->getMessage(), FILE_APPEND);
}
?>
