function generateRandomNumbers(min, max, forbiddenNumbers) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const factor = max - min + 1
        const random = parseInt(Math.random() * factor) + min
        if(forbiddenNumbers.includes(random)) {
            reject('Repeated number!')
        } else {
           resolve(random) 
        }
    })
}

async function generateLotteryNumbers(totalNumbers) {
    const generatedNumbers = []
    try {
        for(let _ of Array(totalNumbers).fill()) {
            generatedNumbers.push(await generateRandomNumbers(1,60,generatedNumbers))
        }    
        return generatedNumbers
    } catch (error) {
        generateLotteryNumbers(totalNumbers)
    }
    

}

generateLotteryNumbers(2).then(console.log).catch(console.log)

// generateRandomNumbers(1, 5, [1,2,4]).then(console.log).catch(console.log)