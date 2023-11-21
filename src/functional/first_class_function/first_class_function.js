const x = 3
const y = function(txt) {
    return `text: ${txt}`
}
const z = function(txt) {
    return `text: ${txt}`
}

console.log({
    'y': y(x),
    'z': z(x)
})