/**
 * @namespace PodBillingService
 */

// Native Modules
const util = require('util');
const fs = require('fs');

// POD Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');
const config = require('./config');
const products = require('./products');

// Variable Initialization
const readFile = util.promisify(fs.readFile);

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
    super(schemas, apiUrls, confObj, 'pod-billing-service', true);
    this.clientInfo = {};
    this.clientInfo.apiToken = confObj.apiToken || null;
    this.clientInfo.tokenIssuer = confObj.tokenIssuer || null;
  }

  // #1 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.deadline && data.deadline instanceof Date) {
      data.deadline = utils.toShamsiDateString(data.deadline);
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

    if (data.hasOwnProperty('metadata')) {
      data.metadata = JSON.stringify(data.metadata);
    }

    if (data.hasOwnProperty('eventReminders')) {
      for (let i = 0; i < data.eventReminders.length; i++) {
        data.eventReminders = JSON.stringify(data.eventReminders);
      }
    }

    if (data.hasOwnProperty('eventMetadata')) {
      data.eventMetadata = JSON.stringify(data.eventMetadata);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    data._ott_ = data.ott;
    delete data.productList;
    delete data.ott;
    delete data.token;
    delete data.tokenIssuer;

    let hasBrackets = {
      productId: true,
      price: true,
      quantity: true,
      productDescription: true,
      eventReminders: true
    };
    return self.callService(apiName, headers, data, hasBrackets, true);
  }

  // #2 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.deadline && data.deadline instanceof Date) {
      data.deadline = utils.toShamsiDateString(data.deadline);
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

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    delete data.productList;

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.tokenIssuer;

    let hasBrackets = {
      productId: true,
      price: true,
      quantity: true,
      productDescription: true
    };
    return self.callService(apiName, headers, data, hasBrackets, true)
      .then(function (result) {
        let parsedResult = JSON.parse(result.result.result);
        let hash;
        let url;
        if (parsedResult.HasError === false) {
          hash = parsedResult.Result;
          url = self.checkAndAppend(self.urls.privateCallAddress, '/v1/pbc/preinvoice/') + hash;
          result.result = {};
          result.result.hash = hash;
          result.result.url = url;
          return result;
        }
        else {
          let errorObj = {
            code: parsedResult.ErrorCode,
            message: parsedResult.ErrorMessage,
            originalResult: parsedResult
          };
          throw errorObj;
        }
      });
  }

  // #3 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.fromDate && data.fromDate instanceof Date) {
      data.fromDate = utils.toShamsiDateTimeString(data.fromDate);
    }

    if (data.toDate && data.toDate instanceof Date) {
      data.toDate = utils.toShamsiDateTimeString(data.toDate);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
      .then(function (result) {
        for (let i = 0; i < result.result.length; i++) {
          if (result.result[i].hasOwnProperty('metadata')) {
            result.result[i].metadata = JSON.parse(result.result[i].metadata);
          }

          if (result.result[i].hasOwnProperty('eventReminders')) {
            for (let j = 0; j < result.result[i].eventReminders.length; i++) {
              result.result[i].eventReminders = JSON.parse(result.result[i].eventReminders);
            }
          }

          if (result.result[i].hasOwnProperty('eventMetadata')) {
            result.result[i].eventMetadata = JSON.parse(result.result[i].eventMetadata);
          }
        }
        return result;
      });
  }

  // #4 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #5 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #6 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('metaQuery')) {
      data.metaQuery = JSON.stringify(data.metaQuery);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
      .then(function (result) {
        for (let i = 0; i < result.result.length; i++) {
          if (result.result[i].hasOwnProperty('metadata')) {
            result.result[i].metadata = JSON.parse(result.result[i].metadata);
          }

          if (result.result[i].hasOwnProperty('eventReminders')) {
            for (let j = 0; j < result.result[i].eventReminders.length; i++) {
              result.result[i].eventReminders = JSON.parse(result.result[i].eventReminders);
            }
          }

          if (result.result[i].hasOwnProperty('eventMetadata')) {
            result.result[i].eventMetadata = JSON.parse(result.result[i].eventMetadata);
          }
        }
        return result;
      });
  }

  // #7 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.fromDate && data.fromDate instanceof Date) {
      data.fromDate = utils.toShamsiDateTimeString(data.fromDate);
    }

    if (data.toDate && data.toDate instanceof Date) {
      data.toDate = utils.toShamsiDateTimeString(data.toDate);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #8 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #9 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #10 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

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

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.invoiceItemList;
    delete data.token;
    delete data.tokenIssuer;

    let hasBrackets = {
      invoiceItemId: true,
      price: true,
      quantity: true,
      itemDescription: true
    };
    return this.callService(apiName, headers, data, hasBrackets, true);
  }

  // #11 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #12 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #13 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
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

  // #14 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #15 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.date && data.date instanceof Date) {
      data.date = utils.toShamsiDateString(data.date);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    data.scProductId = products[apiName];
    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    headers._ott_ = data.ott;
    delete data.token;
    delete data.tokenIssuer;
    delete data.ott;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #16 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
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

  // #17 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    headers._ott_ = data.ott;

    delete data.ott;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #18 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    headers._ott_ = data.ott;

    delete data.ott;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #19 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    headers._ott_ = data.ott;
    delete data.ott;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #20 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.fromDate && data.fromDate instanceof Date) {
      data.fromDate = utils.toShamsiDateTimeString(data.fromDate);
    }

    if (data.toDate && data.toDate instanceof Date) {
      data.toDate = utils.toShamsiDateTimeString(data.toDate);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #21 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #22 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #23
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

  // #24
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

  // #25 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.data = JSON.stringify(data.data);

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    headers._ott_ = data.ott;
    delete data.token;
    delete data.tokenIssuer;
    delete data.ott;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #26 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.data = JSON.stringify(data.data);

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #27 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.data = JSON.stringify(data.data);

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // --------------------------------------------- Voucher ---------------------------------------------
  // #28 API Token
  /**
   * @description This function defines credit voucher
   * @param {defineCreditVoucherObj} data
   * @returns {Promise}
   */
  defineCreditVoucher (data) {
    let apiName = 'defineCreditVoucher';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.expireDate && data.expireDate instanceof Date) {
      data.expireDate = utils.toShamsiDateString(data.expireDate);
    }

    data.count = [];
    data.amount = [];
    data.name = [];
    data.description = [];
    data.hash = [];
    for (let i = 0; i < data.vouchers.length; i++) {
      data.count.push(data.vouchers[i].count);
      data.amount.push(data.vouchers[i].amount);
      data.name.push(data.vouchers[i].name);
      data.description.push(data.vouchers[i].description);
      if (data.vouchers[i].hasOwnProperty('hash')) {
        data.hash.push(data.vouchers[i].hash);
      }
    }
    delete data.vouchers;

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    let hasBrackets = {
      count: true,
      amount: true,
      name: true,
      description: true,
      hash: true
    };
    return this.callService(apiName, headers, data, hasBrackets, true);
  }

  // #29 API Token
  /**
   * @description This function defines discount amount voucher
   * @param {defineDiscountAmountVoucherObj} data
   * @returns {Promise}
   */
  defineDiscountAmountVoucher (data) {
    let apiName = 'defineDiscountAmountVoucher';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.expireDate && data.expireDate instanceof Date) {
      data.expireDate = utils.toShamsiDateString(data.expireDate);
    }

    data.count = [];
    data.amount = [];
    data.name = [];
    data.description = [];
    data.hash = [];
    for (let i = 0; i < data.vouchers.length; i++) {
      data.count.push(data.vouchers[i].count);
      data.amount.push(data.vouchers[i].amount);
      data.name.push(data.vouchers[i].name);
      data.description.push(data.vouchers[i].description);
      if (data.vouchers[i].hasOwnProperty('hash')) {
        data.hash.push(data.vouchers[i].hash);
      }
    }
    delete data.vouchers;

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    let hasBrackets = {
      productId: true,
      count: true,
      amount: true,
      name: true,
      description: true,
      hash: true,
      dealerBusinessId: true
    };
    return this.callService(apiName, headers, data, hasBrackets, true);
  }

  // #30 API Token
  /**
   * @description This function defines discount percentage voucher
   * @param {defineDiscountPercentageVoucherObj} data
   * @returns {Promise}
   */
  defineDiscountPercentageVoucher (data) {
    let apiName = 'defineDiscountPercentageVoucher';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.expireDate && data.expireDate instanceof Date) {
      data.expireDate = utils.toShamsiDateString(data.expireDate);
    }

    data.count = [];
    data.amount = [];
    data.name = [];
    data.description = [];
    data.discountPercentage = [];
    data.hash = [];
    for (let i = 0; i < data.vouchers.length; i++) {
      data.count.push(data.vouchers[i].count);
      data.name.push(data.vouchers[i].name);
      data.description.push(data.vouchers[i].description);
      data.discountPercentage.push(data.vouchers[i].discountPercentage);
      if (data.vouchers[i].hasOwnProperty('amount')) {
        data.amount.push(data.vouchers[i].amount);
      }
      else {
        data.amount.push(0);
      }
      if (data.vouchers[i].hasOwnProperty('hash')) {
        data.hash.push(data.vouchers[i].hash);
      }
    }
    delete data.vouchers;

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    let hasBrackets = {
      productId: true,
      count: true,
      amount: true,
      name: true,
      description: true,
      discountPercentage: true,
      hash: true,
      dealerBusinessId: true
    };
    return this.callService(apiName, headers, data, hasBrackets, true);
  }

  // #31 API Token
  /**
   * @description This function applys the voucher to the given invoice
   * @param {applyVoucherObj} data
   * @returns {Promise}
   */
  applyVoucher (data) {
    let apiName = 'applyVoucher';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #32 API Token
  /**
   * @description This function lists the defined vouchers
   * @param {getVoucherListObj} data
   * @returns {Promise}
   */
  getVoucherList (data) {
    let apiName = 'getVoucherList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.expireDateFrom && data.expireDateFrom instanceof Date) {
      data.expireDateFrom = utils.toShamsiDateString(data.expireDateFrom);
    }

    if (data.expireDateTo && data.expireDateTo instanceof Date) {
      data.expireDateTo = utils.toShamsiDateString(data.expireDateTo);
    }

    if (data.consumDateFrom && data.consumDateFrom instanceof Date) {
      data.consumDateFrom = utils.toShamsiDateString(data.consumDateFrom);
    }

    if (data.consumDateTo && data.consumDateTo instanceof Date) {
      data.consumDateTo = utils.toShamsiDateString(data.consumDateTo);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    let hasBrackets = {
      productId: true,
      guildCode: true
    };
    return this.callService(apiName, headers, data, hasBrackets, true);
  }

  // #33 API Token
  /**
   * @description This function deactivates a voucher
   * @param {activationVoucherObj} data
   * @returns {Promise}
   */
  deactivateVoucher (data) {
    let apiName = 'deactivateVoucher';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #34 API Token
  /**
   * @description This function activates a voucher
   * @param {activationVoucherObj} data
   * @returns {Promise}
   */
  activateVoucher (data) {
    let apiName = 'activateVoucher';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // --------------------------------------------- Direct Debate ---------------------------------------------
  // #35 API Token
  /**
 * @description This function applys the voucher to the given invoice
 * @param {applyVoucherObj} data
 * @returns {Promise}
 */
  defineDirectWithdraw (data) {
    let apiName = 'defineDirectWithdraw';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    if (data.hasOwnProperty('privateKeyAddress')) {
      return readFile(data.privateKeyAddress, 'utf8')
        .then((res) => {
          data.privateKey = res;
          delete data.privateKeyAddress;
          return this.callService(apiName, headers, data, {}, true);
        });
    }
    else {
      return this.callService(apiName, headers, data, {}, true);
    }
  }

  // #36 API Token
  /**
   * @description This function lists the defined vouchers
   * @param {getVoucherListObj} data
   * @returns {Promise}
   */
  directWithdrawList (data) {
    let apiName = 'directWithdrawList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #37 API Token
  /**
   * @description This function deactivates a voucher
   * @param {activationVoucherObj} data
   * @returns {Promise}
   */
  updateDirectWithdraw (data) {
    let apiName = 'updateDirectWithdraw';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #38 API Token
  /**
   * @description This function activates a voucher
   * @param {activationVoucherObj} data
   * @returns {Promise}
   */
  revokeDirectWithdraw (data) {
    let apiName = 'revokeDirectWithdraw';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // --------------------------------------------- RECENTLY ADDED ---------------------------------------------
  // #39 API Token
  /**
   * @description This function deactivates a voucher
   * @param {activationVoucherObj} data
   * @returns {Promise}
   */
  payInvoiceByCredit (data) {
    let apiName = 'payInvoiceByCredit';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    headers._ott_ = data.ott;

    delete data.ott;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #40 API Token
  /**
   * @description This function activates a voucher
   * @param {activationVoucherObj} data
   * @returns {Promise}
   */
  payAnyInvoiceByCredit (data) {
    let apiName = 'payAnyInvoiceByCredit';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    headers._ott_ = data.ott;

    delete data.ott;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }
}

module.exports = PodBillingService;
