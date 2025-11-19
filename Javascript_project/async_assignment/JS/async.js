//alert(document.getElementById("asyncsample").innerHTML);


function changeText() {
    const myParagraph = document.getElementById("demo");
    myParagraph.textContent = "Ang teksto ay nabago na gamit ang defer attribute!";
}

// Tawagin ang function kapag na-load na ang script
changeText();