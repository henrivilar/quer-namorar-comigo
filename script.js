// function sim() {
//     alert("Que bom que você aceitou por livre espontânea vontade!");
// }

function desviar() {
    var btn = document.getElementById("nao");
    btn.style.position = "absolute";
    btn.style.top = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("Desviei");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}