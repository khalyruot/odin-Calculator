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

function add(p1,p2){
	return p1+p2;
}

function sub(p1,p2){
	return p1-p2;
}

function multiplication(p1,p2){
	return p1*p2;
}

function division(p11,p2){
	return p1/p2;
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
