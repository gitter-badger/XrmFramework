﻿using System;
using System.Linq;
using DG.XrmFramework.BusinessDomain.ServiceContext;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DG.XrmFramework.Tests
{
    [TestClass]
    public class TestExample : TestBase
    {
        [TestMethod]
        public void TestPrimaryContactIsCreated()
        {
            using (var context = new Xrm(orgAdminUIService))
            {
                var acc = new Account();
                acc.Id = orgAdminUIService.Create(acc);

                try
                {
                    orgAdminService.Update(new Account(acc.Id));
                    Assert.Fail();
                } catch(Exception e)
                {
                    Assert.IsInstanceOfType(e, typeof(NotImplementedException));
                }
            }
        }
    }
}
