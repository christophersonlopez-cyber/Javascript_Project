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
    let result=number1>number2;
    document.getElementById("booleansample").innerHTML=("Number 10 > 2 = "+result);
}