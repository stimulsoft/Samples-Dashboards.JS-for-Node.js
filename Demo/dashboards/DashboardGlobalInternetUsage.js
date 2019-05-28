var DashboardGlobalInternetUsage = {
  "ReportVersion": "2019.3.1.0",
  "ReportGuid": "d1ffd1449767488caf52b4c45b639840",
  "ReportName": "DashboardGlobalInternetUsage.mrt",
  "ReportAlias": "DashboardGlobalInternetUsage.mrt",
  "ReportAuthor": "Stimulsoft",
  "ReportCreated": "/Date(1535714385000+0300)/",
  "ReportChanged": "/Date(1556306949000+0300)/",
  "EngineVersion": "EngineV2",
  "CalculationMode": "Interpretation",
  "ReportUnit": "Inches",
  "Script": "using System;\r\nusing System.Drawing;\r\nusing System.Windows.Forms;\r\nusing System.Data;\r\nusing Stimulsoft.Controls;\r\nusing Stimulsoft.Base.Drawing;\r\nusing Stimulsoft.Report;\r\nusing Stimulsoft.Report.Dialogs;\r\nusing Stimulsoft.Report.Components;\r\n\r\nnamespace Reports\r\n{\r\n    public class DashboardGlobalInternetUsage_mrt : Stimulsoft.Report.StiReport\r\n    {\r\n        public DashboardGlobalInternetUsage_mrt()        {\r\n            this.InitializeComponent();\r\n        }\r\n\r\n        #region StiReport Designer generated code - do not modify\r\n\t\t#endregion StiReport Designer generated code - do not modify\r\n    }\r\n}\r\n",
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
        "Name": "Countries-by-continent",
        "Alias": "Countries-by-continent",
        "Type": "Excel",
        "Image": "0NCwTruQgPvFyr/0b9u4PnbpQ+7F8M+TmQtPM8ghvWi2XrYp9Jckmn9kJZSmOcxUQi3OEQchm+xd7qWEYoDiKZ6h4APhqFt+CdvCHP/a5E976Rpckx9FZqJWc1Ahuxw3brtKhchFWGb1JYCo/z3OEBYGAIsE4gdTSk7YIetBLwK0nQznFYZnqjCwkkP8hOfrmHIcT47mTwxfOxHUGTql0sxavPNV3H31yzu/DRjwGX391wEQCzP88sjzBGY7YuVUMJiLhToCSU7Z5Z9Xv0ikhfqY/AEPrDv7+q90LJlu3PrTjHskqoFrhoXFEIVB29tFLkteKbv8Qk8hJeCKXwINFa8LdSCNHoKTTpyow2p0dEnv7hVGI4Yxp59mLkQqxhRnVsI/PX4yEGtxxzUDBBEeb3uNT8ePfCshWHB7CZIh/vxmbqEcmiLsEeUBwy//OG4DHp2a8kppEpnP6P+bvI1sbr/vuinlXraGcXJc9XYVm7/wAKYq76o0rh9hfVutPT+B/DNoQUmbNPtizAL6fy7K9ddn6L7RpAy17vjQQpDxK7K+HcMK2AsUwbgrV7INmJaX7fc7NC2MFU60p7EM73K5D27jj3OsiJ1g1sBDGYE9eXADBY102zI17IYLYt+eOMWH1Yw2fm1s7BQnawl921B635RJ13Z6+fc9nM2hZA+6EqGM5GvnuGG82Co0uQxHsYQvDtLeNoCSppN1ssFOMOsmkpoZqruEbLvYNhKBMgaqaPu1X/4xNabuBTJe6nA5wMe7HZs6M0J9GdaAhNYL9qrAKspE9jpXTmFr5tMLHOvX5URZQggMrWhCQ6jeEzGVKSWs3Y3WbTA8++aHSV9yEZFXMNhQfmHj68gEzqgFGRPVw3Y+9VRpvRc6P2VotL4Qf1PFtqZsJpyRkt9Pee7NS66RJ4OmmleqFijEAPQjbcKvovt66v+DKM25YDn00g0Y3nzwq2zaC5wzTpNzQT7vETusCTKHGNGBsZfrmMula+3mirnOj3shH1i8KnkurROD+CJ9IqEXgEfgYT9ItJVOJ4lDwW7ElkhCJNQUuGHTbbe9XiNa4rX5DA3WWD5laC0aYEnfmTsdFJYRvpK8SFMsL5pC0uU55JIpnzd9Xmt9XsLuutBoCu4wYbaJn4Abvt0LAG1AH6zhTcvEy+fhF77ZLIMGb+tNscaE1kvcWoZr5kOLIoKPpQzhjSzKeob5iXmDWkFb2EjXErUC4pYTX3pkTJv8NRzTFLPCGQt81eNnlBa79IHBAMVL4Z7r9bAHnyIvj/MmFDcudHyEhLxI3oiOkETgIrbnep+MHNP8Nx5jSBRGiIfwyUZkP3TNH675bMAtnXrYAq3q9i1za9r+tSLVlPZinmGZ/edka3qT8amWFro2CViM5czcrOCvhMxXJE2UxYyWXdQtpIXwWtD1sjCKt5M/QTdxHY92Zo+x7AJSF8aZU79qFZfVTlT6IOpGzDHWhIQxhbemxA9TLTI33BqNfxJvNqlAO3z7GWWjhqmUorpmtIAu+z6cY1nmLM5REAGv/B6xXWMUlLZni8lNgPgIwz3yy7cpVXbgA5VWU+dF9oAea/woqTYljh+ZmtkIYrlUu52xTOGaSJpt747+vHhmm8H2EknYMSP9xiVUZ8biRcWyeA6Iuez+HG/qTcgw3+Yw+K4TQu/H9s4cfDcTKKBj5rc5baa9azTVKj9cR4RgxJAcRPoiKDY7QXQjCPrjjyFtXxFiDP3gduVxkZ8/aPHgV8aJgOFivKYswdZaoHg6n+dMtYDDC34uqOsrb9wPJRdG7G6GweLcuc3zlwqPxR0IXrS6his3/mlMcuiSk6t0gHoa9dxwa4rgBQN+d2/ydBJMfWspsAAmVvkEmzePllgbrTKgBLdVRabSJzlPizzrEJCONMy35f+Hvy13+mB1I183W9A4RLBUpfB3vUTDUeqQkbswRPIv5/ECyU6lU3z17UiPxB9aOfzNGA88CJe0DhangpqwkaaHhjYGFFlzgKxVw4VQK5prJbSuMLJ6XZyTPpbOX9hFvF3SqwGGR3ih13Jt0tBOoMrZDzjv4BMtxy8G0/WmBBg2DkV4+8p0MRl3s3Lukwuf15tO/41M+eecGbIeAlSvzis+8g+C7iDBKraFMoY1gwHAEqnWtxjPjuPj4yAJF9uv9o26YD5GMwMXsXHdwesOf/p6MS9VHlcHzUpD7W7F/zq4dRxr1UCfpMJAjCCFQ+LEe/8J5+C7fMaiNc1qkAipZem6iAQzoCki2LKDhJVHdVtQXH6uV2giLVbepXoebtADPkZlJWQ8eE/fksIW0YGVCwgm6Y8WFg0DHm9WWlw7TJk9hxwlTJgbz9ebrbEFSgdy+uqq/mDdGQPHZgrmdBtkIW+TZLIi7q0XSN5FHg0vLs8vlcvzQc45oiMkOpV2hoPWv2B8bFgF6GXWf0kO1XnFc2KyVhF7QfIxTR/kaKehyqYZSecs++KQMD3Dk7pgcIXqhzEnDxWHxRZ0UtoWWM5hK2UiXx2yQLsZl7/nsGm0ch8pLSsAYxZGRI0N4f8DiSARVQjlXIvpowXN4O2MkBuv7SxIeuA1SnEQN1P/8XY3TrDKzpvdiJ1OIw13SpMbd8daymHCYz+6MLuBveM0eFeO26lAUcBnm2fqMCTsHs530WY+nVqhtj/s9jsF6F+YxiWztAmjr33fZpUwEiiEEE/3FAf8ah4w9srEsKzXHxfxmv6U6FYVwJBnNPXTm/kqC6J2IrIErALBhduWVmbkfXn4A05AR4/pk9Ev0vncH1Mw1uVzq2TUnPXz7EWyaG/l1V6kFJuwejfQgze5cJoKZ68X+gFaSWQQSRlHgV7o/1JV6mW3uoIWfmpnJ6mRlUQJezGFrSupUHZlqjQ0SsE+LJ7D2i5k5RN3ZXml6IoNc4kPtNIioy9esLqeic07eiXZWzomH9W4C7WD0reCK0roam3T/KIz2+NboUqQeQXF0bkEfYSss830dbnsR20zqvVuJU9qyzrszCbm11BIQW7aCtVtKyX2K18iztEu8MPb+7s9LHcEkVQWgYC10Dc8I6qt2/oGRUHdBojVzjbmJiyFBg+HkIsBltHoM2Jish7VuNNQjPDWhaeSHYZRooWfAUjF6wGlO8y/qiiYvGwQ+Zu3pGE+w3gRWdnmdUjOZqMiNM+3ZNl3s6RJzohuhpVvK7lsy5dMEE35ZazbsVtpXzzv2AwFB6K+GbPuw6Uov3SQJ/U8pjaw67HPeBIlmWldgIiT39qNAvvvURTI4pUI7icOPidJIceCg3a4nwvUTjf3x8+zFIm4e2qDrb5atu4kczOeCrMgiRbRIiwNEJJAQPq7ojOQqMhXWQ/oIGqPEwKTRCnYWaAJr3gmYP25DA8DuGfmVFN04z0fTYNdB/2Jii0awiuESR9KtLLGL/2W6JV9K0oQCgtQnW8NXhPRUQvs46L1D+05CUifuzeRMjbO0H/l7AwNjNVIma/Q949gK3TDa4gZdMQHDm2scQmYFNPqLYEYQB32w0A/uara9/GmRQ0nR3mTyvAs7NvH0T8cRd2MOD986Ui46iSQiJO4jAjqmOliq3uuntS9365iKXd3E6tXksz/BmZD4C/8PkF2dUDtCCSFCLR7KC+m8rPETcon6NtRJYh50GyUTHFwbYWnHE4uC3OKkWslha8ixGUVUuTmdKoZFSOaFJt8U8x3YW5462BhIfixPOQTgz0IXI2WWmFOzWWkupuHSpWN3TsUSXZQHnpfk/s1NUMtvZR12lcawMmCvT71+hT202UfizF6Cscuycx9/GT2+6CvKV/eWITlJLzmBHO6qISoaUItfb9dhbDmy8p1K7Co1rG8Oh97UyiiHLNRvcgZQA0G66F7dD4X6d/7bP43YOqzLkEOMpVORWQCzJD/50SERuhEbdOn2txWT5/ikSclyk+mzwTM0WwQaMX7842h53XwPSdi/QBggArGKOQ/qztYl7KVOANSDvKWvoW3MFwYifbRplzDqSwmiKUACTDdyqQ2Dwi3D76qr2X8GfOyprY3AMRf+phS4WJR68Woqqd4ZQZ6YZ2MHGast84PxJwkynoVUp6J0D3ZOKAcx0KSGQphUe9pWklVKHeUgssmX8QyLnQhzN8kWbUJ/lE1Vhluz6G9bFtEBL0LdlwsttmDE07e/6L0FYYyb2XSwKNBctUEfJ/9D1Kn6u2N91dWN7bVcbvy5oQJ8wY8aHin54aWxH77VePjZZ9U3pbbQmvzSrEs6a/N9hOdW5gYpYiRR7a9QiQ5j9yh9LTXTiLcJuG6i1bs77OeVf80Nt8Z4Smeua935zpuCnWvlA3qYFYx36Gd+zVZ8Cia3J3S7fW+XpCmSbb2DzPFy1KKJjaIzdeSYtWzoaHsEcKbhW1GjYTuQ4rFLRpjA1MVxzaV8BqVxw5k1flPScSqPA/+4LiUR2lWgaIfOKlnu2Pk3TFoe6yx4vw83tV7REbjWZzH+2jh/wdG3BZ9oDGjNDM2pWEjKDrTrn6ayGRCafItgj4t3iZuXAjhiSjkFYYaJGitdLf546NEkB5qId3ieEeKEPeWYNNm7f2yOA62CvAjTrVW2Zj3O8MrVyPl8H+QWAErG5egimjbwNn9+XfM3tw/zzFCivIUuBRYI8vBM/XaZQkzZcKjeRfzwvqoTFdUJm/lZW6cUtLJhVozOA32qq/u99Fm6hjUlLVAZtdaezXdIGNvIxUxyEzu+U+XVt+SblB8YfIZgGhd5zAmsYKrlYl1ZYq8emMIvzCG/x06A5DgMeOOKIa0UlpvZ+JrKllnkZ98DcI5QFq15QEjunyjDXHJ2xxFMgIEFvYtIrpdiBf6VKWNgVzVPFr7Sy2UMy7OPtmR6VEHwEyr3eEZEtV+Qs5YcvGhxZFgoROdtpMoFzZSo09xlW/C0FHBz+jQETdna6O9WHuQhve4vXyaJ5sqwG/tAd/3pmSzRKUt+cdtDNGa5B59ijOOlLThjWzKEoJvFLRnKvAijy97vj9hvHkJf8cFUQtvm0Ujkvx9eMTpgWAFz37T9YSrRJS4NHkE/YFJKs0XdtSDiIb0G3mOxp3MgygqdLd7+4RXVIM4z/6L4o6lNHzCTxv5tqcBqyFdDuYXsqze3XTcEMoDgZ6eA6vCPQdURdNcpKPhGME1fuchs91vLP6uunu8E08VV9ir+sfsFl2mMqZa+OUwYhv9mXFK03rbLvQiYiP+VTbxFKOCRWdQ7lB8llGB0GyIAmtAFq2SgAmpQbChN4eoufYx+gf0FBfRFRS2rM9xPjRJ0JJRE6y3W+A5n/UFqnGcYB6JRNfrO+G1GJAV5wGoxP5iEk6vs1JIRAJyUyTHiWW4AZQczN5WBoojmgEhugewThBDRMoJzcnEJ6EoKoMrUrF5TXpPaR+AfJ4BaNfLJBTLa0/ky9c2PnEht85ju/OvZuoOiKawDcpDd3SZrX1oqYJ6ElVV1voWxuFPkHM4tXx5X7aUVGHx/E+0qBf4UBp4qtDN/0Qfbiq5anBdVd5OzcwnrYGFRNYzert43B4fgLc7QPdIWwm8Rke9jEuLOMO/9lPBK1+7k7tjm8eU6rju5kOj83+XYoUJI6kHSuBB7FzZj6qudE4Qaczn215Qs0p0TEMwStONn3KFaHizpT0sorrg1diRSvNr1NkypFQfnprqbwcBjygmrf4h4lCn7eTlwaRsAluwaMK6oPD+l2k0w4ZB99mAMFR9KWpqUFCTow7vjXw6l1N8zWw9Fhw5fZm21CmnQ1PdpuLhvi5tf+FFEJLpoKD1z+/4Kkwggs4F/MBjJOfEAFrplHIuwf/DaoaaSRd3RMcilxalY+MGv6kdtdQsikVFsMq8cT+jMvKptWRKwimjG9pXV/DvlTZmsmqrBl9ErIRW1CY1AO8STLIL1d3w1jcvLII9jl4BThCtM19ax1rTlVsbN/6Fu/1K5wxlIMqyh+dsT/rDd7Y1abMsYdibKZ63ew4Vvtwz5lBsODJTHLRdJdi9DiTc1Js/pxbseN9LiB6c5xK+DpnQlsj/xglonTQ12yUOXOmBF1Lok36lZKoehvvhhXaz46d3+zxR1NvDNwsSNZ6WzL8mjwHiXgjFMtoojiXf3Hhuu2pxqnPY63dm1xS+JxZ6zfLoI/QRzqZ2KhCmgg5Im2pXtt3dofXv4NBXMu0qOQIyR/2XxYsPzKlLEwXyWIcfRcx5/3Hxh+oKkyaNILD3AqUPwwSChguNVXAmyV4J8c3c8M3EtatjaLcGm81ml36jLKAf2Hj/P/tq1um76ZvWz3deZqzLDlF5ezuKTgnofYUB2cNUi6o77cdRPLcGWkn4zL/M+GwB+HM7b72q5/mCaCfQsuNZDZeg0i4Tlw1AbcSBtijri1J0JvsZLoNqRu37XubIxDT3fVJY5Kf6ZMP+4RrvD1LNRjC+X3VotLw6BInCA3IRflBE5anmk+9n5dKsDJwqjZFwpjnSaWLo00zw7uYEktH8+a8AlTH4sNjxbaK9XEYUwlZlGXdWTMdgzCY/NfBpC2uUfz1+SpXaxcq+RtXcJqUGrDW7ip3FFW8JpwFNK/mCl1zkBv3eIdEgsfbgz/dQe6wtAxewKmBz+9tCSAt12rBi3p2AbimJZW0r/e2/a4tm22tZZ9CFgyYAk4wH1kTFBqz7148WWSnGKesRXLbpo1JkFL6PEJUBMV+bMwpdNjCFYG2Nq8xNVQkj7G6YQ07WcgtAjGGLd0ZvvVYeAptL0MHz1KmZ62HnFaxUIdYN+y7AsZp4fX1qlfC+bcsFlkzblb1p8lhwAjDotNqFb++Nq51OZu66lkaLmTEh97ftIPXe0LRgIKpB8UHhM0+HlKXn6cto6AzH2zsPmB/Eq6d/yfdLoxipzorqXy4+erL2Q1T76IVhceQmQPQCaxM6tQ5NDaMWK1J6dXyHOxNgOrClZcRr3mFS1UvNb77R5K9T/e0Mf75UgBMbu67k+lXY7iG+E08ZVXuuLg9jSV6r6CyuGEBP1ZKU09akCYGmE3HTVGGeNHSMhMhCcmW/NvB9ePYK7vNv1DgfHA6GRleu2ftT4SF5Tirl4cG8g4KGAsJNq5YQ7YIee/WCVsfs8AJNH/txO3WBSq7XZwYFiKhkqXU8921sXTF5+3+NURJ+LkJC/rnr7d4Fq4OI8QCUovUjr0y1swh7ja3dJVicI3Ch7fNRjE+8H9LslffbPAwNBzCMPZueIsTHJMPKaJa1BvjKnOlcIeGL0m1Ka3Wa9IuqsFlk4++wpLXw73S5twIT8I5UF4Vb2E0SVWTg69jqn7BCeUre5qcp9v3kbsYJuH6qgvekgTxK/k25XD80ADAoNKgbi7UKn2TUDQcT6puda+vILvxz3laiX1kg2+h2APrB7HWUIFzwNlXdoLOUcrs/GSa6Aw1vHJx97aWKODPeke7XTNvSB9GPSCRo/kQ9YkEZKFTk+ERgFdg+JVKIdeoO1TpSDDKI3rXei/O84z8V9FXTsNU1I5Rme8Csy3lKf34D4QUJo6oFo5lW9K0Aped3OM7fbWXPmTsy1hW/pQ1CN4DnjO0Ylg3XFL0uWcLYYTmrmybarVCp6kKgYRdYoaLKb4KKsKouCuur3XOmNl/lHmQZUZRF9WAwBwUsWVZWaKc3FrdH7+8Wah3hSCSwvKLLt3oxKFHh7StOlNzRlQ3como4VzU1L+jjstK6f/6cdUQisXH4B9pWosGWXSZOMfTTTLcjDeFPtnCSQrjS2UjW5G7jOlHLPI9ojXVsmTM6pi/ZMflKFo/0UuGSC99vmKsdAxYNuuGX3DTHXj/b0CIWdVPUtg2J/NZacYr7QWbrqBGzfIb0ySgjNGSexsX6DKIXLAiG0UU1VKpPe6zV7Rr6QyBlaK4yfkR6m8rk7SfIHOeYkfbZGhSvHmLMrcWl5S6Pyw1v55h6CwlGdt3ShEia2BBgqb10DWS09RyqtRwNEuJgK15G+TtATn+vC0q3Rrjs3XkMw0m8Ja1+iz09nE0e/AYlZv+3AIyUjuISNBgySDR8ggQ4cAKy4BFXqgieZ/UnzmgUL0Q4eW2yndu3VekHrh0E+KkroX+lqGqeLDLPkzwfeMs8krpyPek1KT8BZ5Jy6KVS1yQaKW8/f76ZEuRoSHRurAQGaOsmqleJAfPvWuuHqjObE9gfW7UXhbse5qZqYGyDZVvN+rFNvIAgesOFfiQrnNbAQTCXsAhT3u8zxUCAntXgHCyrkEuF6Khc4Eb2u4H6eSz3oQ1XhAyhMhkybmvOlN7gTyCJS9F26EsOhrwpD+Gp6v1uUBiwDPX+p/WJZemoqO8997yVbiTJ/nxOWT4cpuFaGcN19MMkxtbjXsywWE4xChhJhlJXoN/OvpPp4Jq7ieS4xxHY/70/js0E3vc2jSku+V+SWZ+Xm8bu+wWQxgqC/0WF91vagj9wX6gko9l9gFzqsQCCXhgFCj0kqHtFyFYjirfe7AaG2ptqp9be6/y3WtcXb8gS3SDrhaNx77wBQkTRBHiWADgt+ea6C0yeuGnlRbzYkpcGn8YZre1gj0o/1UDfslSzcd6NfH68Pvkn7+JHrgOAmw3SPc9XhKO+x4sKWDQd+LItS8anrPz1YofQzZtZjxjshq/tcshSpmudAI5GhgYaRhxGQP/UNO2XxkGlbW5kZRn6APnzgSOKKAbWIgIAz1o577aYmbl6YSvLhYxUjPI6AJaDwLfALyjYxjZFWwpyiBpykBlKh9/CSV1W3u9P91O3W5XGT6Je9bkA3moyadg7Bxq/C5A/ocwsD5CwOAyPpSLJBsy9usIlb6aRU5uA983GsAhv+k7ePfDlN0Vewk9bHaBY2SiJugJr3cQXdzJvVOJGCOtjmW9N6STZ3jRBH3SWe6s8bY4gUjvajF1JPts9MEpj9wPP2kyhiX9Sy/Xr4wUkae1bdZyhzn3xsRF2Xh2SZHpyWK9y5NW4fP0UnUCNMI0nX75XRPSQRbQBHfR7vbr3GI1gcRxaaMpIiZAtqPViubYOrh3pss0Z1mtLMxV8RZtrwiu1tFwnP2HKBLzNuGX6ZRfL3xQmOwIiz443p8RvDJQz5w05cJgKX1aUeo4AkS0E353GnNbjKnmrg8T3vSY0vwk9jij0tf/WPW4N/2DUkbCCiSCH1bYN+mgOCgLr9Esw+os4LaUkvFD34PCIaaFu7qWc6g66UL5l4ocIAJIzZvgutILjL4FMJy6nGsy/u0zXC8t5gdOwR2b03oDcqoQ0oxtVVXr5qdvj3TpMUIueDc8j5Nsc3Syf//K/Vhv5HGrc2pGP4e7mj0cEEUUD9io0t3TZXsT62tqw22RuNeuR1NKAzwGVnvfDbL2XJVQSO6r7B6aB0DOYB9a8C6mh4en0EyL+PX3SPKhgufBdbqb3EO4png/U1pImYuLhelCQksE5A3OQG08ykV2QZW8RXEy4jrAzyuN4GO5NIQlNHMiG05XG/B6b1BkplHF8QMvApD1raZazzg5ZpCsWNqY3KOb18skyHJtMsXglhm53EnCjXBlLZ6TniMH93tbc30uUD+E+o8Vpj7K0agh36G/0DNkeVa/eB6TVWEkJOjg8gO1l0MytSvnymkTRcVajXamjMHvnGCj7fH7QINrnYeuFR5ZG38I6Cvt2zp4PcjdCju4yq3kdGNvafQq+3UB8n1YSpIakXBbjLHW1ORB0Gs57er7MfaiBvk9CE05SKCzFPEbUbY9x6L2S2XU3qyDU/kRGbDE14tt0fNygKwwtYEcbcSPbrfmyZdHVHaSo8VqENvZ3OocW4GCGbwxQL7LwK234hERzOdFwiW5YQGCWLcSldTipj/aa2nkGiANIMyYw8nRnViaUBWbAZVpyVf+OigCyttmqv2TDEyupH+ThX0ARYoJxwEaQTMaxEQViFCga/U35F0+2wz7vkPkxsJOIk+POFT+4s9PuYDZX1d5I1uRpgy+9GbPpX1fKif2IHoOTLOrqcDvIStwB5VuuTrbilDXvMjDjxhgB+2lbF+XlR+zDhk5+pREMNCY7YWJUtwUMMVWsH6y/zP53OhRb9izP50Qr94ndgKwsjTKrfGLKEpD9xTrIM8q3ESiGtVmVIWg9kPbPCHCo7M0yvTCrdgJPsmm9rVgHA/RS28R8S92soyzLJDAAjwnvF7Kbi1luIHNDEV4GZ3cCVSrA4HrFn1UD1eE5jabxbdUW74ym01tLBm/boNnv0rICx9zL8ZumQFFjNaQukplNZ869MKKUOrinMSdFcQszvzFjuGrAdRHqBjxbjqi45nihAvGmjzdpIyoykfgfoAlk3hVZ+/5by66RycQhkt9tnw1UPLgMwgidpZwHMlLSTBKASzFh9dbWqR8FcC3BxyTDlnOsZOW+aVWqvor6GTLU17GPCo47vdjxzuL/t3DZdxeIjPtZQc2YA1Tz/SctuozPjDDYW54q8fafN6uwRmrIFAunyq6NLIj4pP94cEQIwZWSkrXgNGxnL0F8ZTyqKHcuKauPUAJ6zH5eS5cfD6Z8S1SHaQPW/7OGskwwKk4AvYCMXrhwKQfdaWeTl8R6nBffKDp7VFEGRelks8PjkyBDZl6lx5aYf3Zjn9Bm2GwxgSbpYTiVcn84oJ7eZ3Q9IVt5CM5wOaGrBYWkZ9gMcdRAFiuWypfJNaA22OZgcVyCsxA0pWoozUq2wJygQ9A46N2fdjMu+lRXH9QOMYyR0DiNLFQe/YNOmYXJXHlsUkUPt9PDyNEC0jH+TUSBjHRD49YUCM12InP0MbIdCOG8lFg/koKX9QtlboR1CAJQvILTIOFu4r2yGlKuj9ItiTnw/CMlWf0IcLJG13KrtJOTW5R1MMpJmlV7Ca+7q7CJI4uNFjVdoIOl8jBIuggy16vDBZCc/YJ3h98yNTq9cQezKMHSl308PZsP+6ljYES0lJJ+tq5DoljY8f+fHqcBLrgCp0gaKJuge9pYeiUILRXCZf0j0u3UowymN2RjxcTADN215ckl2nfpCDzHpj+rQ28uh3HfdCE/pFxqnBB+Pc+s/04Ende9Kh4JYcsLPzh0y5UQeDGQd0W1Xee9u1/7zm9QAKUaPyqCCZ7UZ51lcBc/F5prVyZQlu04R57MLeZ8GSAjroHzHgtxW76OtmjhXHDgIb/kQRv4CjZW5aVqnKIVbuxzjMm4j8b0oO06LHq3RvhPbNYBp1NaFDE/JUFP1GEHtOz3kBTIjbpdnBE5uRPnSS4lQvU4ewX8WP8fwlawopmZto/wuNty04BRw4I9/0RPZXbihXnmcK+xuOCS1JiP3AX9aSHQJRArS7qh9a5ZDWlF+0GoVIrAb7nr18fPk8b18T51eCdLAtU5pphyWT4X89KpyCtfo2d6OvGOkQotCpCMEkf52J7xXmhC0UbaXNsng9daorzVlt32QDjcASCQDmcl+6iLPzTQ7lgC7n3F7npufF0mdUetKqm1bAP+abAMc0opW1ykWQ5GtshQUAi9WUTV3d25D0pHouuFBaLB26x20rJ2IwclWIJtlE0bRfmG13uYYeHU6PBG5I4WQwSO3XXDaggVDK2/mkB3r4OE/Lea4BijsBh1LTlxa2JKitKp28pOetx+d8KtbDeDmQwp3Rptaz+IYjT661rR/F9T7PwN4XDmQIXNylm+gL3SEykdyyTdZ3ztprU/6y1A7+MMwfUW63clNEZg7iONOf7oYzkZsz8VYZKNs3ptPLvpREFl85mO66y2MjqgVFaA89Jp1MLznhlubAXmq2pz5gF4qYEvf38BCfRtxOcJ1lA/PWHyPJVeKsyqkLk/31afIWWtoUNclXh9MonH1J+G6Fn6BYnYbYvMGx79kgby3/eEMykkMUrm5T/OdnkTjRwK/+IzziT2rgnl+1tkyT9OJ9snmVrbRTVDLDdfWICeyVt/as2XVgErdncZVJo5Fqc98gPnyq5jjc+1Q7kQ/bZxx3EKm/GzWlUKeSuMcol3QEEtotsgrW4q2WTz7GzxxigHAKn6UAf1nbzX1dldpJ0TNeNv05NcRj2tgqPWTO3t6QpXRrKh4TBVBPs9Ub8ej5X6XKyJET2YwDeJ22BhDUK6OmnCZY33irlRXywwhiRvq+1k34Ngsnm3ictlfXHBcqKNd7WND8X8CYt7edNK2IzmGtTLrlbzxFlM8H9hvYwTulAc/KYsQFpVNt8z7enw47JdocFeJNVtU8DjailIO9zZ8tZaHWw1FtZZBM1QddswDgPuzwKta5HhuT1zUyYgAzsva8zWYhkueKaN32mhz+IfNJZ56iEkGMkM4F9LFgDtWZ7FGD+S0LPQCJQX4dClY9zlk9Jn2FRD0K3HaD3DmLmi7HnO0G4CkOSx6pTbXCLjczaxPThQ2m/P8DFayrt5eGjVTpOFF6LWZ1Sijrw6vOCgBvW3ylvsuRAQZR8qa0iXUJg3HM47i1pvb6M0T0gDqbcHgamy2PW83wePLCfC5UFcGws5dHOiwY+FUyWb2JczKpUt+1zfYK+aK/kLpRf7+fJ+umG64JDGyp6UyEB5yVrAOgoeCiRfDPd5AUjoH8tYM61YwUqH5SaDYLzJ6HSQxno0OQNW8XlfC2yY0108MT8zzW51fvbh5y/168EjPEzJ5iJeI0nfjdpxF/MW9XHDkNJhLO/KbzaCAEt4TblHrt/PFYsFD+YaiKDVFq/qovmT9EXTTT9ACBX2V9De0yMiIBiAb/XyvqNn6aj1zTm9IjCR8w2Vmm+fP2w68kieiuJREODFQ4+KKuxRoinwsKUDkfPQzej7CRAoEhQRgTRkztV8rf0HZ2inFldCWknLa+CRLfVhW8Vrv55JGRZCdhVbt+TBdGoYmX7kXcffxJRDbHahEYnx3lZ0zAIaHmS9KVOcJGsktaqbkWKw3ur6uX75HXxJSZLbzulybU4a36IN8pd0n7IwalRfx3UpMW6ygfXVmJjHQEwV7+HkykP0y3jlQeBmOodimJQ9Q4ptI/ux50iHhjGmJoPF/h1GLBEwsVZehPD87Y7uZI7JIdXb4IvpQ/bSDX29LlP4eygcBp32Dzhe+BIZAv88xBlymN6wg8HS7LgEYaoZNbMqI1IMsSS9pEX9euyBj+nda2gpa66byDc7rac75Rj2ITFaKDP6i2KYq/myACqbgKKFwTrvgW1eOdK24ABPUUN/yPM71sJFdrgiZbU4cso0zKrxT3v5mcbuKQngOwirjZ+r1neVmVEGRdp2Eei0yyjfmgnSJGzfjhSa6OMM74o1XuReTkhZZo3sIaw48v9R+ESitPCTOHMWZrhVPiybbuMjtzWXCSe6itkH8weXrPBi5OrQXHOAM/95cW29XgdcwMl+eZumJjpNPuwS+LA9sxGAgDit+eZzlgj9kTQOnQVgWg/jNgzgzKspnwd1oOcFpY0QLsjAY1g7zeIaPRR+/K+wKEf26LZZdlpQxg8JPBia1OXfPe4p68C6b/9Zjd0vRc49iHQMDH5zFQe1CWVRXbVdTZngMztZkpW3QBvMQJIV9oeFoBUGBqiwuZW7Tdng5MeMgovNzvd5fZQwfYd3cOvZve8MjrOenmYJyLoz4dCAPLEM1FQVOHabnWxUagKn/VTIjZ4lMey2XKoTm9DE4rHS4WahoCicJQ2u2rWhp0D4A1phNr7AwF9A3H0BErpobViUw7Z7r+hnzLX603fBpC0XGVDeQ7TQx2w6+lYCMN4ume2nuB9IM+j8u5sYHVFfqEWXc7fLQEUxBLg6fGnI0U7eS6MDeebXTThOuqoqSHNi+xE6tvotHZHLAkUA0nfQVa8uoPS3257SLMXLOrzwVBCi5bTJaZmgCQ5BS0ZpEqZYSbNGkKCyCEr+f/Y6FV2OxON7r51nAslfLQdlkfJO+GnKqgbVNvAsu0dsx1SpjKaHtYlnPyxM4OoE3X4wlZ+7lUIiyICWM6k5VICx+XzE9e2vtsk+OdUdOnpurFkltbsxzzI0OFQWlXqfhM8mytT+HDDPwXQKad9UdBJSfQJ4WC9SrnSZsc8Y9SOB6f1Im9cFm1XJ2+R1BpDtI0aPC6gsiK8BMYqmo6juEeZbUI4nM3a3YRAMjDTrwVTpaF2bzboF2kn8TY/4TCHizU0pm5T7gFCC8lCncOOCiqLfcmqtJ9Km+SOCr0qBxEqXSSevSfrltN7P4qbp6RIewELOUL8Ku8peIDUFGE1Yg6H9e5gXMYi557exGVkZ4xoHOWwQJgm+kpUs0qaIiRfPpVxc41Ec+4+M3lzh97WHLkn/79dMUm0BxYz7ymDCy1WvQ0gwEWrjXSIbf+yDvLTKNGyc99km1rVkjiIpolevW672HPby6g148uY2HAcHNBNqXx/DmcvTcBEbiUtLs8515o3eV9mfeC92nNZJEuBaYMqN2cI9+viZT0gBkwp7uWL8ghI0s1p1RhiPXnJLhuC6vW0PYpnu+GQHz3wqldMVNMttOj0zxnOLERzLMeltzznwgwuG05OfCVIf91MpxtXndzW8y507nifECmqrB/JZCqjBgj+WT7oJ13gcB9HDb031OFsaFAblU9Y7ZzP2oVKCe+oVAdDsTJkKkMCN64x/yDSxdaeKXSInz9OiPgHIWyF33L06sTGl5Cl9GZ00Ic7tUKD518rMqE89COhUUEMOwsjDJXgorxP9AUM7HgnV1NFILomUWnWcPfOWPV4xRds9dGEvy0EzbhWSgRChhrvcobyGRf03ometY3KnV+vkyaP7oLRVfDV+SijOmilmmydWFMMuyTeO/v6EoJF6DFiz8ypPvK6/ysTaq3T85OGCHSN1GqgPy6SBAAr/Z98aEB1DnbTjYng/AJYeOzya+gTm/dRw1EzxpglO+s4iCDVTgA3jl4RD9+vzPnIn1Fnx0iSx3gtdUeKBUZiXyc0pJNx597kuH6y69YsyR209PKVhk26YX/ypzRB+WCuN9kYYufRFDlbmJ83P5na7TGy6wLhB+I7s0KqyYXRbT9NFzwgO8w8NZp/R5rH/GeZDapKeOxo2RqTK4LvddKAh3OklxwsEBE7tagF0CjHuMM4bFEbp/OJE46rwNGn26CLHkDpONe1BJ1dIeow8k7x133N5shVQDcXq3leq4Z0AwBpoC59Od/iXNha7DN+cROtvJ/rs5yMvc0eYlgPNmZsDPgj2wxas+Zv8Im4xGgBoRO23GhcVlpbvtwbamea2JrvqZegD9HpXXo6BnUZujhSeX3PT7RZffMZtl6I1W2m5hCViLMPS3UYUbHttnengW0AMWsId+NooIXv/VJxjBxPhBUlqkcdaZ0qSAdablpjNNb5nslTFcpZCGp10uEJsB9gwBnW4OB/XIvFdHk07sHWpmeRCZhHS0N9HIvhYUgU3bXUJRqAZdNC63rxPRnZ9kP96Mc/QckdzD0yL5bCF9Z3mxWKaNRcgqs6qepdXKudASmd7+BueBdI43Wg2N88Xz7bs2ZhGrbrjOG+SGSDwB5CYG1kR4nO1mC2GzHDrGVarKY/BR7GP3X7rWGGEuel+EraQ7TQpKY/6az7pEntXRGrwfmVSzd/OM7jFXfKQFzhdKfkIbWZIHlzWNV/xsRbVnyq1WBBBa++JAZC1QMjMtzAiG4SqBmg9SA9kKCVeo/VL0whs76P+3UBYfy/RXwEN5TNQPJy0jTmcdSN57n5lTm5k2gW6uhaqX9RVnnhM9oc2EPAOurGEs+nJ/VxxpdSfMUQBgztiTpXE3VjfWtMV6xHDCK+O8XfuYATxEZ+ieOK8VfvlFZR0OUZtSBfnXKJZSIyFAJPUm3gsOvd2rmd69CM0DViMY6RmmkryNU6pmP8DFYkIAssrUkqdJPYmmHg1zsgrWOnqRNJqP6ameI1bQXzaRMJm7ltTBwtE8C0mhZkDnWX8XKIUzS+5jcjqcsJX9mGz/7yO3OErCVG0PmcPhlgD7VpxVJ9CqN17f/Z0jeKMlVC07P/tMmkgWld7/JXvYQcSvGdXh4nkXSK9pZ8Cn/1JRM2oTKnu/tmBJ18Kya379VHDzavh50OfDj92hgmUgLpVLb7p0CcQolm4dpwZax2N06smnszmyob0wlTXThPwnOjpHqur7lQAi+fbL/unfBA96xcM72nH/j4ui4F0eunJxEbasKScOWiiU7njN1vtoqaTjxMZh6sKXMgCoXdI9MQNAT8bp6TKrrM6GE0UbbV2fEJw/mSOckJx2mB2HALasfSWr9beD0B/ez1aZB64g+wIuALyagN+7YK5E9B5Cu03hQ8/+4R4lFCniMh7lXfW5BxCbWi9K7cEu51ROBWzFCz13T5y803sFsEV7XqX3d3Ou5FylRxxLO7Y2uaUKeVzrh8yE6/aHu8C9guBOGnVq42ofaTs1bQXl1XcBHz54fGB1MkKpabKPmERvklvuqle9rgMId89b6h2AY4EgAdYzPFOTlZYMdKOJLFik2MrSnHK887+oOyxJdIYjYC9/aEr0V94jxR2L55hmiCH7N6eBdZjUeObMP9RvqcrjWynoKa+m3G3HP1TpJfxG3tqgpDR9PFoNCubHDVun3H2NFYaKjZPp8/we8u6MUECahvnQ9cEA+lhn3SSwquziaDF6/16S6XhwmDMESc+4flJ5fldgs1O/UEps8Tne18xj3Aos/9v44V7v3SGS58DvBIGAYt6ReEmMdKpH+TbxC6CPXjzaRhCJMPsftSxmyoaB0DP054Kg2cAmmzd0ZGOBrl0Bde3mZlokWQnWEw+Dlu6BMqM7Z7+nurz2MKxMWQKih2AVUQ5Hx3MnmEdCV+SnPPDJtBT7e/6sDNjMVqg5kaLeSaVnzzOpjKMXoZIqL0eOck/rb27a/z4+n2s4rj1v3mvNVvpyleCcs5AGSlwW8tbYJh2hlykSaGcLr7kD/BiEvxdiTg9VjpfWNBYcHWHIk8QniWI4Cf8P/bH6MFGQmv1Zq3GPyudHVfz9GAfnBWG/L9Z82q9j7LwyirJEhQTqa7pimJCINQzq4MPItq8jfxJIEUZrAqhvXEK4UcafAgOoQJtGz8rLiOqs2Truk2QNsCRoZlU3vHVZrwRzh6LxfKKHDW/ouIWEqFFQUcLDCeCX0Ac8hyXN1WbZRh1ZtsZkkYgWBkQ1eY5KfDG0pbQf1xF7AM1fzXpliT/XO7v/venN+QMjr/3k1iwmW4AThOV6VfficmzKQQR0NNFvdzLDhSYFADcqq4MnL2aRFA4fbkqXjUaTvwtXzaQxvEX8vgNBb9S8YQWVTAqcDGTAuFo9x8B2toXLeZje4m1q1nPHNQEM+3rklBUpnXd/8TQAveAAzpGfvMhmz/p4BFQwbLsQU38GeteU5t3UaHVaEgXulDZaP/yJXEDaD5JCnkym/uTksndN681i54+MU+0Ea/InVzdspWK/ypCJCuTj2j+cuBQm7wdjpwto5T8erB4N5lu8qj8UV/uFaT/1qrW8p1DAj1xjsphwo1yu6X05gfdLUecWh0/JtiFpj4EOeXZbDXJV5FBxt/6rzoNROAa6BylVjqodFwW8B4PsCQkQhI5ny1RaXCBXXUuHi0CHVFoUgiFeab9vYhdnbFwVn1lgrBDKp/OXz9AclexvkCi9rIEgsauI2STmLfz6hhyjjmDInc5UAh/Ue/93n4XJds8KVJhfVEKH3Jh5yXLxgEhvrGOY8gE/jzoykm8d/cg16QhpsM8jpVkiGBscM8gTo0ieuuARecNAo1FCCuEnL4gpeRQAtX3MKKgWe8kghC54jVTT0wTvUUxhfSWdJQwTs8/n4cnP/AoaWUX8jp6pOP2h0HckMQWQqPe2NpUe8zzQxBuNcYWLPG4NYsmMrb2tsEPwfQjPfZ+Jn9FqwlM5gtjQxXbylBTUPLLYrjsaaUMsctvAqAF2C6gTFEdZhkjYb8UdonIyFltqX8RWGUKpddzhV7opDsie6495fczfTbIr4C2GtUYXnousqSlseBKPAOk4ZB9hdaG0LTHxAXO8Im0qkaYj8du1ULYlI9DhYXPO1vFjdrUts/VlZPTnIcjSdBWntkOLwq/mkQ9tP0Kq2BW4doWhGTGXjJfJj2SCDK2mxqE+x4N1tSgU0ElJ0xoKDaKPBOTgECwixx/WrZvpmQ0R0j9eD7zMVQ9nqhCiQYTZjvrtubIaVZTN3R/QViyK5KrrdMnz1pXsIPVkZBnewz8WDjgih1R87nav2HROaMHIA3Qfnhfuw5b5dTFmOQXd6deGg6/ePk+tR7a4DOn+AxEidA9/s+k6kBKngVkqcHgJj08DZXH2SWONFVxH/Kgv0U4KcmfxUVNXPPtuVlnGSUVfKKn0M4VV3+TRwpRIlzfrXzOvqD+If697f4eHLOpzfGK6UIrW8+VZIwL+l2GZLFtXwN/iYrw6YUiH1q0mnUTmDuYfgAosn64yrf7KaYMkGp1MP7FSI0iZKeGTJj+yv9osJlQbhKDzH/7mTA4PfkwulP6edtFLsGa/tgl6VOpUyzO5LtNhjBQX7pg/q0KF0FwFUmmSifTj5sgf+QwAFFhBZfyQMJy8rmw50T3/5o1SkotZtoqgIHcuu7ZAv/k8rQw5dyH9cpVrVTHaPmV5oWnAXyM3bEsFvhUhN8EUvB529ZNfeTY/Ko3ZIvzNjqyrKz3ImTKDOQ2sTWldySklyTbL+Y4YQiWHsnR6/b8VZbsEAALtYT7VQ3MHDXpLs3TBpozoTywXyB6T0oYAj+3cauAahb4JQr+MBRa8os9pIvDquppefeQowLG9hLHTnaVdXTTvgqjoOoZtohMjn1UygolMT+22gIdbTYyexTyjXovfRcMR5Ks2PX9SgltFXy0/kdV6+9fGPXam9gcHGY8xBSBpRa75M1BoPfIv/DRgge0Xyo8wejfkCbpgw16rNr2Eb4HlEhf8yUWr9WeC5oIJN0q36BgI+Vgh6YiS+1U3DJ+oIiy3q3hdnUke6rFFqBNFlKtyDLmShN03Vbkk+WhPuQpHZhvoguF0pzYd2yxkZKcpMzoqJQV0ak/kNqJ7ekOEvd6T4hXtLYBt4hwQapWAi6JpT3a9drww62MuGq1FfIPNUi3C9FbWKCQIgBl2k2nQF3R1+9gJnyF/jssYuEhZ3MYN2fQ/f07WbVrGEcWBVt69Cjc3/a8Sr8zkqItvsR9w1abDl+ae78ztP+dMOYUxYC7lZO7tCEpxh0fo/UGJyfkJ0gJ/fRMtAhts6vSVQN8X/XJK9lVYZ1h8LZUEgCPls3LLOUSTnA7BTXdqEnqxkVeasOrYKKg5nWOUVhQcKsAaTTdGRqBa+MYONIlgsDmxqSmPs2DZvz0WLB8St/bFr5BKyPkzhAgpOfzzz1mh3hHfNspBTaHpMfwHyvV0tEGU9LzWgBfpSgooOMgX2yskN3/K6fPiDIPhVl3xbk/so0B9iSxd5iSqv6094wvEK0oPhlzgP6RLupvujcKp1A+bM9ZO6xCq92bM9TTWY7V6TI+ypFvnhzFvQQNq0zJxVOOOUaMPvAmpobDS+8qGEIoTb7XBUzHOZXWlYHjaWt+f131udwQGwO6ipQRJdULyUkqb+m+lYpaoKL62Cu1I9kjFpA3yT38IbwUcZx0qzInT+JGcQm1mHctuTHf/Huh027Fi9soKmdgYiK50yFSI46JRGNC/lnJdkGtntWsFD6j1M99fAsmllN8KyvnuyBrRepufvB4AEeUvNznFvwowqA2KTlVSDLTXz2/rueRsyZcf39I7vULgE7pyi/OJXk7o0dwXKaxgX2e+zA9Lz0TGmWeGcGP6tzoDal2feAA03gwbFsdHBdH4KX7ZO8W8mMAPEtZNITOTk+Iyj8VMLvmIVF4rZy7rbPJOwr8MAXwa8a9aX42DgBNnaJVa2fNsTnJPlE70s0YYEcwZuix7nWYjADL1BrYnlg/AZbn6+MlB304FxpeKdZuAXIg5SeiqZhsCjZZwaxd9pIXS8AGiUPu0ozHHyBCG+7Mh82EQYFnMrfRNeBioW9LTmdTt91pMmRHu8SYtcQSUCQs/vxYVbFso4qV3LbZjDwSzk3dhTbOgQ3Zo/rDCImbRjRUWFPNUeekg2NBCx6IECMRlO5jcSglMQvDeJSRt1fJae4fof0nbqtXQxt6lx6naa4DwGfPAO+wdrbMqZvD9tHuZmkbzpTwHlVNZ01yj2de7bW6W/IWM8zX3/rx51s4GrlITJgyDhgmPBkn1dXgtQv+MXZ8Cj9xHwzppEoiY8f4J9H+W0SL8oxZZqaoef12RD5Np4IaIpbMMLfH8e5lwthK9Ne2ZXFV88SWOMkHS9/+pHNAnaG8D/NSQjj28NVmKkw1qQukiydfSXAMwqnJeo4FbvQHvNE6i7aJxqcekhimfsZwz2U5MlVZMCzbAtaPg8HuXuk01rjf5tRqitUhrPbCY7WeqGiwQ+3EtOF49tIAQ9N0QgTrx4m3tu6kN86r0Ql8RXNu5NYjS8q9cODU+yFqJWZk/MIuKeCE9Mh1+CQuqAWxYsjJOvwJLdZUiYVsLIxGpiZsGwmc4eEVaIBZYaaZZkW4bw/9b1bldlikP1EBEvW6JTgYo6KteDFR1/BzmdzwMlfAti1NPRsXpfT4NNteVq5VJ59ARVgkUBqUlJPJPuoKLFB5AC4y8055fQPwXeBVpj6GbWk+DbMxi2L4NFHzVVFH7IltTsmz/NW9nvYmXB8RqtmEfd4+kA2dTjVgjZ8ciB7bYmbvF8Y8CJ4NBORUGuTBx6g5fE+38IjFLZlT/E2utRM7g+UJQS5vIA18wQKembMqe37zdWrKIeuCp+2Ah/FAdYsU5KQFi5z00U82M3CPVREo3kYpuCEda2MQgm60RWJFgFOQ/J3MpUPKYsSxBV9GPIp09mKA97gFCTRjGhVzYwUyX8H/Wvr7TSfiHopDSPu6Qg8PNxZPJyBy+Hd4s9HvJVbFgM1ymlZ8rSmDNC5iBBgbWvZaTJhxtZvzbk83vy7UPDFRp6DFvKA9EX9sj/NF9cUjlo/XNkzZ4WP0VI5SZ4OfXFdb+XdmeVZy5lCjLvJUM3PjmGw0CwSrgvNrRH0AOAHBhersTuS0fhbnRhF1HH+Z+/eQTHZlD8aokwCw7VucTAPy8TeSCqoFfJOIE3jvsXPxBRjCRu4P+xeLYDthgFDv8B5jyW4MMYd8dPVjetgFAu2BBOEyD2zl0DCIXMoHbDvbbtt9B0pPlECXqgUmPeMKAdPaOVydlKbXihIAxN8zGHBjvDT5fKkds6apiFfe/O/3HknUK1acyH9+VEr2exCy9FyOi4HOxLBh9ZBA2wcyZMa0k2ED4oMdp3BEDyf/El54D4rzvo/7I80h964twQpBFPHA4ZctzcNRrDC4f/YaqDu+z0Xl5R+dFk3AK9ejmVVuq4jWzQjdTnD3pllmLWorXWB/BBSoRjaqfhDI8C3/4rJMjaKFZQpbO0q9lFgRHVGbdBbQzs2MZoDYVn3xzwtqpq8Sg31aHGAXQDWjqVnW3fZihI9rZhlDOyk8GqZBvXnlNwu2caMFRIcrQR++++37hU5NroqsUWYAEgjJeKCogim6exremQ8eaPadvKd1ZqmGA8eF1oGl/9uESYYE8U8sAqcqJgTBriXLZ7YxU2TGNt+Iz/FIGiG0c2gbpco3nf9McTmoNrs8NhQ3AvmDv9wY5K8/qqYkbT81r5XueTllYilnMID3p2Jts9z06acIpyWT+EhmTihBk11R4NBNzJmcEHLLzFjE6us1O45dRZNaE7+ICFpW/MmGd15fXCMGCWYFu57uWjF17MO1ByUg9EYKxRQJDhygA/5b6wzS8MX/6ULKrgbOlJeXPWybJUlUvw3DBUzqh5k99gegm54HYH/5qbZUObWASDAY6XefFnfJVfhTGVkZjytYd8Oi9IwxaZhxPoInsbOnDivEnmH3Rpl/bUlnzrWwNykAHW8xYhwaosCmJ7SaUlPK9I3DBi2HyYlXArXr+g1s84vYvLepVrleNiU+/93KrVCWpy5K60UnF4knMSW/S8Y/I/vI/2QSvHog30a9PgCxhZ/aHfcB4eqoFuRhGv0Qp8MpTVb+KTxjDlDox10yXhTSOuJAHG7NVNo+2n/0mv1sJpRRSBNLZqc2iUN/JqKeYq8smG8aLOXVu4s47aIp2WtVOKz/SoBnCseoOTLiWo4URcfWMI5Z5jgyOKbGFF6X8pTda9fRtLFIWT45262dVx4i8gmylKfYV23DkIJUcCSQYiIb12pjDgUJLiv5ndyflqutUgmVyIXJOe5CaZZpyTWJkXaO2P/o0GU0kVKMnkcB5JAWqTj5euU5fDYk9+UWG5tYNka8+ZHvsURqycBrKgzSyB9x4Zk3A0AJ81vIC0J/jQITNovwgVU/UtuRmQQUdzP2Cte7v8ZMKfWd6przGdYxABukkXGXmSu8oQiMUyjF+ey+iJHBck3ivbEY8DZwyzWM0MCGZW72EYq0Po4XG9PZqO484gSD4vpuLxYZhAXXBxolFjnKGi8c/qpwh4+7lXpkZ7RdzA3A5C6bA2ny4BHu1GiJZI8h9XidybT8+luL6pSSVRK5GltqlcWWV7XKQBKLSf950XmK0uhwsamK5TETvZEpyCpuQGJThuKwHqi0+4T7enmcvGhFoCLeIlovwOM73eMqHA/Dpr0BuZGf29aRZRj7Bfn/HQoSDqFqT4x9Uz8xQkZJfPefKU2sQGiL0LFtFpkh/1nKSwisTgCgvpPwYfxdvb9VMyqdDMLrr2KzSGPzq/Jsr9Yxza+5OVblTMwWyy3PeDeNVcHJKvxp3tuWbqIOxBCfAPZPJTpjq8xs+wKD8CRMaevyNLQHXQEEEKdgZFaDsNvAtW2TVhnPa/GiLzirDiTu2hv0IJ9Vl9QCHGA3oqO5OT/k1nsivEcteb9eIGpNx0PxYm33tkiyZea5sUpQ8HnOlaB7MtamEJzE/UxACAPQjWyYsKnMVghkx2pqlCIn7YRLoS1KvR4ifqtov/doBwF2nBHyN4GksMyyGDnvbaf4CXzk9iXeDifQDVGx/oz+CkpPj5HJAbS1FeZxVbUNNMTjdQSZj31kzh1RaNv5p5fNOc0dkFDx4cSAC0nqJGSBUgSMPama3rkTBkncEJkjyjlfrXIX/45LPEeJ9gthXmRJtm2Ov2OhTTlwYeeMny13mj1zJ4v2zGo8xnlVAjESkSva+e7PT0xwRJVkWgE2SUYtsFQ8dZ84d3eMLnkh/b7MYvzRPJ1oasloQHPeKW/84Do+tEv1j0KQ0mkQUQWZxnhDeHJagGDg55AbzIgARQK8Qvnm3iMAVRSGId2Ed6zlbFJwEMt62R+9aHXs2Mvx1sTebomhFZ5bIrEdKYNYDVlQYDzQAXVX8aiK+xJqGtwBAW3xGXbFz3OmaPYoHrybyptkw10k5Tp8S+pVnfHCtfg8giXK8xBLLtzN1W6cAuI8olN6XjbNsL42/ULmepIHl2r6Qfk402sxaCc0U4ntUMziDwhB6U7Yl19Z6+1SOTPKG3gF2gqExTfV2Noljm3R06rx0uutZOq56h2UftHdyb3Uh/AW5NdOcpVygiZWEB5cr6Lm2/u+gc1tJkGwdt2HeapuhNla2A81lt6/4IU6bMaeEDHP/olbLQ4CKa4jjOh2Ri84yvD0zWaDPqf+g8eFFSzzswNNIWFF2R2+9u9HIwJUuK/H8No9MDV9yD2UoLqtn7jez+EaXl5nzR17XYBMO1uhXvGmZ5wswsLmQUVfLv4dAqJs+fCumEcFVz1ZRKd1UKpbGgavpUiJUWZeGEQl3Wd9XpokdYIuT7kV1gBUPTw9HqSuCROHihDZ5mXCyHzjtKZxVsbjJu82+KX4NmlElU7wwstft/OpyGLUtCd1k1CRtR/ucLcmlzQVyz6vW2CaVJYK/FyqGiuNCyMnXz1MLDGJV91mjg0d4F+OcXQeOl97tf1yd++l2Qi0tXVj1NAg3WVsaZrsIesPE4INE74WFh10L6WnOpMM4kOkniavqdFx8IM7Hb9tmCuFlFUglBQ9IblXNnpz9Vi1YLBeKG8Lb+QMRsxrqpNvMZ3dotZpYf1dqMTRDntqRd2HL8oMAEI9vgKc7R/9gHqFtkhJxsjy5jLPWmNVdh9MfqZlVXpw+WiZh6mUVj5VsKhsM5fmNv2uyVjsm0ww+TEzSuR1bkWItEiZdAIgDdInWw31nrn5ZRF+bOL6w4RtqfF4lbqmP2BvoJ9E1fdNdsv4csGdt6/1pXbc8ueaI7yxwZBYPvxpSBCOSp7jRMm3WkdT6N4+DVkIu/Yx9Yb6ILj71RdUsxjA1xWmwn9TNJi5vXitDi5ucKMCnPteQWQoUDkgYmtxx+yJ6VWSQDQcVTuTFctlPB6wKvLLlblXu+kRf/Os5ipCYL/+VV4vnqoTK1yjXnBRO9mCRg2gdVacn6q/8w5yORj+LWpNJI1a+O0ykGFcpaUzf9EgD39zmYopLJUTA7ziIypsDM8e3pf6ccBX8K6kOo9AlYfoyA0zXo/QqAkRMJ+FrhAe4/DExUBlj6vd7J8hr9RrV9E82/FEbovXZ8tLd0D/GeC5RG8M5Kwb3KrAKn2h"
      }
    },
    "DataSources": {
      "0": {
        "Ident": "StiDataTableSource",
        "Name": "GlobalInternetUsers",
        "Alias": "GlobalInternetUsers",
        "Key": "8166223a6c5941059913537076590be0",
        "Columns": {
          "0": {
            "Name": "ContinentID",
            "Index": -1,
            "NameInSource": "ContinentID",
            "Alias": "ContinentID",
            "Type": "System.Double"
          },
          "1": {
            "Name": "Continent_Name",
            "Index": -1,
            "NameInSource": "Continent_Name",
            "Alias": "Continent_Name",
            "Type": "System.String"
          },
          "2": {
            "Name": "CountryID",
            "Index": -1,
            "NameInSource": "CountryID",
            "Alias": "CountryID",
            "Type": "System.Double"
          },
          "3": {
            "Name": "Country_Name",
            "Index": -1,
            "NameInSource": "Country_Name",
            "Alias": "Country_Name",
            "Type": "System.String"
          },
          "4": {
            "Name": "PopulationinMillions",
            "Index": -1,
            "NameInSource": "PopulationinMillions",
            "Alias": "PopulationinMillions",
            "Type": "System.Double"
          },
          "5": {
            "Name": "InternetusersinPercent",
            "Index": -1,
            "NameInSource": "InternetusersinPercent",
            "Alias": "InternetusersinPercent",
            "Type": "System.Object"
          },
          "6": {
            "Name": "InternetUsersinMillions",
            "Index": -1,
            "NameInSource": "InternetUsersinMillions",
            "Alias": "InternetUsersinMillions",
            "Type": "System.Double"
          }
        },
        "NameInSource": "Countries-by-continent2.GlobalInternetUsers"
      }
    },
    "Databases": {
      "0": {
        "Ident": "StiExcelDatabase",
        "Name": "Countries-by-continent2",
        "Alias": "Countries-by-continent2",
        "PathData": "resource://Countries-by-continent"
      }
    }
  },
  "Pages": {
    "0": {
      "Ident": "StiDashboard",
      "Name": "DashboardGlobalInternetUsage",
      "Guid": "db35f8756c1b4b82b2cfd25ed41bb282",
      "Alias": "Global Internet Usage",
      "Brush": "solid:",
      "Components": {
        "0": {
          "Ident": "StiRegionMapElement",
          "Name": "RegionMap1",
          "Guid": "4645f501a5d64905bf694a8b7fd10096",
          "ClientRectangle": "440,40,760,340",
          "Border": ";;;;",
          "DashboardInteraction": {
            "Ident": "RegionMap",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          },
          "Title": {
            "Text": "Global Internet Usage",
            "Visible": false,
            "Font": "Segoe UI;15.75;;",
            "HorAlignment": "Center"
          },
          "KeyMeter": {
            "Ident": "KeyMapMeter",
            "Expression": "GlobalInternetUsers.Country_Name",
            "Label": "Country Name"
          },
          "NameMeter": {
            "Ident": "NameMapMeter",
            "Expression": "GlobalInternetUsers.Country_Name",
            "Label": "Country Name"
          },
          "ValueMeter": {
            "Ident": "ValueMapMeter",
            "Expression": "GlobalInternetUsers.InternetUsersinMillions",
            "Label": "InternetUsers in Millions"
          },
          "MapID": "World",
          "DataFrom": "DataColumns",
          "MapType": "Heatmap",
          "ShortValue": true,
          "ShowName": "Short"
        },
        "1": {
          "Ident": "StiPivotTableElement",
          "Name": "PivotTable1",
          "Guid": "d51b3d45c1e04c7ca5c8a9324cdc1ab5",
          "ClientRectangle": "440,380,760,220",
          "Border": ";;;;",
          "Columns": {
            "0": {
              "Ident": "PivotColumn",
              "Expression": "GlobalInternetUsers.Country_Name",
              "Label": "Country Name",
              "HorAlignment": "Left",
              "TopN": {
                "Mode": "None"
              }
            }
          },
          "Rows": {
            "0": {
              "Ident": "PivotRow",
              "Expression": "GlobalInternetUsers.Continent_Name",
              "Label": "Continent Name",
              "TopN": {
                "Mode": "None"
              }
            }
          },
          "Summaries": {
            "0": {
              "Ident": "PivotSummary",
              "Expression": "Sum(GlobalInternetUsers.InternetUsersinMillions)",
              "Label": "InternetUsers in Millions",
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
              "Expression": "Sum(GlobalInternetUsers.PopulationinMillions)",
              "Label": "Population in Millions",
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
            "Text": "Population and Internet Users by Country",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          }
        },
        "2": {
          "Ident": "StiProgressElement",
          "Name": "Progress1",
          "Guid": "77ececf1cd734f0480634a6225ab86b0",
          "ClientRectangle": "0,400,440,200",
          "Border": ";;;;",
          "TopN": {
            "Mode": "None"
          },
          "Value": {
            "Ident": "ValueProgressMeter",
            "Expression": "Sum(GlobalInternetUsers.InternetUsersinMillions)",
            "Label": "Internet Users in Millions"
          },
          "Target": {
            "Ident": "TargetProgressMeter",
            "Expression": "Sum(GlobalInternetUsers.PopulationinMillions)",
            "Label": "Population in Millions"
          },
          "Title": {
            "Text": "Internet Users by Country",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          },
          "Font": ";13;;",
          "ColorEach": true
        },
        "3": {
          "Ident": "StiTextElement",
          "Name": "Text1",
          "Guid": "7e5367566a0b41738b5e974450b82a62",
          "ClientRectangle": "0,0,1200,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"36\"><text-align=\"Center\">Global Internet Usage</text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        },
        "4": {
          "Ident": "StiGaugeElement",
          "Name": "Gauge1",
          "Guid": "f1d0120b488848ad8c940d22d4e75cfe",
          "ClientRectangle": "0,220,440,180",
          "Border": ";;;;",
          "Value": {
            "Ident": "ValueGaugeMeter",
            "Expression": "Sum(GlobalInternetUsers.PopulationinMillions)",
            "Label": "PopulationinMillions"
          },
          "Title": {
            "Text": "Population by Country",
            "Font": "Arial Narrow;15.75;;",
            "HorAlignment": "Center"
          }
        },
        "5": {
          "Ident": "StiTreeViewElement",
          "Name": "TreeView1",
          "Guid": "c0e11a3801044dfeadad5a5000928d95",
          "ClientRectangle": "0,40,440,180",
          "Border": ";;;;",
          "KeyMeters": {
            "0": {
              "Ident": "KeyTreeViewMeter",
              "Expression": "GlobalInternetUsers.Continent_Name",
              "Label": "Continent_Name"
            },
            "1": {
              "Ident": "KeyTreeViewMeter",
              "Expression": "GlobalInternetUsers.Country_Name",
              "Label": "Country_Name"
            }
          },
          "Title": {
            "Text": "Tree View",
            "Visible": false
          }
        }
      },
      "Border": ";;2;;;;;solid:Black"
    }
  }
}