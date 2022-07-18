const display = document.querySelector('.calculator-display-number');
const buttons = document.querySelectorAll('.button-to-display');
const equal_button = document.querySelector('.equal');
const result_display = document.querySelector('.calc-display-right');


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
  if (result_display.textContent != '') {
    result_display.textContent = '';
    display.textContent = '';

  }

  display.textContent = display.textContent + e.target.textContent
}

const evalualte = function (e) {
  expression = display.textContent
  all_operators = expression.match(/[/*+-]/g)

  numbers = expression.split(/[/*+-]/g)

  if (numbers.indexOf('') != -1 || numbers.length != all_operators.length+1) {
    result_display.textContent = 'ERROR'
  }
  else {
    for (let i=0; i < all_operators.length; i++) {
      if (i == 0) {
        result = operate(all_operators[i], parseInt(numbers[i]), parseInt(numbers[i+1]))
      }
      else {
        result = operate(all_operators[i], result, parseInt(numbers[i+1]))
      }
    }

    result_display.textContent = result;

  }


}

buttons.forEach(button => button.addEventListener("click", displayNumber));

equal_button.addEventListener("click", evalualte);
