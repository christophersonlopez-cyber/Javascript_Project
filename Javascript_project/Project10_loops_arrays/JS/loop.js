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


//this is a sample for const
function constfunction(){
    let car={Brand:"Toyota", Model:"Vios",Year:"2025"};
    car.color="red";
    car.Year="2022";
    document.getElementById("constsample").innerHTML=("The brand of the car is : "+car.Brand+" And the color is "+car.color+" Year "+car.Year);
    
}


//this is a sample for return
function returnfunction (){
   let name="Christopher Son";
   let lastname="Lopez";

   return name+" "+lastname;
    
    
}
function clickme(){
document.getElementById("returnsample").innerHTML=returnfunction();
}



//this function about object function

function objects(){
    var car={
        Brand:"Toyota",
        Model:"Vios",
        Color:"Blue",
        Descriptions: function(){
        return "The brand of the car is "+this.Brand;
        }
    };
    return car.Descriptions();
}

function objectfunction(){
document.getElementById("objectsample").innerHTML=objects();
}