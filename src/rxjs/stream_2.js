const data = [0,1,2,3,4,5,6,7,8,9]

function generateNumber(arr) {
    return {
        init(fn) {
            let index = 0;
            const i = setInterval(() => {
                if (index >= arr.length) {
                    clearInterval(i)
                    return
                } else {
                    fn(data[i])
                    index++
                }

            }, 1000)
        }
    }
}

function sum(n) {
    return n + n
}

const temp = generateNumber(data)
temp.init(num => {
    console.log(Math.pow(2, num))
})
