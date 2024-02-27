const readline = require('readline')

function getResponse(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise(resolve => {
        rl.question(question, (response) => {
            resolve(response)
        })
    })
}

getResponse('is test? ').then((resp) => console.log('response received: ', resp))

