using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Propiedades;
using Newtonsoft.Json;

namespace Api_Producto.Controllers
{
    public class GrupoCuatrimestreController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Local"].ConnectionString);
        [HttpGet]

        public DataTable Get()
        {
           
            SqlDataAdapter data = new SqlDataAdapter("Select * from GrupoCuatrimestre",con);
            DataTable dataTable= new DataTable();
            data.Fill(dataTable);
            if(dataTable.Rows.Count > 0)
            {
                return dataTable;
            }
            else
            {
                return null;
            }

        }
   

        [HttpPost]
        public string Post(PropGrupoCuatrimestre pro)
        {

            string m = "";
            SqlCommand cmd = new SqlCommand("Insert into GrupoCuatrimestre values (" + pro.F_ProgEd + "," + pro.F_Grupo + "," + pro.F_Cuatri + ",'" + pro.Turno + "','" + pro.Modalidad + "','" + pro.Extra + "')", con);
            con.Open();
            int i = cmd.ExecuteNonQuery();
            
            if (i == 1)
            {
                return "Insertado";
            }
            else
            {
                return "Fallido";
            }
            con.Close();
        }
    }
}
