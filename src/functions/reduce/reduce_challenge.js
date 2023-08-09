/*
    challenge: use reduce, map and filter
    1 - fragile is true
    2 - total value per item
    3 - total average value
*/

const cart = [
  {
    product: "Playstation 5",
    quantity: 1,
    price: 800.0,
    isFragile: true,
  },
  {
    product: "Hogwarts Legacy",
    quantity: 1,
    price: 79.9,
    isFragile: false,
  },
  {
    product: "FIFA 23",
    quantity: 1,
    price: 99.9,
    isFragile: false,
  },
  {
    product: "GTA V",
    quantity: 1,
    price: 99.9,
    isFragile: true,
  },
  {
    product: "God of War Ragnarok",
    quantity: 1,
    price: 99.9,
    isFragile: true,
  },
  {
    product: "Cyberpunk 2077",
    quantity: 1,
    price: 99.9,
    isFragile: true,
  },
];

const itemIsFragile = cart.filter(i => i.isFragile)
console.log('itemIsFragile', itemIsFragile)

const itemTotalValue = cart.map(i => {
    return {
        item: i.product,
        totalValue: i.quantity * i.price
    }
})
console.log('itemTotalValue', itemTotalValue)

const totalAverageValue = cart.map(i => i.price).reduce((accValue, currentValue) => accValue + currentValue) / cart.length
console.log('totalAverageValue', totalAverageValue)

