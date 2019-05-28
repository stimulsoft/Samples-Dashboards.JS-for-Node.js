var DashboardOrders = {
  "ReportVersion": "2019.3.1.0",
  "ReportGuid": "0c0adfefb281455897c76c221c7e9e24",
  "ReportName": "DashboardOrders",
  "ReportAlias": "DashboardOrders",
  "ReportCreated": "/Date(1529248458000+0300)/",
  "ReportChanged": "/Date(1548231092000+0300)/",
  "EngineVersion": "EngineV2",
  "CalculationMode": "Interpretation",
  "ReportUnit": "Inches",
  "Script": "using System;\r\nusing System.Drawing;\r\nusing System.Windows.Forms;\r\nusing System.Data;\r\nusing Stimulsoft.Controls;\r\nusing Stimulsoft.Base.Drawing;\r\nusing Stimulsoft.Report;\r\nusing Stimulsoft.Report.Dialogs;\r\nusing Stimulsoft.Report.Components;\r\n\r\nnamespace Reports\r\n{\r\n    public class DashboardOrders : Stimulsoft.Report.StiReport\r\n    {\r\n        public DashboardOrders()        {\r\n            this.InitializeComponent();\r\n        }\r\n\r\n        #region StiReport Designer generated code - do not modify\r\n\t\t#endregion StiReport Designer generated code - do not modify\r\n    }\r\n}\r\n",
  "ReferencedAssemblies": {
    "0": "System.Dll",
    "1": "System.Drawing.Dll",
    "2": "System.Windows.Forms.Dll",
    "3": "System.Data.Dll",
    "4": "System.Xml.Dll",
    "5": "Stimulsoft.Controls.Dll",
    "6": "Stimulsoft.Base.Dll",
    "7": "Stimulsoft.Report.Dll"
  },
  "Dictionary": {
    "Resources": {
      "0": {
        "Name": "Orders",
        "Alias": "Orders",
        "Type": "Excel",
        "Image": "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"
      }
    },
    "DataSources": {
      "0": {
        "Ident": "StiDataTableSource",
        "Name": "Statistics",
        "Alias": "Statistics",
        "Key": "de6e228a7e894edf8528fc018f237fd9",
        "Columns": {
          "0": {
            "Name": "State",
            "Index": -1,
            "NameInSource": "State",
            "Alias": "State",
            "Type": "System.String"
          },
          "1": {
            "Name": "Orders",
            "Index": -1,
            "NameInSource": "Orders",
            "Alias": "Orders",
            "Type": "System.Double"
          },
          "2": {
            "Name": "Taget Orders",
            "Index": -1,
            "NameInSource": "Taget Orders",
            "Alias": "Taget Orders",
            "Type": "System.Double"
          },
          "3": {
            "Name": "New Customers",
            "Index": -1,
            "NameInSource": "New Customers",
            "Alias": "New Customers",
            "Type": "System.Double"
          },
          "4": {
            "Name": "Target Customers",
            "Index": -1,
            "NameInSource": "Target Customers",
            "Alias": "Target Customers",
            "Type": "System.Double"
          },
          "5": {
            "Name": "Repeat Purchases",
            "Index": -1,
            "NameInSource": "Repeat Purchases",
            "Alias": "Repeat Purchases",
            "Type": "System.Double"
          },
          "6": {
            "Name": "Target Repeat Purchases",
            "Index": -1,
            "NameInSource": "Target Repeat Purchases",
            "Alias": "Target Repeat Purchases",
            "Type": "System.Double"
          },
          "7": {
            "Name": "Real",
            "Index": -1,
            "NameInSource": "Real",
            "Alias": "Real",
            "Type": "System.Double"
          },
          "8": {
            "Name": "Estimated",
            "Index": -1,
            "NameInSource": "Estimated",
            "Alias": "Estimated",
            "Type": "System.Double"
          }
        },
        "NameInSource": "Orders.Statistics"
      },
      "1": {
        "Ident": "StiDataTableSource",
        "Name": "Sales",
        "Alias": "Sales",
        "Key": "8e29441605f24925b2b68f33a57aed49",
        "Columns": {
          "0": {
            "Name": "Day",
            "Index": -1,
            "NameInSource": "Day",
            "Alias": "Day",
            "Type": "System.String"
          },
          "1": {
            "Name": "Real",
            "Index": -1,
            "NameInSource": "Real",
            "Alias": "Real",
            "Type": "System.Double"
          },
          "2": {
            "Name": "Estimated",
            "Index": -1,
            "NameInSource": "Estimated",
            "Alias": "Estimated",
            "Type": "System.Double"
          }
        },
        "NameInSource": "Orders.Sales"
      }
    },
    "Databases": {
      "0": {
        "Ident": "StiExcelDatabase",
        "Name": "Orders",
        "Alias": "Orders",
        "PathData": "resource://Orders"
      }
    }
  },
  "Pages": {
    "0": {
      "Ident": "StiDashboard",
      "Name": "Dashboard1",
      "Guid": "b542cc6f839d4e329b8a5540e975d460",
      "Alias": "Orders",
      "Brush": "solid:",
      "Components": {
        "0": {
          "Ident": "StiIndicatorElement",
          "Name": "Indicator1",
          "Guid": "a3922bf1d88c4dcab6802459a0e2472c",
          "ClientRectangle": "0,40,400,160",
          "Border": "All;211,212,213;;;",
          "TopN": {
            "Mode": "None"
          },
          "TextFormat": {
            "Ident": "StiNumberFormatService",
            "NegativePattern": 1,
            "DecimalDigits": 0,
            "GroupSeparator": ",",
            "State": "DecimalDigits"
          },
          "Value": {
            "Ident": "ValueIndicatorMeter",
            "Expression": "Sum(Statistics.Orders)"
          },
          "Target": {
            "Ident": "TargetIndicatorMeter",
            "Expression": "Sum([Statistics.Taget Orders])"
          },
          "Title": {
            "Text": "ORDERS",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "Font": ";13;;"
        },
        "1": {
          "Ident": "StiIndicatorElement",
          "Name": "Indicator2",
          "Guid": "ee05d51a084841c1b7870828c8dcdd46",
          "ClientRectangle": "800,40,400,160",
          "Border": "All;211,212,213;;;",
          "TopN": {
            "Mode": "None"
          },
          "TextFormat": {
            "Ident": "StiNumberFormatService",
            "NegativePattern": 1,
            "DecimalDigits": 0,
            "GroupSeparator": ",",
            "State": "DecimalDigits"
          },
          "Value": {
            "Ident": "ValueIndicatorMeter",
            "Expression": "Sum([Statistics.New Customers])"
          },
          "Target": {
            "Ident": "TargetIndicatorMeter",
            "Expression": "Sum([Statistics.Target Customers])"
          },
          "Title": {
            "Text": "NEW CUSTOMERS",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "Font": ";13;;"
        },
        "2": {
          "Ident": "StiProgressElement",
          "Name": "Progress1",
          "Guid": "13bb0cb90dfb43bd826576b34e98edc4",
          "ClientRectangle": "400,40,400,160",
          "Border": "All;211,212,213;;;",
          "TopN": {
            "Mode": "None"
          },
          "Value": {
            "Ident": "ValueProgressMeter",
            "Expression": "Sum([Statistics.Repeat Purchases])"
          },
          "Target": {
            "Ident": "TargetProgressMeter",
            "Expression": "Sum([Statistics.Target Repeat Purchases])"
          },
          "Title": {
            "Text": "REPEAT PURCHASES",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "Font": ";13;;",
          "ColorEach": true
        },
        "3": {
          "Ident": "StiRegionMapElement",
          "Name": "RegionMap1",
          "Guid": "e91cbab2cd244f62a4be4260e66f922d",
          "ClientRectangle": "0,200,1200,400",
          "Border": ";;;;",
          "DashboardInteraction": {
            "Ident": "RegionMap",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          },
          "Title": {
            "Text": "ORDERS by STATE",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "KeyMeter": {
            "Ident": "KeyMapMeter",
            "Expression": "Statistics.State"
          },
          "NameMeter": {
            "Ident": "NameMapMeter",
            "Expression": "Statistics.State"
          },
          "ValueMeter": {
            "Ident": "ValueMapMeter",
            "Expression": "Statistics.Orders"
          },
          "DataFrom": "DataColumns",
          "MapType": "Heatmap",
          "ShowValue": true,
          "ShortValue": true,
          "ShowName": "Short"
        },
        "4": {
          "Ident": "StiTextElement",
          "Name": "Text1",
          "Guid": "56689f43239a4eedbbb8069be6cd9552",
          "ClientRectangle": "0,0,1200,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"36\"><text-align=\"Center\"><font-color=\"#7F7F7F\">ORDERS STATS</font-color></text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        }
      },
      "Border": ";;2;;;;;solid:Black"
    }
  }
}