/**
 * @namespace PodBillingService
 */

// POD Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');
const config = require('./config');

/**
 * PodBillingService
 * @memberOf PodBillingService
 */
class PodBillingService extends PodBaseService {
  /**
   * @description This is the class constructor
   * @param {confObj} confObj
   */
  constructor (confObj) {
    if (!confObj) {
      confObj = {};
    }
    let validateResult = utils.validate(schemas.moduleConfig, confObj);
    if (!validateResult.status) {
      throw utils.invalidConfigParam('pod-billing-service');
    }
    super(schemas, apiUrls, confObj.serverType);
    this.clientInfo = {};
    this.clientInfo.apiToken = confObj.apiToken || null;
    this.clientInfo.tokenIssuer = confObj.tokenIssuer || 1;
  }

  // #1
  /**
    * @description This function gets the ott for the next request
    * @param {object} data
    * @returns {Promise}
    */
  getOtt (data) {
    let apiName = 'ott';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #2
  /**
   * @description This function creates a new invoice
   * @param {issueInvoiceObj} data
   * @returns {Promise}
   */
  issueInvoice (data) {
    let self = this;
    let apiName = 'issueInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.productId = [];
    data.price = [];
    data.quantity = [];
    data.productDescription = [];
    for (let i = 0; i < data.productList.length; i++) {
      data.productId.push(data.productList[i].productId);
      data.price.push(data.productList[i].price);
      data.quantity.push(data.productList[i].quantity);
      data.productDescription.push(data.productList[i].productDescription);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    headers._ott_ = data._ott_;
    delete data.invoiceItemList;
    delete data._ott_;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // let otpData = { _token_: data._token_, _token_issuer_: data._token_issuer_ };
    // delete data._token_;
    // delete data._token_issuer_;

    // if (!data.hasOwnProperty('_ott_')) {
    //   return this.getOtt({})
    //     .then(function (result) {
    //       headers['_ott_'] = result.ott;
    //       return self.callService(apiName, headers, data);
    //     });
    // }
    // else {
    return self.callService(apiName, headers, data);
    // }
  }

  // #3
  /**
   * @description This function creates the link of a pre invoice
   * @param {issueInvoiceObj} data
   * @returns {Promise}
   */
  createPreInvoice (data) {
    let self = this;
    let apiName = 'createPreInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;
    data.token = this.clientInfo.apiToken;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.productId = [];
    data.price = [];
    data.quantity = [];
    data.productDescription = [];
    for (let i = 0; i < data.productList.length; i++) {
      data.productId.push(data.productList[i].productId);
      data.price.push(data.productList[i].price);
      data.quantity.push(data.productList[i].quantity);
      data.productDescription.push(data.productList[i].productDescription);
    }

    // let otpData = { _token_: data._token_, _token_issuer_: data._token_issuer_ };
    // delete data._token_issuer_;

    /* if (!headers.hasOwnProperty('_ott_')) {
      return this.getOtt({})
        .then(function (result) {
          data['_ott_'] = result.ott;
          return self.callService(apiName, headers, data);
        });
    } */
    // else {
    return self.callService(apiName, headers, data)
      .then(function (result) {
        let hash = result.Result;
        let url = self.checkAndAppend(self.urls.privateCallAddress, '/v1/pbc/preinvoice/') + hash;
        result.Result = {};
        result.Result.hash = hash;
        result.Result.url = url;
        return result;
      });
    // }
  }

  // #4
  /**
   * @description This function search and lists invoices
   * @param {getInvoiceListObj} data
   * @returns {Promise}
   */
  getInvoiceList (data) {
    let apiName = 'getInvoiceList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #5
  /**
   * @description This function pays an invoice
   * @param {invoiceIdObj} data
   * @returns {Promise}
   */
  payInvoice (data) {
    let apiName = 'payInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #6
  /**
   * @description This function pays an invoice via sms
   * @param {sendInvoicePaymentSMSObj} data
   * @returns {Promise}
   */
  sendInvoicePaymentSMS (data) {
    let apiName = 'sendInvoicePaymentSMS';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #7
  /**
   * @description This function searches and lists invoices based on business metadata
   * @param {getInvoiceListByMetadataObj} data
   * @returns {Promise}
   */
  getInvoiceListByMetadata (data) {
    let apiName = 'getInvoiceListByMetadata';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #8
  /**
   * @description This function send request to create an invoive list with .xlsx format
   * @param {getInvoiceListAsFileObj} data
   * @returns {Promise}
   */
  getInvoiceListAsFile (data) {
    let apiName = 'getInvoiceListAsFile';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #9
  /**
   * @description This function verifies an invoice
   * @param {verifyInvoiceObj} data
   * @returns {Promise}
   */
  verifyInvoice (data) {
    let apiName = 'verifyInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #10
  /**
   * @description This function cancels an invoice
   * @param {object} headers
   * @param {idObj} data
   * @returns {Promise}
   */
  cancelInvoice (data) {
    let apiName = 'cancelInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #11
  /**
   * @description This function reduces an invoice
   * @param {reduceInvoiceObj} data
   * @returns {Promise}
   */
  reduceInvoice (data) {
    let apiName = 'reduceInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.invoiceItemId = [];
    data.price = [];
    data.quantity = [];
    data.itemDescription = [];
    for (let i = 0; i < data.invoiceItemList.length; i++) {
      data.invoiceItemId.push(data.invoiceItemList[i].invoiceItemId);
      data.price.push(data.invoiceItemList[i].price);
      data.quantity.push(data.invoiceItemList[i].quantity);
      data.itemDescription.push(data.invoiceItemList[i].itemDescription);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    delete data.invoiceItemList;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #12
  /**
   * @description This function verifies and closes the given invoice
   * @param {idObj} data
   * @returns {Promise}
   */
  verifyAndCloseInvoice (data) {
    let apiName = 'verifyAndCloseInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #13
  /**
   * @description This function closes the given invoice
   * @param {idObj} data
   * @returns {Promise}
   */
  closeInvoice (data) {
    let apiName = 'closeInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #14
  /**
   * @description This function return the payment link of a specific invoive
   * @param {invoiceIdObj} data
   * @returns {Promise}
   */
  getInvoicePaymentLink (data) {
    let apiName = 'getInvoicePaymentLink';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, { invoiceId: data.invoiceId })
      .then(function (result) {
        let pre = false;
        if (data.hasOwnProperty('redirectUri')) {
          pre = true;
          result.result += 'redirectUri=' + data.redirectUri;
        }
        if (data.hasOwnProperty('callbackUri')) {
          if (!pre) {
            pre = true;
            result.result += 'callbackUri=' + data.callbackUri;
          }
          else {
            result.result += '&callbackUri=' + data.callbackUri;
          }
        }
        if (data.hasOwnProperty('gateway')) {
          if (!pre) {
            pre = true;
            result.result += 'gateway=' + data.gateway;
          }
          else {
            result.result += '&gateway=' + data.gateway;
          }
        }
        return result;
      });
  }

  // #15
  /**
   * @description This functions helps you to pay an invoice by another one
   * @param {payInvoiceByInvoiceObj} data
   * @returns {Promise}
   */
  payInvoiceByInvoice (data) {
    let apiName = 'payInvoiceByInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #16
  /**
   * @description This functions helps you to pay an invoice in future
   * @param {payInvoiceByInvoiceObj} data
   * @returns {Promise}
   */
  payInvoiceInFuture (data) {
    let apiName = 'payInvoiceInFuture';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    headers._ott_ = data._ott_;
    delete data._ott_;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #17
  /**
   * @description This functions returns the link of generte excel file
   * @param {payInvoiceByInvoiceObj} data
   * @returns {Promise}
   */
  getExportList (data) {
    let self = this;
    let apiName = 'getExportList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data)
      .then(function (result) {
        for (let i = 0; i < result.result.length; i++) {
          if (result.result[i].statusCode === config.exportStatus.success) {
            if (result.result[i].hasOwnProperty('resultFile')) {
              let fileId = result.result[i].resultFile.id || '';
              let hashCode = result.result[i].resultFile.hashCode || '';
              result.result[i].resultFile.downloadPath = self.checkAndAppend(self.urls.fileServerAddress, '/nzh/file/?fileId=') + fileId + '&hashCode=' + hashCode;
            }
          }
          else {
            result.result[i].downloadPath = null;
          }
        }
        return result;
      });
  }

  // #18
  /**
   * @description This functions send the request for wallet settlement of a business
   * @param {requestWalletSettlementObj} data
   * @returns {Promise}
   */
  requestWalletSettlement (data) {
    let apiName = 'requestWalletSettlement';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    headers._ott_ = data._ott_;
    delete data._ott_;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #19
  /**
   * @description This functions send settlemet request for a specific guild of a business
   * @param {requestGuildSettlementObj} data
   * @returns {Promise}
   */
  requestGuildSettlement (data) {
    let apiName = 'requestGuildSettlement';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    headers._ott_ = data._ott_;
    delete data._ott_;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #20
  /**
   * @description This functions send a settlement request via a specific way
   * @param {requestSettlementByToolObj} data
   * @returns {Promise}
   */
  requestSettlementByTool (data) {
    let apiName = 'requestSettlementByTool';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    headers._ott_ = data._ott_;
    delete data._ott_;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #21
  /**
   * @description This functions list settlements done for the business so far
   * @param {listSettlementsObj} data
   * @returns {Promise}
   */
  listSettlements (data) {
    let apiName = 'listSettlements';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    // headers._ott_ = data._ott_;
    // delete data._ott_;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #22
  /**
   * @description This functions add auto settlement for business
   * @param {addAutoSettlementObj} data
   * @returns {Promise}
   */
  addAutoSettlement (data) {
    let apiName = 'addAutoSettlement';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    // headers._ott_ = data._ott_;
    // delete data._ott_;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #23
  /**
   * @description This functions removes the auto settlement which is set previously
   * @param {removeAutoSettlementObj} data
   * @returns {Promise}
   */
  removeAutoSettlement (data) {
    let apiName = 'removeAutoSettlement';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    // headers._ott_ = data._ott_;
    // delete data._ott_;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #24
  /**
   * @description This functions returns paymet link includes pay with wallet
   * @param {getPayInvoiceByWalletLinkObj} data
   * @returns {string}
   */
  getPayInvoiceByWalletLink (data) {
    let apiName = 'getPayInvoiceByWalletLink';
    let url;
    data = utils.trimNestedObject(data);
    this.validateBody(apiName, data);
    url = this.checkAndAppend(this.urls.privateCallAddress, this.apiUrls.getPayInvoiceByWalletLink.subUrl) + '?invoiceid=' + data.invoiceId;
    if (data.hasOwnProperty('redirectUri')) {
      url += '&redirectUri=' + data.redirectUri;
    }
    if (data.hasOwnProperty('callUri')) {
      url += '&callUri=' + data.callUri;
    }
    return url;
  }

  // #25
  /**
   * @description This functions returns the payment link page
   * @param {getPayInvoiceByUniqueNumberLinkObj} data
   * @returns {string}
   */
  getPayInvoiceByUniqueNumberLink (data) {
    let apiName = 'getPayInvoiceByUniqueNumberLink';
    let url;
    data = utils.trimNestedObject(data);
    this.validateBody(apiName, data);
    url = this.checkAndAppend(this.urls.privateCallAddress, this.apiUrls.getPayInvoiceByUniqueNumberLink.subUrl) + '?uniqueNumber=' + data.uniqueNumber;
    if (data.hasOwnProperty('redirectUri')) {
      url += '&redirectUri=' + data.redirectUri;
    }
    if (data.hasOwnProperty('callUri')) {
      url += '&callUri=' + data.callUri;
    }
    if (data.hasOwnProperty('gateway')) {
      url += '&gateway=' + data.gateway;
    }
    return url;
  }

  // #26
  /**
   * @description This function lists guild codes
   * @param {guildCodeObj} data
   * @returns {Promise}
   */
  guildList (data) {
    let apiName = 'guildList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #27
  /**
   * @description This function adds a dealer for a business
   * @param {addDealerObj} data
   * @returns {Promise}
   */
  addDealer (data) {
    let apiName = 'addDealer';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #28
  /**
   * @description This function lists the dealers
   * @param {dealerListObj} data
   * @returns {Promise}
   */
  dealerList (data) {
    let apiName = 'dealerList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #29
  /**
   * @description This function enables a dealer
   * @param {enableDealerObj} data
   * @returns {Promise}
   */
  enableDealer (data) {
    let apiName = 'enableDealer';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #30
  /**
   * @description This function disables a dealer
   * @param {disableDealerObj} data
   * @returns {Promise}
   */
  disableDealer (data) {
    let apiName = 'disableDealer';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #31
  /**
   * @description This function list dealing businesses
   * @param {businessDealingListObj} data
   * @returns {Promise}
   */
  businessDealingList (data) {
    let apiName = 'businessDealingList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #32
  /**
    * @description This function creates a multi invoice
    * @param {issueMultiInvoiceObj} data
    * @returns {Promise}
    */
  issueMultiInvoice (data) {
    let apiName = 'issueMultiInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;
    headers._ott_ = data._ott_;
    delete data._ott_;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #33
  /**
   * @description This function reduces a multi invoice
   * @param {reduceMultiInvoiceObj} data
   * @returns {Promise}
   */
  reduceMultiInvoice (data) {
    let apiName = 'reduceMultiInvoice';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #34
  /**
   * @description This function reduces and settles a multi invoice
   * @param {reduceMultiInvoiceAndCashOutObj} data
   * @returns {Promise}
   */
  reduceMultiInvoiceAndCashOut (data) {
    let apiName = 'reduceMultiInvoiceAndCashOut';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #35
  /**
   * @description This function gives the permission to a dealer for a specific product
   * @param {addDealerProductPermissionObj} data
   * @returns {Promise}
   */
  addDealerProductPermission (data) {
    let apiName = 'addDealerProductPermission';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #36
  /**
   * @description This function lists the dealer product list
   * @param {dealerProductPermissionListObj} data
   * @returns {Promise}
   */
  dealerProductPermissionList (data) {
    let apiName = 'dealerProductPermissionList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #37
  /**
   * @description This function lists dealing product list
   * @param {dealingProductPermissionListObj} data
   * @returns {Promise}
   */
  dealingProductPermissionList (data) {
    let apiName = 'dealingProductPermissionList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #38
  /**
   * @description This function diasbles dealer permission for a product
   * @param {disableDealerProductPermissionObj} data
   * @returns {Promise}
   */
  disableDealerProductPermission (data) {
    let apiName = 'disableDealerProductPermission';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #39
  /**
   * @description This function enables dealer permission for a product
   * @param {enableDealerProductPermissionObj} data
   * @returns {Promise}
   */
  enableDealerProductPermission (data) {
    let apiName = 'enableDealerProductPermission';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    // data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = this.clientInfo.apiToken;
    headers._token_issuer_ = this.clientInfo.tokenIssuer;

    // headers._token_ = data._token_;
    // headers._token_issuer_ = data._token_issuer_;
    // delete data._token_;
    // delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }
}

module.exports = PodBillingService;
