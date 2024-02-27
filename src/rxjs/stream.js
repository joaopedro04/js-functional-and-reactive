function generateNumber(fn) {
    let num = 0
    setInterval(() => {
        console.log(fn(num++))
    }, 1000)
}

function sum(n) {
    return n + n
}


generateNumber(sum)