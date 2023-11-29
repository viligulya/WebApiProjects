

var viccek;
var kérdések;

window.onload = letöltés

function letöltés() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(kérdések => letöltésBefejeződött(kérdések)

        );
}





function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;
    for (var i = 0; i < viccek.length; i++) {
        var ujsor = document.createElement("h1")
        ujsor.innerText = i;
       
    }
    

}








