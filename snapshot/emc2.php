<?php

$localimg = 'uploads/lastimg_emc.jpg';
$created = filemtime($localimg);
$today = date('Y-m-d');
//echo strtotime("-15minutes");


  
  
    //$dir = "ftp://fereco:fereco@vsshowroom.gvdip.com:15090/FTP-133f6e/2016-06-20";
  $dir = "ftp://geovision:geovision@84.199.17.203:15090/MGijbels/FTP-122743/" . $today;
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
  file_put_contents('./uploads/lastimg_emc.jpg',$content);

  }
  
}


else {
    header("Content-Type: image/jpeg");
readfile('uploads/lastimg_emc.jpg');
  
} /*if($created < strtotime("-45minutes"))*/ {
  
 
  
  
};


//display image

header("Content-Type: image/jpeg");
readfile('uploads/lastimg_emc.jpg');
echo $created;
echo "<br>";
echo strtotime("-15minutes");
?>