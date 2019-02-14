<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Demo.Default" %>

<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
    <link rel="shortcut icon" href="favicon.ico" />
    <title>Stimulsoft Dashboards.JS - ASP.NET Demo</title>

    <!-- Dashboard Viewer Office2013 style -->
    <link href="Css/stimulsoft.viewer.office2013.whiteblue.css" rel="stylesheet" />

    <!-- Stimusloft Dashboards.JS -->
    <script src="Scripts/stimulsoft.reports.js" type="text/javascript"></script>
    <script src="Scripts/stimulsoft.reports.maps.js" type="text/javascript"></script>
    <script src="Scripts/stimulsoft.dashboards.js" type="text/javascript"></script>
    <script src="Scripts/stimulsoft.viewer.js" type="text/javascript"></script>
</head>

<body>
    <form id="Form1" runat="server">
        <div>
            <asp:DropDownList ID="DropDownList1" runat="server" Height="25px" Width="200px" AutoPostBack="true">
                <asp:ListItem Value="DashboardChristmas">Christmas</asp:ListItem>
                <asp:ListItem Value="DashboardFinancial">Financial</asp:ListItem>
                <asp:ListItem Value="DashboardOpec">Opec</asp:ListItem>
                <asp:ListItem Value="DashboardProducts">Products</asp:ListItem>
            </asp:DropDownList>

            <br /><br />

            <script type="text/javascript">
                // Create a new dashboard instance and load dashboard from server
                var report = Stimulsoft.Report.StiReport.createNewDashboard();
                report.loadFile("GetDashboard.aspx?id=<%= DropDownList1.SelectedValue %>");

                // View dashboard in Viewer
                var options = new Stimulsoft.Viewer.StiViewerOptions();
                var viewer = new Stimulsoft.Viewer.StiViewer(options);
                viewer.report = report;
            </script>
        </div>
    </form>
</body>

</html>