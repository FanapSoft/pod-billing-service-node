/**
 * @typedef {object} confObj
 * @property {string} [serverType]
 */

/**
 * @typedef {object} productIdListObj
 * @property {integer} productId
 * @property {integer} price
 * @property {integer} quantity
 * @property {string} productDescription
 */

/**
 * @typedef {object} invoiceItemListObj
 * @property {integer} invoiceItemId
 * @property {integer} price
 * @property {integer} quantity
 * @property {string} productDescription
 */

/**
 * @typedef {object} issueInvoiceObj
 * @property {string} [redirectURL]
 * @property {integer} [userId]
 * @property {string} [billNumber]
 * @property {string} [description]
 * @property {string} [deadline]
 * @property {productIdListObj[]} productIdList
 * @property {string} guildCode
 * @property {string} [currencyCode]
 * @property {integer} [addressId]
 * @property {string} [voucherHash]
 * @property {string} [preferredTaxRate]
 * @property {boolean} [verificationNeeded]
 * @property {boolean} [verifyAfterTimeout]
 * @property {boolean} [preview]
 * @property {string} [metadata]
 * @property {string} [safe]
 * @property {string} [postVoucherEnabled]
 * @property {string} [hasEvent]
 * @property {string} [eventTitle]
 * @property {string} [eventTimeZone]
 * @property {object[]} [eventReminders]
 * @property {string} [eventDescription]
 * @property {object} [eventMetadata]
 * @property {string} [_ott_]
 */

/**
 * @typedef {object} preInvoiceObj
 * @property {string} [redirectURL]
 * @property {string} [callUrl]
 * @property {integer} [userId]
 * @property {string} [billNumber]
 * @property {string} [description]
 * @property {string} [deadline]
 * @property {productIdListObj[]} productIdList
 * @property {string} guildCode
 * @property {string} [currencyCode]
 * @property {string} [preferredTaxRate]
 * @property {boolean} [verificationNeeded]
 * @property {string} [_ott_]
 */

/**
 * @typedef {object} getInvoiceListObj
 * @property {integer} [id]
 * @property {string} [billNumber]
 * @property {string} [uniqueNumber]
 * @property {integer} [trackerId]
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {boolean} [isCanceled]
 * @property {boolean} [isPayed]
 * @property {boolean} [isClosed]
 * @property {boolean} [isWaiting]
 * @property {string} [guildCode]
 * @property {string} [referenceNumber]
 * @property {integer} [userId]
 * @property {integer} [preferredissuerId]
 * @property {string} [query]
 * @property {integer} [firstId]
 * @property {integer} [lastId]
 * @property {integer} offset
 * @property {integer} [productIdList]
 * @property {integer} [size]
 */

/**
 * @typedef {object} invoiceIdObj
 * @property {integer} invoiceId
 */

/**
 * @typedef {object} sendInvoicePaymentSMSObj
 * @property {integer} invoiceId
 * @property {string} [wallet]
 * @property {string} [callbackUri]
 * @property {string} [redirectUri]
 */

/**
 * @typedef {object} getInvoiceListByMetadataObj
 * @property {object} metaQuery
 * @property {integer} [offset]
 * @property {integer} [size]
 */

/**
 * @typedef {object} getInvoiceListAsFileObj
 * @property {integer} [id]
 * @property {string} [billNumber]
 * @property {string} [uniqueNumber]
 * @property {integer} [trackerId]
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {boolean} [isCanceled]
 * @property {boolean} [isPayed]
 * @property {boolean} [isClosed]
 * @property {boolean} [isWaiting]
 * @property {string} [guildCode]
 * @property {string} [referenceNumber]
 * @property {integer} [userId]
 * @property {string} [query]
 * @property {string} [productIdList]
 * @property {integer} lastNRows
 * @property {string} [callbackUrl]
 */

/**
 * @typedef {object} verifyInvoiceObj
 * @property {integer} id
 * @property {string} [billNumber]
 */

/**
 * @typedef {object} idObj
 * @property {integer} id
 */

/**
 * @typedef {object} reduceInvoiceObj
 * @property {integer} id
 * @property {invoiceItemListObj} invoiceItemListObj
 * @property {string} [preferredTaxRate]
 */

/**
 * @typedef {object} payInvoiceByInvoiceObj
 * @property {integer} creditorInvoiceId
 * @property {integer} debtorInvoiceId
 */

/**
 * @typedef {object} payInvoiceInFuture
 * @property {integer} invoiceId
 * @property {string} date
 */

/**
 * @typedef {object} getExportList
 * @property {integer} offset
 * @property {integer} size
 * @property {integer} [id]
 * @property {string} [statusCode]
 * @property {string} [serviceUrl]
 */

/**
 * @typedef {object} requestWalletSettlementObj
 * @property {string} _ott_
 * @property {string} [wallet]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [sheba]
 * @property {number} amount
 * @property {string} [currencyCode]
 * @property {integer} [uniqueId]
 * @property {number} [description]
 */

/**
 * @typedef {object} requestGuildSettlementObj
 * @property {string} _ott_
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [sheba]
 * @property {number} amount
 * @property {string} [guildCode]
 * @property {string} [currencyCode]
 * @property {integer} [uniqueId]
 * @property {number} [description]
 */

/**
 * @typedef {object} requestSettlementByToolObj
 * @property {string} _ott_
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} toolCode
 * @property {string} toolId
 * @property {number} amount
 * @property {string} guildCode
 * @property {string} [currencyCode]
 * @property {integer} [uniqueId]
 * @property {number} [description]
 */

/**
* @typedef {object} listSettlementsObj
* @property {string} [statusCode]
* @property {string} [currencyCode]
* @property {string} [fromAmount]
* @property {string} [toAmount]
* @property {string} [fromDate]
* @property {string} [toDate]
* @property {integer} offset
* @property {integer} [uniqueId]
* @property {integer} [size]
*/

/**
* @typedef {object} addAutoSettlementObj
* @property {string} [firstName]
* @property {string} [lastName]
* @property {string} [sheba]
* @property {string} guildCode
* @property {string} [currencyCode]
* @property {string} [instant]
*/

/**
* @typedef {object} removeAutoSettlementObj
* @property {string} guildCode
* @property {string} [currencyCode]
*/

/**
* @typedef {object} getPayInvoiceByWalletLinkObj
* @property {string} invoiceId
* @property {string} [redirectUri]
* @property {string} [callUri]
*/

/**
* @typedef {object} getPayInvoiceByUniqueNumberLinkObj
* @property {string} uniqueNumber
* @property {string} [redirectUri]
* @property {string} [callUri]
* @property {string} [gateway]
*/
