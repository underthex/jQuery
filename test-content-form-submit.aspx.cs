using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class study_jQuery_test_content_form_submit : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string content = "";
        foreach (string s in Request.Form.Keys ){
            content += s.ToString() + ": " + Request.Form[s] + "<br>";
        }
        lblName.Text = content;
    }
}