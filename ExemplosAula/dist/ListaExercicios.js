"use strict";
//Exercicio 1:
function energia() {
    let leitor = require('readline-sync');
    let qtdKwh = Number(leitor.question("Entre com a quantidade de KWh consumido: "));
    let tipoInstalacao = ((leitor.question("Entre com o tipo de instalacao (R, I ou C): "))).toUpperCase();
    let valorFinal = 0;
    switch (tipoInstalacao) {
        case "R":
            if (qtdKwh <= 500)
                valorFinal = 0.4 * qtdKwh;
            else
                valorFinal = 0.65 * qtdKwh;
            console.log(`O preço a pagar pela energia elétrica é R$ ${valorFinal},00`);
            break;
        case "I":
            if (qtdKwh <= 1000)
                valorFinal = 0.55 * qtdKwh;
            else
                valorFinal = 0.6 * qtdKwh;
            console.log(`O preço a pagar pela energia elétrica é R$ ${valorFinal},00`);
            break;
        case "C":
            if (qtdKwh <= 5000)
                valorFinal = 0.55 * qtdKwh;
            else
                valorFinal = 0.6 * qtdKwh;
            console.log(`O preço a pagar pela energia elétrica é R$ ${valorFinal},00`);
            break;
        default:
            console.log("Entre com um tipo válido!");
            break;
    }
}
energia();
//# sourceMappingURL=ListaExercicios.js.map