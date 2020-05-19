using System;

namespace my_new_app.Models
{
    public class DalConnection
{
    public static string DBUser = "sa";
    public static string DBPassword = "SQLvb$92";

    public static string DBDatabase = "EDB";

    public static string DBServer = "192.168.10.6";

    public static string ConnectionString = "Data Source=" + DBServer + ";Initial Catalog=" + DBDatabase + ";User Id=" + DBUser + ";Password=" + DBPassword + ";";
}
}
