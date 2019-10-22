// External Modules
const expect = require('chai').expect;

// Pod Modules
let PodCommonService = require('pod-common-service');
let podCommon = new PodCommonService({ apiToken: 'API TOKEN' });

// Main Module
const PodBillingService = require('../lib/main');

// Variable Declaration & Initialization
let myApiToken = 'API TOKEN';
let podBillingService = new PodBillingService({
  apiToken: myApiToken
});
let issueInvoiceBody = {
  productList: [
    { productId: 0, price: 3, quantity: 2, productDescription: 'My first product!' },
    { productId: 0, price: 10, quantity: 10, productDescription: 'My Second Product!' }
  ],
  guildCode: 'INFORMATION_TECHNOLOGY_GUILD',
  userId: 1453911
  // metadata: { name: 'ehsan', name2: 'ehsan2' }
  // voucherHash: ['hash#1', 'hash#2']
  // deadline: new Date()
  // verificationNeeded: true
};
let preInvoiceObj = {
  productList: [{ productId: 0, price: 100, quantity: 2, productDescription: 'My first product!' }, { productId: 0, price: 200, quantity: 10, productDescription: 'My Second Product!' }],
  guildCode: 'INFORMATION_TECHNOLOGY_GUILD',
  userId: 1453911,
  redirectUri: 'http://www.google.com/'
};
let metaQuery = { field: 'name', is: 'ehsan' };
let offset = 0;
let size = 1;
let invoiceId;
let ott;
let dateTime1 = '1398/02/05 22:10:11';
let date1 = '1398/05/02';
let reduceBillingObj;
let creditorInvoiceId = 0;
let debtorInvoiceId = 0;
let futureInvoiceId = 0;
let guildCode = 'INFORMATION_TECHNOLOGY_GUILD';
let amount = 100;
let toolCode = 'SETTLEMENT_TOOL_SATNA';
let toolId = '080570100611513898506001';
let redirectUri = 'http://www.google.com/';
let callUri = 'http://www.google.com/';
let gateway = 'PEP';
let uniqueNumber;
let issueMultiInvoiceData = {
  data: {
    // redirectURL: 'http://www.google.com',
    // userId: 1453911,
    // currencyCode: 'EUR',
    // voucherHashs: '',
    // preferredTaxRate: 0.08,
    // verificationNeeded: '',
    // preview: '',
    mainInvoice: {
      // billNumber: '123456',
      guildCode: 'INFORMATION_TECHNOLOGY_GUILD',
      // metadata: '',
      // description: '',
      invoiceItemVOs: [{
        productId: 0,
        price: 80,
        quantity: 1,
        description: 'ss'
      }]
    },
    subInvoices: [{
      businessId: 3605,
      guildCode: 'INFORMATION_TECHNOLOGY_GUILD',
      // billNumber: '123456',
      // metadata: '',
      // description: '',
      invoiceItemVOs: [{
        productId: 0,
        price: 300,
        quantity: 1,
        description: 'Hello'
      }]
    },
    {
      businessId: 3605,
      guildCode: 'TOILETRIES_GUILD',
      // billNumber: '123456',
      // metadata: '',
      // description: '',
      invoiceItemVOs: [{
        productId: 0,
        price: 200,
        quantity: 1,
        description: 'Hello'
      }]
    }],
    // customerDescription: '',
    // customerMetadata: '',
    customerInvoiceItemVOs: [{
      productId: 0,
      price: 580,
      quantity: 1,
      description: 'Hello'
    }]
  }
};
let reduceMultiInvoiceData = {
  data: {
    // preferredTaxRate: 0,
    mainInvoice: {
      id: 3475069, // ID of main invioce
      reduceInvoiceItemVOs: [{
        id: 3512355,
        price: 0,
        quantity: 0,
        description: 'DESCRIPTION'
      }]
    },
    subInvoices: [{
      id: 3475070, // ID of subinvoice
      reduceInvoiceItemVOs: [{
        id: 3512356,
        price: 90,
        quantity: 9,
        description: 'DESCRIPTION'
      }]
    }],
    customerInvoiceItemVOs:
      [{
        id: 3512354,
        price: 90,
        quantity: 9,
        description: 'DESCRIPTION'
      }]
  }
};
let privateKey = '<RSAKeyValue><Modulus>p432JnQ+HxV2jzFv+i1bG3mEBoCrca0BcRiPBIjKJ+ay3IVVEx71C9IhTdIm1vnzzxufmpU5HA3IzUuo+YfVjybn6aZp78AjH2BInQyl43NNVGZyLBJ0YXnHKaZuWBlxnW25tzUshlJtphDHuHxaXDkuccKc0ze0BQjQ98/bBL0=</Modulus><Exponent>AQAB</Exponent><P>18o6JZPz6ftCukdjfYUfAlr5kUQuGE6aYVF7md493vbyx30FF5Js/8EstoHVXyI82BLm8UkSG0C8PMPKNIRJzw==</P><Q>xsbF16w14Foff1MXcuVW8jfZKbMKTdDpMEfzK8jQNROND1B3uLfxmFCLI3/SVuRYfPd65psxIxYn3V5Imq1Hsw==</Q><DP>cl0F9hZ0hcQZODpPex2LMqdebuOwfkdiQEN7+y8yoTFFt/4FLdn3lJAfj1Y97B5sGqPh62yrgPANEzM8vhqCNw==</DP><DQ>JzCfZwMr6By8owTF1cBDoSPDrAYBnQ/4Oa2l0tcXva8qG3/Y6tFRT59pn0kfNkR08cZ1M6wbRviiSXHCTMSnIw==</DQ><InverseQ>KXUY0Rtae0YgJ/QdZ6+AkvzuyYDohzRmrzY8AHgDUnNbYN5kzdsEAPC1fhkScPAA7MH420Fl2FH9V4f9I04yFg==</InverseQ><D>H2c4+i4RMow4Q1A1t4Lmr3iP6RQWjeCqA4Nh0qy8jsvrO+91aXcE4GlKuqYnh2Ujb+6ydCuBn6NpvihvDA2MVdF20KZW4PZX0Bq+yj/WV4hH9mOoUKE86rZIU90rHNF0aRRPRAaCaIXCExyK9LvnGcDKjX0liD5pWPHDL8J2/9U=</D></RSAKeyValue>';
// let myBizId = 3605;
// let otherBizId = 3612;
// let productId = 15530;
// otherApiToken = 'API TOKEN';

