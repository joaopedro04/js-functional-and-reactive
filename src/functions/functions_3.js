//Arrow function
const merryChristmas = () => console.log("Merry Christmas!");
merryChristmas();

//Arrow function with param
const greetings = (name) => console.log(`Hello ${name}!`);
greetings("Hagrid");

const sum = (arr) => {
  let total = 0;
  for (let n of arr) {
    total += n;
  }
  return total;
};
console.log("sum: ", sum([5, 5, 5]));

const sumAlternative = (...numbers) => {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
};
console.log("sumAlternative: ", sumAlternative(5, 5, 5));

const potential = (base) => (exp) => Math.pow(base, exp);
console.log("potential => ", potential(2)(8));

const subtract = (a,b) => a - b;
console.log("subtract: ", subtract(10,5))


//about 'this'
Array.prototype.last = function () {
  console.log("last item is ", this[this.length - 1]);
};

//this don't works
Array.prototype.firstDW = () => console.log("firstDW item is ", this[0]);

//this works
Array.prototype.first = function () {
    console.log("first item is ", this[0]);
  };

const numbers = [0, 1, 2, 3, 4, 5];
numbers.last();
numbers.first();
numbers.firstDW();
