using Propiedades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api_Producto.Controllers
{
    public class PositivoAlumnoController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Local"].ConnectionString);
        [HttpGet]
        public DataTable Get()
        {
            string m = "";
            SqlDataAdapter data = new SqlDataAdapter("select * from PositivoAlumno;", con);
            DataTable dataTable = new DataTable();
            data.Fill(dataTable);
            if (dataTable.Rows.Count > 0)
            {
                return dataTable;
            }
            else
            {
                return null;
            }

        }

        //public DataTable GetClienteHrupo()
        //{
        //    string m = "";
        //    SqlDataAdapter data = new SqlDataAdapter("Select FechaConfirmado,Comprobacion,Antecendentes,Riesgo,NumContagio,Extra from PositivoAlumno;", con);
        //    DataTable dataTable = new DataTable();
        //    data.Fill(dataTable);
        //    if (dataTable.Rows.Count > 0)
        //    {
        //        return dataTable;
        //    }
        //    else
        //    {
        //        return null;
        //    }

        //}

        [HttpPost]
        public string Post(PropPositivoAlumno prop)
        {
            SqlCommand cmd = new SqlCommand("Insert into PositivoAlumno values (" + prop.FechaConfirmado + ",'" + prop.Comprobacion + "','" + prop.Antecendentes + "'," + prop.Numcontagio + ",'" + prop.Extra + "'," + prop.F_Alumno+ ",'" + prop.Riesgo+ "')", con);
            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();
            if (i == 1)
            {
                return "Se inserto ";
            }
            else
            {
                return "Intenta de nuevo";
            }
        }
    }
}
