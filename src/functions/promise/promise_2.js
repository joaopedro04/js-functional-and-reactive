function toWorkOrNoToWork(value, errorChance) {
    return new Promise((resolve, reject) => {
        try {
            // con.log('Testing specific error')
            if (Math.random() < errorChance) {
                reject('Error!')
            } else {
                resolve(value)
            }
        } catch (error) {
            reject(error)
        }
        
    })
}

toWorkOrNoToWork(9, 0.5)
    .then(
        result => console.log(`Result: ${result}`), 
        error => console.log(`Specific error: ${error}`))
    .catch(error => console.log(`Error: ${error}`))