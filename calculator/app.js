const display = document.querySelector('.calculator-display-number');
const buttons = document.querySelectorAll('.button-to-display');
const equal_button = document.querySelector('.equal');


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

const displayNumber = function (e) {
  display.textContent = display.textContent + e.target.textContent
}

const evalualte = function (e) {
  expression = display.textContent
  all_operators = expression.match(/[/*+-]/g)

  numbers = expression.split(/[/*+-]/g)

  if (numbers.indexOf('') != -1) {
    display.textContent = 'ERROR'
  }
  else {
    result = operate(all_operators[0], parseInt(numbers[0]), parseInt(numbers[1]))
    display.textContent = result;

  }


}

buttons.forEach(button => button.addEventListener("click", displayNumber));

equal_button.addEventListener("click", evalualte);
