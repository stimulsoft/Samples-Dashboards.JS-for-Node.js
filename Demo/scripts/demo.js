var dashboardButtonsId = [];
var viewer = null;
var designer = null;

// Load first dashboard after the page is loaded
function onBodyLoad() {
    createViewer();

    //load first dashboard
    setSelectedDashboardButton("DashboardOpec");
    setDashboard(DashboardOpec);
}

function createViewer() {
    // Specify necessary options for the viewer
    var options = new Stimulsoft.Viewer.StiViewerOptions();
    options.height = "100%";
    options.appearance.scrollbarsMode = true;
    options.toolbar.showDesignButton = true;

    // Create an instance of the viewer
    viewer = new Stimulsoft.Viewer.StiViewer(options, "StiViewer", false);

    // Add the design button event
    viewer.onDesignReport = function (e) {
        this.visible = false;
        if (designer == null) createDesigner();
        designer.visible = true;
        designer.report = e.report;
    };

    viewer.renderHtml("stiRightPanel");
}

function createDesigner() {
    var options = new Stimulsoft.Designer.StiDesignerOptions();
    options.appearance.fullScreenMode = true;

    // Create an instance of the designer
    designer = new Stimulsoft.Designer.StiDesigner(options, "StiDesigner", false);

    // Add the exit menu item event
    designer.onExit = function (e) {
        this.visible = false;
        viewer.visible = true;
    }

    designer.renderHtml("designerContent");
}

function setDashboard(dashboardObject) {
    // Forcibly show process indicator
    viewer.showProcessIndicator();

    // Timeout need for immediate display loading dashboard indicator
    setTimeout(function () {
        // Create a new dashboard instance
        var dashboard = Stimulsoft.Report.StiReport.createNewDashboard();
        // Load dashboard from JSON object
        dashboard.load(dashboardObject);

        // Assign the dashboard to the viewer
        viewer.report = dashboard;
    }, 50);
}

function createDashboardButtons() {
    var dashboardsContainer = document.getElementById("stiDashboardsContainer");

    var allDashboards = [
        {
            category: "Miscellaneous Dashboards",
            dashboards: {
                "DashboardOpec": "Opec"
                //"DashboardNascar": "Nascar"
            }
        },
        {
            category: "Sales Dashboards",
            dashboards: {
                //"DashboardSalesByCompanies": "Sales By Companies",
                "DashboardProducts": "Products",
                "DashboardSalesByMonth": "Sales By Month",
                "DashboardSalesOverview": "Sales Overview",
                "DashboardSalesStatistics": "Sales Statistics",
                "DashboardSalesPerfomance": "Sales Perfomance",
                //"DashboardSiteStatistics": "Site Statistic",
                "DashboardVehicleProduction": "Vehicle Production"
            }
        },
        {
            category: "Social Dashboards",
            dashboards: {
                "DashboardChristmas": "Christmas",
                "DashboardGlobalInternetUsage": "Global Internet Usage",
                "DashboardPopulationByState": "Population By State"
            }
        },
        {
            category: "Statistics Dashboards",
            dashboards: {
                "DashboardSocialNetworksStatistics": "Social Networks Statistics",
                "DashboardExchangeTenders": "Exchange Tenders",
                "DashboardFinancial": "Financial",
                "DashboardOrders": "Orders",
                "DashboardRestaurantAttendanceTracking": "Restaurant Attendance Tracking",
                "DashboardTicketsStatistics": "Tickets Statistics",
                "DashboardWebsiteAnalytics": "Website Analytics"
            }
        }
    ]

    for (var i = 0; i < allDashboards.length; i++) {
        dashboardsContainer.appendChild(stiCategoryHeader(allDashboards[i].category));

        for (var dashboardName in allDashboards[i].dashboards) {
            var button = stiDashboardButton(allDashboards[i].dashboards[dashboardName], "Images/Dashboard.png");
            dashboardsContainer.appendChild(button);
            button.dashboardName = dashboardName;
            button.id = dashboardName;
            dashboardButtonsId.push(button.id);
        }
    }
}

function resizeLeftPanel(minimize, noAnimation) {
    var leftPanel = document.getElementById("stiMainLeftPanel");
    var rightPanel = document.getElementById("stiRightPanel");
    var resizingImage = document.getElementById("stiLeftPanelResizingImage");
    var dashboardsContainer = document.getElementById("stiDashboardsContainer");
    var logo = document.getElementById("stiLogo");
    if (minimize == null) minimize = !leftPanel.isMinimize;
    var finishWidth = minimize ? 44 : 270;
    var durationAnimation = noAnimation ? 0 : 150;

    leftPanel.isMinimize = minimize;

    if (noAnimation) {
        leftPanel.style.width = finishWidth + "px";
        rightPanel.style.marginLeft = leftPanel.offsetWidth + "px";
    }
    else {
        resizingImage.className = "stiImageRotate";
        $(leftPanel).animate({ width: finishWidth }, {
            duration: durationAnimation,
            step: function () {
                rightPanel.style.marginLeft = leftPanel.offsetWidth + "px";
            },
            complete: function () {
                leftPanel.style.width = finishWidth + "px";
                rightPanel.style.marginLeft = leftPanel.offsetWidth + "px";
                resizingImage.className = "";
                viewer.jsObject.postAction("Refresh");
            }
        });
    }

    var finishOpacity = minimize ? 0 : 1;
    $(dashboardsContainer).animate({ opacity: finishOpacity }, {
        duration: durationAnimation, complete: function () {
            dashboardsContainer.style.display = minimize ? "none" : "";
        }
    });
    $(logo).animate({ opacity: finishOpacity }, { duration: durationAnimation });
}

