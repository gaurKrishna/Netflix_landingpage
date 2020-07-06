var myvar = document.getElementsByClassName("Shown");
var myvar2 = document.getElementsByClassName("Hidden");
console.log(myvar2);
for(var i = 0; i < 5; ++i){
    myvar[i].addEventListener("click", toogleexpand)
}
function toogleexpand(){
    console.log("event")
    console.log(event.target.parentElement);
    var tooglediv = event.target.parentElement;
    // console.log(tooglediv);
    // console.log(myvar[0]); 
    for(var i = 0; i < 5; ++i){
        myvar[i].getElementsByTagName("I")[0].innerHTML = "add";
        if(!(myvar[i].isSameNode(tooglediv))){
            myvar2[i].style.display = "none";
        }
    }    
    // alert("event");
    var hidden = event.target.parentElement.parentElement.getElementsByTagName("DIV")[1];
    event.target.parentElement.getElementsByTagName("I")[0].innerHTML = "close";
    // alert(typeof hidden.style.display)
    if(hidden.style.display === "none" || hidden.style.display == ""){
        hidden.style.display = "block";
    } else{
        hidden.style.display = "none";
        event.target.parentElement.getElementsByTagName("I")[0].innerHTML = "add";
    }
}