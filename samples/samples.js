const PodBillingService = require('../lib/main');

// Variable Declaration & Initialization
let podBillingService = new PodBillingService({
  apiToken: 'API TOKEN'
});

// *****************************************************************
// #1
// function: getOtt
let getOttData = {
  // ------ REQUIRED ------
  // ------ OPTIONAL ------
};

podBillingService.getOtt(getOttData)
  .then(function (result) {
    console.log('function: getOtt ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getOtt ============>', error);
  });

// *****************************************************************
// #2
// function: issueInvoice
let issueInvoiceData = {
  // ------ REQUIRED ------
  _ott_: 'OTT', // get the ott from getOtt API
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
  // addressId: ADDRESS ID
  // voucherHash: 'VOUCHER HASH'
  // preferredTaxRate: TAX RATE
  // verificationNeeded: true | false
  // verifyAfterTimeout: true | false
  // preview: true | false
  // metadata: OBJECT
  // safe: 'SAFE'
  // postVoucherEnabled: 'POST VOUCHER ENABLED'
  // hasEvent: 'HAS EVENT'
  // eventTitle: 'EVENT TITLE'
  // eventTimeZone: 'TIME ZONE'
  // eventReminders: ARRAY OF OBJECTS
  // eventDescription: 'DESCRIPTION'
  // eventMetadat: OBJECT
};
podBillingService.issueInvoice(issueInvoiceData)
  .then(function (result) {
    console.log('function: issueInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error issueInvoice ============>', error);
  });

// *****************************************************************
// #3
// function: createPreInvoice
let createPreInvoiceData = {
  // ------ REQUIRED ------
  _ott_: 'OTT',
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
  // addressId: ADDRESS ID
  // preferredTaxRate: TAX RATE
  // verificationNeeded: true | false
};
podBillingService.createPreInvoice(createPreInvoiceData)
  .then(function (result) {
    console.log('function: createPreInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error createPreInvoice ============>', error);
  });

// *****************************************************************
// #4
// function: getInvoiceList
let getInvoiceListData = {
  // ------ REQUIRED ------
  offset: 0

  // ------ OPTIONAL ------
  // size: SIZE
  // id: ID
  // billNumber: 'BILL NUMBER'
  // uniqueNumber: 'UNIQUE NUMBER'
  // trackerId: ID
  // fromDate: 'FROM DATE'
  // toDate: 'TO DATE'
  // isCanceled: true | false
  // isPayed: true | false
  // isClosed: true | false
  // isWaiting: true | false
  // guildCode: 'GUILD CODE'
  // referenceNumber: 'REFERENCE NUMBER'
  // userId: ID
  // issuerId: ID
  // query: 'QUERY'
  // firstId: ID
  // lastId: ID
  // productIdList: ARRAY OF INTEGERS
};

podBillingService.getInvoiceList(getInvoiceListData)
  .then(function (result) {
    console.log('function: getInvoiceList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getInvoiceList ============>', error);
  });

// *****************************************************************
// #5
// function: payInvoice
let payInvoiceData = {
  // ------ REQUIRED ------
  invoiceId: 0

  // ------ OPTIONAL ------
};

podBillingService.payInvoice(payInvoiceData)
  .then(function (result) {
    console.log('function: payInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error payInvoice ============>', error);
  });

// *****************************************************************
// #6
// function: sendInvoicePaymentSMS
let sendInvoicePaymentSMSData = {
  // ------ REQUIRED ------
  invoiceId: 0

  // ------ OPTIONAL ------
  // wallet: 'WALLET NAME'
  // callbackUri: 'CALLBACK URI'
  // redirectUri: 'REDIRECT URI'
  // delegationId: ARRAY OF INTEGERS
  // forceDeligation: 'FORCE DELIGATION'
};

podBillingService.sendInvoicePaymentSMS(sendInvoicePaymentSMSData)
  .then(function (result) {
    console.log('function: sendInvoicePaymentSMS ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error sendInvoicePaymentSMS ============>', error);
  });

// *****************************************************************
// #7
// function: getInvoiceListByMetadata
let getInvoiceListByMetadataData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // metaQuery: OBJECT
  // offset: OFFSET
  // size: SIZE
  // isPayed: true | false
  // isCancelled: true | false
};

