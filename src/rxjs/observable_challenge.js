const { Observable } = require("rxjs");

function streamData(min, max) {
    return new Observable(sub => {
        for(let i = min; i <= max; i++) {
            try {
                sub.next(i)
            } catch (error) {
                sub.error(error)
            }
        }
        sub.complete()
    })
}

streamData(1,20).subscribe({
    next: (number) => {
        console.log(number)
    },
    error: (error) => {
        console.error(error)
    }
})