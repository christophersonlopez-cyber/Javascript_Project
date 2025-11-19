function countdown(){
    let seconds=document.getElementById("second").value;
   let timer = document.getElementById("timer");
    function tick(){
        seconds=seconds-1;
        timer.innerHTML=seconds;
        let time=setTimeout(tick,1000);
        if(seconds==-1){
            alert("Time's up");
            clearTimeout(time);
            timer.innerHTML="";
        }
    }
    tick();
}