podBillingService.getInvoiceListByMetadata(getInvoiceListByMetadataData)
  .then(function (result) {
    console.log('function: getInvoiceListByMetadata ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getInvoiceListByMetadata ============>', error);
  });

// *****************************************************************
// #8
// function: getInvoiceListAsFile

let getInvoiceListAsFileData = {
  // ------ REQUIRED (One of these fields is required) ------
  lastNRows: 0,
  fromDate: 'YYYY/MM/DD HH:MM:SS', // or 'YYYY/MM/DD'
  toDate: 'YYYY/MM/DD HH:MM:SS' // or 'YYYY/MM/DD'

  // ------ OPTIONAL ------
  // id: ID
  // billNumber: 'BILL NUMBER'
  // uniqueNumber: 'UNIQUE NUMBER'
  // trackerId: ID
  // isCancelled: true | false
  // isPayed: true | false
  // isClosed: true | false
  // isWaiting: true | false
  // guildCode: 'GUILD CODE'
  // referenceNumber: 'REFERENCE NUMBER'
  // query: 'QUERY'
  // productIdList: ARRAY OF INTEGERS
  // callbackUrl: 'CALL BACK URL'
};

podBillingService.getInvoiceListAsFile(getInvoiceListAsFileData)
  .then(function (result) {
    console.log('function: getInvoiceListAsFile ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getInvoiceListAsFile ============>', error);
  });

// *****************************************************************
// #9
// function: verifyInvoice
// set the verificationNeeded to true when you are creating an invoice, then pay the invoice and call the verifyInvoice

let verifyInvoiceData = {
  // ------ REQUIRED (One of these fields is required) ------
  id: 0, // Invoice ID
  billNumber: 'BILLNUMBER'

  // ------ OPTIONAL ------
};
podBillingService.verifyInvoice(verifyInvoiceData)
  .then(function (result) {
    console.log('function: verifyInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error verifyInvoice ============>', error);
  });

// *****************************************************************
// # 10
// function: cancelInvoice

let cancelInvoiceData = {
  // ------ REQUIRED ------
  id: 0 // Invoice ID

  // ------ OPTIONAL ------
};
podBillingService.cancelInvoice(cancelInvoiceData)
  .then(function (result) {
    console.log('function: cancelInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error cancelInvoice ============>', error);
  });

// *****************************************************************
// #11
// function: reduceInvoice
let reduceInvoiceData = {
  // ------ REQUIRED ------
  id: 0, // INVOICE ID
  invoiceItemList: [
    { productId: 0, price: 0, quantity: 0, productDescription: 'DESCRIPTION' },
    { productId: 0, price: 0, quantity: 0, productDescription: 'DESCRIPTION' }
  ]

  // ------ OPTIONAL ------
  // preferredTaxRate: TAX RATE

};
podBillingService.reduceInvoice(reduceInvoiceData)
  .then(function (result) {
    console.log('function: reduceInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error reduceInvoice ============>', error);
  });

// *****************************************************************
// #12
// function: verifyAndCloseInvoice
// set the verificationNeeded to true when you are creating an invoice, then pay the invoice and call the verifyInvoice

let verifyAndCloseInvoiceData = {
  // ------ REQUIRED ------
  id: 0 // INVOICE ID

  // ------ OPTIONAL ------
};

podBillingService.verifyAndCloseInvoice(verifyAndCloseInvoiceData)
  .then(function (result) {
    console.log('function: verifyAndCloseInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error verifyAndCloseInvoice ============>', error);
  });

// *****************************************************************
// #13
// function: closeInvoice

let closeInvoiceData = {
  // ------ REQUIRED ------
  id: 0 // INVOICE ID

  // ------ OPTIONAL ------
};

podBillingService.closeInvoice(closeInvoiceData)
  .then(function (result) {
    console.log('function: closeInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error closeInvoice ============>', error);
  });

// *****************************************************************
// #14
// function: getInvoicePaymentLink

