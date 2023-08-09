//sum(3)(4)(5)
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const resultSum = sum(5)(5)(5)
console.log('resultSum: ', resultSum)


//calculate(3)(7)(fn)
function sumParams(a, b) {
    return a + b;
}

function calculate(a) {
    return function (b) {
        return function(fn) {           
            return fn(a,b);
        }
    }
}

const resultCalculate = calculate(3)(7)(sumParams)
console.log('resultCalculate: ', resultCalculate)