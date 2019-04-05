var DashboardSocialNetworksStatistics = {
  "ReportVersion": "2019.2.3.0",
  "ReportGuid": "4a6dae20f5244eb9a6e4bf1a5f496ac8",
  "ReportName": "DashboardSocialNetworksStatistics",
  "ReportAlias": "DashboardSocialNetworksStatistics",
  "ReportAuthor": "Stimulsoft",
  "ReportCreated": "/Date(1544125128000+0300)/",
  "ReportChanged": "/Date(1550126841000+0300)/",
  "EngineVersion": "EngineV2",
  "CalculationMode": "Interpretation",
  "ReportUnit": "Inches",
  "Script": "using System;\r\nusing System.Drawing;\r\nusing System.Windows.Forms;\r\nusing System.Data;\r\nusing Stimulsoft.Controls;\r\nusing Stimulsoft.Base.Drawing;\r\nusing Stimulsoft.Report;\r\nusing Stimulsoft.Report.Dialogs;\r\nusing Stimulsoft.Report.Components;\r\n\r\nnamespace Reports\r\n{\r\n    public class DashboardSocialNetworksStatistics : Stimulsoft.Report.StiReport\r\n    {\r\n        public DashboardSocialNetworksStatistics()        {\r\n            this.InitializeComponent();\r\n        }\r\n\r\n        #region StiReport Designer generated code - do not modify\r\n\t\t#endregion StiReport Designer generated code - do not modify\r\n    }\r\n}\r\n",
  "Styles": {
    "0": {
      "Ident": "StiChartStyle",
      "Name": "Sessions",
      "Border": ";;;;;;;solid:Black",
      "Brush": "solid:42,42,42",
      "ChartAreaBrush": "solid:42,42,42",
      "SeriesLabelsBrush": "solid:White",
      "SeriesLabelsBorderColor": "140,140,140",
      "LegendBrush": "solid:White",
      "LegendLabelsColor": "Magenta",
      "AxisTitleColor": "White",
      "AxisLineColor": "White",
      "AxisLabelsColor": "White",
      "MarkerVisible": false,
      "InterlacingHorBrush": "solid:10,155,155,155",
      "InterlacingVertBrush": "solid:10,155,155,155",
      "GridLinesHorColor": "Transparent",
      "StyleColors": {
        "0": "52,152,219",
        "1": "68,114,196",
        "2": "255,192,0",
        "3": "67,104,43",
        "4": "38,68,120",
        "5": "153,115,0"
      }
    },
    "1": {
      "Ident": "StiGaugeStyle",
      "Name": "Page_View",
      "Brush": "solid:42,42,42",
      "TickMarkMajorBrush": "solid:153,0,0",
      "TickMarkMajorBorder": "solid:11,172,69",
      "TickMarkMinorBrush": "solid:68,114,196",
      "TickMarkMinorBorder": "solid:68,114,196",
      "TickLabelMajorTextBrush": "solid:51,71,91",
      "TickLabelMajorFont": ";10;;",
      "TickLabelMinorTextBrush": "solid:51,71,91",
      "TickLabelMinorFont": ";10;;",
      "MarkerBrush": "solid:112,173,71",
      "LinearBarBrush": "solid:68,114,196",
      "LinearBarBorderBrush": "empty",
      "LinearBarEmptyBrush": "empty",
      "LinearBarEmptyBorderBrush": "empty",
      "RadialBarBrush": "solid:52,152,219",
      "RadialBarBorderBrush": "empty",
      "RadialBarEmptyBrush": "solid:239,113,122",
      "RadialBarEmptyBorderBrush": "empty",
      "NeedleBrush": "solid:White",
      "NeedleBorderBrush": "empty",
      "NeedleCapBrush": "solid:White",
      "NeedleCapBorderBrush": "solid:255,192,0"
    },
    "2": {
      "Ident": "StiIndicatorStyle",
      "Name": "Returing_Visitors",
      "BackColor": "42,42,42",
      "GlyphColor": "112,179,124",
      "ForeColor": "White"
    },
    "3": {
      "Ident": "StiMapStyle",
      "Name": "Map_of_World",
      "IndividualColor": "52,152,219",
      "Colors": {
        "0": "52,152,219",
        "1": "68,114,196",
        "2": "255,192,0",
        "3": "67,104,43",
        "4": "253,106,55",
        "5": "153,115,0"
      },
      "HeatmapColors": {
        "0": "52,152,219",
        "1": "Yellow"
      },
      "BackColor": "42,42,42",
      "BorderColor": "70,127,164",
      "LabelShadowForeground": "White",
      "LabelForeground": "180,251,251,251"
    },
    "4": {
      "Ident": "StiChartStyle",
      "Name": "Users",
      "Border": ";;;;;;;solid:Black",
      "Brush": "solid:42,42,42",
      "ChartAreaBrush": "solid:42,42,42",
      "ChartAreaBorderColor": "Transparent",
      "SeriesLabelsBrush": "solid:White",
      "SeriesLabelsBorderColor": "White",
      "TrendLineColor": "Red",
      "LegendBrush": "solid:42,42,42",
      "LegendLabelsColor": "White",
      "LegendBorderColor": "Transparent",
      "LegendTitleColor": "White",
      "AxisTitleColor": "White",
      "AxisLineColor": "White",
      "AxisLabelsColor": "White",
      "InterlacingHorBrush": "solid:10,155,155,155",
      "InterlacingVertBrush": "solid:10,155,155,155",
      "StyleColors": {
        "0": "52,152,219",
        "1": "239,113,122",
        "2": "255,188,56",
        "3": "67,104,43",
        "4": "38,68,120",
        "5": "153,115,0"
      },
      "BasicStyleColor": "White"
    },
    "5": {
      "Ident": "StiIndicatorStyle",
      "Name": "Social",
      "BackColor": "42,42,42",
      "ForeColor": "White"
    },
    "6": {
      "Ident": "StiProgressStyle",
      "Name": "New_Users",
      "BandColor": "Aqua",
      "SeriesColors": {
        "0": "52,152,219",
        "1": "239,113,122",
        "2": "109,203,179",
        "3": "242,129,97",
        "4": "252,205,27"
      },
      "ForeColor": "White",
      "BackColor": "42,42,42"
    },
    "7": {
      "Ident": "StiIndicatorStyle",
      "Name": "Bounce_Rate",
      "BackColor": "42,42,42",
      "GlyphColor": "177,111,37",
      "ForeColor": "White"
    }
  },
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
        "Name": "analytics",
        "Alias": "analytics",
        "Type": "Excel",
        "Image": "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"
      },
      "1": {
        "Name": "youtube",
        "Alias": "youtube",
        "Image": "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"
      },
      "2": {
        "Name": "facebook",
        "Alias": "facebook",
        "Image": "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"
      },
      "3": {
        "Name": "twitter",
        "Alias": "twitter",
        "Image": "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"
      }
    },
    "DataSources": {
      "0": {
        "Ident": "StiDataTableSource",
        "Name": "SiteStatistics",
        "Alias": "SiteStatistics",
        "Columns": {
          "0": {
            "Name": "Month",
            "Index": -1,
            "NameInSource": "Month",
            "Alias": "Month",
            "Type": "System.String"
          },
          "1": {
            "Name": "WeekID",
            "Index": -1,
            "NameInSource": "WeekID",
            "Alias": "WeekID",
            "Type": "System.Double"
          },
          "2": {
            "Name": "Week",
            "Index": -1,
            "NameInSource": "Week",
            "Alias": "Week",
            "Type": "System.String"
          },
          "3": {
            "Name": "Date",
            "Index": -1,
            "NameInSource": "Date",
            "Alias": "Date",
            "Type": "System.DateTime"
          },
          "4": {
            "Name": "Users",
            "Index": -1,
            "NameInSource": "Users",
            "Alias": "Users",
            "Type": "System.Double"
          },
          "5": {
            "Name": "New Users",
            "Index": -1,
            "NameInSource": "New Users",
            "Alias": "New Users",
            "Type": "System.Double"
          },
          "6": {
            "Name": "Returning Visitors",
            "Index": -1,
            "NameInSource": "Returning Visitors",
            "Alias": "Returning Visitors",
            "Type": "System.Double"
          },
          "7": {
            "Name": "Sessions",
            "Index": -1,
            "NameInSource": "Sessions",
            "Alias": "Sessions",
            "Type": "System.Double"
          },
          "8": {
            "Name": "Number of Sessions per User",
            "Index": -1,
            "NameInSource": "Number of Sessions per User",
            "Alias": "Number of Sessions per User",
            "Type": "System.Double"
          },
          "9": {
            "Name": "Pageview",
            "Index": -1,
            "NameInSource": "Pageview",
            "Alias": "Pageview",
            "Type": "System.Double"
          },
          "10": {
            "Name": "Page / Session",
            "Index": -1,
            "NameInSource": "Page / Session",
            "Alias": "Page / Session",
            "Type": "System.Double"
          },
          "11": {
            "Name": "Avg. Session Duration",
            "Index": -1,
            "NameInSource": "Avg. Session Duration",
            "Alias": "Avg. Session Duration",
            "Type": "System.Double"
          },
          "12": {
            "Name": "Bounce Rate",
            "Index": -1,
            "NameInSource": "Bounce Rate",
            "Alias": "Bounce Rate",
            "Type": "System.Double"
          },
          "13": {
            "Name": "Subscribers",
            "Index": -1,
            "NameInSource": "Subscribers",
            "Alias": "Subscribers",
            "Type": "System.Double"
          },
          "14": {
            "Name": "Likes",
            "Index": -1,
            "NameInSource": "Likes",
            "Alias": "Likes",
            "Type": "System.Double"
          },
          "15": {
            "Name": "Followers",
            "Index": -1,
            "NameInSource": "Followers",
            "Alias": "Followers",
            "Type": "System.Double"
          },
          "16": {
            "Name": "Country",
            "Index": -1,
            "NameInSource": "Country",
            "Alias": "Country",
            "Type": "System.String"
          }
        },
        "NameInSource": "analytics.SiteStatistics"
      }
    },
    "Databases": {
      "0": {
        "Ident": "StiExcelDatabase",
        "Name": "analytics",
        "Alias": "analytics",
        "PathData": "resource://analytics"
      }
    }
  },
  "Pages": {
    "0": {
      "Ident": "StiDashboard",
      "Name": "DashboardSocialNetworksStatistics",
      "Guid": "3bef7c0fcd1e45b98401739c7352540c",
      "Alias": "Social Networks Statistics",
      "Brush": "solid:",
      "Components": {
        "0": {
          "Ident": "StiRegionMapElement",
          "Name": "RegionMap1",
          "Guid": "815f91746a774a2a9c74dcd9a6018871",
          "ClientRectangle": "360,300,500,300",
          "Border": ";;;;",
          "Title": {
            "Text": "NEW USERS",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "KeyMeter": {
            "Ident": "KeyMapMeter",
            "Expression": "SiteStatistics.Country",
            "Label": "Country"
          },
          "ValueMeter": {
            "Ident": "ValueMapMeter",
            "Expression": "Sum(SiteStatistics.NewUsers)",
            "Label": "New Users"
          },
          "MapID": "World",
          "DataFrom": "DataColumns",
          "ShowValue": true,
          "ShortValue": true,
          "ShowName": "Short",
          "Style": "Custom",
          "CustomStyleName": "Map_of_World"
        },
        "1": {
          "Ident": "StiChartElement",
          "Name": "Chart1",
          "Guid": "ee28d5ad229244bbabe19f5ec1e61be8",
          "ClientRectangle": "360,0,500,300",
          "Border": ";;;;",
          "Values": {
            "0": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(SiteStatistics.Users)",
              "Label": "Users"
            },
            "1": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(SiteStatistics.NewUsers)",
              "Label": "New Users"
            }
          },
          "Arguments": {
            "0": {
              "Ident": "ArgumentChartMeter",
              "Expression": "SiteStatistics.Date",
              "Label": "Date"
            }
          },
          "TopN": {
            "Mode": "None"
          },
          "DashboardInteraction": {
            "Ident": "Chart",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          },
          "Title": {
            "Text": "USERS",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "ArgumentFormat": {
            "Ident": "StiGeneralFormatService"
          },
          "ValueFormat": {
            "Ident": "StiGeneralFormatService"
          },
          "XAxis": {
            "Labels": {
              "Color": "White"
            },
            "Title": {
              "Color": "White"
            }
          },
          "YAxis": {
            "Labels": {
              "Color": "White"
            },
            "Title": {
              "Color": "White"
            }
          },
          "Legend": {
            "Labels": {
              "Color": "White"
            }
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
          },
          "Style": "Custom",
          "CustomStyleName": "Users"
        },
        "2": {
          "Ident": "StiGaugeElement",
          "Name": "Gauge1",
          "Guid": "5596abd0e4fb410e96573c45c8cb737d",
          "ClientRectangle": "860,400,340,200",
          "Border": ";;;;",
          "Type": "HalfCircular",
          "Value": {
            "Ident": "ValueGaugeMeter",
            "Expression": "Sum(SiteStatistics.Pageview)",
            "Label": "Pageview"
          },
          "Title": {
            "Text": "PAGE VIEWS",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "Style": "Custom",
          "CustomStyleName": "Page_View"
        },
        "3": {
          "Ident": "StiIndicatorElement",
          "Name": "Indicator1",
          "Guid": "8e30ce4e8fe94229bf448476529c803d",
          "ClientRectangle": "860,200,340,200",
          "Border": ";;;;",
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
            "Expression": "Sum(SiteStatistics.ReturningVisitors)",
            "Label": "Returning Visitors"
          },
          "Title": {
            "Text": "RETURING USERS",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "Font": ";13;;",
          "Style": "Custom",
          "CustomStyleName": "Returing_Visitors",
          "Icon": "ManWoman"
        },
        "4": {
          "Ident": "StiChartElement",
          "Name": "Chart2",
          "Guid": "5d2082b76ac141679600fb1dfbe0b72a",
          "ClientRectangle": "860,0,340,200",
          "Border": ";;;;",
          "Values": {
            "0": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum([SiteStatistics.Avg.SessionDuration])",
              "Label": "Avg. Session Duration",
              "SeriesType": "SplineArea"
            }
          },
          "Arguments": {
            "0": {
              "Ident": "ArgumentChartMeter",
              "Expression": "SiteStatistics.Date",
              "Label": "Date"
            }
          },
          "TopN": {
            "Mode": "None"
          },
          "DashboardInteraction": {
            "Ident": "Chart",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          },
          "Title": {
            "Text": "AVERAGE SESSION DURATION",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "ArgumentFormat": {
            "Ident": "StiDateFormatService",
            "StringFormat": "M.dd"
          },
          "ValueFormat": {
            "Ident": "StiGeneralFormatService"
          },
          "XAxis": {
            "Title": {
              "Color": "White",
              "Visible": false
            }
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
          },
          "Style": "Custom",
          "CustomStyleName": "Sessions"
        },
        "5": {
          "Ident": "StiProgressElement",
          "Name": "Progress1",
          "Guid": "8fb6a5332d064d29ab7ebdcf7879472d",
          "ClientRectangle": "0,200,360,200",
          "Border": ";;;;",
          "TopN": {
            "Mode": "None"
          },
          "Value": {
            "Ident": "ValueProgressMeter",
            "Expression": "Sum(SiteStatistics.NewUsers)",
            "Label": "New Users"
          },
          "Target": {
            "Ident": "TargetProgressMeter",
            "Expression": "Sum(SiteStatistics.Users)",
            "Label": "Users"
          },
          "Series": {
            "Ident": "SeriesProgressMeter",
            "Expression": "SiteStatistics.Month",
            "Label": "Month"
          },
          "Title": {
            "Text": "GROWTH USERS",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "Font": ";13;;",
          "Style": "Custom",
          "CustomStyleName": "New_Users",
          "ColorEach": true
        },
        "6": {
          "Ident": "StiIndicatorElement",
          "Name": "Indicator2",
          "Guid": "5a25e90bace146959b33f1c42366d586",
          "ClientRectangle": "0,0,120,200",
          "Border": ";;;;",
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
            "Expression": "Sum(SiteStatistics.Subscribers)",
            "Label": "Subscribers"
          },
          "Title": {
            "Text": "YOUTUBE",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "GlyphColor": "231,76,60",
          "Font": ";13;;",
          "Style": "Custom",
          "CustomStyleName": "Social",
          "Icon": "CircleCheck"
        },
        "7": {
          "Ident": "StiIndicatorElement",
          "Name": "Indicator3",
          "Guid": "0184c4818de946e4ad8045f5beb35d7a",
          "ClientRectangle": "120,0,120,200",
          "Border": ";;;;",
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
            "Expression": "Sum(SiteStatistics.Likes)",
            "Label": "Likes"
          },
          "Title": {
            "Text": "FACEBOOK",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "GlyphColor": "80,101,161",
          "Font": ";13;;",
          "Style": "Custom",
          "CustomStyleName": "Social",
          "Icon": "Earth"
        },
        "8": {
          "Ident": "StiIndicatorElement",
          "Name": "Indicator4",
          "Guid": "3f420ac622124f41b3890b7173963969",
          "ClientRectangle": "240,0,120,200",
          "Border": ";;;;",
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
            "Expression": "Sum(SiteStatistics.Followers)",
            "Label": "Followers"
          },
          "Title": {
            "Text": "TWITTER",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "GlyphColor": "41,128,185",
          "Font": ";13;;",
          "Style": "Custom",
          "CustomStyleName": "Social",
          "Icon": "Check"
        },
        "9": {
          "Ident": "StiImageElement",
          "Name": "Image1",
          "Guid": "902791e5fa524a869ac429ebc4646577",
          "ClientRectangle": "0,40,120,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "BackColor": "42,42,42",
          "ImageHyperlink": "resource://youtube",
          "Title": {
            "Text": "Image",
            "Visible": false
          }
        },
        "10": {
          "Ident": "StiImageElement",
          "Name": "Image2",
          "Guid": "8eda75294f8a4c6e835bdce2e0fe8ba1",
          "ClientRectangle": "120,40,120,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "BackColor": "42,42,42",
          "ImageHyperlink": "resource://facebook",
          "Title": {
            "Text": "Image",
            "Visible": false
          }
        },
        "11": {
          "Ident": "StiImageElement",
          "Name": "Image3",
          "Guid": "e7b6baa340924d26b71715606d72c7fe",
          "ClientRectangle": "240,40,120,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "BackColor": "42,42,42",
          "ImageHyperlink": "resource://twitter",
          "Title": {
            "Text": "Image",
            "Visible": false
          }
        },
        "12": {
          "Ident": "StiIndicatorElement",
          "Name": "Indicator5",
          "Guid": "1dc48503a62440638194de197b8c43cd",
          "ClientRectangle": "0,400,360,200",
          "Border": ";;;;",
          "TopN": {
            "Mode": "None"
          },
          "TextFormat": {
            "Ident": "StiPercentageFormatService",
            "NegativePattern": 1,
            "GroupSeparator": ",",
            "PositivePattern": 1,
            "Symbol": "%"
          },
          "Value": {
            "Ident": "ValueIndicatorMeter",
            "Expression": "Median(SiteStatistics.BounceRate/100)",
            "Label": "Bounce Rate"
          },
          "Title": {
            "Text": "BOUNCE RATE",
            "ForeColor": "White",
            "BackColor": "148,148,148",
            "Font": "Arial Narrow;15.75;Bold;",
            "HorAlignment": "Center"
          },
          "Font": ";13;;",
          "Style": "Custom",
          "CustomStyleName": "Bounce_Rate"
        },
        "13": {
          "Ident": "StiTextElement",
          "Name": "Text1",
          "Guid": "1eb91c39728c41d6b91940e36772e110",
          "ClientRectangle": "0,140,120,60",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "BackColor": "42,42,42",
          "Text": "<font face=\"Arial\" size=\"16\"><text-align=\"Center\"><b><font-color=\"White\">Subscribers</font-color></b></text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        },
        "14": {
          "Ident": "StiTextElement",
          "Name": "Text2",
          "Guid": "c7f0d5e734554211ad671fdea249fb10",
          "ClientRectangle": "120,140,120,60",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "BackColor": "42,42,42",
          "Text": "<font face=\"Arial\" size=\"16\"><text-align=\"Center\"><b><font-color=\"White\">Likes</font-color></b></text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        },
        "15": {
          "Ident": "StiTextElement",
          "Name": "Text3",
          "Guid": "7a9e8bc8dd82429b89f24c31de74671b",
          "ClientRectangle": "240,140,120,60",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "BackColor": "42,42,42",
          "Text": "<font face=\"Arial\" size=\"16\"><text-align=\"Center\"><b><font-color=\"White\">Followers</font-color></b></text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        }
      },
      "Style": "SlateGray",
      "Border": ";;2;;;;;solid:Black"
    }
  }
}