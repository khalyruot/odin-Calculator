var firstNumber;
var operator = '-';
var secondNumber = 50;

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");
const buttonFive = document.querySelector("#five");
const buttonSix = document.querySelctor("#six");
const buttonSeven = document.querySelector("#seven");
const buttonEight = document.querySelector("#eight");
const buttonNine = document.querySelctor("#nine");

buttonOne.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, you just click 1`);
  headingA.textContent = `Welcome ${name}`;
};

buttonTwo.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, you just click 2`);
  headingA.textContent = `Welcome ${name}`;
};

buttonThree.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, you just click 3`);
  headingA.textContent = `Welcome ${name}`;
};

buttonFour.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, you just click 4`);
  headingA.textContent = `Welcome ${name}`;
};

buttonFive.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, you just click 5`);
  headingA.textContent = `Welcome ${name}`;
};

buttonSix.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, you just click 6`);
  headingA.textContent = `Welcome ${name}`;
};

buttonSeven.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, you just click 7`);
  headingA.textContent = `Welcome ${name}`;
};

buttonEight.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, you just click 8`);
  headingA.textContent = `Welcome ${name}`;
};

buttonNine.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, you just click 9`);
  headingA.textContent = `Welcome ${name}`;
};


function add(firstNumber,secondNumber){
	return firstNumber+secondNumber;
}

function sub(firstNumber,secondNumber){
	return firstNumber-secondNumber;
}

function multiplication(firstNumber,secondNumber){
	return firstNumber*secondNumber;
}

function division(firstNumber,secondNumber){
	return firstNumber/secondNumber;
}


function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case '+':
            return add(firstNumber,secondNumber);
            break;
        case '-':
            return sub(firstNumber,secondNumber);
            break;
        case 'x':
            return multiplication(firstNumber,secondNumber);
            break;
        case '/':
            return division(firstNumber,secondNumber);
            break;
    }
}


function generateDisplay(){

	
}

one.addEventListener("click", function() {
   console.log("1");
});

two.addEventListener("click", function(){
    console.log("2");
});

three.addEventListener("click", function(){
    console.log("3");
});

four.addEventListener("click", function(){
    console.log("4");
});

five.addEventListener("click", function(){
    console.log("5");
});

six.addEventListener("click", function(){
    console.log("6");
});

seven.addEventListener("click", function(){
    console.log("7");
});

eight.addEventListener("click", function(){
    console.log("8");
});

nine.addEventListener("click", function(){
    console.log("9");
});
