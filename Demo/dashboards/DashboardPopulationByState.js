var DashboardPopulationByState = {
  "ReportVersion": "2019.3.1.0",
  "ReportGuid": "b1a87df572f144d4bfa28e6135d270cd",
  "ReportName": "DashboardPopulationByState",
  "ReportAlias": "DashboardPopulationByState",
  "ReportAuthor": "Stimulsoft",
  "ReportCreated": "/Date(1535955486000+0300)/",
  "ReportChanged": "/Date(1556307121000+0300)/",
  "EngineVersion": "EngineV2",
  "CalculationMode": "Interpretation",
  "ReportUnit": "Inches",
  "Script": "using System;\r\nusing System.Drawing;\r\nusing System.Windows.Forms;\r\nusing System.Data;\r\nusing Stimulsoft.Controls;\r\nusing Stimulsoft.Base.Drawing;\r\nusing Stimulsoft.Report;\r\nusing Stimulsoft.Report.Dialogs;\r\nusing Stimulsoft.Report.Components;\r\n\r\nnamespace Reports\r\n{\r\n    public class DashboardPopulationByState : Stimulsoft.Report.StiReport\r\n    {\r\n        public DashboardPopulationByState()        {\r\n            this.InitializeComponent();\r\n        }\r\n\r\n        #region StiReport Designer generated code - do not modify\r\n\t\t#endregion StiReport Designer generated code - do not modify\r\n    }\r\n}\r\n",
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
        "Name": "Population_by_States",
        "Alias": "Population_by_States",
        "Type": "Excel",
        "Image": "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"
      }
    },
    "DataSources": {
      "0": {
        "Ident": "StiDataTableSource",
        "Name": "Cities",
        "Alias": "Cities",
        "Key": "79d490492c15476db4eed6568cadb67d",
        "Columns": {
          "0": {
            "Name": "City_ID",
            "Index": -1,
            "NameInSource": "City_ID",
            "Alias": "City ID",
            "Type": "System.Double"
          },
          "1": {
            "Name": "State_ID",
            "Index": -1,
            "NameInSource": "State_ID",
            "Alias": "State ID",
            "Type": "System.Double"
          },
          "2": {
            "Name": "States",
            "Index": -1,
            "NameInSource": "States",
            "Alias": "States",
            "Type": "System.String"
          },
          "3": {
            "Name": "City",
            "Index": -1,
            "NameInSource": "City",
            "Alias": "City",
            "Type": "System.String"
          },
          "4": {
            "Name": "2016",
            "Index": -1,
            "NameInSource": "2016",
            "Alias": "2016",
            "Type": "System.Double"
          },
          "5": {
            "Name": "2018",
            "Index": -1,
            "NameInSource": "2018",
            "Alias": "2018",
            "Type": "System.Double"
          },
          "6": {
            "Name": "Growth",
            "Index": -1,
            "NameInSource": "Growth",
            "Alias": "Growth",
            "Type": "System.Double"
          }
        },
        "NameInSource": "Population_by_States.Cities"
      }
    },
    "Databases": {
      "0": {
        "Ident": "StiExcelDatabase",
        "Name": "Population_by_States",
        "Alias": "Population by States",
        "PathData": "resource://Population_by_States"
      }
    }
  },
  "Pages": {
    "0": {
      "Ident": "StiDashboard",
      "Name": "DashboardPopulationByState",
      "Guid": "79def813a4b14aaa8a82b708f15e1c76",
      "Alias": "Population by State",
      "Brush": "solid:",
      "Components": {
        "0": {
          "Ident": "StiRegionMapElement",
          "Name": "RegionMap1",
          "Guid": "fd8c2102513a41d3ad559cad05ce82df",
          "ClientRectangle": "0,40,600,320",
          "Border": ";;;;",
          "DashboardInteraction": {
            "Ident": "RegionMap",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          },
          "Title": {
            "Text": "Population Growth",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "KeyMeter": {
            "Ident": "KeyMapMeter",
            "Expression": "Cities.States"
          },
          "NameMeter": {
            "Ident": "NameMapMeter",
            "Expression": "Cities.States"
          },
          "ValueMeter": {
            "Ident": "ValueMapMeter",
            "Expression": "Cities.Growth"
          },
          "DataFrom": "DataColumns",
          "MapType": "Heatmap",
          "ShowValue": true,
          "ShortValue": true,
          "ShowName": "Short"
        },
        "1": {
          "Ident": "StiTableElement",
          "Name": "TableCities",
          "Guid": "b26110b6e79645fabfbb5abf36945be1",
          "ClientRectangle": "0,360,600,240",
          "Border": ";;;;",
          "Columns": {
            "0": {
              "Ident": "DimensionColumn",
              "Expression": "Cities.States",
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "1": {
              "Ident": "DimensionColumn",
              "Expression": "Cities.City",
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "2": {
              "Ident": "MeasureColumn",
              "Expression": "Sum([Cities.2016])",
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
            },
            "3": {
              "Ident": "MeasureColumn",
              "Expression": "Sum([Cities.2018])",
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
            },
            "4": {
              "Ident": "IndicatorColumn",
              "Expression": "Sum(Cities.Growth)",
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
          "UserSorts": {
            "0": {
              "Key": "c8676770672a4e718a13c55783d6ec6d"
            }
          },
          "HeaderFont": ";10;;",
          "Title": {
            "Text": "Population Growth by City",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "DashboardInteraction": {
            "Ident": "Table",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          },
          "SizeMode": "Fit"
        },
        "2": {
          "Ident": "StiPivotTableElement",
          "Name": "PivotTable1",
          "Guid": "29942ab614a1495d83640db24af5b5a6",
          "ClientRectangle": "600,360,600,240",
          "Border": ";;;;",
          "Columns": {
            "0": {
              "Ident": "PivotColumn",
              "Expression": "Cities.States",
              "HorAlignment": "Left",
              "TopN": {
                "Mode": "None"
              }
            }
          },
          "Rows": {
            "0": {
              "Ident": "PivotRow",
              "Expression": "Cities.City",
              "TopN": {
                "Mode": "None"
              }
            }
          },
          "Summaries": {
            "0": {
              "Ident": "PivotSummary",
              "Expression": "Sum([Cities.2016])",
              "HorAlignment": "Left",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ",",
                "State": "DecimalDigits, Abbreviation"
              }
            },
            "1": {
              "Ident": "PivotSummary",
              "Expression": "Sum([Cities.2018])",
              "HorAlignment": "Left",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ",",
                "State": "DecimalDigits, Abbreviation"
              }
            }
          },
          "Title": {
            "Text": "Population Growth by State in 2016 and 2018",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          }
        },
        "3": {
          "Ident": "StiChartElement",
          "Name": "Chart1",
          "Guid": "fb0d50adf1264e44b72ea4f795db81e4",
          "ClientRectangle": "600,40,600,320",
          "Border": ";;;;",
          "Values": {
            "0": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum([Cities.2016])",
              "SeriesType": "StackedColumn"
            },
            "1": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum([Cities.2018])",
              "SeriesType": "StackedColumn"
            }
          },
          "Arguments": {
            "0": {
              "Ident": "ArgumentChartMeter",
              "Expression": "Cities.City"
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
            "Text": "Population Growth in 2016 and 2018",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "ArgumentFormat": {
            "Ident": "StiGeneralFormatService"
          },
          "ValueFormat": {
            "Ident": "StiNumberFormatService",
            "NegativePattern": 1,
            "DecimalDigits": 0,
            "GroupSeparator": ",",
            "State": "DecimalDigits, Abbreviation"
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
        "4": {
          "Ident": "StiTextElement",
          "Name": "Text1",
          "Guid": "3f7a700c20a44448851df5556bd4e7eb",
          "ClientRectangle": "0,0,1200,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"36\"><text-align=\"Center\">Population by State</text-align></font>",
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