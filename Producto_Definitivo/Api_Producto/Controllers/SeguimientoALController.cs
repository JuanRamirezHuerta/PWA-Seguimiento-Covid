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
    public class SeguimientoALController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Local"].ConnectionString);
        [HttpGet]

        public DataTable Get()
        {
            string m = "";
            SqlDataAdapter data = new SqlDataAdapter("Select * from SeguimientoAL", con);
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

        //public DataTable GetClientesEGUIMIENTO()
        //{
        //    string m = "";
        //    SqlDataAdapter data = new SqlDataAdapter("Select  Fecha,Form_Comunica,Reporte,Entrevista,Extra from SeguimientoAl;", con);
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
        public string Post(PropGrupoCuatrimestre prop)
        {
            SqlCommand cmd = new SqlCommand("Insert into SeguimientoAL values (" + prop.F_ProgEd + "," + prop.F_Grupo + "," + prop.F_Cuatri + ",'" + prop.Turno + "','" + prop.Modalidad + "','" + prop.Extra + "')", con);
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
