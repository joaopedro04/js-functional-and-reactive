const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumOfNumbers = (accumulatedValue, currentValue) => accumulatedValue + currentValue
const sumResult = numbers.reduce(sumOfNumbers, 0)
console.log('sum result', sumResult)

const multiplyOfNumbers = (accumulatedValue, currentValue) => accumulatedValue * currentValue
const multiplyResult = numbers.reduce(multiplyOfNumbers, 1)
console.log('multiplyResult', multiplyResult)

Array.prototype.myReduce = function (fn, initValue) {
    const accumulated = initValue

    for (let i = 0; i < this.length; i++) {
        if (!accumulated && i === 0) {
            accumulated = this[i]
            continue
        }

        fn(accumulated, this[i], i, this)
    }

    return accumulated

}