let getInvoicePaymentLinkData = {
  // ------ REQUIRED ------
  invoiceId: 0 // INVOICE ID

  // ------ OPTIONAL ------
  // callbackUri: 'CALLBACK URI'
  // redirectUri: 'REDIRECT URI'
  // gateway: 'PEP'
};

podBillingService.getInvoicePaymentLink(getInvoicePaymentLinkData)
  .then(function (result) {
    console.log('function: getInvoicePaymentLink ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getInvoicePaymentLink ============>', error);
  });

// *****************************************************************
// #15
// function: payInvoiceByInvoice

let payInvoiceByInvoiceData = {
  // ------ REQUIRED ------
  creditorInvoiceId: 0, // INVOICE ID
  debtorInvoiceId: 0 // INVOICE ID

  // ------ OPTIONAL ------
};

podBillingService.payInvoiceByInvoice(payInvoiceByInvoiceData)
  .then(function (result) {
    console.log('function: payInvoiceByInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error payInvoiceByInvoice ============>', error);
  });

// *****************************************************************
// #16
// function: payInvoiceInFuture

let payInvoiceInFutureData = {
  // ------ REQUIRED ------
  invoiceId: 0, // INVOICE ID
  date: 'YYYY/MM/DD'

  // ------ OPTIONAL (Use just one of them) ------
  // guildCode: 'GUILD CODE'
  // wallet: 'WALLET'
};

podBillingService.payInvoiceInFuture(payInvoiceInFutureData)
  .then(function (result) {
    console.log('function: payInvoiceInFuture ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error payInvoiceInFuture ============>', error);
  });

// *****************************************************************
// # 17
// function: getExportList

let getExportListData = {
  // ------ REQUIRED ------
  offset: 0,
  sie: 0

  // ------ OPTIONAL ------
  // id: ID
  // statusCode: 'EXPORT_SERVICE_STATUS_CREATED' | 'EXPORT_SERVICE_STATUS_RUNNING' |'EXPORT_SERVICE_STATUS_SUCCESSFUL' | 'EXPORT_SERVICE_STATUS_FAILED'
  // serviceUrl: 'SERVICE URL'
};

podBillingService.getExportList(getExportListData)
  .then(function (result) {
    console.log('function: getExportList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getExportList ============>', error);
  });

// *****************************************************************
// #18
// function: requestWalletSettlement

let requestWalletSettlementData = {
  // ------ REQUIRED ------
  _ott_: 'OTT',
  amount: 0

  // ------ OPTIONAL ------
  // wallet: 'WALLET'
  // firstName: 'FIRST NAME'
  // lastName: 'LAST NAME'
  // sheba: 'SHEBA WITHOUT IR'
  // currencyCode: 'CURRENCY'
  // uniqueId: ID
  // description: 'DESCRIPTION'
};

podBillingService.requestWalletSettlement(requestWalletSettlementData)
  .then(function (result) {
    console.log('function: requestWalletSettlement ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error requestWalletSettlement ============>', error);
  });

// *****************************************************************
// #19
// function: requestGuildSettlement
let requestGuildSettlementData = {
  // ------ REQUIRED ------
  _ott_: 'OTT',
  amount: 0,
  guildCode: 'GUILD CODE'

  // ------ OPTIONAL ------
  // firstName: 'FIRST NAME'
  // lastName: 'LAST NAME'
  // sheba: 'SHEBA WITHOUT IR'
  // currencyCode: 'CURRENCY'
  // uniqueId: ID
  // description: 'DESCRIPTION'
};

podBillingService.requestGuildSettlement(requestGuildSettlementData)
  .then(function (result) {
    console.log('function: requestGuildSettlement ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error requestGuildSettlement ============>', error);
  });

// *****************************************************************
// #20
// function: requestSettlementByTool

let requestSettlementByToolData = {
  // ------ REQUIRED ------
  _ott_: 'OTT',
  amount: 0,
  guildCode: 'GUILD CODE',
  toolCode: 'TOLL CODE', // 'SETTLEMENT_TOOL_SATNA' | 'SETTLEMENT_TOOL_PAYA' |'SETTLEMENT_TOOL_CARD'
  toolId: 'TOOL ID'

  // ------ OPTIONAL ------
  // firstName: 'FIRST NAME'
  // lastName: 'LAST NAME'
  // currencyCode: 'CURRENCY'
  // uniqueId: ID
  // description: 'DESCRIPTION'
};

