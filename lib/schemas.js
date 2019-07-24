module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      apiToken: {
        type: 'string'
      },
      tokenIssuer: {
        type: 'integer'
      },
      serverType: {
        enum: ['production', 'sandbox']
      }
    },
    required: ['apiToken'],
    additionalProperties: false
  },

  // #1
  ott: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
      },
      required: [], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #2
  issueInvoice: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        _ott_: {
          type: 'string'
        },
        redirectURL: {
          type: 'string',
          format: 'uri'
        },
        userId: {
          type: 'integer'
        },
        billNumber: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        deadline: {
          shamsiDate: []
        },
        productList: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              productId: {
                type: 'integer'
              },
              price: {
                type: 'number'
              },
              quantity: {
                type: 'number',
                exclusiveMinimum: 0
              },
              productDescription: {
                notEmpty: []
              }
            },
            required: ['productId', 'price', 'quantity', 'productDescription'],
            additionalProperties: false
          }
        },
        guildCode: {
          type: 'string'
        },
        currencyCode: {
          type: 'string'
        },
        addressId: {
          type: 'integer'
        },
        voucherHash: {
          type: 'string'
        },
        preferredTaxRate: {
          type: 'number'
        },
        verificationNeeded: {
          type: 'boolean'
        },
        verifyAfterTimeout: {
          type: 'boolean'
        },
        preview: {
          type: 'boolean'
        },
        metadata: {
          type: 'object'
        },
        safe: {
          type: 'string'
        },
        postVoucherEnabled: {
          type: 'string'
        },
        hasEvent: {
          type: 'string'
        },
        eventTitle: {
          type: 'string'
        },
        eventTimeZone: {
          type: 'string'
        },
        eventReminders: {
          type: 'array',
          items: {
            type: 'object'
          }
        },
        eventDescription: {
          type: 'string'
        },
        eventMetadata: {
          type: 'object'
        }
      },
      required: ['productList', 'guildCode', '_ott_'], //  '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #3
  createPreInvoice: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        ott: {
          type: 'string'
        },
        redirectUri: {
          type: 'string',
          format: 'uri'
        },
        callUrl: {
          type: 'string',
          format: 'uri'
        },
        userId: {
          type: 'integer'
        },
        billNumber: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        deadline: {
          shamsiDate: []
        },
        productList: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              productId: {
                type: 'integer'
              },
              price: {
                type: 'number'
              },
              quantity: {
                type: 'number'
              },
              productDescription: {
                notEmpty: []
              }
            },
            required: ['productId', 'price', 'quantity', 'productDescription']
          }
        },
        guildCode: {
          type: 'string'
        },
        currencyCode: {
          type: 'string'
        },
        preferredTaxRate: {
          type: 'number'
        },
        verificationNeeded: {
          type: 'boolean'
        },
        token: {
          type: 'string'
        }
      },
      required: ['productList', 'token', 'guildCode', 'redirectUri', 'userId', 'ott'], // '_token_', '_token_issuer'
      additionalProperties: false
    }
  },

  // #4
  getInvoiceList: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        id: {
          type: 'integer'
        },
        billNumber: {
          type: 'string'
        },
        uniqueNumber: {
          type: 'string'
        },
        trackerId: {
          type: 'integer'
        },
        fromDate: {
          oneOf: [
            {
              shamsiDate: []
            },
            {
              shamsiDateTime: []
            }
          ]
        },
        toDate: {
          oneOf: [
            {
              shamsiDate: []
            },
            {
              shamsiDateTime: []
            }
          ]
        },
        isCanceled: {
          type: 'boolean'
        },
        isPayed: {
          type: 'boolean'
        },
        isClosed: {
          type: 'boolean'
        },
        isWaiting: {
          type: 'string'
        },
        guildCode: {
          type: 'string'
        },
        referenceNumber: {
          type: 'string'
        },
        userId: {
          type: 'integer'
        },
        issuerId: {
          type: 'integer'
        },
        query: {
          type: 'string'
        },
        firstId: {
          type: 'integer'
        },
        lastId: {
          type: 'integer'
        },
        offset: {
          type: 'integer'
        },
        productIdList: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        size: {
          type: 'integer'
        }
      },
      required: ['offset'], // 'size', 'offset', 'guildCode', '_token_', '_token_issuer'
      additionalProperties: false
    }
  },

  // #5
  payInvoice: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        invoiceId: {
          type: 'integer'
        }
      },
      required: ['invoiceId'], //  '_token_', '_token_issuer'
      additionalProperties: false
    }
  },

  // #6
  sendInvoicePaymentSMS: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        invoiceId: {
          type: 'integer'
        },
        wallet: {
          type: 'string'
        },
        callbackUri: {
          type: 'string',
          format: 'uri'
        },
        redirectUri: {
          type: 'string',
          format: 'uri'
        },
        delegationId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        forceDelegation: {
          type: 'string'
        }
      },
      required: ['invoiceId'], // '_token_issuer_', 'invoiceId'
      additionalProperties: false
    }
  },

  // #7
  getInvoiceListByMetadata: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        metaQuery: {
          type: 'object'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        },
        isPayed: {
          type: 'boolean'
        },
        isCancelled: {
          type: 'boolean'
        }
      },
      required: [], // 'metaQuery', '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #8
  getInvoiceListAsFile: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        id: {
          type: 'integer'
        },
        billNumber: {
          type: 'string'
        },
        uniqueNumber: {
          type: 'string'
        },
        trackerId: {
          type: 'integer'
        },
        fromDate: {
          oneOf: [
            {
              shamsiDate: []
            },
            {
              shamsiDateTime: []
            }
          ]
        },
        toDate: {
          oneOf: [
            {
              shamsiDate: []
            },
            {
              shamsiDateTime: []
            }
          ]
        },
        isCanceled: {
          type: 'boolean'
        },
        isPayed: {
          type: 'boolean'
        },
        isClosed: {
          type: 'boolean'
        },
        isWaiting: {
          type: 'boolean'
        },
        guildCode: {
          type: 'string'
        },
        referenceNumber: {
          type: 'string'
        },
        userId: {
          type: 'integer'
        },
        query: {
          type: 'string'
        },
        productIdList: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        lastNRows: {
          type: 'integer'
        },
        callbackUrl: {
          type: 'string',
          format: 'uri'
        }
      },
      anyOf: [
        {
          required: [
            'lastNRows' //, '_token_', '_token_issuer'
          ]
        },
        {
          required: [
            'fromDate' //, '_token_', '_token_issuer'
          ]
        },
        {
          required: [
            'toDate' //, '_token_', '_token_issuer'
          ]
        }
      ],
      additionalProperties: false
    }
  },

  // #9
  verifyInvoice: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        id: {
          type: 'integer'
        },
        billNumber: {
          type: 'string'
        }
      },
      oneOf: [
        {
          required: [
            'id'
          ]
        },
        {
          required: [
            'billNumber'
          ]
        }
      ],
      // required: ['id'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #10
  cancelInvoice: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        id: {
          type: 'integer'
        }
      },
      required: ['id'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #11
  reduceInvoice: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        }, */
        id: {
          type: 'integer'
        },
        invoiceItemList: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              invoiceItemId: {
                type: 'integer'
              },
              price: {
                type: 'number'
              },
              quantity: {
                type: 'number'
              },
              itemDescription: {
                type: 'string'
              }
            }
          }
        },
        preferredTaxRate: {
          type: 'number'
        }
      },
      required: ['id', 'invoiceItemList'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #12
  verifyAndCloseInvoice: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        id: {
          type: 'integer'
        }
      },
      required: ['id'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #13
  closeInvoice: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        id: {
          type: 'integer'
        }
      },
      required: ['id'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #14
  getInvoicePaymentLink: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        invoiceId: {
          type: 'integer'
        },
        callbackUri: {
          type: 'string',
          format: 'uri'
        },
        redirectUri: {
          type: 'string',
          format: 'uri'
        },
        gateway: {
          type: 'string'
        }
      },
      required: ['invoiceId'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #15
  payInvoiceByInvoice: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        creditorInvoiceId: {
          type: 'integer'
        },
        debtorInvoiceId: {
          type: 'integer'
        }
      },
      required: ['creditorInvoiceId', 'debtorInvoiceId'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #16
  payInvoiceInFuture: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        _ott_: {
          type: 'string'
        },
        invoiceId: {
          type: 'integer'
        },
        date: {
          shamsiDate: []
        },
        guildCode: {
          type: 'string'
        },
        wallet: {
          type: 'string'
        }
      },
      oneOf: [
        {
          required: [
            'guildCode'
          ]
        },
        {
          required: [
            'wallet'
          ]
        }
      ],
      required: ['invoiceId', 'date', '_ott_'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #17
  getExportList: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        },
        id: {
          type: 'integer'
        },
        statusCode: {
          enum: ['EXPORT_SERVICE_STATUS_CREATED',
            'EXPORT_SERVICE_STATUS_RUNNING',
            'EXPORT_SERVICE_STATUS_SUCCESSFUL', 'EXPORT_SERVICE_STATUS_FAILED']
        },
        serviceUrl: {
          type: 'string'
        }
      },
      required: ['size', 'offset'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #18
  requestWalletSettlement: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        _ott_: {
          type: 'string'
        },
        wallet: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        sheba: {
          sheba: []
        },
        amount: {
          type: 'number'
        },
        currencyCode: {
          type: 'string'
        },
        uniqueId: {
          type: 'integer'
        },
        description: {
          type: 'string'
        }
      },
      required: ['_ott_', 'amount'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #19
  requestGuildSettlement: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        _ott_: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        sheba: {
          sheba: []
        },
        amount: {
          type: 'number'
        },
        guildCode: {
          type: 'string'
        },
        currencyCode: {
          type: 'string'
        },
        uniqueId: {
          type: 'integer'
        },
        description: {
          type: 'string'
        }
      },
      required: ['_ott_', 'amount', 'guildCode'], // '_token_', '_token_issuer_'
      additionalProperties: false
    }
  },

  // #20
  requestSettlementByTool: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        _ott_: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        toolCode: {
          enum: ['SETTLEMENT_TOOL_SATNA',
            'SETTLEMENT_TOOL_PAYA',
            'SETTLEMENT_TOOL_CARD']
        },
        toolId: {
          type: 'string'
        },
        amount: {
          type: 'number'
        },
        guildCode: {
          type: 'string'
        },
        currencyCode: {
          type: 'string'
        },
        uniqueId: {
          type: 'integer'
        },
        description: {
          type: 'string'
        }
      },
      required: ['_ott_', 'amount', 'guildCode', 'toolCode', 'toolId'],
      additionalProperties: false
    }
  },

  // #21
  listSettlements: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        statusCode: {
          enum: ['SETTLEMENT_REQUESTED', 'SETTLEMENT_SENT', 'SETTLEMENT_DONE']
        },
        currencyCode: {
          type: 'string'
        },
        fromAmount: {
          type: 'number'
        },
        toAmount: {
          type: 'number'
        },
        fromDate: {
          oneOf: [
            {
              shamsiDate: []
            },
            {
              shamsiDateTime: []
            }
          ]
        },
        toDate: {
          oneOf: [
            {
              shamsiDate: []
            },
            {
              shamsiDateTime: []
            }
          ]
        },
        offset: {
          type: 'number'
        },
        uniqueId: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        }
      },
      required: ['offset'], // size, _token_, _token_issuer_
      additionalProperties: false
    }
  },

  // #22
  addAutoSettlement: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        sheba: {
          type: 'string'
        },
        guildCode: {
          type: 'string'
        },
        currencyCode: {
          type: 'string'
        },
        instant: {
          type: 'boolean'
        }
      },
      required: ['guildCode'], // _token_, _token_issuer_
      additionalProperties: false
    }
  },

  // #23
  removeAutoSettlement: {
    body: {
      type: 'object',
      properties: {
        /* _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        } */
        guildCode: {
          type: 'string'
        },
        currencyCode: {
          type: 'string'
        }
      },
      required: ['guildCode'], // _token_, _token_issuer_
      additionalProperties: false
    }
  },

  getPayInvoiceByWalletLink: {
    body: {
      type: 'object',
      properties: {
        invoiceId: {
          type: 'integer'
        },
        redirectUri: {
          type: 'string',
          format: 'uri'
        },
        callUri: {
          type: 'string',
          format: 'uri'
        }
      },
      required: ['invoiceId'],
      'additionalProperties': false
    }
  },

  // #25
  getPayInvoiceByUniqueNumberLink: {
    body: {
      type: 'object',
      properties: {
        uniqueNumber: {
          type: 'string'
        },
        redirectUri: {
          type: 'string'
        },
        callUri: {
          type: 'string'
        },
        gateway: {
          type: 'string'
        }
      },
      required: ['uniqueNumber'],
      additionalProperties: false
    }
  },

  // #26
  guildList: {
    body: {
      type: 'object',
      properties: {
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        }
      },
      required: [],
      additionalProperties: false
    }
  },

  // #27
  addDealer: {
    body: {
      type: 'object',
      properties: {
        dealerBizId: {
          type: 'integer'
        },
        allProductAllow: {
          type: 'boolean'
        }
      },
      required: ['dealerBizId'],
      additionalProperties: false
    }
  },

  // #28
  dealerList: {
    body: {
      type: 'object',
      properties: {
        dealerBizId: {
          type: 'integer'
        },
        enable: {
          type: 'boolean'
        },
        offset: {
          type: 'integer'
        },
        size: {
          'type': 'integer'
        }
      },
      required: [],
      additionalProperties: false
    }
  },

  // #29
  enableDealer: {
    body: {
      type: 'object',
      properties: {
        dealerBizId: {
          type: 'integer'
        }
      },
      required: ['dealerBizId'],
      additionalProperties: false
    }
  },

  // #30
  disableDealer: {
    body: {
      type: 'object',
      properties: {
        dealerBizId: {
          type: 'integer'
        }
      },
      required: ['dealerBizId'],
      additionalProperties: false
    }
  },

  // #31
  businessDealingList: {
    body: {
      type: 'object',
      properties: {
        dealingBusinessId: {
          type: 'integer'
        },
        enable: {
          type: 'string'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        }
      },
      required: [],
      additionalProperties: false
    }
  },

  // #32
  issueMultiInvoice: {
    body: {
      type: 'object',
      properties: {
        _ott_: {
          type: 'string'
        },
        data: {
          type: 'object',
          properties: {
            redirectURL: {
              type: 'string',
              format: 'uri'
            },
            userId: {
              type: 'integer'
            },
            currencyCode: {
              type: 'string'
            },
            voucherHashs: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            preferredTaxRate: {
              type: 'number'
            },
            verificationNeeded: {
              type: 'boolean'
            },
            preview: {
              type: 'boolean'
            },
            mainInvoice: {
              type: 'object',
              properties: {
                billNumber: {
                  type: 'string'
                },
                guildCode: {
                  type: 'string'
                },
                metadata: {
                  type: 'object'
                },
                description: {
                  type: 'string'
                },
                invoiceItemVOs: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      productId: {
                        type: 'integer'
                      },
                      price: {
                        type: 'number'
                      },
                      quantity: {
                        type: 'number'
                      },
                      description: {
                        notEmpty: []
                      }
                    },
                    required: ['productId', 'price', 'quantity', 'description'],
                    additionalProperties: false
                  }
                }
              },
              required: ['guildCode', 'invoiceItemVOs'],
              additionalProperties: false
            },
            subInvoices: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  businessId: {
                    type: 'integer'
                  },
                  guildCode: {
                    type: 'string'
                  },
                  billNumber: {
                    type: 'string'
                  },
                  metadata: {
                    type: 'object'
                  },
                  description: {
                    notEmpty: []
                  },
                  invoiceItemVOs: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        productId: {
                          type: 'integer'
                        },
                        price: {
                          type: 'number'
                        },
                        quantity: {
                          type: 'number'
                        },
                        description: {
                          notEmpty: []
                        }
                      },
                      required: ['productId', 'price', 'quantity', 'description'],
                      additionalProperties: false
                    }
                  }
                },
                required: ['businessId', 'guildCode', 'invoiceItemVOs'],
                additionalProperties: false
              }
            },
            customerDescription: {
              type: 'string'
            },
            customerMetadata: {
              type: 'object'
            },
            customerInvoiceItemVOs: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  productId: {
                    type: 'integer'
                  },
                  price: {
                    type: 'number'
                  },
                  quantity: {
                    type: 'number'
                  },
                  description: {
                    notEmpty: []
                  }
                },
                required: ['productId', 'price', 'quantity', 'description'],
                additionalProperties: false
              }
            }
          },
          required: ['mainInvoice', 'subInvoices', 'customerInvoiceItemVOs'],
          additionalProperties: false
        },
        delegatorId: {
          type: 'array'
        },
        delegationHash: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        forceDelegation: {
          type: 'string'
        }
      },
      required: ['data', '_ott_'],
      additionalProperties: false
    }
  },

  // #33
  reduceMultiInvoice: {
    body: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            preferredTaxRate: {
              type: 'number'
            },
            mainInvoice: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer'
                },
                reduceInvoiceItemVOs: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'integer'
                      },
                      price: {
                        type: 'number'
                      },
                      quantity: {
                        type: 'number'
                      },
                      description: {
                        notEmpty: []
                      }
                    },
                    required: ['id', 'price', 'quantity', 'description'],
                    additionalProperties: false
                  }
                }
              },
              required: ['id', 'reduceInvoiceItemVOs'],
              additionalProperties: false
            },
            subInvoices: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer'
                  },
                  reduceInvoiceItemVOs: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'integer'
                        },
                        price: {
                          type: 'number'
                        },
                        quantity: {
                          type: 'number'
                        },
                        description: {
                          notEmpty: []
                        }
                      },
                      required: ['id', 'price', 'quantity', 'description'],
                      additionalProperties: false
                    }
                  }
                },
                required: ['id', 'reduceInvoiceItemVOs'],
                additionalProperties: false
              }
            },
            customerInvoiceItemVOs: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer'
                  },
                  price: {
                    type: 'number'
                  },
                  quantity: {
                    type: 'number'
                  },
                  description: {
                    notEmpty: []
                  }
                },
                required: ['id', 'price', 'quantity', 'description'],
                additionalProperties: false
              }
            }
          },
          required: ['mainInvoice', 'customerInvoiceItemVOs'],
          additionalProperties: false
        }
      },
      required: ['data'],
      additionalProperties: false
    }
  },

  // #34
  reduceMultiInvoiceAndCashOut: {
    body: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            preferredTaxRate: {
              type: 'number'
            },
            mainInvoice: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer'
                },
                reduceInvoiceItemVOs: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'integer'
                      },
                      price: {
                        type: 'number'
                      },
                      quantity: {
                        type: 'number'
                      },
                      description: {
                        notEmpty: []
                      }
                    },
                    required: ['id', 'price', 'quantity', 'description'],
                    additionalProperties: false
                  }
                }
              },
              required: ['id', 'reduceInvoiceItemVOs'],
              additionalProperties: false
            },
            subInvoices: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer'
                  },
                  reduceInvoiceItemVOs: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'integer'
                        },
                        price: {
                          type: 'number'
                        },
                        quantity: {
                          type: 'number'
                        },
                        description: {
                          notEmpty: []
                        }
                      },
                      required: ['id', 'price', 'quantity', 'description'],
                      additionalProperties: false
                    }
                  }
                },
                required: ['id', 'reduceInvoiceItemVOs'],
                additionalProperties: false
              }
            },
            customerInvoiceItemVOs: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer'
                  },
                  price: {
                    type: 'number'
                  },
                  quantity: {
                    type: 'number'
                  },
                  description: {
                    notEmpty: []
                  }
                },
                required: ['id', 'price', 'quantity', 'description'],
                additionalProperties: false
              }
            }
          },
          required: ['mainInvoice', 'customerInvoiceItemVOs'],
          additionalProperties: false
        }
      },
      required: ['data'],
      additionalProperties: false
    }
  },

  // #35
  addDealerProductPermission: {
    body: {
      type: 'object',
      properties: {
        dealerBizId: {
          type: 'integer'
        },
        productId: {
          type: 'integer'
        }
      },
      required: ['dealerBizId', 'productId'],
      additionalProperties: false
    }
  },

  // #36
  dealerProductPermissionList: {
    body: {
      type: 'object',
      properties: {
        productId: {
          type: 'integer'
        },
        dealerBizId: {
          type: 'integer'
        },
        enable: {
          type: 'boolean'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        }
      },
      required: [],
      additionalProperties: false
    }
  },

  // #37
  dealingProductPermissionList: {
    body: {
      type: 'object',
      properties: {
        productId: {
          type: 'integer'
        },
        dealingBusinessId: {
          type: 'integer'
        },
        enable: {
          type: 'boolean'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        }
      },
      required: [],
      additionalProperties: false
    }
  },

  // #38
  disableDealerProductPermission: {
    body: {
      type: 'object',
      properties: {
        productId: {
          type: 'integer'
        },
        dealerBizId: {
          type: 'integer'
        }
      },
      required: ['dealerBizId', 'productId'],
      additionalProperties: false
    }
  },

  // #39
  enableDealerProductPermission: {
    body: {
      type: 'object',
      properties: {
        productId: {
          type: 'integer'
        },
        dealerBizId: {
          type: 'integer'
        }
      },
      required: ['dealerBizId', 'productId'],
      additionalProperties: false
    }
  }
};
