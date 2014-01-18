using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class study_jQuery_test_content : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string content = "Access granted for (name) : " + Request.QueryString["name"] + "<br>";
        if(Request.QueryString["images"] != null){
        	string images = Request.QueryString["images"];
        	for(int i=0; i<=5; i++){
        		content += "<img id=\"img" + images + i + "\" src=\"http://lorempixel.com/95/95/" + images + "/" + i + "\">&nbsp;";
        	}
        }
        lblName.Text = content;
    }
}