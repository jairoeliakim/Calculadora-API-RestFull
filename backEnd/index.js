//importar configuração servidor
const express = require("express");

//configuração de acesso na api via URL
var cors = require('cors');

//instancia do express para criar o novo servidor
const app = express();

//usando o cors no servidor
app.use(cors())


//rota para somar
app.get("/calc/somar/:valor1/:valor2", function (req, res) {

    let num1 = parseFloat(req.params.valor1);
    let num2 = parseFloat(req.params.valor2);

    res.send({
        resultado: num1 + num2
    })
});

//rota para subtrair
app.get("/calc/subtrair/:valor1/:valor2", function (req, res) {

    let num1 = parseFloat(req.params.valor1);
    let num2 = parseFloat(req.params.valor2);

    res.send({
        resultado: num1 - num2
    })
});

//rota para multiplicar
app.get("/calc/multiplicar/:valor1/:valor2", function (req, res) {

    let num1 = parseFloat(req.params.valor1);
    let num2 = parseFloat(req.params.valor2);

    res.send({
        resultado: num1 * num2
    })
});

//rota para dividir
app.get("/calc/dividir/:valor1/:valor2", function (req, res) {

    let num1 = parseFloat(req.params.valor1);
    let num2 = parseFloat(req.params.valor2);

    res.send({
        resultado: num1 / num2
    })
});


// o servidor começa a rodar
app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081")
});