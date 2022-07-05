import { assert } from 'chai';
import StockXAPI, { InvalidInputException, PRODUCT_TYPE } from '..';

describe('Product', () => {
  it('Should find a sneaker', async () => {
    const stockx = new StockXAPI({
      currencyCode: 'USD',
      countryCode: 'BE',
    });
    const result = await stockx.productDetails('https://stockx.com/fr-fr/adidas-yeezy-foam-rnnr-sulfur-infants');

    assert.equal(result.type, PRODUCT_TYPE.SNEAKER);
  });

  it('Should throw invalid input', async () => {
    const stockx = new StockXAPI();
    try {
      await stockx.productDetails('https://stockx.com/fr-fr/air-jordan-4-retro-lightning-201');
    } catch (e) {
      assert.isTrue(e instanceof InvalidInputException);
    }
  });

  it('Should find product', async () => {
    const stockx = new StockXAPI();
    const result = await stockx.searchProducts('shoes', { limit: 2 });
    assert.operator(result.length, '===', 2);
  });
});
