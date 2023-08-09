function goodMorning() {
  console.log("good morning!");
}

const goodAfternoon = function () {
  console.log("good afternoon!");
};

//1 - pass a function as param to other function
function toRunAnything(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

toRunAnything(1);
toRunAnything("1");
toRunAnything(goodMorning);
toRunAnything(goodAfternoon);

//2 - return a function from other function
function potential(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potential2 = potential(2);
console.log("potential2", potential2(8));
console.log("alternative to potential2", potential(2)(8));
