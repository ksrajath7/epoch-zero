const logo = document.querySelectorAll("#logo path");
for( let i = 0; i<logo.length; i++ ){
    console.log("Path" + " " + i + " " + "is" + " " + logo[i].getTotalLength() );
}

var gotoWorks = function (){
    window.location.href="./works.html"
}
var goto = function (){
    window.location.href="./src/works.html"
}
