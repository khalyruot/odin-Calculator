let operator = '';
let firstNumber = '';
let secondNumber = '';

const input = document.querySelector(".calculator_display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");


numbers.forEach(number => {
	number.addEventListener("click", e => {
		if(operator === ""){
			firstNumber += e.target.innerText;
			console.log("firstNumber = " + firstNumber);
			console.log("Operators = " + operators);
		}
		else{
			secondNumber += e.target.innerText;
			console.log("secondNumber = " + secondNumber);
			console.log("Operators = " + operators);
		}
			
	})
})

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

