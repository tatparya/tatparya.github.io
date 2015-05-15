<?php
$name = $_POST["name"];
$to = "tatparya.shankar@gmail.com";
$subject = "[MyWebsite]" . $_POST["subject"];
$txt = $_POST["body"];
$headers = "From: me@tatparya.github.io" . "\r\n";

mail($to,$subject,$txt,$headers);
?>
