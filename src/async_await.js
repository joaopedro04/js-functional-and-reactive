function waitFor(time = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('waiting to execute...')
            resolve()
        }, time)
    })
}

// waitFor(3000)
//     .then(waitFor)

async function exec() {
    await waitFor(1000)
    await waitFor(1000)
    await waitFor(1000)
}

exec()