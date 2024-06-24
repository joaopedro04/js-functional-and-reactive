const { error } = require('console');
const fs = require('fs');
const _path = require('path')
const { Observable } = require('rxjs')

function readDirectory(path) {
    return new Promise((resolve, reject) => {
        try {
            let filesPath = fs.readdirSync(path)
            let files = filesPath.map(file => _path.join(path, file))
            resolve(files)
        } catch (e) {
            reject(e)
        }
    })

}

function readDirectoryObs(path) {
    return new Observable(subscriber => {
        try {
            let filesPath = fs.readdirSync(path)
            let files = filesPath.map(file => {
                subscriber.next(_path.join(path, file))
            })
            subscriber.complete()
        } catch (e) {
           subscriber.error(e)
        }
    })


}

function filterFilesByExtension(files, extensionFile) {
    let filteredFiles = []
    extensionFile.map(extension => {
        files.forEach(file => {
            if (file.endsWith(extension)) {
                filteredFiles.push(file)
            }
        })
    })
    return filteredFiles
}

function filterFilesByExtensionPipe(textPattern) {
    return createPipeOperator(subscriber => ({
        next(text) {
            if(text.endsWith(textPattern)) {
                subscriber.next(text)
            }
        }
    }))
}

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
            resolve(content.toString())
        } catch (e) {
            reject(e)
        }
    })
}

function readAllFiles(paths) {
    return Promise.all(paths.map(path => readFile(path)))
}

function removeBlankLines(content) {
    return content.filter(c => c.trim())
}

function removeSpecificText(arr, pattern) {
    return arr.filter(el => !el.includes(pattern))
}

function removeNumberFromString(arr) {
    return  arr.filter(el => (parseInt(el.trim()) !==  parseInt(el.trim())))
}

function removeSpecialCharacters(arr, symbols) {
    return arr.map(el => {
        symbols.forEach(s => {
            el = el.split(s).join('')
        })
        return el
    })
}

function splitByWords(arr) {
    return arr.map(el => el.split(' '))
}


function createPipeOperator(operatorFn) {
    return function (source) {
        return new Observable(subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e))
            })
        })
    }
}


module.exports = {
    readDirectory,
    readDirectoryObs,
    filterFilesByExtension,
    filterFilesByExtensionPipe,
    readFile,
    readAllFiles,
    removeBlankLines,
    removeSpecificText,
    removeNumberFromString,
    removeSpecialCharacters,
    splitByWords
}