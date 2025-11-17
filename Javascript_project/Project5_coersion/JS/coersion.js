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