podBillingService.requestSettlementByTool(requestSettlementByToolData)
  .then(function (result) {
    console.log('function: requestSettlementByTool ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error requestSettlementByTool ============>', error);
  });

// *****************************************************************
// #21
// function: listSettlements
let listSettlementsData = {
  // ------ REQUIRED ------
  offset: 0

  // ------ OPTIONAL ------
  // size: SIZE
  // statusCode: 'SETTLEMENT_REQUESTED' | 'SETTLEMENT_SENT' | 'SETTLEMENT_DONE'
  // currencyCode: 'CURRENCY'
  // fromAmount: 'FROM AMOUNT'
  // toAmount: 'TO AMOUNT'
  // fromDate: 'YYYY/MM/DD'
  // toDate: 'YYYY/MM/DD'
  // uniqueId: ID
};

podBillingService.listSettlements(listSettlementsData)
  .then(function (result) {
    console.log('function: listSettlements ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error listSettlements ============>', error);
  });

// *****************************************************************
// #22
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
};

podBillingService.addAutoSettlement(addAutoSettlementData)
  .then(function (result) {
    console.log('function: addAutoSettlement ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addAutoSettlement ============>', error);
  });

// *****************************************************************
// #23
// function: removeAutoSettlement

let removeAutoSettlementData = {
  // ------ REQUIRED ------
  guildCode: 'GUILD CODE'

  // ------ OPTIONAL ------
  // currencyCode: 'CURRENCY'
};

podBillingService.removeAutoSettlement(removeAutoSettlementData)
  .then(function (result) {
    console.log('function: addAutoSettlement ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addAutoSettlement ============>', error);
  });

// *****************************************************************
// #24
// function: getPayInvoiceByWalletLink

let getPayInvoiceByWalletLinkData = {
  // ------ REQUIRED ------
  invoiceId: 0 // INVOICEID

  // ------ OPTIONAL ------
  // redirectUri: 'REDIRECT URI'
  // callUri: 'CALL URI'
};

try {
  let url = podBillingService.getPayInvoiceByWalletLink(getPayInvoiceByWalletLinkData);
  console.log('function: addAutoSettlement ============>', url, '\n');
}
catch (error) {
  console.log('error getPayInvoiceByWalletLink ============>', error);
}
// *****************************************************************
// #25
// function: getPayInvoiceByUniqueNumberLink
let getPayInvoiceByUniqueNumberLinkData = {
  // ------ REQUIRED ------
  uniqueNumber: 'UNIQUE NUMBER'

  // ------ OPTIONAL ------
  // redirectUri: 'REDIRECT URI'
  // callUri: 'CALL URI'
  // gateway: 'PEP'
};

try {
  let url = podBillingService.getPayInvoiceByUniqueNumberLink(getPayInvoiceByUniqueNumberLinkData);
  console.log('function: addAutoSettlement ============>', url, '\n');
}
catch (error) {
  console.log('error getPayInvoiceByWalletLink ============>', error);
}

// *****************************************************************
// #26
// function: guildList

let guildListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // offset: OFFSET
  // size: SIZE
};

podBillingService.guildList(guildListData)
  .then(function (result) {
    console.log('function: addAutoSettlement ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addAutoSettlement ============>', error);
  });

// *****************************************************************
// #27
// function: addDealer
let addDealerData = {
  // ------ REQUIRED ------
  dealerBizId: 0 // ID

  // ------ OPTIONAL ------
  // allProductAllow: true | false
};
podBillingService.addDealer(addDealerData)
  .then(function (result) {
    console.log('function: addDealer ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addDealer ============>', error);
  });

// *****************************************************************
// #28
// function: dealerList
let dealerListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // dealerBizId: ID
  // enable: true | false
  // offset: OFFSET
  // size: SIZE
};

podBillingService.dealerList(dealerListData)
  .then(function (result) {
    console.log('function: dealerList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error dealerList ============>', error);
  });

