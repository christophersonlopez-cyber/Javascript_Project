//sample for comparison
function comparison(){
    let name="christopher"
    document.getElementById("comparisonsample").innerHTML=(typeof name);
}

function coersion(){
    let name="christopher";
    let number=10;
    let result=name+number;
    document.getElementById("coersionsample").innerHTML=(result);
}


function nan(){
    document.getElementById("nansample").innerHTML= isNaN ("90");
}

function infinitesam(){
    document.getElementById("infinitesample").innerHTML=-3E310;
}

function booleansam(){
    let number1=10;
    let number2=2;
    let result=(number1>number2);
    document.getElementById("booleansample").innerHTML=("Number 10 > 2 = "+result);
}

console.log(5+2);
console.log(5<2);

//this for a equal sign  operator
function equal(){
    let x=5;
    let y=5;
    let result=(x==y);
   document.getElementById("equalsign").innerHTML=result;
}

//this for a triple sign  operator

function triples(){
    let value1="Hello";
    let value2="Hello";

    let result=(value1===value2);
    document.getElementById("triplesign").innerHTML=result;
}
//this for different data type different value
function triples1(){
    let value1=7;
    let value2="8";

    let result=(value1===value2);
    document.getElementById("triplesign1").innerHTML=result;
}
//this for different data type same value
function triples2(){
    let value1=7;
    let value2="7";

    let result=(value1===value2);
    document.getElementById("triplesign2").innerHTML=result;
}
//this for same data type different value
function triples3(){
    let value1=7;
    let value2=8;

    let result=(value1===value2);
    document.getElementById("triplesign3").innerHTML=result;
}



//this for AND OPERAtor true output
function andoperate(){
    let value1=7;
    let value2=8;

    let result=(value1<value2&&value2>value1);
    document.getElementById("andoperator").innerHTML=result;
}

//this for AND OPERAOTR false output
function andoperate1(){
    let value1=7;
    let value2=8;

    let result=(value1>value2&&value2>value1);
    document.getElementById("andoperator1").innerHTML=result;
}


//this for OR OPERAOTR true output
function oroperate(){
    let value1=7;
    let value2=8;

    let result=(value1>value2||value2>value1);
    document.getElementById("oroperator").innerHTML=result;
}


function oroperate1(){
    let value1=7;
    let value2=8;

    let result=(value1>value2||value2<value1);
    document.getElementById("oroperator1").innerHTML=result;
}