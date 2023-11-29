

var viccek;
var kérdések;

window.onload = letöltés

function letöltés() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)

        );
}





function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;

    for (var i = 0; i < viccek.length; i++) {
        console.log(viccek[i].questionText)
        let elem = document.createElement("div")
        elem.innerHTML = viccek[i].kérdések
       ide.appendChild(elem)
    }
    

}








