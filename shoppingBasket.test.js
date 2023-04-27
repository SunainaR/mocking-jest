const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket Class', () => {
  it('returns total price of empty basket', () => {
    basket = new ShoppingBasket()
    expect(basket.getPrice()).toEqual(0);
  });

  it('addItem and return price with candy', () => {
    basket = new ShoppingBasket()
    const doublecandy = { getPrice: () => 4.99 }
    basket.addItem(doublecandy)
    expect(basket.getPrice()).toEqual(4.99)
  });

  it('addItem and return price with candy', () => {
    basket = new ShoppingBasket()
    const doubleCandy1 = { getPrice: () => 4.99}
    basket.addItem(doubleCandy1)
    const doubleCandy2 = { getPrice: () => 3.99}
    basket.addItem(doubleCandy2);
    basket.addItem(doubleCandy2);
    expect(basket.getPrice()).toEqual(12.97)
  });

})