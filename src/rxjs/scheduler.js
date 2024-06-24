const { from } = require('rxjs')

let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(i + 1);
}


from(arr).subscribe(console.log)