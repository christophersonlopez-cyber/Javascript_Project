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


//this is a sample for array
function arrayfunction(){
    let colors=[];
    colors[0]="Red";
    colors[1]="Blue";
    colors[2]="Green";
    colors[3]="Yellow";
    colors[4]="Pink";
    document.getElementById("arraysample").innerHTML=("This is a color : "+colors[4]);
    
}