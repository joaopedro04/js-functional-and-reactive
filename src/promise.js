// let promise = new Promise(resolve => resolve(3)).then(result => console.log(result))


function wait(time = 2000) {
    console.log('waiting...')
    return new Promise(resolve => setTimeout(resolve(), time))
    // return new Promise(resolve => setTimeout(resolve('Luana'), time))

}

// wait(3000).then(result => console.log('waiting for -> ',result))
// wait()
//     .then(_ => wait())
//     .then(wait())


function generateNumber(min, max, time = 2000) {
    if(min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => 
        setTimeout(() => resolve(parseInt(Math.random() * (max - min + 1)) + min), time)
    )
    // return parseInt(Math.random() * (max - min + 1)) + min
}

// new Promise(resolve => {
//     resolve(generateNumber(1,100))
// }).then(generatedNumber => console.log(`the generated number was ${generatedNumber}`))


function generateManyNumbers() {
    return Promise.all([
        generateNumber(1,100),
        generateNumber(101,200),
        generateNumber(201,300),
        generateNumber(301,400),
        generateNumber(401,500),
        generateNumber(501,600),
        generateNumber(601,700),
        generateNumber(701,800),
        generateNumber(801,900),
        generateNumber(901,1000),
    ])
}

generateManyNumbers().then(numbers => console.log(numbers))