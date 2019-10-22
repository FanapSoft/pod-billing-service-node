// Missing Objects: 25, 26, 27, 35, 36, 37, 38

/**
 * @typedef {object} confObj
 * @property {string} apiToken
 * @property {string} tokenIssuer
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

// #1
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
 * @property {string} [ott]
 */

// #2
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
 * @property {string} [ott]
 */

// #3
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

// #4, #13
/**
* @typedef {object} invoiceIdObj
* @property {integer} invoiceId
*/

// #5
/**
 * @typedef {object} sendInvoicePaymentSMSObj
 * @property {integer} invoiceId
 * @property {string} [wallet]
 * @property {string} [callbackUri]
 * @property {string} [redirectUri]
 */

// #6
/**
 * @typedef {object} getInvoiceListByMetadataObj
 * @property {object} metaQuery
 * @property {integer} [offset]
 * @property {integer} [size]
 */

// #7
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

// #8
/**
 * @typedef {object} verifyInvoiceObj
 * @property {integer} id
 * @property {string} [billNumber]
 */

// #9, #11, #12
/**
 * @typedef {object} idObj
 * @property {integer} id
 */

// #10
/**
 * @typedef {object} reduceInvoiceObj
 * @property {integer} id
 * @property {invoiceItemListObj} invoiceItemListObj
 * @property {string} [preferredTaxRate]
 */

// #14
/**
 * @typedef {object} payInvoiceByInvoiceObj
 * @property {integer} creditorInvoiceId
 * @property {integer} debtorInvoiceId
 */

// #15
/**
 * @typedef {object} payInvoiceInFuture
 * @property {integer} invoiceId
 * @property {string} date
 */

// #16 
/**
 * @typedef {object} getExportList
 * @property {integer} offset
 * @property {integer} size
 * @property {integer} [id]
 * @property {string} [statusCode]
 * @property {string} [serviceUrl]
 */

// #17
/**
 * @typedef {object} requestWalletSettlementObj
 * @property {string} ott
 * @property {string} [wallet]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [sheba]
 * @property {number} amount
 * @property {string} [currencyCode]
 * @property {integer} [uniqueId]
 * @property {number} [description]
 */

// #18
/**
 * @typedef {object} requestGuildSettlementObj
 * @property {string} ott
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [sheba]
 * @property {number} amount
 * @property {string} [guildCode]
 * @property {string} [currencyCode]
 * @property {integer} [uniqueId]
 * @property {number} [description]
 */

// #19
/**
 * @typedef {object} requestSettlementByToolObj
 * @property {string} ott
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

// #20
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

// #21
/**
* @typedef {object} addAutoSettlementObj
* @property {string} [firstName]
* @property {string} [lastName]
* @property {string} [sheba]
* @property {string} guildCode
* @property {string} [currencyCode]
* @property {string} [instant]
*/

// #22
/**
* @typedef {object} removeAutoSettlementObj
* @property {string} guildCode
* @property {string} [currencyCode]
*/

// #23
/**
* @typedef {object} getPayInvoiceByWalletLinkObj
* @property {string} invoiceId
* @property {string} [redirectUri]
* @property {string} [callUri]
*/

// #24
/**
* @typedef {object} getPayInvoiceByUniqueNumberLinkObj
* @property {string} uniqueNumber
* @property {string} [redirectUri]
* @property {string} [callUri]
* @property {string} [gateway]
*/

/**
 * @typedef {object} voucherObj
 * @property {integer} count
 * @property {number} amount
 * @property {string} name
 * @property {string} description
 * @property {string} [hash]
 */

/**
* @typedef {object} percentVoucherObj
* @property {integer} count
* @property {number} amount
* @property {string} name
* @property {string} description
* @property {string} discountPercentage
* @property {string} [hash]
*/

// #28
/**
 * @typedef {object} defineCreditVoucherObj
 * @property {string} guildCode
 * @property {string} expireDate
 * @property {Array<voucherObj>} vouchers
 * @property {integer} [limitedConsumerId]
 * @property {string} [currencyCode]
 * @property {string} [token]
 * @property {integer} [tokenissuer]
 */

// #29 
/**
 * @typedef {object} defineDiscountAmountVoucherObj
 * @property {string} guildCode
 * @property {string} expireDate
 * @property {Array<voucherObj>} vouchers
 * @property {Array<integer>} [productId]
 * @property {Array<integer>} [dealerBusinessId]
 * @property {integer} [limitedConsumerId]
 * @property {string} [currencyCode]
 * @property {string} [token]
 * @property {integer} [tokenissuer]
 */

// #30
/**
* @typedef {object} defineDiscountPercentageVoucherObj
 * @property {string} guildCode
 * @property {string} expireDate
 * @property {Array<percentVoucherObj>} vouchers
 * @property {integer} type
 * @property {Array<integer>} [productId]
 * @property {Array<integer>} [dealerBusinessId]
 * @property {integer} [limitedConsumerId]
 * @property {string} [currencyCode]
 * @property {Array<string>} [hash]
 * @property {string} [token]
 * @property {integer} [tokenissuer]
*/

// #31
/**
 * @typedef {object} applyVoucherObj
 * @property {string} ott
 * @property {integer} invoiceId
 * @property {Array<string>} voucherHash
 * @property {string} [token]
 * @property {integer} [tokenissuer]
 */

// #32
/**
 * @typedef {object} getVoucherListObj
 * @property {integer} offset
 * @property {integer} size
 * @property {integer} [consumerId]
 * @property {string} [hash]
 * @property {string} [name]
 * @property {integer} [type]
 * @property {Array<string>} [guildCode]
 * @property {string} [currencyCode]
 * @property {number} [amountFrom]
 * @property {number} [amountTo]
 * @property {number} [discountPercentageFrom]
 * @property {number} [discountPercentageTo]
 * @property {string} [expireDateFrom]
 * @property {string} [expireDateTo]
 * @property {string} [consumDateFrom]
 * @property {string} [consumDateTo]
 * @property {number} [usedAmountFrom]
 * @property {number} [usedAmountTo]
 * @property {boolean} [active]
 * @property {boolean} [used]
 * @property {string} [token]
 * @property {integer} [tokenissuer]
 */

// #33, #34
/**
 * @typedef {object} activationVoucherObj
 * @property {integer} id
 * @property {string} [token]
 * @property {integer} [tokenissuer]
 */
