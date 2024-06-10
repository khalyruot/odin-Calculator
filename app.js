/* ---------------------------- Selectors --------------------------- */
const display = document.querySelector('.display')
const addBtn = document.querySelector('#addBtn')
const substractBtn = document.querySelector('#substractBtn')
const multiplyBtn = document.querySelector('#multiplyBtn')
const divideBtn = document.querySelector('#divideBtn')
const moduloBtn = document.querySelector('#moduloBtn')

const plusMinusBtn = document.querySelector('#plusMinusBtn')

const equalsBtn = document.querySelector('#equalsBtn')

const oneBtn = document.querySelector('#oneBtn')
const twoBtn = document.querySelector('#twoBtn')
const threeBtn = document.querySelector('#threeBtn')
const fourBtn = document.querySelector('#fourBtn')
const fiveBtn = document.querySelector('#fiveBtn')
const sixBtn = document.querySelector('#sixBtn')
const sevenBtn = document.querySelector('#sevenBtn')
const eightBtn = document.querySelector('#eightBtn')
const nineBtn = document.querySelector('#nineBtn')
const zeroBtn = document.querySelector('#zeroBtn')

const acBtn = document.querySelector('#acBtn')



let displayNum = 0;
let firstNum = 0;
let secondNum = 0;
let operator = 0;
let opFlag = false;

/* ----------------------------- Event listeners ---------------------------- */
oneBtn.addEventListener('click', () => { updateDisplay('1') })
twoBtn.addEventListener('click', () => { updateDisplay('2') })
threeBtn.addEventListener('click', () => { updateDisplay('3') })
fourBtn.addEventListener('click', () => { updateDisplay('4') })
fiveBtn.addEventListener('click', () => { updateDisplay('5') })
sixBtn.addEventListener('click', () => { updateDisplay('6') })
sevenBtn.addEventListener('click', () => { updateDisplay('7') })
eightBtn.addEventListener('click', () => { updateDisplay('8') })
nineBtn.addEventListener('click', () => { updateDisplay('9') })
zeroBtn.addEventListener('click', () => {
  if (displayNum) {
    updateDisplay('0')
  }
})

acBtn.addEventListener('click', () => { location.reload() })

addBtn.addEventListener('click', () => { handleOperators('+') })
substractBtn.addEventListener('click', () => { handleOperators('-') })
multiplyBtn.addEventListener('click', () => { handleOperators('x') })
divideBtn.addEventListener('click', () => { handleOperators('/') })
moduloBtn.addEventListener('click', () => { handleOperators('%') })

plusMinusBtn.addEventListener('click', () => { plusMinus() })

equalsBtn.addEventListener('click', () => { equalTo(); opFlag = false; })

/* -------------------------------- Functions ------------------------------- */


function updateText() { display.textContent = displayNum }

updateText()

function updateDisplay(digitString) {
  if (!displayNum) {
    displayNum = digitString
    updateText()
  } else if (displayNum) {
    if (displayNum.length < 10) {
      displayNum += digitString;
      updateText()
    }
  }
}

function handleOperators(op) {
  if (!opFlag) {
    if (typeof displayNum === "string") {
      firstNum = parseInt(displayNum);
      displayNum = 0;
    }

    operator = op;
    display.textContent = op;
    opFlag = true;
  } else if (opFlag) {
    equalTo();
    operator = op;
  }
}

function plusMinus() {
  if (!displayNum.includes('-')) {
    displayNum = '-' + displayNum;
    updateText();
  } else if (displayNum.includes('-')) {
    displayNum = displayNum.split('').filter(character => character !== '-').join('');
    updateText();
  }
}


function equalTo() {

  secondNum = parseInt(displayNum);
  displayNum = 0;

  let result = operate(firstNum, operator, secondNum)
  if (result % 1 !== 0) {
    result = Math.round(result * 100000) / 100000
  }
  firstNum = result;
  display.textContent = result;
}

function add(a, b) { return a + b };
function substract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return a / b };
function mod(a, b) { return a % b };

function neg(a) { return a * -1 };

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case '+':
      return add(firstNum, secondNum);
    case '-':
      return substract(firstNum, secondNum);
    case 'x':
      return multiply(firstNum, secondNum);
    case '/':
      return divide(firstNum, secondNum);
    case '%':
      return mod(firstNum, secondNum);
  }
}