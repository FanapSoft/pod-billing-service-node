// External Modules
const expect = require('chai').expect;

// Main Module
const PodBillingService = require('../lib/main');

let myApiToken = 'API TOKEN';
// otherApiToken = 'API TOKEN';
// Variable Declaration & Initialization
let podBillingService = new PodBillingService({
  apiToken: myApiToken
});
let issueInvoiceBody = {
  productList: [
    { productId: 0, price: 100, quantity: 2, productDescription: 'My first product!' },
    { productId: 0, price: 200, quantity: 10, productDescription: 'My Second Product!' }
  ],
  guildCode: 'INFORMATION_TECHNOLOGY_GUILD',
  userId: 1453911,
  metadata: { name: 'ehsan' }
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
let amount = 1000;
let toolCode = 'SETTLEMENT_TOOL_SATNA';
let toolId = '080570100611513898506001';
let redirectUri = 'http://www.google.com/';
let callUri = 'http://www.google.com/';
let gateway = 'PEP';
let uniqueNumber;
// let myBizId = 3605;
let otherBizId = 3612;
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
        price: 0,
        quantity: 0,
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
        price: 110,
        quantity: 10,
        description: 'Hello'
      }]
    }],
    // customerDescription: '',
    // customerMetadata: '',
    customerInvoiceItemVOs: [{
      productId: 0,
      price: 110,
      quantity: 10,
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
let productId = 15530;

// #1
describe('API: getOtt ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('ott');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
});

// #2
describe('API: issueInvoice ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podBillingService.getOtt({})
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
    podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }))
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
});

// #3
describe('API: createPreInvoice ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podBillingService.getOtt({})
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
    podBillingService.createPreInvoice(Object.assign(preInvoiceObj, { ott: ott }))
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('HasError', false);
        expect(result).to.have.property('Result');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
});

// #4
describe('API: getInvoiceList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.getInvoiceList({ offset: offset, size: size })
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
describe('API: payInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
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

// #6
describe('API: sendInvoicePaymentSMS ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
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

// #7
describe('API: getInvoiceListByMetadata ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.getInvoiceListByMetadata({ metaQuery: metaQuery, size: 1 })
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

// #8
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

// #9 -> Needs Scenario
describe('API: verifyInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
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

// #10
describe('API: cancelInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
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

// #11
describe('API: reduceInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
      })
      .then(function (result) {
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
      .catch(function () {
        // console.log(error);
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

// #12 -> Needs Scenario
describe('API: verifyAndCloseInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
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

// #13
describe('API: closeInvoice ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
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

// #14
describe('API: getInvoicePaymentLink ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
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

// #15 -> Needs Scenario
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

// #16 -> Needs Scenario
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

// #17
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

// #18
describe('API: requestWalletSettlement ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podBillingService.getOtt({})
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
    podBillingService.requestWalletSettlement(Object.assign({ amount: amount }, { _ott_: ott }))
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
describe('API: requestGuildSettlement ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podBillingService.getOtt({})
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
    podBillingService.requestGuildSettlement(Object.assign({ amount: amount, guildCode: guildCode }, { _ott_: ott }))
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
describe('API: requestSettlementByTool ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podBillingService.getOtt({})
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
    }, { _ott_: ott }))
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

// #22
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

// #23
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

// #24
describe('API: getPayInvoiceByWalletLink ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
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
    console.log(podBillingService.getPayInvoiceByWalletLink({
      invoiceId: invoiceId,
      redirectUri: redirectUri,
      callUri: callUri
    }));
    done();
  });
});

// #25
describe('API: getPayInvoiceByUniqueNumberLink ', function () {
  this.timeout(10000);
  before('issueInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
      })
      .then(function () {
        return podBillingService.issueInvoice(Object.assign(issueInvoiceBody, { _ott_: ott }));
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
  });
});

// #26
describe('API: guildList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.guildList({ size: 2 })
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

// #27
describe('API: addDealer ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.addDealer({ dealerBizId: otherBizId })
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

// #28
describe('API: dealerList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.dealerList({})
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
describe('API: enableDealer ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.enableDealer({ dealerBizId: otherBizId })
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
describe('API: disableDealer ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.disableDealer({ dealerBizId: otherBizId })
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
describe('API: businessDealingList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.businessDealingList({})
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
describe('API: issueMultiInvoice ', function () {
  this.timeout(10000);
  before('getOtt', function (done) {
    podBillingService.getOtt({})
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
    podBillingService.issueMultiInvoice(Object.assign(issueMultiInvoiceData, { _ott_: ott }))
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
describe.only('API: reduceMultiInvoice ', function () {
  this.timeout(10000);
  before('issueMultiInvoice', function (done) {
    podBillingService.getOtt({})
      .then(function (result) {
        ott = result.ott;
        return podBillingService.issueMultiInvoice(Object.assign(issueMultiInvoiceData, { _ott_: ott }));
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

// #34
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

// #35
describe('API: addDealerProductPermission ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.addDealerProductPermission({ dealerBizId: otherBizId, productId: productId })
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

// #36
describe('API: dealerProductPermissionList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.dealerProductPermissionList({})
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
describe('API: dealingProductPermissionList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.dealingProductPermissionList({})
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
describe('API: disableDealerProductPermission ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.disableDealerProductPermission({ dealerBizId: otherBizId, productId: productId })
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

// #39
describe('API: enableDealerProductPermission ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podBillingService.enableDealerProductPermission({ dealerBizId: otherBizId, productId: productId })
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
