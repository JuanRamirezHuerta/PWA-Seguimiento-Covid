using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Propiedades
{
    public class PropSeguimiento
    {
        public int Id_Seguimiento { get; set; }
        public int F_PositivoAl { get; set; }
        public int F_Medico { get; set; }
        public DateTime Fecha { get; set; }
        public string Form_comunicativa { get; set; }
        public string Reporte { get; set; }
        public string Entrevista { get; set; }
        public string Extra { get; set; }
    }
}
