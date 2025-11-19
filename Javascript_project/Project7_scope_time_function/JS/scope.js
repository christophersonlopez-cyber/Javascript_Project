//this is my global variable

let num1=10;
function my_global(){
    let result=num1+10;
    document.getElementById("output").innerHTML=result;
}


//this is my local variable

function my_local(){
    let num1=10;
    let result=num1+20;
    document.getElementById("output1").innerHTML=result;
}


//this is my error 

function my_local1(){
   
    let result=num1+20;
    document.getElementById("output2").innerHTML=result;
}