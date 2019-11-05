function nrEn(kallbakken) {
    setTimeout(function() {console.log("Funksjon nr 1 er ferdig")}, 3000);
    kallbakken();
}

function nrTo() {
    console.log("Funksjon nr 2 er ferdig");
}

nrEn(nrTo);
