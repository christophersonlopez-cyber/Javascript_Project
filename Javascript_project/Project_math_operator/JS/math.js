// function for addition
function addnumber(num1,num2){
    return num1+num2;

}
function compute(){
    let result=addnumber(10,10);
    document.getElementById("adding").innerHTML=("The sum of 10+10 is ="+result);
}

// function for subtraction
function subtractnumber(num1,num2){
    return num1-num2;

}
function compute1(){
    let result=subtractnumber(20,10);
    document.getElementById("subtractanumber").innerHTML=("The subtraction result of 20+10 is ="+result);
}