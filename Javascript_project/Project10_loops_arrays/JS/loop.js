function loopfunction(){

    let num1="";
    let num3=document.getElementById("loopyouwant").value;
    let num2=1;

    while(num2<=num3){
        num1=num1+"<br>"+num2;
        num2++;

    }
    document.getElementById("loopsample").innerHTML=num1;
}