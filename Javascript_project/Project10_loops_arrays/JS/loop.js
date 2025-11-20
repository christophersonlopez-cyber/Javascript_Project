//this a functionabout while loop
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
//this is a sample for a length
function lengthfunction(){

    let namesample=document.getElementById("lengthsample").value;
    let result=namesample.length;

    document.getElementById("sample").innerHTML=result;
}


//this is a sample for foor loop display a color
function forloopfunction(){
    let color=["Blue","Red","Yellow","Green","Pink"];
    let display="";
    let num;

    for (num=0; num<color.length; num++){
        display+=color[num]+"<br>";
    }
    document.getElementById("forloop").innerHTML=display;
    
}