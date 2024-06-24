const { ajax } = require('rxjs/ajax')
const { map } = require('rxjs/operators')
const { XMLHttpRequest } = require('xmlhttprequest')

//for it works is needed to do a downgrade in rxjs lib to ^6.0.0
ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/cod3rcursos/repos'
}).pipe(
    map(response => response.response)
).subscribe(console.log)