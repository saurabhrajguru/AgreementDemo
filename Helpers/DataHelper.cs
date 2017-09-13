using AgreementDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgreementDemo.Helpers
{
    public class DataHelper
    {
        private static List<Agreement> agreements = new List<Agreement>();
        private static int lastid = 1;

        public DataHelper()
        {
            GenerateDummyData();
        }

        public List<Agreement> GetList()
        {
            return agreements.OrderBy(a => a.Id).ToList();
        }

        public Agreement Add(Agreement agreement)
        {
            agreement.Id = lastid;
            lastid += 1;
            agreements.Add(agreement);
            return agreement;
        }

        public Agreement Update(Agreement agreement)
        {
            var agreementSearch = agreements.FirstOrDefault(a => a.Id == agreement.Id);
            if (agreementSearch != null)
            {
                agreementSearch.Name = agreement.Name;
                agreementSearch.Description = agreement.Description;
                agreementSearch.EndDate = agreement.EndDate;
                agreementSearch.StartDate = agreement.StartDate;
                agreementSearch.Terms = agreement.Terms;
                agreementSearch.Total = agreement.Total;

                return agreementSearch;
            }

            return agreement;
        }

        public bool Delete(int id)
        {
            var agreementSearch = agreements.FirstOrDefault(a => a.Id == id);
            if (agreementSearch != null)
            {
                agreements.Remove(agreementSearch);
                return true;
            }

            return false;
        }

        public bool DeleteAll()
        {
            agreements.Clear();
            return true;
        }

        private void GenerateDummyData()
        {
            agreements.Add(new Agreement() { Id = 1, Description = "Test Description 1", Name = "Test Name 1", StartDate = DateTime.Now.AddDays(-2), EndDate = DateTime.Now.AddDays(2), Terms = 1, Total = 45 });
            agreements.Add(new Agreement() { Id = 2, Description = "Test Description 2", Name = "Test Name 2", StartDate = DateTime.Now.AddDays(-5), EndDate = DateTime.Now.AddDays(5), Terms = 3, Total = 25 });
            agreements.Add(new Agreement() { Id = 3, Description = "Test Description 3", Name = "Test Name 3", StartDate = DateTime.Now.AddDays(-10), EndDate = DateTime.Now.AddDays(10), Terms = 5, Total = 75 });

            lastid = 4;
        }
    }
}
