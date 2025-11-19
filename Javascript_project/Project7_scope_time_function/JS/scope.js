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


//function of conditional statement
function mytime_function(){
    let mytimes=new Date().getHours();
    if (mytimes<18){
        document.getElementById("mytime").innerHTML=("Goodafternoon");
    }
    else{
        document.getElementById("mytime").innerHTML=("Goodevening");
    }

    
}


//function of conditional statement using input a months tp test if value is equal to input
function months(){
    let montssample=document.getElementById("month").value;
    if (montssample==1){
        document.getElementById("samplemonths").innerHTML=("January");
    }
    else if(montssample==2)
    {
        document.getElementById("samplemonths").innerHTML=("February");
    }
    else if(montssample==3)
    {
        document.getElementById("samplemonths").innerHTML=("march");
    }
    else if(montssample==4)
    {
        document.getElementById("samplemonths").innerHTML=("April");
    }
    else if(montssample==5)
    {
        document.getElementById("samplemonths").innerHTML=("May");
    }
    else if(montssample==6)
    {
        document.getElementById("samplemonths").innerHTML=("June");
    }
    else if(montssample==7)
    {
        document.getElementById("samplemonths").innerHTML=("July");
    }
    else if(montssample==8)
    {
        document.getElementById("samplemonths").innerHTML=("August");
    }

    else if(montssample==9)
    {
        document.getElementById("samplemonths").innerHTML=("September");
    }
    else if(montssample==10)
    {
        document.getElementById("samplemonths").innerHTML=("October");
    }
    else if(montssample==11)
    {
        document.getElementById("samplemonths").innerHTML=("November");
    }

     else if(montssample==12)
    {
        document.getElementById("samplemonths").innerHTML=("December");
    }
    else if(montssample>12)
        {
         document.getElementById("samplemonths").innerHTML=("invalid month you can put 1 to 12 only");
    }
  
    
}