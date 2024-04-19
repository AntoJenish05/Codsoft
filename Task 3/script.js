document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentNumber = '';
    let firstNumber = '';
    let operator = '';
  
    function updateDisplay() {
      display.value = currentNumber;
    }
  
    function clear() {
      currentNumber = '';
      firstNumber = '';
      operator = '';
      updateDisplay();
    }
  
    function calculate() {
      if (operator === '+') {
        currentNumber = parseFloat(firstNumber) + parseFloat(currentNumber);
      } else if (operator === '-') {
        currentNumber = parseFloat(firstNumber) - parseFloat(currentNumber);
      } else if (operator === '*') {
        currentNumber = parseFloat(firstNumber) * parseFloat(currentNumber);
      } else if (operator === '/') {
        currentNumber = parseFloat(firstNumber) / parseFloat(currentNumber);
      }
      updateDisplay();
      firstNumber = '';
      operator = '';
    }
  
    document.querySelectorAll('.number').forEach(button => {
      button.addEventListener('click', function () {
        currentNumber += this.textContent;
        updateDisplay();
      });
    });
  
    document.querySelectorAll('.operator').forEach(button => {
      button.addEventListener('click', function () {
        if (currentNumber !== '') {
          if (firstNumber === '') {
            firstNumber = currentNumber;
            currentNumber = '';
          } else {
            calculate();
          }
          operator = this.textContent;
        }
      });
    });
  
    document.getElementById('calculate').addEventListener('click', function () {
      if (currentNumber !== '' && firstNumber !== '') {
        calculate();
      }
    });
  
    document.getElementById('clear').addEventListener('click', function () {
      clear();
    });
  });
  