const { interval, Observable } = require('rxjs')

const generateNumbers = interval(1000)

const subscriptions = []

const subscription$ = generateNumbers.subscribe({
    next: (num) => {
        console.log('generated number:', num)
    },
    error: (err) => {
        console.error(err)
    }
})
subscriptions.push(subscription$)

const myOwnObs$ = new Observable(sub => {
    sub.next('Testing')
}).subscribe({
    next: (message) => {
        console.log(message)
    },
    error: (err) => {
        console.error(err)
    }
})
subscriptions.push(myOwnObs$)

const myOwnObs2$ = new Observable(sub => {
    sub.next('Testing 2')
    if(Math.random() > 0.5) {
        sub.complete()
    } else {
        sub.error(`Error: Some error message here :)`)
    }
}).subscribe({
    next: (message) => {
        console.log(message)
    },
    error: (err) => {
        console.error(err)
    },
    complete: () => {
        console.log('end :)')
    }
})
subscriptions.push(myOwnObs2$)


setTimeout(() => {
    subscriptions.map(sub$ => sub$.unsubscribe())
}, 5000)
