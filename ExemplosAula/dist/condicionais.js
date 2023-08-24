"use strict";
/*console.log("condicionais")

let leitor = require('readline-sync');

let x = Number(leitor.question("Digite um número: "));

if(x>0)
    console.log("O número é positivo");
else
    console.log("O número é negativo");*/
let leitor = require('readline-sync');
//Exemplo 1:
function calc() {
    let x = Number(leitor.question("Digite um número: "));
    if (x > 10 && x < 20)
        console.log("O número está entre 10 e 20");
    else
        console.log("O número não pertence ao intervalo de 10 e 20");
}
//Exemplo 2:
function calc2() {
    let x = Number(leitor.question("Digite um número: "));
    if (x == 10 || x == 20)
        console.log("O número é 10 ou 20");
    else
        console.log("O número não é 10 ou 20");
}
calc2();
//# sourceMappingURL=condicionais.js.map