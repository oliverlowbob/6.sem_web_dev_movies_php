<?php
if(empty($_SESSION['username'])){
    header("location: login.php");
    exit;
}
?>