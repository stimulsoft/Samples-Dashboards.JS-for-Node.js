<!DOCTYPE html>
<html>
<head>
	<link rel="shortcut icon" href="favicon.ico" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Stimulsoft Dashboards.JS - PHP Demo</title>

	<!-- Stimulsoft Dashboards.JS -->
	<script src="scripts/stimulsoft.reports.js" type="text/javascript"></script>
	<script src="scripts/stimulsoft.dashboards.js" type="text/javascript"></script>
	<script src="scripts/stimulsoft.viewer.js" type="text/javascript"></script>
</head>
<body>
	<div>
		<a href="index.php?id=DashboardChristmas">Christmas</a><br>
		<a href="index.php?id=DashboardFinancial">Financial</a><br>
		<a href="index.php?id=DashboardOpec">Opec</a><br>
		<a href="index.php?id=DashboardProducts">Products</a><br>
<?php
	// Get dashboard id from URL parameters
	$dashboard_id = "DashboardChristmas";
	if (isset($_GET["id"])) $dashboard_id = $_GET["id"];
?>
		<br /><br />

		<script type="text/javascript">
			// Create a new dashboard instance and load dashboard from server
			var report = Stimulsoft.Report.StiReport.createNewDashboard();
			report.loadFile("getdashboard.php?id=<?php echo $dashboard_id; ?>");

			// View dashboard in Viewer
			var options = new Stimulsoft.Viewer.StiViewerOptions();
			var viewer = new Stimulsoft.Viewer.StiViewer(options);
			viewer.report = report;
		</script>
	</div>
</body>
</html>
