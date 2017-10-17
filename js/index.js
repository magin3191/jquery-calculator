$('document').ready(function(){


var lastClick='';
var digitStr='';
var a= -1;
var b=-1;

var result=0;
var addition= $('#add');
var subtraction= $('#subtraction');
var multiply = $('#multiply');
var divide= $('#divide');
var equals= $('#equals');
var operator='';
var clear=$('#clear');


var screen=$('#screen')[0];


  $('.numbers').click(function(){
  if(a ===-1){
    digitStr+=event.target.innerHTML;
    a = parseInt(digitStr)
    console.log(a)
    screen.innerHTML=digitStr;
    //console.log(digitStr)
 }
 else if(b === -1){
   digitStr='';
   screen.innerHTML=digitStr;
   digitStr+=event.target.innerHTML;
   b = parseInt(digitStr);
   screen.innerHTML=digitStr;
  }
})


equals.click(function() {
   console.log(a, b, operator + "equals");
   if (operator=== '+') {screen.innerHTML=( a + b); a=a+b; b = -1};
   if (operator=== '-') {screen.innerHTML=(a - b); a=a-b; b = -1}
   if (operator=== 'x') {screen.innerHTML=(a * b); a=a*b; b = -1}
   if (operator=== '÷') {screen.innerHTML=(a / b); a=a/b; b = -1};
 })


clear.click(function(){
digitStr='';
screen.innerHTML='';
a=-1;
b=-1;


})



  addition.click(function(){
    operator='+';
    lastClick='operator';
})


  subtraction.click(function(){
  operator='-';
  lastClick='operator';




  })

  multiply.click(function(){
      operator='x';
      lastClick='operator';

  })

  divide.click(function(){
    operator='÷';
    lastClick='operator'

  })


























})
