class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0
  }

  // was initially discount = this.discount
  applyDiscount(discount) {
   this.discount = discount;
  }

  getPrice() {
    let sum = 0
    this.basket.forEach((candy) => {
      sum += candy.getPrice()
    });
    return sum - this.discount; 
  }

  addItem(candy) {
    this.basket.push(candy)
  }

}

module.exports = ShoppingBasket;