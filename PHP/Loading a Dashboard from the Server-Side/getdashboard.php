<?php
	$dashboard_id = $_GET["id"];
	$file = "dashboards/$dashboard_id.mrt";
	
	if (file_exists($file)) {
		header('Content-Description: File Transfer');
		header('Content-Type: application/json');
		header('Content-Disposition: attachment; filename="'.basename($file).'"');
		header('Content-Length: '.filesize($file));
		readfile($file);
		exit;
	}
?>