const { Observable } = require('rxjs')

function createObservable(...elements) {
    return new Observable(subscriber => {
        (elements || []).forEach(el => {
            subscriber.next(el);
        });
        subscriber.complete();
    }); 
}

const positions$ = createObservable([1,2,3])

positions$.subscribe(console.log)