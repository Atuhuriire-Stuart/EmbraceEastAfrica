using System;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace EmbraceEastAfrica
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup
            RegisterRoutes();
        }

        protected void Session_Start(object sender, EventArgs e)
        {
            // Code that runs when a new session is started
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            // Code that runs at the beginning of each request
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {
            // Code that runs when attempting to authenticate the user
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            // Code that runs when an unhandled error occurs
            Exception exc = Server.GetLastError();
            // Log the error or handle it appropriately
        }

        protected void Session_End(object sender, EventArgs e)
        {
            // Code that runs when a session ends
        }

        protected void Application_End(object sender, EventArgs e)
        {
            // Code that runs on application shutdown
        }

        private void RegisterRoutes()
        {
            // Register your routes here if using routing
            // RouteTable.Routes.MapPageRoute("RouteName", "urlpattern", "~/page.aspx");
        }
    }
}