// Exercicio 1

function Ex01(){
    var leitor = require("readline-sync");
    let nome:String = leitor.question("Digite o seu nome: ");
    let nomeDividido  = nome.split(" ");
    let i:number = 0
    for(; i < nomeDividido.length; i++){
        console.log(nomeDividido[i]);
        }
}

// Exercicio 2

function Ex02(){
    var leitor = require("readline-sync");
    let nome:String = leitor.question("Digite o seu nome: ");
    let endereco:String = leitor.question("Digite o seu endereço: ");
    let idade:Number = leitor.question("Entre com a sua idade: ");
    console.log(`${nome} mora no endereco: ${endereco} e tem ${idade} anos`)
}

// Exercicio 3

function Ex03(){
    var leitor = require("readline-sync");
    let idade:number = leitor.question("Entre com a sua idade: ");
    let conversor = idade * 365;
    console.log(`Você já viveu ${conversor} dias`);
}

Ex03()

    
