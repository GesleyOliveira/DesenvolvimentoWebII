// Exercicio 1

function Ex01(){
    var leitor = require("readline-sync");
    let nome:string = leitor.question("Digite o seu nome: ");
    let nomeDividido  = nome.split(" ");
    for(let i=0; i < nomeDividido.length; i++){
        console.log(nomeDividido[i]);
        }
}

// Exercicio 2

function Ex02(){
    var leitor = require("readline-sync");
    let nome:string = leitor.question("Digite o seu nome: ");
    let endereco:string = leitor.question("Digite o seu endereço: ");
    let idade:number = leitor.question("Entre com a sua idade: ");
    console.log(`${nome} mora no endereco: ${endereco} e tem ${idade} anos`)
}

// Exercicio 3

function Ex03(){
    var leitor = require("readline-sync");
    let idade:number = leitor.question("Entre com a sua idade: ");
    let conversor = idade * 365;
    console.log(`Você já viveu ${conversor} dias`);
}

function Ex04(){
    var leitor = require("readline-sync");
    let numero:number = leitor.question("Entre com um numero: ");
    console.log(`Número ${numero}, antecessores: ${numero-1}, ${numero-2}, e sucessores: ${Number(numero) + 1}, ${Number(numero) + 2}`)
}

function Ex05(){
    var leitor = require("readline-sync");
    let salario:number = leitor.question("Entre com o seu salário: ");
    let ajuste:number = leitor.question("Entre com o percentual de ajuste: ");
    let calculo = salario * (Number(ajuste / 100) + 1);
    console.log(`O salario ${salario} com percentual ${ajuste}, ficará R$ ${calculo},00`)
}

function Ex06(){
    var leitor = require("readline-sync");
    let dolar = leitor.question("Entre com um numero real: ");
    let conversao = (dolar * 5.47).toFixed(2);
    console.log(`O valor $ ${dolar} em reais é R$ ${(conversao)}`)
}

function Ex07(){
    var leitor = require("readline-sync");
    let a = leitor.question("Entre com o primeiro numero: ");
    let b = leitor.question("Entre com o segundo numero: ");
    let c:number;
    c = a;
    a = b;
    b = c;
    console.log(a, b);
    
}

function Ex08(){
    var leitor = require("readline-sync");
    let valorCombustivel = leitor.question("Entre com o valor do combustivel: ");
    let abastecer = leitor.question("Entre com o valor que ira abastecer: ");
    let conversor = abastecer / valorCombustivel;
    console.log(`O valor R$ ${abastecer} sera possivel abastecer ${conversor} litros`);

}

function Ex09(){
    var leitor = require("readline-sync");
    let kmInicial:number = Number(leitor.question("Entre com o km inicial: "));
    let kmFinal:number = Number(leitor.question("Entre com o km final: "));
    let diferenca = kmFinal - kmInicial;
    let rendimento = 12
    let consumoLitros = (diferenca / rendimento).toFixed(2);
    console.log(`O volume utilizado no percurso foi de ${consumoLitros} litros`)
}

function Ex10(){
    var leitor = require("readline-sync");
    let divida:number = leitor.question("Entre com o valor da divida: ");
    let diasAtraso:number = leitor.question("Entre com a quantidade de dias em atraso: ");
    let percMulta:number = leitor.question("Entre com o percentual da multa por dia: ");
    let total = (((diasAtraso * (percMulta / 100) * divida)) + Number(divida)).toFixed(2);
    console.log(`O valor total a ser pago é de R$ ${total}`);
}

function Ex11(){
    var leitor = require("readline-sync");
    let x = Number(leitor.question("Entre com o valor de x: "));
    let y = Number(leitor.question("Entre com o valor de y: "));
    let z = Number(leitor.question("Entre com o valor de z: "));
    if(x<z && z<y){
        console.log(`O valor ${z} está entre ${x} e ${y}`);
    } else if(y<z && z<x){
        console.log(`O valor ${z} está entre ${y} e ${x}`);
    } else{
        console.log(`O valor ${z} não está entre ${x} e ${y}`);
    }
    
}

function Ex12(){
    var leitor = require("readline-sync");
    let numero = Number(leitor.question("Entre com um numero: "));
    if(numero % 2 == 0){
        console.log(`O numero ${numero} e par!`);
    } else {
        console.log(`O numero ${numero} nao e par!`);
    }
}

function Ex13(){
    var leitor = require("readline-sync");
    let letra = (leitor.question("Entre com o sexo (M/F): ")).toUpperCase();
    let nome = leitor.question("Entre com o nome: ");
    if(letra == "M"){
        console.log(`Seja bem-vindo ${nome}!`);
    } else if(letra == "F") {
        console.log(`Seja bem-vinda ${nome}!`);
    } else {
        console.log(`Letra ${letra} inválida! Entre com M ou F!`);
    }
    
}

Ex13();

    
