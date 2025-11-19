//this is a function about concat
    
    function concat(){
        let name="this is my favorite color ";
        let color1="blue";
        let color2="red";
        let color3="green";

        let result=name.concat(color1.concat(" "),color2.concat(" "),color3);
        document.getElementById("sampleconcat").innerHTML=result;
    }

    //this is a function about slice
    
    function slicemethod(){
        let name="this is my favorite color ";
        let result=name.slice(11);

       
        document.getElementById("slice").innerHTML=result;
    }


    
    //this is a function about uppercase a word
    
    function uppercaseword(){
        let name=document.getElementById("upper").innerHTML;
        document.getElementById("upper").innerHTML=name.toUpperCase();
    }

     
    //this is a function about seacrh a word
    
    function searchword(){
        let name=document.getElementById("search").innerHTML;
        let result=name.search("search")
        document.getElementById("search").innerHTML=result;
    }