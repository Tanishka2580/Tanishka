// document.getElementById("title").innerHTML = "New Title";
// const a = document.getElementById("myDIV");
//const button = document.querySelector(".checked");
//console.log(button);
var myNodelist = document.getElementsByTagName("LI");
var i;
for(i=0 ;i< myNodelist.length;i++ ){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for(let i=0;i< close.length;i++){
         close[i].onclick =function(){
var div = this.parentElement;
div.style.display ="none";
         }; 
        }

