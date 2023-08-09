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
    {
        product: 'GTA V',
        quantity: 0,
        price: 99.9
    },
    {
        product: 'God of War Ragnarok',
        quantity: 1,
        price: 99.9
    },
    {
        product: 'Cyberpunk 2077',
        quantity: 1,
        price: 99.9
    },
]

const quantityGreaterThan0 = i => i.quantity > 0
const validatedCartItems = cart.filter(quantityGreaterThan0).map(i => i.product)
console.log('validated items', validatedCartItems)


Array.prototype.myFilter = function (fn) {
    const filtered = []

    for (let i = 0; i < this.length; i++) {
        const isValid = fn(this[i], i, this)
        if (isValid) {
            filtered.push(this[i])
        }
    }

    return filtered
}

const validatedCartItemsWithMyFilter = cart.myFilter(quantityGreaterThan0).map(i => i.product)
console.log('validated items with my filter', validatedCartItemsWithMyFilter)