const PodBillingService = require('pod-billing-service');

// Variable Declaration & Initialization
let podBilling = new PodBillingService({
  apiToken: 'API TOKEN' // Required
  // tokenIssuer: 0 | 1 - Optional
});

// *****************************************************************
// #1
// function: issueInvoice
let issueInvoiceData = {
  // ------ REQUIRED ------
  ott: 'OTT',
  productList: [
    { productId: 0, price: 0, quantity: 0, productDescription: 'DESCRIPTION' },
    { productId: 0, price: 0, quantity: 0, productDescription: 'DESCRIPTION' }
  ],
  guildCode: 'GUILD CODE'

  // ------ OPTIONAL ------
  // redirectURL: 'REDIRECT URL'
  // userId: USER ID
  // billNumber: 'BILL NUMBER'
  // description: 'DESCRIPTION'
  // deadline: 'DEADLINE'
  // currencyCode: 'CURRENCY CODE'
  // addressId: 0
  // voucherHash: 'VOUCHER HASH'
  // preferredTaxRate: 0
  // verificationNeeded: true | false
  // verifyAfterTimeout: true | false
  // preview: true | false
  // metadata: OBJECT
  // safe: true | false
  // postVoucherEnabled: 'POST VOUCHER ENABLED'
  // hasEvent: 'HAS EVENT'
  // eventTitle: 'EVENT TITLE'
  // eventTimeZone: 'TIME ZONE'
  // eventReminders: [{},{}] // Array of objects
  // eventDescription: 'DESCRIPTION'
  // eventMetadat: OBJECT
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.issueInvoice(issueInvoiceData)
  .then(function (result) {
    console.log('function: issueInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error issueInvoice ============>', error);
  });

// *****************************************************************
// #2
// function: createPreInvoice
let createPreInvoiceData = {
  // ------ REQUIRED ------
  ott: 'OTT',
  productList: [
    { productId: 0, price: 0, quantity: 0, productDescription: 'My first product!' },
    { productId: 0, price: 0, quantity: 0, productDescription: 'My Second Product!' }
  ],
  guildCode: 'GUILD CODE',
  redirectURL: 'REDIRECT URL',
  userId: 0

  // ------ OPTIONAL ------
  // callUrl: 'CALL URL'
  // billNumber: 'BILL NUMBER'
  // description: 'DESCRIPTION'
  // deadline: 'DEADLINE'
  // currencyCode: 'CURRENCY CODE'
  // addressId: 0
  // preferredTaxRate: 0
  // verificationNeeded: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.createPreInvoice(createPreInvoiceData)
  .then(function (result) {
    console.log('function: createPreInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error createPreInvoice ============>', error);
  });

// *****************************************************************
// #3
// function: getInvoiceList
let getInvoiceListData = {
  // ------ REQUIRED ------
  offset: 0

  // ------ OPTIONAL ------
  // size: 0
  // id: 0
  // billNumber: 'BILL NUMBER'
  // uniqueNumber: 'UNIQUE NUMBER'
  // trackerId: 0
  // fromDate: 'YYYY/MM/DD | Date Object'
  // toDate: 'YYYY/MM/DD | Date Object'
  // isCanceled: true | false
  // isPayed: true | false
  // isClosed: true | false
  // isWaiting: true | false
  // guildCode: 'GUILD CODE'
  // referenceNumber: 'REFERENCE NUMBER'
  // userId: 0
  // issuerId: 0
  // query: 'QUERY'
  // firstId: 0
  // lastId: 0
  // productIdList: [0, 0] // Array of integers
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.getInvoiceList(getInvoiceListData)
  .then(function (result) {
    console.log('function: getInvoiceList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getInvoiceList ============>', error);
  });

// *****************************************************************
// #4
// function: payInvoice
let payInvoiceData = {
  // ------ REQUIRED ------
  invoiceId: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.payInvoice(payInvoiceData)
  .then(function (result) {
    console.log('function: payInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error payInvoice ============>', error);
  });

// *****************************************************************
// #5
// function: sendInvoicePaymentSMS
let sendInvoicePaymentSMSData = {
  // ------ REQUIRED ------
  invoiceId: 0

  // ------ OPTIONAL ------
  // wallet: 'WALLET NAME'
  // callbackUri: 'CALLBACK URI'
  // redirectUri: 'REDIRECT URI'
  // delegationId: [0, 0] // Array of Integers
  // forceDeligation: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.sendInvoicePaymentSMS(sendInvoicePaymentSMSData)
  .then(function (result) {
    console.log('function: sendInvoicePaymentSMS ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error sendInvoicePaymentSMS ============>', error);
  });

// *****************************************************************
// #6
// function: getInvoiceListByMetadata
let getInvoiceListByMetadataData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // metaQuery: {} // Object
  // offset: 0
  // size: 0
  // isPayed: true | false
  // isCancelled: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.getInvoiceListByMetadata(getInvoiceListByMetadataData)
  .then(function (result) {
    console.log('function: getInvoiceListByMetadata ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getInvoiceListByMetadata ============>', error);
  });

// *****************************************************************
// #7
// function: getInvoiceListAsFile

let getInvoiceListAsFileData = {
  // ------ REQUIRED (One of these fields is required) ------
  lastNRows: 0,
  fromDate: 'YYYY/MM/DD HH:MM:SS | YYYY/MM/DD | Date Object',
  toDate: 'YYYY/MM/DD HH:MM:SS | YYYY/MM/DD | Date Object'

  // ------ OPTIONAL ------
  // id: ID
  // billNumber: 'BILL NUMBER'
  // uniqueNumber: 'UNIQUE NUMBER'
  // trackerId: 0
  // isCancelled: true | false
  // isPayed: true | false
  // isClosed: true | false
  // isWaiting: true | false
  // guildCode: 'GUILD CODE'
  // referenceNumber: 'REFERENCE NUMBER'
  // query: 'QUERY'
  // productIdList: [0, 0] Array of Integers
  // callbackUrl: 'CALL BACK URL'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.getInvoiceListAsFile(getInvoiceListAsFileData)
  .then(function (result) {
    console.log('function: getInvoiceListAsFile ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getInvoiceListAsFile ============>', error);
  });

// *****************************************************************
// #8
// function: verifyInvoice
// set the verificationNeeded to true when you are creating an invoice, then pay the invoice and call the verifyInvoice

let verifyInvoiceData = {
  // ------ REQUIRED (One of these fields is required) ------
  id: 0, // Invoice ID
  billNumber: 'BILLNUMBER'

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.verifyInvoice(verifyInvoiceData)
  .then(function (result) {
    console.log('function: verifyInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error verifyInvoice ============>', error);
  });

// *****************************************************************
// #9
// function: cancelInvoice

let cancelInvoiceData = {
  // ------ REQUIRED ------
  id: 0 // Invoice ID

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.cancelInvoice(cancelInvoiceData)
  .then(function (result) {
    console.log('function: cancelInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error cancelInvoice ============>', error);
  });

// *****************************************************************
// #10
// function: reduceInvoice
let reduceInvoiceData = {
  // ------ REQUIRED ------
  id: 0, // INVOICE ID
  invoiceItemList: [
    { productId: 0, price: 0, quantity: 0, productDescription: 'DESCRIPTION' },
    { productId: 0, price: 0, quantity: 0, productDescription: 'DESCRIPTION' }
  ]

  // ------ OPTIONAL ------
  // preferredTaxRate: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.reduceInvoice(reduceInvoiceData)
  .then(function (result) {
    console.log('function: reduceInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error reduceInvoice ============>', error);
  });

// *****************************************************************
// #11
// function: verifyAndCloseInvoice
// set the verificationNeeded to true when you are creating an invoice, then pay the invoice and call the verifyInvoice

let verifyAndCloseInvoiceData = {
  // ------ REQUIRED ------
  id: 0 // INVOICE ID

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.verifyAndCloseInvoice(verifyAndCloseInvoiceData)
  .then(function (result) {
    console.log('function: verifyAndCloseInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error verifyAndCloseInvoice ============>', error);
  });

// *****************************************************************
// #12
// function: closeInvoice

let closeInvoiceData = {
  // ------ REQUIRED ------
  id: 0 // INVOICE ID

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.closeInvoice(closeInvoiceData)
  .then(function (result) {
    console.log('function: closeInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error closeInvoice ============>', error);
  });

// *****************************************************************
// #13
// function: getInvoicePaymentLink

let getInvoicePaymentLinkData = {
  // ------ REQUIRED ------
  invoiceId: 0 // INVOICE ID

  // ------ OPTIONAL ------
  // callbackUri: 'CALLBACK URI'
  // redirectUri: 'REDIRECT URI'
  // gateway: 'PEP'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.getInvoicePaymentLink(getInvoicePaymentLinkData)
  .then(function (result) {
    console.log('function: getInvoicePaymentLink ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getInvoicePaymentLink ============>', error);
  });

// *****************************************************************
// #14
// function: payInvoiceByInvoice

let payInvoiceByInvoiceData = {
  // ------ REQUIRED ------
  creditorInvoiceId: 0, // INVOICE ID
  debtorInvoiceId: 0 // INVOICE ID

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.payInvoiceByInvoice(payInvoiceByInvoiceData)
  .then(function (result) {
    console.log('function: payInvoiceByInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error payInvoiceByInvoice ============>', error);
  });

// *****************************************************************
// #15
// function: payInvoiceInFuture

let payInvoiceInFutureData = {
  // ------ REQUIRED ------
  invoiceId: 0, // INVOICE ID
  date: 'YYYY/MM/DD | Date Object'

  // ------ OPTIONAL (Use just one of them) ------
  // guildCode: 'GUILD CODE'
  // wallet: 'WALLET'

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.payInvoiceInFuture(payInvoiceInFutureData)
  .then(function (result) {
    console.log('function: payInvoiceInFuture ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error payInvoiceInFuture ============>', error);
  });

// *****************************************************************
// # 16
// function: getExportList

let getExportListData = {
  // ------ REQUIRED ------
  offset: 0,
  sie: 0

  // ------ OPTIONAL ------
  // id: 0
  // statusCode: 'EXPORT_SERVICE_STATUS_CREATED' | 'EXPORT_SERVICE_STATUS_RUNNING' |'EXPORT_SERVICE_STATUS_SUCCESSFUL' | 'EXPORT_SERVICE_STATUS_FAILED'
  // serviceUrl: 'SERVICE URL'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.getExportList(getExportListData)
  .then(function (result) {
    console.log('function: getExportList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getExportList ============>', error);
  });

// *****************************************************************
// #17
// function: requestWalletSettlement

let requestWalletSettlementData = {
  // ------ REQUIRED ------
  ott: 'OTT',
  amount: 0

  // ------ OPTIONAL ------
  // wallet: 'WALLET'
  // firstName: 'FIRST NAME'
  // lastName: 'LAST NAME'
  // sheba: 'SHEBA WITHOUT IR'
  // currencyCode: 'CURRENCY'
  // uniqueId: 0
  // description: 'DESCRIPTION'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.requestWalletSettlement(requestWalletSettlementData)
  .then(function (result) {
    console.log('function: requestWalletSettlement ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error requestWalletSettlement ============>', error);
  });

// *****************************************************************
// #18
// function: requestGuildSettlement
let requestGuildSettlementData = {
  // ------ REQUIRED ------
  ott: 'OTT',
  amount: 0,
  guildCode: 'GUILD CODE'

  // ------ OPTIONAL ------
  // firstName: 'FIRST NAME'
  // lastName: 'LAST NAME'
  // sheba: 'SHEBA WITHOUT IR'
  // currencyCode: 'CURRENCY'
  // uniqueId: 0
  // description: 'DESCRIPTION'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.requestGuildSettlement(requestGuildSettlementData)
  .then(function (result) {
    console.log('function: requestGuildSettlement ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error requestGuildSettlement ============>', error);
  });

// *****************************************************************
// #19
// function: requestSettlementByTool

let requestSettlementByToolData = {
  // ------ REQUIRED ------
  ott: 'OTT',
  amount: 0,
  guildCode: 'GUILD CODE',
  toolCode: 'TOLL CODE', // 'SETTLEMENT_TOOL_SATNA' | 'SETTLEMENT_TOOL_PAYA' |'SETTLEMENT_TOOL_CARD'
  toolId: 'TOOL ID'

  // ------ OPTIONAL ------
  // firstName: 'FIRST NAME'
  // lastName: 'LAST NAME'
  // currencyCode: 'CURRENCY'
  // uniqueId: 0
  // description: 'DESCRIPTION'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.requestSettlementByTool(requestSettlementByToolData)
  .then(function (result) {
    console.log('function: requestSettlementByTool ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error requestSettlementByTool ============>', error);
  });

// *****************************************************************
// #20
// function: listSettlements
let listSettlementsData = {
  // ------ REQUIRED ------
  offset: 0

  // ------ OPTIONAL ------
  // size: SIZE
  // statusCode: 'SETTLEMENT_REQUESTED' | 'SETTLEMENT_SENT' | 'SETTLEMENT_DONE'
  // currencyCode: 'CURRENCY'
  // fromAmount: 0
  // toAmount: 0
  // fromDate: 'YYYY/MM/DD | Date Object'
  // toDate: 'YYYY/MM/DD | Date Object'
  // uniqueId: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.listSettlements(listSettlementsData)
  .then(function (result) {
    console.log('function: listSettlements ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error listSettlements ============>', error);
  });

// *****************************************************************
// #21
// function: addAutoSettlement
let addAutoSettlementData = {
  // ------ REQUIRED ------
  guildCode: 'GUILD CODE'

  // ------ OPTIONAL ------
  // firstName: 'FIRST NAME'
  // lastName: 'LAST NAME'
  // sheba: 'SHEBA WITHOUT IR'
  // currencyCode: 'CURRENCY'
  // instant:  true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.addAutoSettlement(addAutoSettlementData)
  .then(function (result) {
    console.log('function: addAutoSettlement ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addAutoSettlement ============>', error);
  });

// *****************************************************************
// #22
// function: removeAutoSettlement

let removeAutoSettlementData = {
  // ------ REQUIRED ------
  guildCode: 'GUILD CODE'

  // ------ OPTIONAL ------
  // currencyCode: 'CURRENCY'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.removeAutoSettlement(removeAutoSettlementData)
  .then(function (result) {
    console.log('function: addAutoSettlement ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addAutoSettlement ============>', error);
  });

// *****************************************************************
// #23
// function: getPayInvoiceByWalletLink

let getPayInvoiceByWalletLinkData = {
  // ------ REQUIRED ------
  invoiceId: 0 // INVOICEID

  // ------ OPTIONAL ------
  // redirectUri: 'REDIRECT URI'
  // callUri: 'CALL URI'
  // scApiKey: ' SC API KEY'
};

try {
  let url = podBilling.getPayInvoiceByWalletLink(getPayInvoiceByWalletLinkData);
  console.log('function: addAutoSettlement ============>', url, '\n');
}
catch (error) {
  console.log('error getPayInvoiceByWalletLink ============>', error);
}
// *****************************************************************
// #24
// function: getPayInvoiceByUniqueNumberLink

// *****************************************************************
// #25
// function: issueMultiInvoice

let issueMultiInvoiceData = {
  // ------ REQUIRED ------
  data: {
    // redirectURL: 'REDIRECT URL',
    // userId: 0, // USER ID
    // currencyCode: 'CURRENCY', // OPTIONAL
    // voucherHashs: ARRAY OF STRINGS,
    // preferredTaxRate: 0, // OPTIONAL
    // verificationNeeded: true | false, // OPTIONAL
    // preview: true | false, // OPTIONAL
    mainInvoice: {
      // billNumber: 'BILL NUMBER', // OPTIONAL
      guildCode: 'GUILD CODE',
      // metadata: OBJECT, // OPTIONAL
      // description: 'DESCRIPTION', // OPTIONAL
      invoiceItemVOs: [{
        productId: 0,
        price: 0,
        quantity: 0,
        description: 'DESCRIPTION'
      }]
    },
    subInvoices: [{
      businessId: 0, // ID
      guildCode: 'GUILD CODE',
      // billNumber: 'BILL NUMBER', // OPTIONAL
      // metadata: OBJECT, // OPTIONAL
      // description: 'DESCRIPTION', // OPTIONAL
      invoiceItemVOs: [{
        productId: 0,
        price: 0,
        quantity: 0,
        description: 'DESCRIPTION'
      }]
    }],
    // customerDescription: 'DESCRIPTION', // OPTIONAL
    // customerMetadata: OBJECT, // OPTIONAL
    customerInvoiceItemVOs: [{
      productId: 0,
      price: 0,
      quantity: 0,
      description: 'DESCRIPTION'
    }]
  }

  // ------ OPTIONAL ------
  // delegatorId: [0, 0]
  // delegationHash: ['HASH#1', 'HASH#2']
  // forceDelegation: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.issueMultiInvoice(issueMultiInvoiceData)
  .then(function (result) {
    console.log('function: issueMultiInvoice ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error issueMultiInvoice ============>', error);
  });

// *****************************************************************
// #26
// function: reduceMultiInvoice
let reduceMultiInvoiceData = {
  // ------ REQUIRED ------
  data: {
    preferredTaxRate: 0, // CHANGE ZERO TO A VALUE LESS THAN THE ORIGINAL INVOICE
    mainInvoice: {
      id: 0,
      reduceInvoiceItemVOs: [{
        id: 0,
        price: 0,
        quantity: 0,
        description: 'DESCRIPTION'
      }]
    },
    subInvoices: [{
      id: 0,
      reduceInvoiceItemVOs: [{
        id: 0,
        price: 0,
        quantity: 0,
        description: 'DESCRIPTION'
      }]
    }],
    customerInvoiceItemVOs:
      [{
        id: 0,
        price: 0,
        quantity: 0,
        description: 'DESCRIPTION'
      }]
  }
  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.reduceMultiInvoice({ data: reduceMultiInvoiceData })
  .then(function (result) {
    console.log('function: reduceMultiInvoice ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error reduceMultiInvoice ============>', error);
  });

// *****************************************************************
// #27
// function: reduceMultiInvoiceAndCashOut
let reduceMultiInvoiceAndCashOutData = {
  // ------ REQUIRED ------
  data: {
    preferredTaxRate: 0, // CHANGE ZERO TO A VALUE LESS THAN THE ORIGINAL INVOICE
    mainInvoice: {
      id: 0,
      reduceInvoiceItemVOs: [{
        id: 0,
        price: 0,
        quantity: 0,
        description: 'DESCRIPTION'
      }]
    },
    subInvoices: [{
      id: 0,
      reduceInvoiceItemVOs: [{
        id: 0,
        price: 0,
        quantity: 0,
        description: 'DESCRIPTION'
      }]
    }],
    customerInvoiceItemVOs:
      [{
        id: 0,
        price: 0,
        quantity: 0,
        description: 'DESCRIPTION'
      }]
  }
  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.reduceMultiInvoiceAndCashOut(reduceMultiInvoiceAndCashOutData)
  .then(function (result) {
    console.log('function: reduceMultiInvoiceAndCashOut ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error reduceMultiInvoiceAndCashOut ============>', error);
  });

// --------------------------------------------- Voucher ---------------------------------------------
// #28
// function: defineCreditVoucher
let defineCreditVoucherData = {
  // ------ REQUIRED ------
  guildCode: 'GUILD CODE',
  expireDate: 'YYYY/MM/DD | Date Object',
  vouchers: [
    {
      // ------ REQUIRED ------
      count: 0,
      amount: 0,
      name: 'NAME',
      description: 'DESCRIPTION'

      // ------ OPTIONAL ------
      // hash: 'HASH'
    },
    {
      // ------ REQUIRED ------
      count: 0,
      amount: 0,
      name: 'NAME',
      description: 'DESCRIPTION'

      // ------ OPTIONAL ------
      // hash: 'HASH'
    }
  ]

  // ------ OPTIONAL ------
  // limitedConsumerId: 0
  // currencyCode: 'CURRENCY'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.defineCreditVoucher(defineCreditVoucherData)
  .then(function (result) {
    console.log('function: defineCreditVoucher ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error defineCreditVoucher ============>', error);
  });

// *****************************************************************
// #29
// function: defineDiscountAmountVoucher

let defineDiscountAmountVoucherData = {
  // ------ REQUIRED ------
  guildCode: 'GUILD CODE',
  expireDate: 'YYYY/MM/DD | Date Object',
  vouchers: [
    {
      // ------ REQUIRED ------
      count: 0,
      amount: 0,
      name: 'NAME',
      description: 'DESCRIPTION'

      // ------ OPTIONAL ------
      // hash: 'HASH'
    },
    {
      // ------ REQUIRED ------
      count: 0,
      amount: 0,
      name: 'NAME',
      description: 'DESCRIPTION'

      // ------ OPTIONAL ------
      // hash: 'HASH'
    }
  ]

  // ------ OPTIONAL ------
  // productId: [0, 0]
  // dealerBusinessId: [0, 0]
  // limitedConsumerId: 0
  // currencyCode: 'CURRENCY'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.defineDiscountAmountVoucher(defineDiscountAmountVoucherData)
  .then(function (result) {
    console.log('function: defineDiscountAmountVoucher ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error defineDiscountAmountVoucher ============>', error);
  });

// *****************************************************************
// #30
// function: defineDiscountPercentageVoucher
let defineDiscountPercentageVoucherData = {
  // ------ REQUIRED ------
  guildCode: 'GUILD CODE',
  expireDate: 'YYYY/MM/DD | Date Object',
  vouchers: [
    {
      // ------ REQUIRED ------
      count: 0,
      amount: 0,
      name: 'NAME',
      discountPercentage: 0,
      description: 'DESCRIPTION'

      // ------ OPTIONAL ------
      // hash: 'HASH'
    },
    {
      // ------ REQUIRED ------
      count: 0,
      amount: 0,
      name: 'NAME',
      discountPercentage: 0,
      description: 'DESCRIPTION'

      // ------ OPTIONAL ------
      // hash: 'HASH'
    }
  ],
  type: 0 // 4 | 8 | 16

  // ------ OPTIONAL ------
  // productId: [0, 0]
  // dealerBusinessId: [0, 0]
  // limitedConsumerId: 0
  // currencyCode: 'CURRENCY'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.applyVoucher(defineDiscountPercentageVoucherData)
  .then(function (result) {
    console.log('function: applyVoucher ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error applyVoucher ============>', error);
  });

// *****************************************************************
// #31
// function: applyVoucher

let applyVoucherData = {
  // ------ REQUIRED ------
  ott: 'OTT',
  invoiceId: 0,
  voucherHash: ['HASH#1', 'HASH#1']

  // ------ OPTIONAL ------
  // preview: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.applyVoucher(applyVoucherData)
  .then(function (result) {
    console.log('function: applyVoucher ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error applyVoucher ============>', error);
  });

// *****************************************************************
// #32
// function: getVoucherList
let getVoucherListData = {
  // ------ REQUIRED ------
  offset: 0,

  // ------ OPTIONAL ------
  size: 0
  // consumerId: 0
  // hash: 'HASH'
  // name: 'NAME'
  // type: 0
  // guildCode: ['GUILD', 'GUILD']
  // currencyCode: 'CURRENCY'
  // amountFrom: 0
  // amountTo: 0
  // discountPercentageFrom: 0
  // discountPercentageTo: 0
  // expireDateFrom: 'YYYY/MM/DD | Date Object'
  // expireDateTo: 'YYYY/MM/DD | Date Object'
  // productId: [0, 0]
  // consumDateFrom: 'YYYY/MM/DD | Date Object'
  // consumDateTo: 'YYYY/MM/DD | Date Object'
  // usedAmountFrom: 0
  // usedAmountTo: 0
  // active: true | false
  // used: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.getVoucherList(getVoucherListData)
  .then(function (result) {
    console.log('function: getVoucherList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error getVoucherList ============>', error);
  });

// *****************************************************************
// function: deactivateVoucher
// #33
let deactivateVoucherData = {
  // ------ REQUIRED ------
  id: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.deactivateVoucher(deactivateVoucherData)
  .then(function (result) {
    console.log('function: deactivateVoucher ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error deactivateVoucher ============>', error);
  });

// *****************************************************************
// function: activateVoucher
// #34
let activateVoucherData = {
  // ------ REQUIRED ------
  id: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.activateVoucher(activateVoucherData)
  .then(function (result) {
    console.log('function: activateVoucher ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error activateVoucher ============>', error);
  });

// --------------------------------------------- Direct Debate ---------------------------------------------
// function: defineDirectWithdraw
// #35
let defineDirectWithdrawData = {
  // ------ REQUIRED ------
  username: 'USER NAME',
  depositNumber: 'BANK ACCOUNT NUMBER',
  onDemand: false, // true | false
  minAmount: 0,
  maxAmount: 0,
  wallet: 'WALLET', // 'PODLAND_WALLET FOR POD WALLET'

  // ------ REQUIRED (One of these fields is required) ------
  privateKey: 'PRIVATE KEY'
  // privateKeyAddress: 'PRIVATE KEY FILE ADDRESS'

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.defineDirectWithdraw(defineDirectWithdrawData)
  .then(function (result) {
    console.log('function: directWithdrawList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error defineDirectWithdraw ============>', error);
  });

// *****************************************************************
// function: directWithdrawList
// #36
let directWithdrawListData = {
  // ------ REQUIRED ------
  offset: 0,
  size: 0

  // ------ OPTIONAL ------
  // wallet: 'WALLET' // 'PODLAND_WALLET FOR POD WALLET'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.directWithdrawList(directWithdrawListData)
  .then(function (result) {
    console.log('function: directWithdrawList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error directWithdrawList ============>', error);
  });

// *****************************************************************
// #37
// function: updateDirectWithdraw
let updateDirectWithdrawData = {
  // ------ REQUIRED ------
  id: 0,
  username: 'USER NAME',
  privateKey: 'PRIVATE KEY',
  depositNumber: 'BANK ACCOUNT NUMBER',
  onDemand: true, // true | false
  minAmount: 0,
  maxAmount: 0,
  wallet: 'WALLET' // 'PODLAND_WALLET FOR POD WALLET'

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.updateDirectWithdraw(updateDirectWithdrawData)
  .then(function (result) {
    console.log('function: updateDirectWithdraw ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error updateDirectWithdraw ============>', error);
  });

// *****************************************************************
// #38
// function: revokeDirectWithdraw
let revokeDirectWithdrawData = {
  // ------ REQUIRED ------
  id: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.revokeDirectWithdraw(revokeDirectWithdrawData)
  .then(function (result) {
    console.log('function: revokeDirectWithdraw ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error revokeDirectWithdraw ============>', error);
  });

// *****************************************************************
// #39
// function: updateDirectWithdraw
let payInvoiceByCreditData = {
  // ------ REQUIRED ------
  invoiceId: 6723179,
  ott: '4f6355459d1c17ae'

  // ------ OPTIONAL ------
  // delegatorId: [0, 0]
  // delegationHash: ['HASH#1', 'HASH#2']
  // forceDelegation: true | false
  // wallet: 'WALLET'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podBilling.payInvoiceByCredit(payInvoiceByCreditData)
  .then(function (result) {
    console.log('function: payInvoiceByCredit ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error payInvoiceByCredit ============>', error);
  });

// *****************************************************************
// #40
// function: revokeDirectWithdraw
let payAnyInvoiceByCreditData = {
  // ------ REQUIRED ------
  invoiceId: 6699284,
  ott: 'da558bd914dd61ef',
  wallet: 'PODLAND_WALLET'

  // ------ OPTIONAL ------
  // delegatorId: [0, 0]
  // delegationHash: ['HASH#1', 'HASH#2']
  // forceDelegation: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podBilling.payAnyInvoiceByCredit(payAnyInvoiceByCreditData)
  .then(function (result) {
    console.log('function: payAnyInvoiceByCredit ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error payAnyInvoiceByCredit ============>', error);
  });