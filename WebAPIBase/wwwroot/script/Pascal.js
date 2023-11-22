window.onload = function () {
    initPascal(10);

}

var initPascal = function (n) {
    for (var sor = 0; sor < 10; sor++) {
        //új div létrehozása az új sornak
        var ujdiv = document.createElement("div");
        
        //új div osztálylistájához add hozzá a "sor"-t
        ujdiv.classList.add("sor");

        //új div-et add hozzá a "pascal" gyermekeihez
        document.getElementById("pascal").appendChild(ujdiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var ujelemdiv = document.createElement("div");

            //új elem div osztálylistájához add hozzá az "elem"-et
            ujelemdiv.classList.add("elem");

            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //ujelemdiv.innerHTML = sor + ' ' + oszlop;
            ujelemdiv.innerHTML = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop));

            //legyen az innerHTML a megfelelő szám
            //új elem div-et vedd fel a sor elemei közé
            ujdiv.appendChild(ujelemdiv);
        }
    }

}

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}