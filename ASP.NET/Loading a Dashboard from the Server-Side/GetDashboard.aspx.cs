using System;
using System.Web.UI;
using System.IO;
using System.Text;

namespace Demo
{
    public partial class GetDashboard : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Get the dashboard ID
            var dashboardId = Page.Request.QueryString["id"];
            if (!string.IsNullOrEmpty(dashboardId))
            {
                // Calculate the path to the dashboard file
                var dashboardPath = Server.MapPath(string.Format("Dashboards/{0}.mrt", dashboardId));
                if (File.Exists(dashboardPath))
                {
                    // Load dashboard to the buffer
                    var buffer = File.ReadAllBytes(dashboardPath);

                    // Sent a dashboard to the client side as JSON data
                    this.Response.ClearContent();
                    this.Response.ClearHeaders();
                    this.Response.ContentType = "application/json";
                    this.Response.ContentEncoding = Encoding.UTF8;
                    this.Response.AddHeader("Content-Length", buffer.Length.ToString());
                    this.Response.BinaryWrite(buffer);
                    this.Response.End();
                }
            }
        }
    }
}