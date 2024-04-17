var firstNumber;
var operator;
var secondNumber;


var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var multiply = document.querySelector('#multiply');
var divide = document.querySelector('#divide');
var comma = document.querySelector('#comma');

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
        case '+'
            return add(firstNumber,secondNumber);
            break;
        case '-'
            return sub(firstNumber,secondNumber);
            break;
        case 'x'
            return multiplication(firstNumber,secondNumber);
            break;
        case '/'
            return division(firstNumber,secondNumber);
            break;
    }
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
