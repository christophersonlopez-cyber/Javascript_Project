function dictionary(){
    let person={name:"Christopher Son",
        age:25,
        hobby:"Programming"
    };
    delete person.hobby;
    document.getElementById("dictiosample").innerHTML=("Hobby: "+person.hobby);
}