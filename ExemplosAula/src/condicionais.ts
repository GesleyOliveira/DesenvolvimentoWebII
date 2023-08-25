let leitor = require('readline-sync');

function PositivoNegativo(){
    let x = Number(leitor.question("Digite um número: "));

    if(x>0)
        console.log("O número é positivo");
    else
        console.log("O número é negativo");
}

//Exemplo 1:
function calc(){
    let x = Number(leitor.question("Digite um número: "));
    if (x>10 && x<20)
        console.log("O número está entre 10 e 20");
    else
        console.log("O número não pertence ao intervalo de 10 e 20")
}

//calc()

//Exemplo 2:
function calc2(){
    let x = Number(leitor.question("Digite um número: "));
    if (x==10 || x==20)
        console.log("O número é 10 ou 20");
    else
        console.log("O número não é 10 ou 20")
}

//calc2()

//Exemplo 3:
function VerificaDiaSemana(){
    const dia = Number(leitor.question("Digite o dia da semana: "))

    switch (dia) {
        case 1:
            console.log("segunda-feira")
            break;
        case 2:
            console.log("terça-feira")
            break;
        case 6: 
        case 7: 
            console.log("fds")
            break;
        default:
            console.log("Não terminei todos")
            break;
        }
}

//VerificaDiaSemana()