let activePlayer = 'X';
let selectedSquares = [];

// Canvas setup for win lines
//const canvas = document.getElementById('win-lines');
//const ctx = canvas.getContext('2d');//

function placeXoro(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = "url('./images/x.png')";

        } else {
           select.style.backgroundImage = "url('./images/o.png')";
        }

        selectedSquares.push(squareNumber + activePlayer);
        checkWinCondition();

        // Sound
        let sound = new Audio('./media/new.mp3');
      sound.play();

        if (activePlayer === 'X'){
            activePlayer= 'O';
        }
        else{
            activePlayer='X';
        }
        if (activePlayer==='O'){
            disableClick();
            setTimeout(function(){computerTurn();
                
            }, 1000);
        }
        return true;
        
    }
}

function computerTurn() {
    let success = false;
    let pickSquare;
    while (!success) {
        pickSquare = String(Math.floor(Math.random() * 9));
        if (placeXoro(pickSquare)) {
            placeXoro(pickSquare);
            success = true;
        }
    }
}

function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
    }, 600);
}



function checkWinCondition(){

    if (arrayIncludes('0X','1X','2X')){
        draWinline(50,100,558,100)
    }
    else if(arrayIncludes('3X','4X','5X')){
        draWinline(50,304,558,304)
    }
     else if(arrayIncludes('6X','7X','8X')){
        draWinline(50,508,558,508)
    }
     else if(arrayIncludes('0X','3X','6X')){
        draWinline(100,50,100,558)
    }
     else if(arrayIncludes('1X','4X','7X')){
        draWinline(304,50,304,558)
    }
     else if(arrayIncludes('2X','5X','8X')){
        draWinline(508,50,508,558)
    }
     else if(arrayIncludes('6X','4X','2X')){
        draWinline(100,508,510,90)
    }
     else if(arrayIncludes('0X','4X','8X')){
        draWinline(100,100,520,520)
    }
     else if(arrayIncludes('0O','1O','2O')){
        draWinline(50,100,558,100)
    }
     else if(arrayIncludes('3O','4O','5O')){
        draWinline(50,304,558,304)
    }
     else if(arrayIncludes('6O','7O','8O')){
        draWinline(50,508,558,508)
    }
     else if(arrayIncludes('0O','3O','6O')){
        draWinline(100,50,100,558)
    }
     else if(arrayIncludes('1O','4O','7O')){
        draWinline(304,50,304,558)
    }
     else if(arrayIncludes('2O','5O','8O')){
        draWinline(508,50,508,558)
    }
     else if(arrayIncludes('6O','4O','2O')){
        draWinline(100,508,510,90)
    }
     else if(arrayIncludes('0O','4O','8O')){
        draWinline(100,100,520,20)
    }
    else if (selectedSquares.length>=9){
        audio('./media/new.mp3');
        setTimeout(function(){
            resetGame();
        },500);
    }
    function arrayIncludes(squareA,squareB,squareC){
        const a=selectedSquares.includes(squareA);
        const b=selectedSquares.includes(squareB);
        const c=selectedSquares.includes(squareC);
        if(a=== true && b===true && c===true){
            return true;
        }
    }




}
function disableClick(){
    body.style.pointerEvents='none';
    setTimeout(function(){body.style.pointerEvents='auto';},1000);
}

function audio(audioURL){
    let audio=new Audio(audioURL);
    audio.play();
}


function draWinline(coordX1, coordY1,coordX2,coordY2){
    const canvas=document.getElementById('win-lines');
    const c=canvas.getContext('2d');
    let x1=coordX1,
    y1=coordY1,
    x2=coordX2,
    y2=coordY2,
    x=x1,
    y=y1;
    function animateLineDrawing(){
        const animationLoop=requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth=10;
        c.strokeStyle='rgba(70,225,33,.8)';
        c.stroke();
        if(x1 <= x2 && y1 <= y2){
            if(x<x2){x +=10;}
            if(y<y2){y+=10;}
            if(x>=x2 && y>=y2){cancelAnimationFrame(animationLoop);}
        }


        if(x1<=x2 && y1>=y2){
            if(x<x2){x+=10;}
            if(y>y2){y-=10;}
            if(x>=x2&& y<=y2){cancelAnimationFrame(animationLoop);}
        }

    }
    //clear function
    function clear(){
        const animationLoop=requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winner.mp3');
    animateLineDrawing();
    setTimeout(function(){clear();resetGame();},1000);

}
function resetGame(){
    for(let i=0; i<9;i++){
        let square=document.getElementById(String(i));
        square.style.backgroundImage='';

    }
    selectedSquares=[];
}