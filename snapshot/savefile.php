<?php 

$lastimg = file_get_contents('ftp://fereco:fereco@94.249.251.3:8002/2016-10-19/2016-10-19-Day-16-08-02-433(04).jpg');
file_put_contents('./uploads/lastimg.jpg',$lastimg);

//file_put_contents('test.txt', 'test.txt');
?>