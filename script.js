function ApasareAduna(){
    const numar1 = document.getElementById("numar1");
    const numar2 = document.getElementById("numar2");
    const rezultat = document.getElementById("rezultat");

    const a = parseFloat(numar1.value) || 0;
    const b = parseFloat(numar2.value) || 0;
    const suma = a + b;
    rezultat.value = suma + "Hello world!";
}

function ButonMareApasat(){
    console.log("Apasat")
}