function add(a,b){//run test on this
 return a+b
}

var calculator = {




};

function subtract(a,b){
  return a-b
}


function multiplication(a,b){
  return a*b
}

function division(a,b){
  return a/b
}




function divError(b){
  b===0
  if (b===0){
    return true
  }
}






$('document').ready(function(){
var lastClick='';
var digitStr='';
var a;
var b;
// var result=0;
var addition= $('#add');
var subtraction= $('#subtraction');
var multiply = $('#multiply');
var divide= $('#divide');
var equals= $('#equals');
var operator='';
var clear=$('#clear');
var screen=$('#screen')[0];
  $('.numbers').click(function(){
  if(lastClick!=='operator'){
    digitStr+=event.target.innerHTML;
    a = parseInt(digitStr)
    console.log(a)
    screen.innerHTML=digitStr;
    // console.log(digitStr)
 }
else {

   screen.innerHTML=digitStr;
   digitStr+=event.target.innerHTML;
   b = parseInt(digitStr);
   screen.innerHTML=digitStr;
  }
})






equals.click(function() {
   console.log(a, b, operator + "equals");
   if (operator=== '+') {screen.innerHTML=(add(a,b)); a=a+b};
   if (operator=== '-') {screen.innerHTML=(subtract(a,b)); a=a-b}
   if (operator=== 'x') {screen.innerHTML=(multiplication(a,b)); a=a*b}
   if (operator=== '÷') {
     if(b!==0){screen.innerHTML=(division(a,b)); a=a/b}
   else if(divError(b)===true){screen.innerHTML='Error'}};
 })
clear.click(function(){
digitStr='';
lastClick='';
screen.innerHTML='';
a=0;
b=0;
})

  addition.click(function(){
   digitStr='';
    operator='+';
    lastClick='operator';
})
  subtraction.click(function(){
  operator='-';
  lastClick='operator';
  digitStr='';
  })
  multiply.click(function(){
      operator='x';
      lastClick='operator';
      digitStr='';
  })
  divide.click(function(){
    operator='÷';
    lastClick='operator'
       digitStr='';
  })








})
