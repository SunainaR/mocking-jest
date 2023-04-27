const Candy = require('./candy');

describe('Candy Class', () => {
  it('gets the name "Mars" for a new Candy item', () => {
    const candy = new Candy('Mars', 4.99)
    expect(candy.getName()).toEqual('Mars');
  });

  it('gets the price 4.99 for a new Candy item', () => {
    const candy = new Candy('Mars', 4.99)
    expect(candy.getPrice()).toEqual(4.99);
  });

})