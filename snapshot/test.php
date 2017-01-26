<?php
$today = date('Y-m-d');
//$dir = "ftp://fereco:fereco@vsshowroom.gvdip.com:15090/FTP-133f6e/2016-06-20";
$dir = "ftp://fereco:fereco@94.249.251.3:8002/" . $today;
$dh = opendir($dir);
while(($file = readdir($dh)) !== false)
{ $lastimg = $dir . "/" . $file; }
closedir($dh);
header("Content-Type: image/jpeg"); 
readfile($lastimg);
//echo $image;
?>