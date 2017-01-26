<?php

$localimg = 'uploads/lastimg.jpg';
$created = filemtime($localimg);
$today = date('Y-m-d');
//echo strtotime("-15minutes");


  
  
    //$dir = "ftp://fereco:fereco@vsshowroom.gvdip.com:15090/FTP-133f6e/2016-06-20";
  $dir = "ftp://fereco:fereco@94.249.251.3:8002/" . $today;
if(is_dir($dir)){
    if($created < strtotime("-15minutes") /*&& $created > strtotime("-45minutes" )*/) {
  $dh = opendir($dir);
  while(($file = readdir($dh)) !== false)
    { 
      if(pathinfo($file)["extension"] == "jpg"){
        $lastimg = $dir . "/" . $file; }
      };
      
  closedir($dh);

  //Get the file
  $content = file_get_contents($lastimg);
  //Store in the filesystem.
  file_put_contents('./uploads/lastimg.jpg',$content);

  }
  
}


else {
    header("Content-Type: image/jpeg");
readfile('uploads/lastimg.jpg');
  
} /*if($created < strtotime("-45minutes"))*/ {
  
 
  
  
};


//display image

header("Content-Type: image/jpeg");
readfile('uploads/lastimg.jpg');
echo $created;
echo "<br>";
echo strtotime("-15minutes");
?>