// Exercicio 1
function Ex01() {
    var leitor = require("readline-sync");
    var nome = leitor.question("Digite o seu nome: ");
    var nomeDividido = nome.split(" ");
    for (var i = 0; i < nomeDividido.length; i++) {
        console.log(nomeDividido[i]);
    }
}
// Exercicio 2
function Ex02() {
    var leitor = require("readline-sync");
    var nome = leitor.question("Digite o seu nome: ");
    var endereco = leitor.question("Digite o seu endereço: ");
    var idade = leitor.question("Entre com a sua idade: ");
    console.log("".concat(nome, " mora no endereco: ").concat(endereco, " e tem ").concat(idade, " anos"));
}
// Exercicio 3
function Ex03() {
    var leitor = require("readline-sync");
    var idade = leitor.question("Entre com a sua idade: ");
    var conversor = idade * 365;
    console.log("Voc\u00EA j\u00E1 viveu ".concat(conversor, " dias"));
}
function Ex04() {
    var leitor = require("readline-sync");
    var numero = leitor.question("Entre com um numero: ");
    console.log("N\u00FAmero ".concat(numero, ", antecessores: ").concat(numero - 1, ", ").concat(numero - 2, ", e sucessores: ").concat(Number(numero) + 1, ", ").concat(Number(numero) + 2));
}
function Ex05() {
    var leitor = require("readline-sync");
    var salario = leitor.question("Entre com o seu salário: ");
    var ajuste = leitor.question("Entre com o percentual de ajuste: ");
    var calculo = salario * (Number(ajuste / 100) + 1);
    console.log("O salario ".concat(salario, " com percentual ").concat(ajuste, ", ficar\u00E1 R$ ").concat(calculo, ",00"));
}
function Ex06() {
    var leitor = require("readline-sync");
    var dolar = leitor.question("Entre com um numero real: ");
    var conversao = (dolar * 5.47).toFixed(2);
    console.log("O valor $ ".concat(dolar, " em reais \u00E9 R$ ").concat((conversao)));
}
function Ex07() {
    var leitor = require("readline-sync");
    var a = leitor.question("Entre com o primeiro numero: ");
    var b = leitor.question("Entre com o segundo numero: ");
    var c;
    c = a;
    a = b;
    b = c;
    console.log(a, b);
}
function Ex08() {
    var leitor = require("readline-sync");
    var valorCombustivel = leitor.question("Entre com o valor do combustivel: ");
    var abastecer = leitor.question("Entre com o valor que ira abastecer: ");
    var conversor = abastecer / valorCombustivel;
    console.log("O valor R$ ".concat(abastecer, " sera possivel abastecer ").concat(conversor, " litros"));
}
function Ex09() {
    var leitor = require("readline-sync");
    var kmInicial = Number(leitor.question("Entre com o km inicial: "));
    var kmFinal = Number(leitor.question("Entre com o km final: "));
    var diferenca = kmFinal - kmInicial;
    var rendimento = 12;
    var consumoLitros = (diferenca / rendimento).toFixed(2);
    console.log("O volume utilizado no percurso foi de ".concat(consumoLitros, " litros"));
}
function Ex10() {
    var leitor = require("readline-sync");
    var divida = leitor.question("Entre com o valor da divida: ");
    var diasAtraso = leitor.question("Entre com a quantidade de dias em atraso: ");
    var percMulta = leitor.question("Entre com o percentual da multa por dia: ");
    var total = (((diasAtraso * (percMulta / 100) * divida)) + Number(divida)).toFixed(2);
    console.log("O valor total a ser pago \u00E9 de R$ ".concat(total));
}
function Ex11() {
    var leitor = require("readline-sync");
    var x = Number(leitor.question("Entre com o valor de x: "));
    var y = Number(leitor.question("Entre com o valor de y: "));
    var z = Number(leitor.question("Entre com o valor de z: "));
    if (x < z && z < y) {
        console.log("O valor ".concat(z, " est\u00E1 entre ").concat(x, " e ").concat(y));
    }
    else if (y < z && z < x) {
        console.log("O valor ".concat(z, " est\u00E1 entre ").concat(y, " e ").concat(x));
    }
    else {
        console.log("O valor ".concat(z, " n\u00E3o est\u00E1 entre ").concat(x, " e ").concat(y));
    }
}
function Ex12() {
    var leitor = require("readline-sync");
    var numero = Number(leitor.question("Entre com um numero: "));
    if (numero % 2 == 0) {
        console.log("O numero ".concat(numero, " e par!"));
    }
    else {
        console.log("O numero ".concat(numero, " nao e par!"));
    }
}
function Ex13() {
    var leitor = require("readline-sync");
    var letra = (leitor.question("Entre com o sexo (M/F): ")).toUpperCase();
    var nome = leitor.question("Entre com o nome: ");
    if (letra == "M") {
        console.log("Seja bem-vindo ".concat(nome, "!"));
    }
    else if (letra == "F") {
        console.log("Seja bem-vinda ".concat(nome, "!"));
    }
    else {
        console.log("Letra ".concat(letra, " inv\u00E1lida! Entre com M ou F!"));
    }
}
Ex13();
