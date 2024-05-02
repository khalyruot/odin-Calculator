let firstNumber = '';
let operator = '';
let secondNumber = '';

const input = document.querySelector(".display");


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