function setSelectedDashboardButton(dashboardName) {
    for (i = 0; i < dashboardButtonsId.length; i++) {
        var dbsButton = document.getElementById(dashboardButtonsId[i]);
        if (dbsButton) {
            if (dashboardButtonsId[i] == dashboardName || dashboardButtonsId[i] == dashboardName) {
                dbsButton.isSelected = true;
                dbsButton.className = "stiReportButtonSelected";
            }
            else {
                dbsButton.isSelected = false;
                dbsButton.className = "stiReportButton";
            }
        }
    }
}

function stiButton(caption, imageName) {
    var button = document.createElement("div");
    button.className = "stiButton";
    button.style.display = "inline-block";

    var innerTable = createHTMLTable();
    button.appendChild(innerTable);

    if (imageName) {
        var img = document.createElement("img");
        button.img = img;
        img.style.margin = "10px";
        img.src = imageName;
        innerTable.addCell(img);
    }

    if (caption) {
        button.caption = innerTable.addTextCell(caption);
    }

    button.action = function () { }

    button.onclick = function () {
        this.action();
    }

    return button;
}

function stiDashboardButton(caption, imageName) {
    var button = stiButton(caption, imageName);
    button.className = "stiReportButton";
    button.style.display = "block";
    button.style.cursor = "pointer";
    button.caption.style.whiteSpace = "nowrap";
    button.img.style.width = button.img.style.height = "18px";
    button.img.style.margin = "5px 5px 5px 8px";

    button.onmouseover = function () {
        this.className = "stiReportButtonOver";
    }

    button.onmouseout = function () {
        this.className = this.isSelected ? "stiReportButtonSelected" : "stiReportButton";
    };

    button.onclick = function () {
        setSelectedDashboardButton(this.dashboardName);
        var dashboardObject = window[this.dashboardName];
        if (dashboardObject) setDashboard(dashboardObject);
    }

    return button;
}

function stiCategoryHeader(text) {
    var header = document.createElement("div");
    header.className = "stiCategoryHeader";
    header.innerHTML = text;

    return header;
}

function createHTMLTable(rowsCount, cellsCount) {
    var table = document.createElement("table");
    table.cellPadding = 0;
    table.cellSpacing = 0;
    table.tr = [];
    table.tr[0] = document.createElement("tr");
    table.appendChild(table.tr[0]);

    table.addCell = function (control) {
        var cell = document.createElement("td");
        this.tr[0].appendChild(cell);
        if (control) cell.appendChild(control);

        return cell;
    }

    table.insetCell = function (index, control) {
        var cell = this.tr[0].insertCell(index);
        if (control) cell.appendChild(control);

        return cell;
    }

    table.addTextCellInNextRow = function (text) {
        var rowCount = this.tr.length;
        this.tr[rowCount] = document.createElement("tr");
        this.appendChild(this.tr[rowCount]);
        var cell = document.createElement("td");
        this.tr[rowCount].appendChild(cell);
        cell.innerHTML = text;

        return cell;
    }

    table.addCellInNextRow = function (control) {
        var rowCount = this.tr.length;
        this.tr[rowCount] = document.createElement("tr");
        this.appendChild(this.tr[rowCount]);
        var cell = document.createElement("td");
        this.tr[rowCount].appendChild(cell);
        if (control) cell.appendChild(control);

        return cell;
    }

    table.addCellInLastRow = function (control) {
        var rowCount = this.tr.length;
        var cell = document.createElement("td");
        this.tr[rowCount - 1].appendChild(cell);
        if (control) cell.appendChild(control);

        return cell;
    }

    table.addTextCellInLastRow = function (text) {
        var rowCount = this.tr.length;
        var cell = document.createElement("td");
        this.tr[rowCount - 1].appendChild(cell);
        cell.innerHTML = text;

        return cell;
    }

    table.addCellInRow = function (rowNumber, control) {
        var cell = document.createElement("td");
        this.tr[rowNumber].appendChild(cell);
        if (control) cell.appendChild(control);

        return cell;
    }

    table.addTextCell = function (text) {
        var cell = document.createElement("td");
        this.tr[0].appendChild(cell);
        cell.innerHTML = text;

        return cell;
    }

    table.addRow = function () {
        var rowCount = this.tr.length;
        this.tr[rowCount] = document.createElement("tr");
        this.appendChild(this.tr[rowCount]);

        return this.tr[rowCount];
    }

    return table;
}