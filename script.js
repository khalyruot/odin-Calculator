var firstNumber;
var operator = '-';
var secondNumber = 50;

const one = document.getElementById("one");
element.addEventListener("click", oneFunction);
function oneFunction() {
	firstNumber = 1;
}



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
