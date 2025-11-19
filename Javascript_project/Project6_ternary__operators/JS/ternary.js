function ternary(){
    let height,canride;
    height=document.getElementById("height").value;
    canride=(height<53 ? "Your are too short":"Your are tall enough");
    document.getElementById("ride").innerHTML=canride+"To Ride!"
}
//function for test a person who able to vote

function voting(){
    let age,canvote;
    age=document.getElementById("age").value;
    canvote=(age<18 ? "Your are not able to vote its too young":"Your are able to vote youre in legal age");
    
    document.getElementById("agevote").innerHTML=canvote+"To Vote!"
}

//function for test for a vehicle

function Vehicle(make,model,year,color){
    this.Vehicle_make=make;
    this.Vehicle_model=model;
    this.Vehicle_year=year;
    this.Vehicle_color=color;

}
let erick= new Vehicle("Honda","Civic",2025,"blue");
let emily= new Vehicle("Honda","Civic",2025,"red");
let jack= new Vehicle("Honda","Civic",2025,"green");

function myfunction(){
    document.getElementById("cons").innerHTML="Erick drives a "+erick.Vehicle_color+"-colored "+erick.Vehicle_model+" Manufactured in "+erick.Vehicle_year;
}

//function for test for a person identity


function Persons(firstname, lastname,age,nationality){
    this.Person_firstname=firstname;
    this.Person_lastname=lastname;
    this.Person_age=age;
    this.Person_nationality=nationality;
}
let christ=new Persons("Christopher","Lopez",29,"filipino");

function sampleko(){
    document.getElementById("sample").innerHTML="My firstname is "+christ.Person_firstname+" and my lastname is "+christ.Person_lastname +" and age "+christ.Person_age+" Nationality "+christ.Person_nationality;
}


function nestedfunction(){
    document.getElementById("nested").innerHTML=display();
    function display(){
        let name="christopher";
        function age(){
            let ages=29;
          return name +" age of "+ages;
            
        }
        let result=age();
        return result;


    }


}
