var DashboardTicketsStatistics = {
  "ReportVersion": "2019.3.1.0",
  "ReportGuid": "5b7156e4c9fb4b28995193846577fcea",
  "ReportName": "DashboardTicketsStatistics",
  "ReportAlias": "DashboardTicketsStatistics",
  "ReportAuthor": "Stimulsoft",
  "ReportCreated": "/Date(1529251007000+0300)/",
  "ReportChanged": "/Date(1556307607000+0300)/",
  "EngineVersion": "EngineV2",
  "ReportUnit": "Inches",
  "Script": "using System;\r\nusing System.Drawing;\r\nusing System.Windows.Forms;\r\nusing System.Data;\r\nusing Stimulsoft.Controls;\r\nusing Stimulsoft.Base.Drawing;\r\nusing Stimulsoft.Report;\r\nusing Stimulsoft.Report.Dialogs;\r\nusing Stimulsoft.Report.Components;\r\n\r\nnamespace Reports\r\n{\r\n    public class DashboardTicketsStatistics : Stimulsoft.Report.StiReport\r\n    {\r\n        public DashboardTicketsStatistics()        {\r\n            this.InitializeComponent();\r\n        }\r\n\r\n        #region StiReport Designer generated code - do not modify\r\n\t\t#endregion StiReport Designer generated code - do not modify\r\n    }\r\n}\r\n",
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
        "Name": "Tickets",
        "Alias": "Tickets",
        "Type": "Excel",
        "Image": "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"
      }
    },
    "DataSources": {
      "0": {
        "Ident": "StiDataTableSource",
        "Name": "Tickets",
        "Alias": "Tickets",
        "Key": "44c90ad332434aba8f85707ebe4b735e",
        "Columns": {
          "0": {
            "Name": "GroupID",
            "Index": -1,
            "NameInSource": "GroupID",
            "Alias": "GroupID",
            "Type": "System.Double"
          },
          "1": {
            "Name": "In Processing",
            "Index": -1,
            "NameInSource": "In Processing",
            "Alias": "In Processing",
            "Type": "System.Double"
          },
          "2": {
            "Name": "Name",
            "Index": -1,
            "NameInSource": "Name",
            "Alias": "Name",
            "Type": "System.String"
          },
          "3": {
            "Name": "Resolved",
            "Index": -1,
            "NameInSource": "Resolved",
            "Alias": "Resolved",
            "Type": "System.Double"
          },
          "4": {
            "Name": "Returned",
            "Index": -1,
            "NameInSource": "Returned",
            "Alias": "Returned",
            "Type": "System.Double"
          },
          "5": {
            "Name": "State",
            "Index": -1,
            "NameInSource": "State",
            "Alias": "State",
            "Type": "System.String"
          },
          "6": {
            "Name": "Telephone",
            "Index": -1,
            "NameInSource": "Telephone",
            "Alias": "Telephone",
            "Type": "System.String"
          },
          "7": {
            "Name": "Total",
            "Index": -1,
            "NameInSource": "Total",
            "Alias": "Total",
            "Type": "System.Double"
          },
          "8": {
            "Name": "Tranferred",
            "Index": -1,
            "NameInSource": "Tranferred",
            "Alias": "Tranferred",
            "Type": "System.Double"
          }
        },
        "NameInSource": "Tickets.Tickets"
      }
    },
    "Databases": {
      "0": {
        "Ident": "StiExcelDatabase",
        "Name": "Tickets",
        "Alias": "Tickets",
        "PathData": "resource://Tickets"
      }
    }
  },
  "Pages": {
    "0": {
      "Ident": "StiDashboard",
      "Name": "Dashboard1",
      "Guid": "934960a4484546f693fccbf89acdb5f4",
      "Alias": "Tickets Statistics",
      "Brush": "solid:",
      "Components": {
        "0": {
          "Ident": "StiChartElement",
          "Name": "Chart1",
          "Guid": "86f4747f2d424b328ee35a215d41eae0",
          "ClientRectangle": "480,320,720,280",
          "Border": "All;211,212,213;;;",
          "Values": {
            "0": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Tickets.Resolved)",
              "SeriesType": "Bubble"
            }
          },
          "Arguments": {
            "0": {
              "Ident": "ArgumentChartMeter",
              "Expression": "Sum([Tickets.In Processing])"
            }
          },
          "Weights": {
            "0": {
              "Ident": "WeightChartMeter",
              "Expression": "Sum(Tickets.Tranferred)"
            }
          },
          "TopN": {
            "Mode": "None"
          },
          "DashboardInteraction": {
            "Ident": "Chart",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab",
            "AllowUserDrillDown": false
          },
          "Title": {
            "Text": "All Tickets in {MonthName(Today)}",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "Series": {
            "Ident": "SeriesChartMeter",
            "Expression": "Tickets.Name"
          },
          "ArgumentFormat": {
            "Ident": "StiGeneralFormatService"
          },
          "ValueFormat": {
            "Ident": "StiNumberFormatService",
            "NegativePattern": 1,
            "DecimalDigits": 0,
            "GroupSeparator": ",",
            "State": "DecimalDigits"
          },
          "Area": {
            "GridLinesHor": {
              "Color": "Transparent",
              "Visible": true
            },
            "GridLinesVert": {
              "Color": "Transparent"
            },
            "InterlacingHor": {
              "Color": "Transparent"
            },
            "InterlacingVert": {
              "Color": "Transparent"
            }
          }
        },
        "1": {
          "Ident": "StiTableElement",
          "Name": "Table1",
          "Guid": "7236ec1bcfdb40c3805063a42042b739",
          "ClientRectangle": "0,40,480,140",
          "Border": "All;211,212,213;;;",
          "Columns": {
            "0": {
              "Ident": "DimensionColumn",
              "Expression": "Tickets.Name",
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "1": {
              "Ident": "DataBarsColumn",
              "Expression": "Sum(Tickets.Resolved)",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "DecimalDigits": 0,
                "GroupSeparator": ",",
                "State": "DecimalDigits"
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              },
              "HorAlignment": "Right"
            },
            "2": {
              "Ident": "MeasureColumn",
              "Expression": "Sum(Tickets.Returned)",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "DecimalDigits": 0,
                "GroupSeparator": ",",
                "State": "DecimalDigits"
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "3": {
              "Ident": "MeasureColumn",
              "Expression": "Sum([Tickets.In Processing])",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "DecimalDigits": 0,
                "GroupSeparator": ",",
                "State": "DecimalDigits"
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "4": {
              "Ident": "MeasureColumn",
              "Expression": "Sum(Tickets.Total)",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ",",
                "State": "DecimalDigits, Abbreviation"
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            }
          },
          "HeaderFont": ";10;;",
          "Title": {
            "Text": "Tickets in {MonthName(Today)} by Specialist",
            "Visible": false,
            "Font": "Segoe UI;15.75;;",
            "HorAlignment": "Center"
          },
          "DashboardInteraction": {
            "Ident": "Table",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          }
        },
        "2": {
          "Ident": "StiProgressElement",
          "Name": "Progress1",
          "Guid": "59a7eae38c45466685132dd30f2cb81b",
          "ClientRectangle": "0,180,480,140",
          "Border": "All;211,212,213;;;",
          "TopN": {
            "Mode": "None"
          },
          "Value": {
            "Ident": "ValueProgressMeter",
            "Expression": "Sum(Tickets.Resolved)"
          },
          "Target": {
            "Ident": "TargetProgressMeter",
            "Expression": "Sum(Tickets.Total)"
          },
          "Series": {
            "Ident": "SeriesProgressMeter",
            "Expression": "Tickets.Name"
          },
          "Title": {
            "Text": "Resolved",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "Font": ";13;Bold;",
          "Mode": "DataBars",
          "ColorEach": true
        },
        "3": {
          "Ident": "StiProgressElement",
          "Name": "Progress2",
          "Guid": "e3bdf9b256984c72b7fe7b3cf37172af",
          "ClientRectangle": "0,320,480,140",
          "Border": "All;211,212,213;;;",
          "TopN": {
            "Mode": "None"
          },
          "Value": {
            "Ident": "ValueProgressMeter",
            "Expression": "Sum(Tickets.Returned)"
          },
          "Target": {
            "Ident": "TargetProgressMeter",
            "Expression": "Sum(Tickets.Total)"
          },
          "Series": {
            "Ident": "SeriesProgressMeter",
            "Expression": "Tickets.Name"
          },
          "Title": {
            "Text": "Returned",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "Font": ";13;Bold;",
          "Mode": "DataBars",
          "ColorEach": true
        },
        "4": {
          "Ident": "StiProgressElement",
          "Name": "Progress4",
          "Guid": "528dcbc5a71c4fbc9d776a955bdd0934",
          "ClientRectangle": "0,460,480,140",
          "Border": "All;211,212,213;;;",
          "TopN": {
            "Mode": "None"
          },
          "Value": {
            "Ident": "ValueProgressMeter",
            "Expression": "Sum([Tickets.In Processing])"
          },
          "Target": {
            "Ident": "TargetProgressMeter",
            "Expression": "Sum(Tickets.Total)"
          },
          "Series": {
            "Ident": "SeriesProgressMeter",
            "Expression": "Tickets.Name"
          },
          "Title": {
            "Text": "In Progress",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "Font": ";13;Bold;",
          "Mode": "DataBars",
          "ColorEach": true
        },
        "5": {
          "Ident": "StiRegionMapElement",
          "Name": "RegionMap1",
          "Guid": "e184f82a31f648e09323c50703d69551",
          "ClientRectangle": "480,40,720,280",
          "Border": ";;;;",
          "DashboardInteraction": {
            "Ident": "RegionMap",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          },
          "Title": {
            "Text": "Tickets by State",
            "Visible": false,
            "Font": "Segoe UI;15.75;;",
            "HorAlignment": "Center"
          },
          "KeyMeter": {
            "Ident": "KeyMapMeter",
            "Expression": "Tickets.State"
          },
          "NameMeter": {
            "Ident": "NameMapMeter",
            "Expression": "Tickets.State"
          },
          "ValueMeter": {
            "Ident": "ValueMapMeter",
            "Expression": "Tickets.Total"
          },
          "DataFrom": "DataColumns",
          "MapType": "Heatmap",
          "ShowValue": true,
          "ShortValue": true,
          "ShowName": "Short"
        },
        "6": {
          "Ident": "StiTextElement",
          "Name": "Text1",
          "Guid": "c391f5bbcf0043b0b8eaf9fdfc1b33d8",
          "ClientRectangle": "0,0,1200,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"36\"><text-align=\"Center\">Ticket Stats</text-align></font>",
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