//this line of code using two variable in display using a function
function itsme(){
    let nameko="Christopher Son"
    let lastname="Lopez"
    document.getElementById("callme").innerHTML=("My name is "+nameko+" "+lastname);
}

//this line of code is adding or concatenating a string
function addtext(){
    document.getElementById("concat").innerHTML+=" Christopher";
}


function multiplynumbers(num1,num2){
    return num1*num2; 
   
}
function compute(){
   let result=multiplynumbers(5, 10);
    document.getElementById("multiply").innerHTML=(result); 
}
