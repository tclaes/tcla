<?php
try{
	//We instantiate the SOAP client
	$clientSOAP = new SoapClient('http://84.199.17.203:18000/BioService/?wsdl');

	//We return the ID of the last alarm
	$lastIdentification = $clientSOAP->GetLastIdentificationAlarmID()->GetLastIdentificationAlarmIDResult;
	$unidentified = -1;
	
	if($lastIdentification <> $unidentified){
		$ultimaAlarma = $lastIdentification;
		echo "Welkom " . $SubjectName;
		
	}
	else {
		$ultimaAlarma = $clientSOAP->GetLastAlarmID()->GetLastAlarmIDResult;
		echo "Hallo, jou kennen we nog niet - Geen probleem, de medewerker aan de balie lost dat onmiddelijk op!";
	}
	 
	//We obtain the last alarm information in an Array form
	$objectAlarm = $clientSOAP->GetAlarm(array('alarmId' => $ultimaAlarma, 'withFrame' => '1'))->GetAlarmResult;

	//We obtain each of the values from the Array
	$cameraId = $objectAlarm->CameraId;
	$FacePosition = $objectAlarm->FacePosition;
	$SubjectName = $objectAlarm->SubjectName;
	$SubjectLastName = $objectAlarm->SubjectLastName;
	$TimeStamp = $objectAlarm->TimeStamp;
	$FullName = $SubjectName . " " . $SubjectLastName;

	//We obtain the pictures information in a Base64 String form
	$FrameImage = $objectAlarm->FrameImage;
	$SubjectFaceImage = $objectAlarm->SubjectFaceImage;
	$SubjectModelImage = $objectAlarm->SubjectModelImage;
	$SubjectCode = $objectAlarm->SubjectCode;
	$SubjectGroup = $objectAlarm->SubjectGroup;
	$Score = $objectAlarm->Score;

	//We convert the Base64 Strings into PNG images 
	$frameImage = 'data:image/PNG;base64,' . base64_encode($FrameImage);
	$subjectFaceImage = 'data:image/PNG;base64,' . base64_encode($SubjectFaceImage);
	$subjectModelImage = 'data:image/PNG;base64,' . base64_encode($SubjectModelImage);
	 
	// We print the required information inside a table
	print "<p align=\"CENTER\"><img src=$subjectFaceImage width=\"200px\" height=\"200px\"/> <img src=$subjectModelImage width=\"200px\" height=\"200px\"/></p>" ;
	echo "<p align=\"CENTER\"><table width='600' cellpadding='5' cellspacing='5' border='1'></p>";
	echo "<tr><td>Last Alarm ID</td><td>$ultimaAlarma</td></tr>";
	echo "<tr><td>Full Name</td><td><a target = '_blank' a href=$frameImage>$FullName</a></td></tr>";
	echo "<tr><td>Subject Code</td><td>$SubjectCode</td></tr>";
	echo "<tr><td>Camera</td><td>$cameraId</td></tr>";
	echo "<tr><td>Time Stamp</td><td>$TimeStamp</td></tr>";
	echo "<tr><td>Score</td><td>$Score</td></tr>";
	echo "</table>";
	echo "<br /><center><input type='submit' name='submitAdd' value='Update' onclick='window.location.reload();'></center>";
	 
	
} catch(SoapFault $e){
 var_dump($e);
}
?>