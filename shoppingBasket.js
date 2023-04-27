class ShoppingBasket {
  constructor() {
    this.basket = []
  }

  getPrice() {
    let sum = 0
    this.basket.forEach((candy) => {
      sum += candy.getPrice()
    });
    return sum; 
  }

  addItem(candy) {
    this.basket.push(candy)
  }

}

module.exports = ShoppingBasket;