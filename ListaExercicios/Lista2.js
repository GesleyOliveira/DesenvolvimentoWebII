function Ex01() {
    var vetor1 = [1, 2, 3, 4, 5];
    var vetor2 = [];
    for (var i = 0; i < vetor1.length; i++) {
        vetor2[i] = vetor1[i];
    }
    console.log("Vetor original: ".concat(vetor1));
    console.log("Vetor copia: ".concat(vetor2));
}
function Ex02() {
    var vetor1 = [1, 2, 3, 4, 5];
    var vetor2 = [5, 6, 7, 8, 9];
    var vetor3 = [];
    if (vetor1.length === vetor2.length) {
        for (var i = 0; i < vetor1.length; i++) {
            vetor3[i] = vetor1[i] + vetor2[i];
        }
    }
    else {
        console.log("Vetores com quantidades diferentes!");
    }
    console.log("Vetor 1: ".concat(vetor1));
    console.log("Vetor 2: ".concat(vetor2));
    console.log("Soma dos dois vetores: ".concat(vetor3));
}
function Ex04() {
    var vetor1 = [1, 2, 3, 4, 5];
    var vetor2 = [6, 7, 8, 9, 10];
    var vetor3 = [];
    if (vetor1.length === vetor2.length) {
        if (vetor1 instanceof Array && vetor2 instanceof Array && vetor1.constructor === vetor2.constructor) {
            vetor3 = vetor1.concat(vetor2);
        }
        else {
            console.log("Vetores de tipos diferentes!");
        }
    }
    else {
        console.log("Vetores com tamanhos diferentes!");
    }
    console.log("Vetor 1: ".concat(vetor1));
    console.log("Vetor 2: ".concat(vetor2));
    console.log("A concatena dos dois vetores: ".concat(vetor3));
}
function Ex05() {
    var N = 20;
    var vetor = [];
    var vetorModificado = [];
    for (var i = 1; i <= N; i++) {
        vetor.push(i);
    }
    for (var i = 0; i < N / 2; i++) {
        var temp = vetor[i];
        vetorModificado[i] = vetor[N - 1 - i];
        vetorModificado[N - 1 - i] = temp;
    }
    console.log("Vetor:", vetor);
    console.log("Vetor Modificado:", vetorModificado);
}
function Ex06() {
    var leitor = require("readline-sync");
    function isPositiveNumber(num) {
        return num >= 0;
    }
    var G = [3, 2, 3, 1, 1, 2, 2, 3, 3, 3, 2, 2, 1];
    var numApostadores = 2;
    for (var apostador = 1; apostador <= numApostadores; apostador++) {
        var R = [];
        console.log("Apostador ".concat(apostador, ":"));
        for (var i = 0; i < G.length; i++) {
            var resposta = Number(leitor.question("Digite a resposta: "));
            if (isPositiveNumber(resposta) && resposta >= 1 && resposta <= 3) {
                R.push(resposta);
            }
            else {
                console.log("Resposta inválida. Use apenas 1, 2 ou 3.");
                i--;
            }
        }
        var acertos = 0;
        for (var i = 0; i < G.length; i++) {
            if (R[i] === G[i]) {
                acertos++;
            }
        }
        console.log("Apostador ".concat(apostador, " acertou ").concat(acertos, " n\u00FAmeros."));
        if (acertos === 13) {
            console.log("GANHADOR, PARABÉNS!");
        }
    }
}
Ex06();
