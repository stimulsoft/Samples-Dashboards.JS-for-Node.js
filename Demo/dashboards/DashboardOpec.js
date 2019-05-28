var DashboardOpec = {
  "ReportVersion": "2019.3.1.0",
  "ReportGuid": "9b6e1fbfbc4d4023b0fe4335d3fdd7e3",
  "ReportName": "DashboardOpec",
  "ReportAlias": "DashboardOpec",
  "ReportCreated": "/Date(1458631671000+0300)/",
  "ReportChanged": "/Date(1558096889000+0300)/",
  "EngineVersion": "EngineV2",
  "CalculationMode": "Interpretation",
  "ReportUnit": "HundredthsOfInch",
  "PreviewSettings": 268435455,
  "Culture": "en-US",
  "Script": "using System;\r\nusing System.Drawing;\r\nusing System.Windows.Forms;\r\nusing System.Data;\r\nusing Stimulsoft.Controls;\r\nusing Stimulsoft.Base.Drawing;\r\nusing Stimulsoft.Report;\r\nusing Stimulsoft.Report.Dialogs;\r\nusing Stimulsoft.Report.Components;\r\n\r\nnamespace Reports\r\n{\r\n    public class Perfomance : Stimulsoft.Report.StiReport\r\n    {\r\n        public Perfomance()        {\r\n            this.InitializeComponent();\r\n        }\r\n\r\n        #region StiReport Designer generated code - do not modify\r\n\t\t#endregion StiReport Designer generated code - do not modify\r\n    }\r\n}\r\n",
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
        "Name": "Opec",
        "Alias": "Opec",
        "Type": "Xml",
        "Image": "AkTDG5qTX2wxApesAHfbbylH+/fP7CDN894MBWN4bT4VNuvcMMcAnHiZHLvS7JKdqz08kIYxCEKstmoT8RkG4qEViIh8DBL0X8yLZnmHca/CNWaQhnMeXqrie1Lprl/4jx1+R/RQFNm5C4iGd1xRnre7iUC5KrA1Wu1Kl8HDzKZ7Ff0mT8qfgiVLwA/Y+v5J1IczgFqC8uuvI0tGVCC84Hb1raCefn9oHboKA5XKi90r10bOhPvUqPhDW7E+jjrA1Bb3oXLl4LH7zeYDDEWn6fZNkAGVOE8xHIgj25MJYlX+6X6vg8/DdBJQyn8cQKFs4cnGXcEfY6/ZJpP6GnrIEMcDQ2dOggWanq4WVyOjHE0g0XWkOwRGKwiG3pQSibPwJxW5IONQAJScMr6q2hGXIlfW0qnZGQzKR45SMmZP8jivto6SBwc05ED6MCbSMrCI2xaqOi9lvH39yu5KJnrb2Gf/Z+wD/Gd2V3lbVpCuSZGmG4CHGetlGLsDYnkpodxKf98DyJDn9Z9Mum96CJOhi+5U9f7NFzqO7Hf9BFNQE9meLrHhEktwVY0Vn4RiFptFr+6b3wi2RLqyYuWQj3G/rsIKlB9GrHjtnbTmC3Hg5+Oecdj11mpVX/IWTQ2HMSzsc/dmyPjaJ8duy9ocngYL53EbU2uXCSyxel9A4i1VzYBmBQI1gkSPaZ53ZW1o1Mvc9l9dkAf22us86E2fDTjYGiNc0DK/OPSE0N9KC/MhWdiyQI6JdlPIXgJKlzKZj8WOlZeVtlfBoXfTKhdgGREspZiu8BeGHVqnvzBv3Ydac7KDJPE6lY+Pm3gBJtIRQHyQrixxK60L4pFCeg60nd0oGGYniaoIL/Mck15PCyOkypBnMBDZ3YL3cKAyUj+MHdmlmk7LYWDAUlLy1TFHVQH+yz8wdReWg4j8haiOHY5pqOcZMilvMbNSmhJqpbCL9c67mgH4tJ49+oFocR2XVLPT9hxriQTOoEDz1UVow5P2BLjP7qKDwrKPu3gSVyNLdMLOCeOVG/yeVHsnqbH4hkTkq4gS/Zuu8HzVPXoK3n10B+1UhH+r/e0vuzTHgq1TOjlX+Kf31XUVLI0ggKikL4KrZY+q8gA="
      }
    },
    "DataSources": {
      "0": {
        "Ident": "StiDataTableSource",
        "Name": "Opec",
        "Alias": "Opec",
        "Key": "1da441d432c04985ab1516cd056e8f38",
        "Columns": {
          "0": {
            "Name": "Iran",
            "Index": -1,
            "NameInSource": "Iran",
            "Alias": "Iran",
            "Type": "System.String"
          },
          "1": {
            "Name": "Iraq",
            "Index": -1,
            "NameInSource": "Iraq",
            "Alias": "Iraq",
            "Type": "System.String"
          },
          "2": {
            "Name": "Kuwait",
            "Index": -1,
            "NameInSource": "Kuwait",
            "Alias": "Kuwait",
            "Type": "System.String"
          },
          "3": {
            "Name": "Libya",
            "Index": -1,
            "NameInSource": "Libya",
            "Alias": "Libya",
            "Type": "System.String"
          },
          "4": {
            "Name": "Nigeria",
            "Index": -1,
            "NameInSource": "Nigeria",
            "Alias": "Nigeria",
            "Type": "System.String"
          },
          "5": {
            "Name": "Saudi Arabia",
            "Index": -1,
            "NameInSource": "Saudi Arabia",
            "Alias": "Saudi Arabia",
            "Type": "System.String"
          },
          "6": {
            "Name": "UAE",
            "Index": -1,
            "NameInSource": "UAE",
            "Alias": "UAE",
            "Type": "System.String"
          },
          "7": {
            "Name": "Venezuela",
            "Index": -1,
            "NameInSource": "Venezuela",
            "Alias": "Venezuela",
            "Type": "System.String"
          },
          "8": {
            "Name": "Year",
            "Index": -1,
            "NameInSource": "Year",
            "Alias": "Year",
            "Type": "System.String"
          }
        },
        "NameInSource": "Opec.Opec"
      }
    },
    "Databases": {
      "0": {
        "Ident": "StiXmlDatabase",
        "Name": "Opec",
        "Alias": "Opec",
        "PathData": "resource://Opec"
      }
    }
  },
  "Pages": {
    "0": {
      "Ident": "StiDashboard",
      "Name": "Dashboard1",
      "Guid": "5f20f570bcf2462292771eb4273fa7df",
      "Alias": "Opec",
      "Brush": "solid:",
      "Components": {
        "0": {
          "Ident": "StiTextElement",
          "Name": "Text1",
          "Guid": "ab3be7ef0aca40afa567681a3607f2c1",
          "ClientRectangle": "0,0,1200,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"36\"><text-align=\"Center\">OPEC</text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        },
        "1": {
          "Ident": "StiTableElement",
          "Name": "TableOpec",
          "Guid": "b9cf629747974c1f8b7e97e24e2b370b",
          "ClientRectangle": "0,40,1200,220",
          "Border": ";;;;",
          "Columns": {
            "0": {
              "Ident": "DimensionColumn",
              "Expression": "Opec.Year",
              "Label": "Year",
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "1": {
              "Ident": "DimensionColumn",
              "Expression": "Opec.Iran",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ","
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "2": {
              "Ident": "MeasureColumn",
              "Expression": "Sum(Opec.Iraq)",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ","
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
              "Expression": "Sum(Opec.Kuwait)",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ","
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
              "Expression": "Sum(Opec.Libya)",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ","
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "5": {
              "Ident": "MeasureColumn",
              "Expression": "Sum(Opec.Nigeria)",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ","
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "6": {
              "Ident": "MeasureColumn",
              "Expression": "Sum([Opec.Saudi Arabia])",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ","
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "7": {
              "Ident": "MeasureColumn",
              "Expression": "Sum(Opec.UAE)",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ","
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "8": {
              "Ident": "MeasureColumn",
              "Expression": "Sum(Opec.Venezuela)",
              "HorAlignment": "Right",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ","
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
            "Text": "Opec",
            "Visible": false
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
          "Ident": "StiChartElement",
          "Name": "Chart2",
          "Guid": "cd17efe037044e98a98854c7b7b62762",
          "ClientRectangle": "0,260,600,340",
          "Border": ";;;;",
          "Values": {
            "0": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Opec.Iran)",
              "SeriesType": "StackedColumn"
            },
            "1": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Opec.Iraq)",
              "SeriesType": "StackedColumn"
            },
            "2": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Opec.Kuwait)",
              "SeriesType": "StackedColumn"
            },
            "3": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Opec.Libya)",
              "SeriesType": "StackedColumn"
            }
          },
          "Arguments": {
            "0": {
              "Ident": "ArgumentChartMeter",
              "Expression": "Opec.Year"
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
            "Text": "Oil Production, thous. barrels per day",
            "Font": ";15.75;;",
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
        "3": {
          "Ident": "StiChartElement",
          "Name": "Chart1",
          "Guid": "7c98abba766a456b991e5ac7a7738f46",
          "ClientRectangle": "600,260,600,340",
          "Border": ";;;;",
          "Values": {
            "0": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum([Opec.Saudi Arabia])",
              "SeriesType": "StackedColumn"
            },
            "1": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Opec.Nigeria)",
              "SeriesType": "StackedColumn"
            },
            "2": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Opec.UAE)",
              "SeriesType": "StackedColumn"
            },
            "3": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Opec.Venezuela)",
              "SeriesType": "StackedColumn"
            }
          },
          "Arguments": {
            "0": {
              "Ident": "ArgumentChartMeter",
              "Expression": "Opec.Year"
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
            "Text": "Oil Production, thous. barrels per day",
            "Font": ";15.75;;",
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
        }
      },
      "Border": ";;2;;;;;solid:Black"
    }
  }
}