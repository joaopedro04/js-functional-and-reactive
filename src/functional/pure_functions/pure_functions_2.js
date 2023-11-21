/**
 * It's an impure function, because pure functions are determinate
 * by when the value returned is determinate just by incoming values,
 * no observable side effects
 */

function generateRandomNumber(min, max) {
    const factor = max - min + 1
    //Math.random() is radom factor, determining that function is an impure function
    return parseInt(Math.random() * factor) + min
}

console.log(generateRandomNumber(5,6))
console.log(generateRandomNumber(5,6))
console.log(generateRandomNumber(5,6))