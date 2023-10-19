function Ex01(){
    var vetor1: number[] = [1, 2, 3, 4, 5];
    var vetor2: number[] = [];

    for(var i = 0; i<vetor1.length; i++){
        vetor2[i] = vetor1[i];
}

console.log(`Vetor original: ${vetor1}`);
console.log(`Vetor copia: ${vetor2}`);

}

// Exercicio 02 e 03, lista 2

function Ex02(){
    var vetor1: number[] = [1, 2, 3, 4, 5];
    var vetor2: number[] = [5, 6, 7, 8, 9];
    var vetor3: number[] = [];

    if (vetor1.length === vetor2.length) {
        for(var i=0; i<vetor1.length; i++){
                vetor3[i] = vetor1[i] + vetor2[i]; 
            }
    } else {
        console.log("Vetores com quantidades diferentes!")
    }
        console.log(`Vetor 1: ${vetor1}`);
        console.log(`Vetor 2: ${vetor2}`);
        console.log(`Soma dos dois vetores: ${vetor3}`);    
}

// Exercicio 04, lista 2

function Ex04(){
    var vetor1: number[] = [1, 2, 3, 4, 5];
    var vetor2: number[] = [6, 7, 8, 9, 10];
    var vetor3: number[] = [];

    if(vetor1.length === vetor2.length){
        if (vetor1 instanceof Array && vetor2 instanceof Array && vetor1.constructor === vetor2.constructor){
            vetor3 = vetor1.concat(vetor2);
        } else {
            console.log("Vetores de tipos diferentes!")
        }
        
    } else {
        console.log("Vetores com tamanhos diferentes!")
    }

    console.log(`Vetor 1: ${vetor1}`);
    console.log(`Vetor 2: ${vetor2}`);
    console.log(`A concatena dos dois vetores: ${vetor3}`);        
}

// Exercicio 05, lista 2

function Ex05(){
    let N: number = 20;
    let vetor: number[] = [];
    let vetorModificado: number[] = [];

    for (let i = 1; i <= N; i++) {
    vetor.push(i);
    }

    for (let i = 0; i < N / 2; i++) {
    const temp = vetor[i];
    vetorModificado[i] = vetor[N - 1 - i];
    vetorModificado[N - 1 - i] = temp;
    }

    console.log("Vetor:", vetor);
    console.log("Vetor Modificado:", vetorModificado);
}

// Exercicio 06, lista 2

function Ex06(){
    var leitor = require("readline-sync");
    function isPositiveNumber(num: number): boolean {
        return num >= 0;
    }
  
    var G: number[] = [3, 2, 3, 1, 1, 2, 2, 3, 3, 3, 2, 2, 1];
  
    var numApostadores: number = 2; 
  
    for (var apostador = 1; apostador <= numApostadores; apostador++) {
        var R: number[] = [];
  
        console.log(`Apostador ${apostador}:`);
        for (let i = 0; i < G.length; i++) {
            var resposta = Number(leitor.question("Digite a resposta: "));
  
        if (isPositiveNumber(resposta) && resposta >= 1 && resposta <= 3) {
            R.push(resposta);
        } else {
            console.log("Resposta inválida. Use apenas 1, 2 ou 3.");
            i--;
        }
        }
        let acertos = 0;
        for (let i = 0; i < G.length; i++) {
            if (R[i] === G[i]) {
                acertos++;
            }
        }
  
    console.log(`Apostador ${apostador} acertou ${acertos} números.`);
  
    if (acertos === 13) {
      console.log("GANHADOR, PARABÉNS!");
    }
    }
  
}

// Exercicio 07, lista 2

function Ex07(){
    const matrizOriginal: number[][] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const linhas = matrizOriginal.length;
    const colunas = matrizOriginal[0].length;

    var transposta: number[][] = [];

    for (let i = 0; i < colunas; i++) {
        console.log([i], transposta);
        for (let j = 0; j < linhas; j++) {
            transposta[i].push(0);
        }
    }

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            transposta[j][i] = matrizOriginal[i][j];
        }
    }

    console.log(matrizOriginal);
    console.log(transposta);
}

// Exercicio 08, lista 2

