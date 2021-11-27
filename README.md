# Stock X Api
![version](https://img.shields.io/npm/v/@woogo/stockx-api)
![download](https://img.shields.io/npm/dt/@woogo/stockx-api)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

UnOfficial Stock X Api

## Inspiration

This repo was a fork of [matthew1232/stockx-api](https://github.com/matthew1232/stockx-api)

## Features

- [x] Get Product Details
- [x] Search Products

## Exceptions

You can catch exception below : 
- ``InvalidInputException``
- ``InvalidLoginException``
- ``ForbidenException``
- ``ItemNotFoundException``
- ``UnknowException``
- ``ParsingException``

## Usage

```typescript
const stockx = new StockXAPI({
  userAgent: 'MyPreferedUserAgent',
  currencyCode: 'USD',
  countryCode: 'FR',
  proxy: [
    {
      port: 3000,
      host: 'MyPreferedProxy',
    },
  ],
});

const result = await stockx.productDetails('https://stockx.com/fr-fr/reebok-question-mid-packer-shoes-for-player-use-only-lebron');

const search = await stockx.searchProducts('shoes', { limit: 2 });
```

## Interfaces and Enums

- ``PRODUCT_TYPE``: SNEAKER, BOTTOM, UPPER, WATCH, HANDBAG, UNKNOW
- ``Product``
- ``BaseProduct``
- ``Variant``

## Licence
``MIT``