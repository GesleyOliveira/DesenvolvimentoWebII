// Exercicio 1
function Ex01() {
    var leitor = require("readline-sync");
    var nome = leitor.question("Digite o seu nome: ");
    var nomeDividido = nome.split(" ");
    var i = 0;
    for (; i < nomeDividido.length; i++) {
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
Ex03();
