const numbers = [2, 4, 6, 8, 10, 12];
const double = n => n * 2;
console.log('numbers doubled',numbers.map(double))

const names = ['João', 'Luana', 'Maria', 'Gabi'];
const firstLetter = txt => txt[0];
console.log('first letters', names.map(firstLetter))

const cart = [
    {
        product: 'Playstation 5',
        quantity: 1,
        price: 800
    },
    {
        product: 'Hogwarts Legacy',
        quantity: 1,
        price: 79.9
    },
    {
        product: 'FIFA 23',
        quantity: 1,
        price: 99.9
    },
]

const getCartPrice = product => product.price * product.quantity;
const getProductsName = product => product.product;
const sumValues = (accValue, currentValue) => accValue + currentValue;
console.log('product names', cart.map(getProductsName))
console.log('final value',cart.map(getCartPrice).reduce(sumValues, 0))

Array.prototype.myMap = function(fn) {
    const mapped = []  
    for(let i = 0; i < this.length; i++ ) {
        mapped.push(fn(this[i], i, this))
    }
    return mapped;
}

console.log('product names with myMap', cart.myMap(getProductsName))
console.log('final value with myMap',cart.myMap(getCartPrice).reduce(sumValues, 0))
