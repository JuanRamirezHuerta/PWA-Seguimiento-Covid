using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Threading;
using System.Web;
using System.Web.Cors;
using System.Web.Http.Cors;


namespace Api_Producto.App_Start
{
    public class AccesPolicyCors:Attribute, ICorsPolicyProvider
    {
        public async Task<CorsPolicy> GetCorsPolicyAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            var corsRequestContex = request.GetCorsRequestContext();
            var originRequested = corsRequestContex.Origin;

            if (await IsOriginFromCustomer(originRequested))
            {
                var policy = new CorsPolicy
                {
                    AllowAnyHeader = true,
                    AllowAnyMethod = true,
                };

                policy.Origins.Add(originRequested);



                return policy; ;

            }
            return null;
        }

        public async Task<bool> IsOriginFromCustomer(string originRequested)
        {
            return true;
        }
    }
}