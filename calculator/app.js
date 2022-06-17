// some functions for basic functionality of the calculator


function addition(a,b) {
  return a + b;
}

function substract(a,b) {
  return a - b;
}

function divide(a,b) {
  return a / b;
}

function multiply(a, b) {
  return a * b
}


function operate(operator, a, b) {
  operators = {'+': addition, '-': substract, '/':divide, '*':multiply}

  return operators[operator](a,b)
}
