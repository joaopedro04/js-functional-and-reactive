function exec(fn, a, b) {
    return fn(a,b)
}

const sum = (x,y) => console.log('sum: ', x + y)

const sub = (x,y) => console.log('sub: ', x - y)

exec(sum, 10, 5)
exec(sub, 20, 5)