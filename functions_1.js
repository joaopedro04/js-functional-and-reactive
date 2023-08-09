//Functions Declaration
function helloWorldDeclaration() {
  console.log("Declaration: Hello World!!!");
}

helloWorldDeclaration();

//Function Expression
const helloWorldExpression = function () {
  console.log("Expression: Hello World!!!");
};

helloWorldExpression();

function sum(a, b) {
  return a + b;
}

const result = sum(3, 4);
console.log("Result: ", result);
