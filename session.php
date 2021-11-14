<?php
session_start();

if(isset($_SESSION["userId"]) && $_SESSION["userId"] == true){
    header("location: index.php");
    exit;
}
else{
    header("location: login.php");
}

?>