function Ex08(){

function lerMatriz(): number[][] {
    var leitor = require("readline-sync")
    const matriz: number[][] = [];

    for (let i = 0; i < 2; i++) {
        matriz.push([]);
        for (let j = 0; j < 3; j++) {
            const elemento = Number(leitor.question(`Digite o elemento da posição (${i + 1},${j + 1}): `));
            matriz[i].push(elemento);
        }
    }

    return matriz;
}

function calcularSomaMatriz(matriz: number[][]): number {
    let soma = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function imprimirMatriz(matriz: number[][]) {
    for (let i = 0; i < 2; i++) {
        console.log(matriz[i].join(' '));
    }
}

console.log("Digite os elementos da matriz 2x3:");
const matriz = lerMatriz();

console.log("Matriz inserida:");
imprimirMatriz(matriz);

const soma = calcularSomaMatriz(matriz);
console.log(`A soma de todos os elementos da matriz é: ${soma}`);

}

// Exercicio 09, lista 2

function Ex09(){
    var leitor = require("readline-sync");

    function lerMatriz(): number[][] {
        const matriz: number[][] = [];

        for (let i = 0; i < 4; i++) {
            matriz.push([]);
            for (let j = 0; j < 4; j++) {
                const elemento = Number(leitor.question(`Digite o elemento da posição (${i + 1},${j + 1}): `));
                matriz[i].push(elemento);
            }
        }

        return matriz;
}

    function calcularSomaAbaixoDiagonal(matriz: number[][]): number {
        let soma = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < i; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }


    function imprimirMatriz(matriz: number[][]) {
        for (let i = 0; i < 4; i++) {
            console.log(matriz[i].join(' '));
        }
    }


    console.log("Digite os elementos da matriz 4x4:");
    const matriz = lerMatriz();

    console.log("Matriz inserida:");
    imprimirMatriz(matriz);

    const soma = calcularSomaAbaixoDiagonal(matriz);
    console.log(`A soma dos elementos abaixo da diagonal principal é: ${soma}`);

}

// Exercicio 10, lista 2

function Ex10(){
    var leitor = require("readline-sync");
        const matriz: number[][] = [];

        for (let i = 0; i < 5; i++) {
            matriz.push([]);
            for (let j = 0; j < 5; j++) {
                const elemento = Number(leitor.question(`Digite o elemento da posição (${i + 1},${j + 1}): `));
                matriz[i].push(elemento);
            }
        }

        return matriz;

    // a)
    function calcularSomaLinha4(matriz: number[][]): number {
        return matriz[3].reduce((acc, valor) => acc + valor, 0);
    }

    // b)
    function calcularSomaColuna2(matriz: number[][]): number {
        return matriz.reduce((acc, linha) => acc + linha[1], 0);
    }

    // c)
    function calcularSomaDiagonalPrincipal(matriz: number[][]): number {
        return matriz.reduce((acc, linha, i) => acc + linha[i], 0);
    }

    // d)
    function calcularSomaDiagonalSecundaria(matriz: number[][]): number {
        return matriz.reduce((acc, linha, i) => acc + linha[4 - i], 0);
    }

    // e)
    function calcularSomaTotal(matriz: number[][]): number {
        return matriz.reduce((acc, linha) => acc + linha.reduce((accLinha, valor) => accLinha + valor, 0), 0);
    }

    // f)
    function imprimirMatriz(matriz: number[][]) {
        for (let i = 0; i < 5; i++) {
            console.log(matriz[i].join(' '));
        }
    }
}

// Exercicio 11, lista 2

function Ex11(){
    var leitor = require("readline-sync");
    const numeroDeAlunos = Number(leitor.question("Informe a quantidade de alunos: "));
    const notas: number[] = [];
    
    for (let i = 0; i < numeroDeAlunos; i++) {
        const nota = Number(leitor.question(`Digite a nota do aluno ${i + 1}: `);
        notas.push(nota);
    }
        
    
    function contarNotasAbaixoDaMedia(notas: number[]): number {
        const media = 60;
        return notas.filter(nota => nota < media).length;
    }
    
    function contarNotasNaMedia(notas: number[]): number {
        const media = 60;
        return notas.filter(nota => nota === media).length;
    }
    
    console.log(`Quantidade de alunos abaixo da média: ${contarNotasAbaixoDaMedia(notas)}`);
    console.log(`Quantidade de alunos na média: ${contarNotasNaMedia(notas)}`);
}

// Exercicio 12, lista 2

function Ex12(valor: any): string{
    if (valor === null) {
        return "O valor é nulo.";
    } else {
        return "O valor não é nulo.";
    }
}

// Exercicio 13, lista 2

function Ex13(a:number, b:number, c:number): number{
    return (b**2) - (4 * (a*c));
}

// Exercicio 14, lista 2

function Ex14(a: number, b: number, c: number): string {
    const delta = (b ** 2) - 4 * a * c;

    if (a === 0) {
        return "Coeficiente 'a' não pode ser zero.";
    } else if (delta >= 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Raízes reais: x1 = ${x1}, x2 = ${x2}`;
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-delta) / (2 * a);
        return `Raízes complexas: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`;
    }
}

// Exercicio 15, lista 2

function Ex15(a: number, b:number): number{
    if(b<a){
        return a;
    } else if(a<b){
        return b;
    } else {
        return a; // caso sejam iguais
    }
}

// Exercicio 16, lista 2

function Ex16(a: number, b:number): number{
    if(b<a){
        return b;
    } else if(a<b){
        return a;
    } else {
        return b; // caso sejam iguais
    }
}

// Exercicio 17, lista 2

function Ex17(a: number, b:number, c:number): number{
    if(b<a && c<a){
        return a;
    } else if(a<b && c<b){
        return b;
    } else if(a<c && b<c) {
        return c; 
    } else {
        return a; // caso sejam iguais
    }
}

// Exercicio 18, lista 2

function Ex18(a: number, b:number, c:number): number{
    if(a<b && a<c){
        return a;
    } else if(b<a && b<c){
        return b;
    } else if(c<a && c<b) {
        return c; 
    } else {
        return a; // caso sejam iguais
    }
}

// Exercicio 19, lista 2

function Dado(): number {
    return Math.floor(Math.random() * 6) + 1;
}


Ex19()