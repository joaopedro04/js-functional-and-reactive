const { of } = require('rxjs')
const { last } = require('rxjs/operators')

of(1,2,3,4).pipe(
    last()
).subscribe(x => console.log('last value',x))
