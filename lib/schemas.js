module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      apiToken: {
        notEmpty: []
      },
      tokenIssuer: {
        type: 'integer',
        enum: [0, 1]
      }
    },
    required: ['apiToken'],
    additionalProperties: false
  },

  // #1
  issueInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        ott: {
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
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
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
                oneOf: [
                  {
                    type: 'number'
                  },
                  {
                    enum: ['auto']
                  }
                ]
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
          type: 'array',
          items: {
            type: 'string'
          }
        },
        preferredTaxRate: {
          type: 'number',
          minimum: 0,
          maximum: 1
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
          type: 'boolean'
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
      required: ['token', 'tokenIssuer', 'ott', 'productList', 'guildCode'],
      additionalProperties: false
    }
  },

  // #2
  createPreInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
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
                oneOf: [
                  {
                    type: 'number'
                  },
                  {
                    enum: ['auto']
                  }
                ]
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
          type: 'number',
          minimum: 0,
          maximum: 1
        },
        verificationNeeded: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'ott', 'productList', 'guildCode', 'redirectUri', 'userId'],
      additionalProperties: false
    }
  },

  // #3
  getInvoiceList: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
              instanceof: 'Date'
            },
            {
              shamsiDateTime: []
            }
          ]
        },
        toDate: {
          oneOf: [
            {
              instanceof: 'Date'
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
      anyOf: [
        {
          required: ['token', 'tokenIssuer', 'offset']
        },
        {
          required: ['token', 'tokenIssuer', 'firstId']
        },
        {
          required: ['token', 'tokenIssuer', 'lastId']
        }
      ],
      additionalProperties: false
    }
  },

  // #4
  payInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        invoiceId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'invoiceId'],
      additionalProperties: false
    }
  },

  // #5
  sendInvoicePaymentSMS: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
          type: 'array'
        },
        forceDelegation: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'invoiceId'],
      additionalProperties: false
    }
  },

  // #6
  getInvoiceListByMetadata: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #7
  getInvoiceListAsFile: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
              instanceof: 'Date'
            },
            {
              shamsiDateTime: []
            }
          ]
        },
        toDate: {
          oneOf: [
            {
              instanceof: 'Date'
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
          required: ['token', 'tokenIssuer', 'lastNRows']
        },
        {
          required: ['token', 'tokenIssuer', 'fromDate']
        },
        {
          required: ['token', 'tokenIssuer', 'toDate']
        }
      ],
      additionalProperties: false
    }
  },

  // #8
  verifyInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        },
        billNumber: {
          type: 'string'
        }
      },
      oneOf: [
        {
          required: ['token', 'tokenIssuer', 'id']
        },
        {
          required: ['token', 'tokenIssuer', 'billNumber']
        }
      ],
      additionalProperties: false
    }
  },

  // #9
  cancelInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // #10
  reduceInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
                oneOf: [
                  {
                    type: 'number'
                  },
                  {
                    enum: ['auto']
                  }
                ]
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
          type: 'number',
          minimum: 0,
          maximum: 1
        }
      },
      required: ['token', 'tokenIssuer', 'id', 'invoiceItemList'],
      additionalProperties: false
    }
  },

  // #11
  verifyAndCloseInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // #12
  closeInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // #13
  getInvoicePaymentLink: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
      required: ['token', 'tokenIssuer', 'invoiceId'],
      additionalProperties: false
    }
  },

  // #14
  payInvoiceByInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        creditorInvoiceId: {
          type: 'integer'
        },
        debtorInvoiceId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'creditorInvoiceId', 'debtorInvoiceId'],
      additionalProperties: false
    }
  },

  // #15
  payInvoiceInFuture: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        ott: {
          type: 'string'
        },
        invoiceId: {
          type: 'integer'
        },
        date: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
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
          required: ['guildCode']
        },
        {
          required: ['wallet']
        }
      ],
      required: ['token', 'tokenIssuer', 'ott', 'invoiceId', 'date'],
      additionalProperties: false
    }
  },

  // #16
  getExportList: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
      required: ['token', 'tokenIssuer', 'size', 'offset'],
      additionalProperties: false
    }
  },

  // #17
  requestWalletSettlement: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        ott: {
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
          type: 'string'
        },
        description: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'ott', 'amount'],
      additionalProperties: false
    }
  },

  // #18
  requestGuildSettlement: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        ott: {
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
          type: 'string'
        },
        description: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'ott', 'amount', 'guildCode'],
      additionalProperties: false
    }
  },

  // #19
  requestSettlementByTool: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        ott: {
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
          type: 'string'
        },
        description: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'ott', 'amount', 'guildCode', 'toolCode', 'toolId'],
      additionalProperties: false
    }
  },

  // #20
  listSettlements: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
              instanceof: 'Date'
            },
            {
              shamsiDateTime: []
            }
          ]
        },
        toDate: {
          oneOf: [
            {
              instanceof: 'Date'
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
          type: 'string'
        },
        size: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'offset'],
      additionalProperties: false
    }
  },

  // #21
  addAutoSettlement: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
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
      required: ['token', 'tokenIssuer', 'guildCode'],
      additionalProperties: false
    }
  },

  // #22
  removeAutoSettlement: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        guildCode: {
          type: 'string'
        },
        currencyCode: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'guildCode'],
      additionalProperties: false
    }
  },

  // #23
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

  // #24
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

  // #25
  issueMultiInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        ott: {
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
              type: 'number',
              minimum: 0,
              maximum: 1
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
                        oneOf: [
                          {
                            type: 'number'
                          },
                          {
                            enum: ['auto']
                          }
                        ]
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
                },
                discountSharePercent: {
                  type: 'number',
                  minimum: 0,
                  maximum: 100
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
                          oneOf: [
                            {
                              type: 'number'
                            },
                            {
                              enum: ['auto']
                            }
                          ]
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
                  },
                  discountSharePercent: {
                    type: 'number',
                    minimum: 0,
                    maximum: 100
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
                    oneOf: [
                      {
                        type: 'number'
                      },
                      {
                        enum: ['auto']
                      }
                    ]
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
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        delegationHash: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        forceDelegation: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'data', 'ott'],
      additionalProperties: false
    }
  },

  // #26
  reduceMultiInvoice: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        data: {
          type: 'object',
          properties: {
            preferredTaxRate: {
              type: 'number',
              minimum: 0,
              maximum: 1
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
                        oneOf: [
                          {
                            type: 'number'
                          },
                          {
                            enum: ['auto']
                          }
                        ]
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
                          oneOf: [
                            {
                              type: 'number'
                            },
                            {
                              enum: ['auto']
                            }
                          ]
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
                    oneOf: [
                      {
                        type: 'number'
                      },
                      {
                        enum: ['auto']
                      }
                    ]
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
      required: ['token', 'tokenIssuer', 'data'],
      additionalProperties: false
    }
  },

  // #27
  reduceMultiInvoiceAndCashOut: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        data: {
          type: 'object',
          properties: {
            preferredTaxRate: {
              type: 'number',
              minimum: 0,
              maximum: 1
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
                        oneOf: [
                          {
                            type: 'number'
                          },
                          {
                            enum: ['auto']
                          }
                        ]
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
                          oneOf: [
                            {
                              type: 'number'
                            },
                            {
                              enum: ['auto']
                            }
                          ]
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
                    oneOf: [
                      {
                        type: 'number'
                      },
                      {
                        enum: ['auto']
                      }
                    ]
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
      required: ['token', 'tokenIssuer', 'data'],
      additionalProperties: false
    }
  },

  // --------------------------------------------- Voucher ---------------------------------------------
  // #28
  defineCreditVoucher: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        guildCode: {
          type: 'string'
        },
        expireDate: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
        },
        vouchers: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              amount: {
                type: 'number'
              },
              name: {
                type: 'string'
              },
              description: {
                type: 'string'
              },
              hash: {
                type: 'string'
              }
            },
            required: ['count', 'amount', 'name', 'description'],
            additionalProperties: false
          }
        },
        limitedConsumerId: {
          type: 'integer'
        },
        currencyCode: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'guildCode', 'expireDate', 'vouchers'],
      additionalProperties: false
    }
  },

  // #29
  defineDiscountAmountVoucher: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        guildCode: {
          type: 'string'
        },
        expireDate: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
        },
        productId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        dealerBusinessId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        vouchers: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              amount: {
                type: 'number'
              },
              name: {
                type: 'string'
              },
              description: {
                type: 'string'
              },
              hash: {
                type: 'string'
              }
            },
            required: ['count', 'amount', 'name', 'description'],
            additionalProperties: false
          }
        },
        limitedConsumerId: {
          type: 'integer'
        },
        currencyCode: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'guildCode', 'expireDate', 'vouchers'],
      additionalProperties: false
    }
  },

  // #30
  defineDiscountPercentageVoucher: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        guildCode: {
          type: 'string'
        },
        expireDate: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
        },
        productId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        dealerBusinessId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        vouchers: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              amount: {
                type: 'number'
              },
              discountPercentage: {
                type: 'number',
                minimum: 0,
                maximum: 100
              },
              name: {
                type: 'string'
              },
              description: {
                type: 'string'
              },
              hash: {
                type: 'string'
              }
            },
            required: ['count', 'name', 'discountPercentage', 'description'],
            additionalProperties: false
          }
        },
        limitedConsumerId: {
          type: 'string'
        },
        type: {
          type: 'integer',
          enum: [4, 8, 16]
        },
        currencyCode: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'guildCode', 'expireDate', 'vouchers', 'type'],
      additionalProperties: false
    }
  },

  // #31
  applyVoucher: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        ott: {
          type: 'string'
        },
        invoiceId: {
          type: 'integer'
        },
        voucherHash: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        preview: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'ott', 'invoiceId', 'voucherHash'],
      additionalProperties: false
    }
  },

  // #32
  getVoucherList: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        consumerId: {
          type: 'integer'
        },
        hash: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        type: {
          type: 'integer'
          // enum: [4, 8, 16, 12, 20, 24, 28]
        },
        guildCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        currencyCode: {
          type: 'string'
        },
        amountFrom: {
          type: 'number'
        },
        amountTo: {
          type: 'number'
        },
        discountPercentageFrom: {
          type: 'number'
        },
        discountPercentageTo: {
          type: 'number'
        },
        expireDateFrom: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
        },
        expireDateTo: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
        },
        productId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        consumDateFrom: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
        },
        consumDateTo: {
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
        },
        usedAmountFrom: {
          type: 'number'
        },
        usedAmountTo: {
          type: 'number'
        },
        active: {
          type: 'boolean'
        },
        used: {
          type: 'boolean'
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'integer',
          minimum: 1
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #33
  deactivateVoucher: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // #34
  activateVoucher: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // --------------------------------------------- Direct Debate ---------------------------------------------
  // #35
  defineDirectWithdraw: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        username: {
          type: 'string'
        },
        privateKey: {
          type: 'string'
        },
        privateKeyAddress: {
          type: 'string'
        },
        depositNumber: {
          type: 'string'
        },
        onDemand: {
          type: 'boolean'
        },
        minAmount: {
          type: 'number'
        },
        maxAmount: {
          type: 'number'
        },
        wallet: {
          type: 'string'
        }
      },
      oneOf: [
        {
          required: ['token', 'tokenIssuer', 'username', 'privateKey', 'depositNumber', 'onDemand', 'minAmount', 'maxAmount', 'wallet'],
        },
        {
          required: ['token', 'tokenIssuer', 'username', 'privateKeyAddress', 'depositNumber', 'onDemand', 'minAmount', 'maxAmount', 'wallet'],
        }
      ],
      additionalProperties: false
    }
  },

  // #36
  directWithdrawList: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        wallet: {
          type: 'string'
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'integer',
          minimum: 1
        }
      },
      required: ['token', 'tokenIssuer', 'offset', 'size'],
      additionalProperties: false
    }
  },

  // #37
  updateDirectWithdraw: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        },
        username: {
          type: 'string'
        },
        privateKey: {
          type: 'string'
        },
        depositNumber: {
          type: 'string'
        },
        onDemand: {
          type: 'boolean'
        },
        minAmount: {
          type: 'number'
        },
        maxAmount: {
          type: 'number'
        },
        wallet: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'id', 'username', 'privateKey', 'depositNumber', 'onDemand', 'minAmount', 'maxAmount', 'wallet'],
      additionalProperties: false
    }
  },

  // #38
  revokeDirectWithdraw: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // --------------------------------------------- RECENTLY ADDED ---------------------------------------------
  // #39
  payInvoiceByCredit: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        ott: {
          type: 'string'
        },
        invoiceId: {
          type: 'integer'
        },
        delegatorId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        delegationHash: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        forceDelegation: {
          type: 'boolean'
        },
        wallet: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'ott', 'invoiceId'],
      additionalProperties: false
    }
  },

  // #40
  payAnyInvoiceByCredit: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        ott: {
          type: 'string'
        },
        invoiceId: {
          type: 'integer'
        },
        delegatorId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        delegationHash: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        forceDelegation: {
          type: 'boolean'
        },
        wallet: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'ott', 'invoiceId', 'wallet'],
      additionalProperties: false
    }
  }
};
