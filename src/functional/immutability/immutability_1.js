const numbers = [3,5,8,9,7,6,1]
const sortedNumbers = [...numbers]
sortedNumbers.sort()

console.log({
    numbers, sortedNumbers
})

function sumArr(arr, total = 0) {
    if (!arr.length) {
        return total
    }

    return sumArr(arr.slice(1), total + arr[0])
}

const total = sumArr(numbers)


// const sum = (a,b) => a + b
// let total = numbers.reduce(sum)
console.log({total})


const person = {
    name: 'Maria', 
    height: 1.78,
    city: 'Sapiranga'

}

const newPerson = person

newPerson.name = 'João'
newPerson.city = 'Porto Alegre'

console.log({newPerson})
