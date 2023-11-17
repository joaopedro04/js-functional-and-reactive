// Constructor function
function Product(name, price, discount = 15) {
    this.name = name
    this.price = price
    this.discount = discount

    this.finalPrice = function() {
        return this.price * (1 - (this.discount / 100))
    }
}

const newProduct = new Product('Laundry powder', 5)
console.log(newProduct.finalPrice())