let soma = document.getElementById("soma")
let subtrair = document.getElementById("subtrair")
let multiplicar = document.getElementById("multiplicar")
let dividir = document.getElementById("dividir")
let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
let resultado = document.getElementById("resultado")

const url = "http://localhost:8081/calc";

soma.addEventListener("click", function () {

    fetch(`${url}/somar/${valor1.value}/${valor2.value}`)
        .then(response => response.json())
        .then(function (json) {
            resultado.innerHTML = json.resultado;
        })

});

subtrair.addEventListener("click", function () {

    fetch(`${url}/subtrair/${valor1.value}/${valor2.value}`)
        .then(response => response.json())
        .then(function (json) {
            resultado.innerHTML = json.resultado;
        })

});

multiplicar.addEventListener("click", function () {
    fetch(`${url}/multiplicar/${valor1.value}/${valor2.value}`)
        .then(response => response.json())
        .then(function (json) {
            resultado.innerHTML = json.resultado;
        })

});

dividir.addEventListener("click", function () {
    fetch(`${url}/dividir/${valor1.value}/${valor2.value}`)
        .then(response => response.json())
        .then(function (json) {
            resultado.innerHTML = json.resultado;
        })

});

