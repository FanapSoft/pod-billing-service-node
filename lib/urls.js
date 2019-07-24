module.exports = {
  // #1
  ott: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/ott/',
    method: 'GET'
  },

  // #2
  issueInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/issueInvoice/',
    method: 'GET'
  },

  // #3
  createPreInvoice: {
    baseUrl: 'privateCallAddress',
    subUrl: '/service/createPreInvoice/',
    method: 'POST'
  },

  // #4
  getInvoiceList: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/getInvoiceList/',
    method: 'GET'
  },

  // #5
  payInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/payInvoice/',
    method: 'GET'
  },

  // #6
  sendInvoicePaymentSMS: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/sendInvoicePaymentSMS/',
    method: 'GET'
  },

  // #7
  getInvoiceListByMetadata: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/getInvoiceListByMetadata/',
    method: 'GET'
  },

  // #8
  getInvoiceListAsFile: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/getInvoiceListAsFile/',
    method: 'GET'
  },

  // #9
  verifyInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/verifyInvoice/',
    method: 'GET'
  },

  // #10
  cancelInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/cancelInvoice',
    method: 'GET'
  },

  // #11
  reduceInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/reduceInvoice/',
    method: 'GET'
  },

  // #12
  verifyAndCloseInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/verifyAndCloseInvoice/',
    method: 'GET'
  },

  // #13
  closeInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/closeInvoice/',
    method: 'GET'
  },

  // #14
  getInvoicePaymentLink: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/getInvoicePaymentLink/',
    method: 'GET'
  },

  // #15
  payInvoiceByInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/issueInvoice/',
    method: 'GET'
  },

  // #16
  payInvoiceInFuture: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/payInvoiceInFuture/',
    method: 'GET'
  },

  // #17
  getExportList: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/getExportList/',
    method: 'GET'
  },

  // #18
  requestWalletSettlement: {
    baseUrl: 'platformAddress',
    subUrl: '/nzh/requestSettlement',
    method: 'GET'
  },

  // #19
  requestGuildSettlement: {
    baseUrl: 'platformAddress',
    subUrl: '/nzh/biz/requestSettlement',
    method: 'GET'
  },

  // #20
  requestSettlementByTool: {
    baseUrl: 'platformAddress',
    subUrl: '/nzh/biz/requestSettlementByTool',
    method: 'GET'
  },

  // #21
  listSettlements: {
    baseUrl: 'platformAddress',
    subUrl: '/nzh/listSettlements',
    method: 'GET'
  },

  // #22
  addAutoSettlement: {
    baseUrl: 'platformAddress',
    subUrl: '/nzh/biz/addAutoSettlement',
    method: 'GET'
  },

  // #23
  removeAutoSettlement: {
    baseUrl: 'platformAddress',
    subUrl: '/nzh/biz/removeAutoSettlement',
    method: 'GET'
  },

  // #24
  getPayInvoiceByWalletLink: {
    baseUrl: 'privateCallAddress',
    subUrl: 'v1/pbc/payInvoice/',
    method: 'GET'
  },

  // #25
  getPayInvoiceByUniqueNumberLink: {
    baseUrl: 'privateCallAddress',
    subUrl: '/v1/pbc/payInvoiceByUniqueNumber/',
    method: 'GET'
  },

  // #26
  guildList: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/guildList',
    method: 'GET'
  },

  // #27
  addDealer: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/addDealer',
    method: 'POST'
  },

  // #28
  dealerList: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/dealerList',
    method: 'POST'
  },

  // #29
  enableDealer: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/enableDealer',
    method: 'POST'
  },

  // #30
  disableDealer: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/disableDealer',
    method: 'POST'
  },

  // #31
  businessDealingList: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/businessDealingList',
    method: 'POST'
  },

  // #32
  issueMultiInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/issueMultiInvoice',
    method: 'GET'
  },

  // #33
  reduceMultiInvoice: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/reduceMultiInvoice',
    method: 'GET'
  },

  // #34
  reduceMultiInvoiceAndCashOut: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/reduceMultiInvoiceAndCashout',
    method: 'GET'
  },

  // #35
  addDealerProductPermission: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/addDealerProductPermission',
    method: 'POST'
  },

  // #36
  dealerProductPermissionList: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/dealerProductPermissionList',
    method: 'POST'
  },

  // #37
  dealingProductPermissionList: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/dealingProductPermissionList',
    method: 'POST'
  },

  // #38
  disableDealerProductPermission: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/disableDealerProductPermission',
    method: 'POST'
  },

  // #39
  enableDealerProductPermission: {
    baseUrl: 'platformAddress',
    subUrl: 'nzh/biz/enableDealerProductPermission',
    method: 'POST'
  }
};
