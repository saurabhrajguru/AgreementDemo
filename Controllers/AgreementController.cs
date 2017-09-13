using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AgreementDemo.Models;
using AgreementDemo.Helpers;

namespace AgreementDemo.Controllers
{
    [Route("api/[controller]")]
    public class AgreementController : Controller
    {
        private DataHelper dataHelper = null;

        public AgreementController(DataHelper dataHelper) 
        {
            this.dataHelper = dataHelper;
        }

        [HttpGet("[action]")]
        public IEnumerable<Agreement> List()
        {
            return dataHelper.GetList();
        }

        [HttpPost("[action]")]
        public Agreement Add([FromBody]Agreement agreement)
        {
            return dataHelper.Add(agreement);
        }

        [HttpPut("[action]")]
        public Agreement Update([FromBody]Agreement agreement)
        {
            return dataHelper.Update(agreement);
        }

        [HttpDelete("[action]")]
        public bool Delete(int id)
        {
            return dataHelper.Delete(id);
        }

        [HttpDelete("[action]")]
        public bool DeleteAll()
        {
            return dataHelper.DeleteAll();
        }
    }
}