// #1
describe('API: issueInvoice ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }))
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #2
describe('API: createPreInvoice ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.createPreInvoice(Object.assign(preInvoiceObj, { ott: 'te9RGYweSK' }))
      .then(function (result) {
        console.log('!!!!!!!!!!!!!!!', JSON.stringify(result, null, 2), '!!!!!!!!!');
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log('==============>', error);
        done(new Error());
      });
  });
});

// #3
describe('API: getInvoiceList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.getInvoiceList({ offset: 0, size: 10, productIdList: [15530] })
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2), '======>', result.result.length, '========>', result.count);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #4
describe('API: payInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        invoiceId = result.result.id;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.payInvoice({ invoiceId: invoiceId })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #5
describe('API: sendInvoicePaymentSMS ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        invoiceId = result.result.id;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.sendInvoicePaymentSMS({ invoiceId: invoiceId })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #6
describe('API: getInvoiceListByMetadata ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.getInvoiceListByMetadata({ metaQuery: metaQuery, size: 3 })
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2), '======>', result.result.length, '========>', result.count);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #7
describe('API: getInvoiceListAsFile ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.getInvoiceListAsFile({ fromDate: dateTime1 })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #8 -> Needs Scenario
describe('API: verifyInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        invoiceId = result.result.id;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.verifyInvoice({ id: invoiceId })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #9
describe('API: cancelInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        invoiceId = result.result.id;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.cancelInvoice({ id: invoiceId })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #10
describe('API: reduceInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        console.log('------------------------>', JSON.stringify(result, null, 2));
        reduceBillingObj = {
          id: result.result.id,
          invoiceItemList: [
            { invoiceItemId: result.result.invoiceItemSrvs[0].id, price: 10, quantity: 1, itemDescription: 'first' },
            { invoiceItemId: result.result.invoiceItemSrvs[1].id, price: 10, quantity: 2, itemDescription: 'second' }
          ],
          preferredTaxRate: 0
        };
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.reduceInvoice(reduceBillingObj)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #11 -> Needs Scenario
describe('API: verifyAndCloseInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        invoiceId = result.result.id;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.verifyAndCloseInvoice({ id: invoiceId })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #12
describe('API: closeInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        invoiceId = result.result.id;
        return podBillingService.payInvoice({ invoiceId: invoiceId });
      })
      .then(function () {
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.closeInvoice({ id: invoiceId })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #13
describe('API: getInvoicePaymentLink ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        invoiceId = result.result.id;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.getInvoicePaymentLink({ invoiceId: invoiceId })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #14 -> Needs Scenario
describe('API: payInvoiceByInvoice ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.payInvoiceByInvoice({ creditorInvoiceId: creditorInvoiceId, debtorInvoiceId: debtorInvoiceId })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #15 -> Needs Scenario
describe('API: payInvoiceInFuture ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.payInvoiceInFuture({ invoiceId: futureInvoiceId, date: date1, guildCode: guildCode })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #16
describe('API: getExportList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.getExportList({ offset: offset, size: size })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #17
describe('API: requestWalletSettlement ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        console.log();
        ott = result.ott;
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.requestWalletSettlement(Object.assign({ amount: amount }, { ott: ott }))
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #18
describe('API: requestGuildSettlement ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.requestGuildSettlement(Object.assign({ amount: amount, guildCode: guildCode }, { ott: ott }))
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #19
describe('API: requestSettlementByTool ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.requestSettlementByTool(Object.assign({
      amount: amount,
      guildCode: guildCode,
      toolCode: toolCode,
      toolId: toolId
    }, { ott: ott }))
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #20
describe('API: listSettlements ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.listSettlements({ offset: offset, size: size })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #21
describe('API: addAutoSettlement ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.addAutoSettlement({ guildCode: guildCode })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #22
describe('API: removeAutoSettlement ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.removeAutoSettlement({ guildCode: guildCode })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #23
describe('API: getPayInvoiceByWalletLink ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        invoiceId = result.result.id;
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    console.log(podBillingService.getPayInvoiceByWalletLink({
      invoiceId: invoiceId,
      redirectUri: redirectUri,
      callUri: callUri
    }));
    done();
  });
});

// #24
describe('API: getPayInvoiceByUniqueNumberLink ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { ott: ott }));
      })
      .then(function (result) {
        uniqueNumber = result.result.uniqueNumber;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    console.log(podBillingService.getPayInvoiceByUniqueNumberLink({
      uniqueNumber: uniqueNumber,
      redirectUri: redirectUri,
      callUri: callUri,
      gateway: gateway
    }));
    done();
  });
});

// #25
describe('API: issueMultiInvoice ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.issueMultiInvoice(Object.assign(issueMultiInvoiceData, { ott: ott }))
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #26
describe('API: reduceMultiInvoice ', function () {
  this.timeout(10000);
  before('issueMultiInvoice', function (done) {
    podCommon.getOtt({})
      .then(function (result) {
        ott = result.ott;
        return podBillingService.issueMultiInvoice(Object.assign(issueMultiInvoiceData, { ott: ott }));
      })
      .then(function (result) {
        reduceMultiInvoiceData.data.mainInvoice.id = result.result.id;
        reduceMultiInvoiceData.data.mainInvoice.reduceInvoiceItemVOs[0].id = result.result.invoiceItemSrvs[0].id;
        reduceMultiInvoiceData.data.subInvoices[0].id = result.result.subInvoices[0].id;
        reduceMultiInvoiceData.data.subInvoices[0].reduceInvoiceItemVOs[0].id = result.result.subInvoices[0].invoiceItemSrvs[0].id;
        reduceMultiInvoiceData.data.customerInvoiceItemVOs[0].id = result.result.customerInvoice.invoiceItemSrvs[0].id;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
  it('correct request', function (done) {
    podBillingService.reduceMultiInvoice(reduceMultiInvoiceData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #27
describe('API: reduceMultiInvoiceAndCashOut ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.reduceMultiInvoiceAndCashOut(reduceMultiInvoiceData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// --------------------------------------------- Voucher ---------------------------------------------
// #28
describe('Method: defineCreditVoucher', function () {
  this.timeout(100000);
  let defineCreditVoucherData = {
    // ------ REQUIRED ------
    guildCode: guildCode,
    expireDate: '1398/11/12',
    vouchers: [
      {
        // ------ REQUIRED ------
        count: 1,
        amount: 1,
        name: 'voucher#1',
        description: 'This is the first voucher'

        // ------ OPTIONAL ------
        // hash: 'hash#1'
      },
      {
        count: 1,
        amount: 2,
        name: 'voucher#2',
        description: 'This is the second voucher'
      }
    ]

    // ------ OPTIONAL ------
    // limitedConsumerId: ''
    // currencyCode: ''
  };
  it('correct request', function (done) {
    podBillingService.defineCreditVoucher(defineCreditVoucherData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #29
describe('Method: defineDiscountAmountVoucher', function () {
  this.timeout(100000);
  let defineDiscountAmountVoucherData = {
    // ------ REQUIRED ------
    guildCode: guildCode,
    expireDate: '1398/11/12',
    vouchers: [
      {
        // ------ REQUIRED ------
        count: 1,
        amount: 1,
        name: 'voucher#1',
        description: 'This is the first voucher'

        // ------ OPTIONAL ------
        // hash: 'hash#1'
      },
      {
        count: 1,
        amount: 1,
        name: 'voucher#2',
        description: 'This is the second voucher'
      }
    ]

    // ------ OPTIONAL ------
    // productId: ''
    // dealerBusinessId: ''
    // limitedConsumerId: ''
    // currencyCode: ''
  };
  it('correct request', function (done) {
    podBillingService.defineDiscountAmountVoucher(defineDiscountAmountVoucherData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #30
describe('Method: defineDiscountPercentageVoucher', function () {
  this.timeout(100000);
  let defineDiscountPercentageVoucherData = {
    // ------ REQUIRED ------
    guildCode: guildCode,
    expireDate: '1398/11/12',
    vouchers: [
      {
        // ------ REQUIRED ------
        count: 1,
        amount: 1,
        name: 'voucher#125',
        discountPercentage: 22,
        description: 'This is the first voucher'

        // ------ OPTIONAL ------
        // hash: 'hash#1158'
      },
      {
        count: 1,
        amount: 1,
        name: 'voucher#258',
        discountPercentage: 22.5,
        description: 'This is the second voucher'
      }
    ],
    type: 8

    // ------ OPTIONAL ------
    // productId: ''
    // dealerBusinessId: ''
    // limitedConsumerId: ''
    // currencyCode: ''
  };

  it('correct request', function (done) {
    podBillingService.defineDiscountPercentageVoucher(defineDiscountPercentageVoucherData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #31
describe('Method: applyVoucher', function () {
  this.timeout(100000);
  let applyVoucherData = {
    // ------ REQUIRED ------
    // ott: '124',
    invoiceId: 5703466,
    voucherHash: ['voucher#1'],
    ott: '4444'

    // ------ OPTIONAL ------
    // preview: true | false,
  };
  it('correct request', function (done) {
    podBillingService.applyVoucher(applyVoucherData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #32
describe('Method: getVoucherList', function () {
  this.timeout(100000);
  let getVoucherListData = {
    // ------ REQUIRED ------
    offset: 0,

    // ------ OPTIONAL ------
    size: 2
    // consumerId: ''
    // hash: ''
    // name: ''
    // type: ''
    // guildCode: ''
    // currencyCode: ''
    // amountFrom: ''
    // amountTo: ''
    // discountPercentageFrom: ''
    // discountPercentageTo: ''
    // expireDateFrom: ''
    // expireDateTo: ''
    // productId: ''
    // consumDateFrom: ''
    // consumDateTo: ''
    // usedAmountFrom: ''
    // usedAmountTo: ''
    // active: ''
    // used: ''
  };
  it('correct request', function (done) {
    podBillingService.getVoucherList(getVoucherListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #33
describe('Method: deactivateVoucher', function () {
  this.timeout(100000);
  let deactivateVoucherData = {
    // ------ REQUIRED ------
    id: 261707

    // ------ OPTIONAL ------
  };
  it('correct request', function (done) {
    podBillingService.deactivateVoucher(deactivateVoucherData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #34
describe('Method: activateVoucher', function () {
  this.timeout(10000);
  let activateVoucherData = {
    // ------ REQUIRED ------
    id: 261707

    // ------ OPTIONAL ------
  };
  it('correct request', function (done) {
    podBillingService.activateVoucher(activateVoucherData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// --------------------------------------------- Direct Debate ---------------------------------------------
// #35
describe('Method: defineDirectWithdraw', function () {
  this.timeout(10000);
  let defineDirectWithdrawData = {
    // ------ REQUIRED ------
    username: '13898506',
    // privateKey: privateKey,
    privateKeyAddress: './test/key.xml',
    depositNumber: '1006115138985061',
    onDemand: false,
    minAmount: 100000,
    maxAmount: 200000,
    wallet: 'PODLAND_WALLET'
    // ------ OPTIONAL ------
  };

  it('correct request', function (done) {
    podBillingService.defineDirectWithdraw(defineDirectWithdrawData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(JSON.stringify(error, null, 2));
        done(new Error());
      });
  });
});

// #36
describe('Method: directWithdrawList', function () {
  this.timeout(10000);
  let directWithdrawListData = {
    // ------ REQUIRED ------
    // wallet: 'PODLAND_WALLET',
    offset: 0,
    size: 1

    // ------ OPTIONAL ------
  };
  it('correct request', function (done) {
    podBillingService.directWithdrawList(directWithdrawListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #37
describe('Method: updateDirectWithdraw', function () {
  this.timeout(10000);
  let updateDirectWithdrawData = {
    // ------ REQUIRED ------
    id: 121,
    username: '13898506',
    privateKey: privateKey,
    depositNumber: '1006115138985061',
    onDemand: true,
    minAmount: 10,
    maxAmount: 20,
    wallet: 'PODLAND_WALLET'
    // ------ OPTIONAL ------
  };
  it('correct request', function (done) {
    podBillingService.updateDirectWithdraw(updateDirectWithdrawData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #38
describe('Method: revokeDirectWithdraw', function () {
  this.timeout(10000);
  let revokeDirectWithdrawData = {
    // ------ REQUIRED ------
    id: 121

    // ------ OPTIONAL ------
  };
  it('correct request', function (done) {
    podBillingService.revokeDirectWithdraw(revokeDirectWithdrawData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// --------------------------------------------- RECENTLY ADDED ---------------------------------------------

// #39
describe('Method: payInvoiceByCredit', function () {
  this.timeout(10000);
  let payInvoiceByCreditData = {
    // ------ REQUIRED ------
    invoiceId: 6723179,
    ott: '6a11112d0da2dcf1'

    // ------ OPTIONAL ------
    // delegatorId: [0, 0]
    // delegationHash: ['HASH#1', 'HASH#2']
    // forceDelegation: true | false
    // wallet: 'WALLET'
  };
  it('correct request', function (done) {
    podBillingService.payInvoiceByCredit(payInvoiceByCreditData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #40
describe('Method: payAnyInvoiceByCredit', function () {
  this.timeout(10000);
  let payAnyInvoiceByCreditData = {
    // ------ REQUIRED ------
    invoiceId: 6699284,
    ott: 'da558bd914dd61ef',
    wallet: 'PODLAND_WALLET'

    // ------ OPTIONAL ------
    // delegatorId: [0, 0]
    // delegationHash: ['HASH#1', 'HASH#2']
    // forceDelegation: true | false
  };
  it('correct request', function (done) {
    podBillingService.payAnyInvoiceByCredit(payAnyInvoiceByCreditData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});
