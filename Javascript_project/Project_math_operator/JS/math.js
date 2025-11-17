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
    document.getElementById("subtractanumber").innerHTML=("The subtraction result of 20-10 is ="+result);
}

// function for multiplication
function multiplynumber(num1,num2){
    return num1*num2;

}
function compute2(){
    let result=multiplynumber(5,5);
    document.getElementById("multiply").innerHTML=("The multiplication result of 5*5 is ="+result);
}

// function for division
function dividenumber(num1,num2){
    return num1/num2;

}
function compute3(){
    let result=dividenumber(10,5);
    document.getElementById("divide").innerHTML=("The Division result of 10/5 is ="+result);
}

// function for multiple operator
function multipleoperate(num1,num2,num3,num4,num5){
    let multi=((num1+num2)*num3/num4-num5);
    return multi;

}
function compute4(){
    let result=multipleoperate(5,5,5,4,2);
    document.getElementById("multiple").innerHTML=("Add 5+5 multiply by 5 divided by 4 subtract by 2 is ="+result);
}



// function for modulus
function modulusnumber(num1,num2){
    return num1%num2;

}
function compute5(){
    let result=modulusnumber(6,5);
    document.getElementById("module").innerHTML=("When u  divide 6 and 5 you have remainder result of  ="+result);
}


// function for negation operator
function negationnumber(num1){
    return num1;

}
function compute6(){
    let result=negationnumber(10);
    document.getElementById("nega").innerHTML=-result;
}


// function for increament number
function increamentnumber(num1){
    return num1;

}
function compute7(){
    let result=increamentnumber(5);
    result++;
    document.getElementById("increa").innerHTML=("The number 5 increase to 1 the result is "+result);
}


// function for Decreament number
function decreamentnumber(num1){
    return num1;

}
function compute8(){
    let result=decreamentnumber(5);
    result--;
    document.getElementById("decrea").innerHTML=("The number 5 decrease to 1 the result is "+result);
}