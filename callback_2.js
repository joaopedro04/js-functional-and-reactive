const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'callback_data_to_test.txt')

function showContentFromReadFile(error, data) {
    if(error) {
        return console.log('ERROR: ', error)
    }
    console.log('Data from read file: \n\n',data.toString())
}

fs.readFile(filePath, {}, showContentFromReadFile)