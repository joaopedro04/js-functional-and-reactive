const PI = 3.14

/*
 It's impure function, because PI is an external value
*/
function calcCircumference(raio) {
    return raio * raio * PI
}

/*
 It's pure function, because PI value doesn't depends of 'something external'
*/
function calcCircumferencePure(raio, pi) {
    return raio * raio * pi
}

console.log(calcCircumference(10))
console.log(calcCircumferencePure(10, Math.PI))