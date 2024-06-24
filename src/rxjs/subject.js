const { Observable, Subject } = require('rxjs')


function createObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            subscriber.next(1)
        },1000)
        subscriber.complete()
    }); 
}

const obs$ = createObservable()
obs$.subscribe(x => console.log('obs', x))

function createSubject() {
    const subject = new Subject()
    setTimeout(() => {
        subject.next(Math.random())
    }, 1500)
    return subject
}

const subject$ = createSubject()
subject$.subscribe(x => console.log('sub', x))