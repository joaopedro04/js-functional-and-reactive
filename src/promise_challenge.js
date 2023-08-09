const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'callback_data_to_test.txt')

function readFile(filePath) {
    return new Promise(resolve => 
        fs.readFile(filePath, (_, content) => 
            resolve(content.toString())
        )
    )
}

readFile(filePath).then(content => console.log('content from file: \n',content))