const path = require('path')
const fn = require('./functions')

const subtitlesPath = path.join(__dirname, 'assets', 'subtitles')
const symbols = [`.`, `?`, `-`, `!`, `,`, `"`, `'`, `_`, `♪`, `<i>`, `</i>`, `\r`, `[`, `]`, `(`, `)`, `=`, `#`, `<`, `>`, `/`, `&`, `:`]

function convertArrayToString(arr) {
    return arr.flat().join(' ')
}

function groupElements(arr) {
    return Object.values(arr.reduce((acc, word) => {
        const formattedWord = word.toLowerCase()
        const quantity = acc[formattedWord] ? acc[formattedWord].quantity + 1 : 1
        acc[formattedWord] = { word: formattedWord, quantity  }
        return acc
    }, {}))
}


fn.readDirectory(subtitlesPath).then(async (files) => {
    const filteredFiles = fn.filterFilesByExtension(files, ['.srt', '.txt'])
    const readFiles = await fn.readAllFiles(filteredFiles)
    const joinContentInString = readFiles.join('\n')
    const splitContent = joinContentInString.split('\n')
    const lines = fn.removeBlankLines(splitContent)
    const linesWithoutPattern = fn.removeSpecificText(lines, '-->')
    const linesWithoutNumbers = fn.removeNumberFromString(linesWithoutPattern)
    const linesWithoutSpecialSymbols = fn.removeSpecialCharacters(linesWithoutNumbers, symbols)
    const linesSplittedByWords = fn.splitByWords(linesWithoutSpecialSymbols)
    const linesWithoutBlankSpaces = linesSplittedByWords.map(el => fn.removeBlankLines(el)) 
    const justWords = convertArrayToString(linesWithoutBlankSpaces).split(' ')
    const groupWords = groupElements(justWords)
    const sortedByQuantity = groupWords.sort((a, b) => b.quantity - a.quantity)
    console.log(sortedByQuantity)

}).catch(e => {
    console.log('error: ', e)
})
