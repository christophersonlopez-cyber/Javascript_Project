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

     //this is a function about convert a number to string
    
    function convert(){
        let name=17;
        let result=name.toString();
        document.getElementById("convertsample").innerHTML=result +" That number isconvert in String";
    }

      //this is a function about toprecision number
    
    function precision(){
        let name=1734.45654645;
        let result=name.toPrecision(7);
        document.getElementById("precisionsample").innerHTML=result +" That number is example of toprecision"+name;
    }


       //this is a function about tofixed number
    
    function tofixed(){
        let name=1734.45654645;
        let result=name.toFixed(1);
        document.getElementById("fixed").innerHTML=result +" That number is example of tofixed "+name;
    }


       //this is a function about valueof 
    
    function valueofsample(){
        let name="Christopher Son";
        let result=name.valueOf();
        document.getElementById("value").innerHTML=result;
    }