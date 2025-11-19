function ternary(){
    let height,canride;
    height=document.getElementById("height").value;
    canride=(height<53 ? "Your are too short":"Your are tall enough");
    document.getElementById("ride").innerHTML=canride+"To Ride!"
}


function voting(){
    let age,canvote;
    age=document.getElementById("age").value;
    canvote=(age<18 ? "Your are not able to vote its too young":"Your are able to vote youre in legal age");
    
    document.getElementById("agevote").innerHTML=canvote+"To Vote!"
}