// *****************************************************************
// #29
// function: enableDealer

let enableDealerData = {
  // ------ REQUIRED ------
  dealerBizId: 0 // ID

  // ------ OPTIONAL ------
};
podBillingService.enableDealer(enableDealerData)
  .then(function (result) {
    console.log('function: enableDealer ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error enableDealer ============>', error);
  });

// *****************************************************************
// #30
// function: disenableDealer

let disableDealerData = {
  // ------ REQUIRED ------
  dealerBizId: 0 // ID

  // ------ OPTIONAL ------
};
podBillingService.disableDealer(disableDealerData)
  .then(function (result) {
    console.log('function: disableDealer ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error disableDealer ============>', error);
  });

// *****************************************************************
// #31
// function: businessDealingList

let businessDealingListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // dealingBusinessId: ID
  // enable: true | false
  // offset: OFFSET
  // size: SIZE
};

podBillingService.businessDealingList(businessDealingListData)
  .then(function (result) {
    console.log('function: businessDealingList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error businessDealingList ============>', error);
  });

// *****************************************************************
// #32
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
  // delegatorId: ARRAY OF INTEGERS
  // delegationHash: ARRAY OF STRING
  // forceDelegation: 'FORCE DELIGATION'
};

podBillingService.issueMultiInvoice(issueMultiInvoiceData)
  .then(function (result) {
    console.log('function: issueMultiInvoice ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error issueMultiInvoice ============>', error);
  });

// *****************************************************************
// #33
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
};

podBillingService.reduceMultiInvoice({ data: reduceMultiInvoiceData })
  .then(function (result) {
    console.log('function: reduceMultiInvoice ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error reduceMultiInvoice ============>', error);
  });

// *****************************************************************
// #34
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
};

podBillingService.reduceMultiInvoiceAndCashOut(reduceMultiInvoiceAndCashOutData)
  .then(function (result) {
    console.log('function: reduceMultiInvoiceAndCashOut ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error reduceMultiInvoiceAndCashOut ============>', error);
  });

// *****************************************************************
// #35
// function: addDealerProductPermission
let addDealerProductPermissionData = {
  // ------ REQUIRED ------
  dealerBizId: 0,
  productId: 0
  // ------ OPTIONAL ------
};

podBillingService.addDealerProductPermission(addDealerProductPermissionData)
  .then(function (result) {
    console.log('function: addDealerProductPermission ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error addDealerProductPermission ============>', error);
  });

// *****************************************************************
// #36
// function: dealerProductPermissionList
let dealerProductPermissionListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // productId: ID
  // dealerBizId: ID
  // enable: true | false
  // offset: OFFSET
  // size: SIZE
};

podBillingService.dealerProductPermissionList(dealerProductPermissionListData)
  .then(function (result) {
    console.log('function: dealerProductPermissionList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error dealerProductPermissionList ============>', error);
  });

// *****************************************************************
// #37
// function: dealingProductPermissionList
let dealingProductPermissionListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // productId: ID
  // dealerBizId: ID
  // enable: true | false
  // offset: OFFSET
  // size: SIZE
};

podBillingService.dealingProductPermissionList(dealingProductPermissionListData)
  .then(function (result) {
    console.log('function: dealingProductPermissionList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error dealingProductPermissionList ============>', error);
  });

// *****************************************************************
// #38
// function: disableDealerProductPermission

let disableDealerProductPermissionData = {
  // ------ REQUIRED ------
  dealerBizId: 0,
  productId: 0

  // ------ OPTIONAL ------
};

podBillingService.disableDealerProductPermission(disableDealerProductPermissionData)
  .then(function (result) {
    console.log('function: disableDealerProductPermission ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error disableDealerProductPermission ============>', error);
  });

// *****************************************************************
// #39
// function: enableDealerProductPermissionData

let enableDealerProductPermissionData = {
  // ------ REQUIRED ------
  dealerBizId: 0,
  productId: 0

  // ------ OPTIONAL ------
};

podBillingService.enableDealerProductPermission(enableDealerProductPermissionData)
  .then(function (result) {
    console.log('function: enableDealerProductPermission ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error enableDealerProductPermission ============>', error);
  });
