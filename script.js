var x = document.getElementById("lbl");
function myFunc(){
    console.log("Hrekllo");
   // var x = document.getElementById("navbar");
    if(x.style.display =="block"){
         x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}
x.onclick = myFunc();

