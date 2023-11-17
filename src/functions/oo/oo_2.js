class Product {
    constructor(name, price, discount = 15) {
        this._name = name
        this.price = price
        this.discount = discount
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName.toUpperCase()
    }

    finalPrice() {
        return this.price * (1 - (this.discount / 100))
    }
}

const newProduct = new Product('Laundry powder', 3, 99)
console.log(newProduct.finalPrice())
newProduct.name = 'Testing new name'
console.log(newProduct.name)