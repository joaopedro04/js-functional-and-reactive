function exec(fn, ...params) {
    console.log(params)
    fn(...params)
}

function sum(a,b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

const sumRes = exec(sum, 4, 5)
const sumMult = exec(multiply, 4, 5)

console.log({
    sumRes,
    sumMult
})