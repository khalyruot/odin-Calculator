let operator = '';
let firstNumber = '';
let secondNumber = '';
let displayValue = '0';

const input = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");


numbers.forEach(number => {
	number.addEventListener("click", e => {
		if(operator === ""){
			firstNumber += e.target.innerText;
			console.log("firstNumber = " + firstNumber);
			console.log("Operator = " + operator);
		}
		else{
			secondNumber += e.target.innerText;
			console.log("secondNumber = " + secondNumber);
			console.log("Operator = " + operator);
		}
			
	})
})

operators.forEach(op=>{
	op.addEventListener("click",e =>{
		operator = e.target.innerText;
		console.log("operator: " + operator)
	});
});

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
	    console.log(firstNumber + secondNumber);
            break;
        case '-':
            return sub(firstNumber,secondNumber);
            console.log(firstNumber - secondNumber);
            break;
        case 'x':
            return multiplication(firstNumber,secondNumber);
	    console.log(firstNumber * secondNumber);
            break;
        case '/':
            return division(firstNumber,secondNumber);
	    console.log(firstNumber/secondNumber);
            break;
    }
}

function populate(){
    
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
     
}
