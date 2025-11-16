function addnumber(num1,num2){
    return num1+num2;

}
function compute(){
    let result=addnumber(10,10);
    document.getElementById("adding").innerHTML=("The sum of 10+10 is ="+result);
}