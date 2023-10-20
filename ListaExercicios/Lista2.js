var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Ex01() {
    var vetor1 = [1, 2, 3, 4, 5];
    var vetor2 = [];
    for (var i = 0; i < vetor1.length; i++) {
        vetor2[i] = vetor1[i];
    }
    console.log("Vetor original: ".concat(vetor1));
    console.log("Vetor copia: ".concat(vetor2));
}
// Exercicio 02 e 03, lista 2
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
// Exercicio 04, lista 2
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
// Exercicio 05, lista 2
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
// Exercicio 06, lista 2
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
// Exercicio 07, lista 2
function Ex07() {
    var matrizOriginal = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    var linhas = matrizOriginal.length;
    var colunas = matrizOriginal[0].length;
    var transposta = [];
    for (var i = 0; i < colunas; i++) {
        console.log([i], transposta);
        for (var j = 0; j < linhas; j++) {
            transposta[i].push(0);
        }
    }
    for (var i = 0; i < linhas; i++) {
        for (var j = 0; j < colunas; j++) {
            transposta[j][i] = matrizOriginal[i][j];
        }
    }
    console.log(matrizOriginal);
    console.log(transposta);
}
// Exercicio 08, lista 2
function Ex08() {
    function lerMatriz() {
        var leitor = require("readline-sync");
        var matriz = [];
        for (var i = 0; i < 2; i++) {
            matriz.push([]);
            for (var j = 0; j < 3; j++) {
                var elemento = Number(leitor.question("Digite o elemento da posi\u00E7\u00E3o (".concat(i + 1, ",").concat(j + 1, "): ")));
                matriz[i].push(elemento);
            }
        }
        return matriz;
    }
    function calcularSomaMatriz(matriz) {
        var soma = 0;
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 3; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }
    function imprimirMatriz(matriz) {
        for (var i = 0; i < 2; i++) {
            console.log(matriz[i].join(' '));
        }
    }
    console.log("Digite os elementos da matriz 2x3:");
    var matriz = lerMatriz();
    console.log("Matriz inserida:");
    imprimirMatriz(matriz);
    var soma = calcularSomaMatriz(matriz);
    console.log("A soma de todos os elementos da matriz \u00E9: ".concat(soma));
}
// Exercicio 09, lista 2
function Ex09() {
    var leitor = require("readline-sync");
    function lerMatriz() {
        var matriz = [];
        for (var i = 0; i < 4; i++) {
            matriz.push([]);
            for (var j = 0; j < 4; j++) {
                var elemento = Number(leitor.question("Digite o elemento da posi\u00E7\u00E3o (".concat(i + 1, ",").concat(j + 1, "): ")));
                matriz[i].push(elemento);
            }
        }
        return matriz;
    }
    function calcularSomaAbaixoDiagonal(matriz) {
        var soma = 0;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < i; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }
    function imprimirMatriz(matriz) {
        for (var i = 0; i < 4; i++) {
            console.log(matriz[i].join(' '));
        }
    }
    console.log("Digite os elementos da matriz 4x4:");
    var matriz = lerMatriz();
    console.log("Matriz inserida:");
    imprimirMatriz(matriz);
    var soma = calcularSomaAbaixoDiagonal(matriz);
    console.log("A soma dos elementos abaixo da diagonal principal \u00E9: ".concat(soma));
}
// Exercicio 10, lista 2
function Ex10() {
    var leitor = require("readline-sync");
    var matriz = [];
    for (var i = 0; i < 5; i++) {
        matriz.push([]);
        for (var j = 0; j < 5; j++) {
            var elemento = Number(leitor.question("Digite o elemento da posi\u00E7\u00E3o (".concat(i + 1, ",").concat(j + 1, "): ")));
            matriz[i].push(elemento);
        }
    }
    return matriz;
    // a)
    function calcularSomaLinha4(matriz) {
        return matriz[3].reduce(function (acc, valor) { return acc + valor; }, 0);
    }
    // b)
    function calcularSomaColuna2(matriz) {
        return matriz.reduce(function (acc, linha) { return acc + linha[1]; }, 0);
    }
    // c)
    function calcularSomaDiagonalPrincipal(matriz) {
        return matriz.reduce(function (acc, linha, i) { return acc + linha[i]; }, 0);
    }
    // d)
    function calcularSomaDiagonalSecundaria(matriz) {
        return matriz.reduce(function (acc, linha, i) { return acc + linha[4 - i]; }, 0);
    }
    // e)
    function calcularSomaTotal(matriz) {
        return matriz.reduce(function (acc, linha) { return acc + linha.reduce(function (accLinha, valor) { return accLinha + valor; }, 0); }, 0);
    }
    // f)
    function imprimirMatriz(matriz) {
        for (var i = 0; i < 5; i++) {
            console.log(matriz[i].join(' '));
        }
    }
}
// Exercicio 11, lista 2
function Ex11() {
    var leitor = require("readline-sync");
    var numeroDeAlunos = Number(leitor.question("Informe a quantidade de alunos: "));
    var notas = [];
    for (var i = 0; i < numeroDeAlunos; i++) {
        var nota = Number(leitor.question("Digite a nota do aluno ".concat(i + 1, ": ")));
        notas.push(nota);
    }
    function contarNotasAbaixoDaMedia(notas) {
        var media = 60;
        return notas.filter(function (nota) { return nota < media; }).length;
    }
    function contarNotasNaMedia(notas) {
        var media = 60;
        return notas.filter(function (nota) { return nota === media; }).length;
    }
    console.log("Quantidade de alunos abaixo da m\u00E9dia: ".concat(contarNotasAbaixoDaMedia(notas)));
    console.log("Quantidade de alunos na m\u00E9dia: ".concat(contarNotasNaMedia(notas)));
}
// Exercicio 12, lista 2
function Ex12(valor) {
    if (valor === null) {
        return "O valor é nulo.";
    }
    else {
        return "O valor não é nulo.";
    }
}
// Exercicio 13, lista 2
function Ex13(a, b, c) {
    return (Math.pow(b, 2)) - (4 * (a * c));
}
// Exercicio 14, lista 2
function Ex14(a, b, c) {
    var delta = (Math.pow(b, 2)) - 4 * a * c;
    if (a === 0) {
        return "Coeficiente 'a' não pode ser zero.";
    }
    else if (delta >= 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "Ra\u00EDzes reais: x1 = ".concat(x1, ", x2 = ").concat(x2);
    }
    else {
        var realPart = -b / (2 * a);
        var imaginaryPart = Math.sqrt(-delta) / (2 * a);
        return "Ra\u00EDzes complexas: x1 = ".concat(realPart, " + ").concat(imaginaryPart, "i, x2 = ").concat(realPart, " - ").concat(imaginaryPart, "i");
    }
}
// Exercicio 15, lista 2
function Ex15(a, b) {
    if (b < a) {
        return a;
    }
    else if (a < b) {
        return b;
    }
    else {
        return a; // caso sejam iguais
    }
}
// Exercicio 16, lista 2
function Ex16(a, b) {
    if (b < a) {
        return b;
    }
    else if (a < b) {
        return a;
    }
    else {
        return b; // caso sejam iguais
    }
}
// Exercicio 17, lista 2
function Ex17(a, b, c) {
    if (b < a && c < a) {
        return a;
    }
    else if (a < b && c < b) {
        return b;
    }
    else if (a < c && b < c) {
        return c;
    }
    else {
        return a; // caso sejam iguais
    }
}
// Exercicio 18, lista 2
function Ex18(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }
    else if (c < a && c < b) {
        return c;
    }
    else {
        return a; // caso sejam iguais
    }
}
// Exercicio 19, lista 2
function Ex19_Dado() {
    return Math.floor(Math.random() * 6) + 1;
}
// Exercicio 20, lista 2
function Ex20() {
    var resultado = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 1000000; i++) {
        var numeroLancado = Math.floor(Math.random() * 6) + 1;
        resultado[numeroLancado - 1]++;
    }
    return resultado;
}
var resultados = Ex20();
for (var i = 0; i < 6; i++) {
    var numero = i + 1;
    var porcentagem = (resultados[i] / 1000000) * 100;
    console.log("N\u00FAmero ".concat(numero, ": ").concat(porcentagem.toFixed(2), "%"));
}
// Exercicio 21, lista 2
function Ex21() {
    var leitor = require("readline-sync");
    var escolha = (leitor.question("A entrada sera Celsius ou Farenheit? (C/F): ")).toUpperCase();
    switch (escolha) {
        case "C":
            var temperaturaF = Number(leitor.question("Qual a temperatura em Farenheit? "));
            var conversao = (9 * (temperaturaF / 5)) + 32;
            console.log("A temperatura ".concat(temperaturaF, "\u00B0F \u00E9 ").concat(conversao, "\u00B0C"));
            break;
        case "F":
            var temperaturaC = Number(leitor.question("Qual a temperatura em Celsius? "));
            var conversao = (9 * (temperaturaC / 5)) + 32;
            console.log("A temperatura ".concat(temperaturaC, "\u00B0C \u00E9 ").concat(conversao, "\u00B0F"));
            break;
        default:
            console.log("Op\u00E7\u00E3o ".concat(escolha, " inv\u00E1lida!"));
    }
}
// Exercicio 22, lista 2
function Ex22(notas) {
    if (notas.length !== 3) {
        console.log("Por favor, forneça exatamente três notas.");
        return;
    }
    var notasOrdenadas = notas.slice().sort(function (a, b) { return b - a; });
    var notaMaisAlta = notasOrdenadas[0];
    var notaMaisBaixa = notasOrdenadas[2];
    var mediaDasTresNotas = notas.reduce(function (total, nota) { return total + nota; }, 0) / 3;
    var mediaDasDuasMaiores = (notasOrdenadas[0] + notasOrdenadas[1]) / 2;
    console.log("Notas: ".concat(notas.join(", ")));
    console.log("M\u00E9dia das tr\u00EAs notas: ".concat(mediaDasTresNotas.toFixed(2)));
    console.log("M\u00E9dia das duas maiores notas: ".concat(mediaDasDuasMaiores.toFixed(2)));
    console.log("Nota mais alta: ".concat(notaMaisAlta));
    console.log("Nota mais baixa: ".concat(notaMaisBaixa));
}
var notas = [7.5, 8.0, 6.5];
Ex22(notas);
// Exercicio 23, lista 2
var Filme = /** @class */ (function () {
    function Filme(titulo, duracaoEmMinutos) {
        this.titulo = titulo;
        this.duracaoEmMinutos = duracaoEmMinutos;
    }
    Filme.prototype.getTitulo = function () {
        return this.titulo;
    };
    Filme.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Filme.prototype.getDuracaoEmMinutos = function () {
        return this.duracaoEmMinutos;
    };
    Filme.prototype.setDuracaoEmMinutos = function (duracaoEmMinutos) {
        this.duracaoEmMinutos = duracaoEmMinutos;
    };
    Filme.prototype.exibirDuracaoEmHoras = function () {
        var horas = Math.floor(this.duracaoEmMinutos / 60);
        var minutos = this.duracaoEmMinutos % 60;
        console.log("O filme ".concat(this.titulo, " possui ").concat(horas, " horas e ").concat(minutos, " minutos de dura\u00E7\u00E3o."));
    };
    return Filme;
}());
var meuFilme = new Filme("Titanic", 194);
meuFilme.exibirDuracaoEmHoras();
// Exercicio 24, lista 2
var TestarFilme = /** @class */ (function () {
    function TestarFilme() {
    }
    TestarFilme.main = function () {
        var umFilmeQualquer = new Filme("Os Vingadores", 142);
        umFilmeQualquer.exibirDuracaoEmHoras();
        var meuFilmeFavorito = new Filme("Meu Filme Favorito", 100);
        meuFilmeFavorito.setDuracaoEmMinutos(214); // Substitua o valor correto da duração aqui
        meuFilmeFavorito.exibirDuracaoEmHoras();
        console.log("\nf) Os filmes no cat\u00E1logo s\u00E3o ".concat(umFilmeQualquer.getTitulo(), " e ").concat(meuFilmeFavorito.getTitulo()));
    };
    return TestarFilme;
}());
TestarFilme.main();
// Exercicio 25, lista 2
var Livro = /** @class */ (function () {
    function Livro(titulo, qtdPaginas, paginasLidas) {
        this.titulo = titulo;
        this.qtdPaginas = qtdPaginas || 0;
        this.paginasLidas = paginasLidas || 0;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Livro.prototype.getQtdPaginas = function () {
        return this.qtdPaginas;
    };
    Livro.prototype.setQtdPaginas = function (qtdPaginas) {
        this.qtdPaginas = qtdPaginas;
    };
    Livro.prototype.getPaginasLidas = function () {
        return this.paginasLidas;
    };
    Livro.prototype.setPaginasLidas = function (paginasLidas) {
        this.paginasLidas = paginasLidas;
    };
    Livro.prototype.verificarProgresso = function () {
        var porcentagem = (this.paginasLidas * 100) / this.qtdPaginas;
        console.log("Voc\u00EA j\u00E1 leu ".concat(porcentagem.toFixed(2), "% do livro."));
    };
    return Livro;
}());
// Exercicio 26, lista 2
var TestarLivros = /** @class */ (function () {
    function TestarLivros() {
    }
    TestarLivros.main = function () {
        var pequenoPrincipe = new Livro("O Pequeno Príncipe");
        pequenoPrincipe.setQtdPaginas(98);
        console.log("O livro ".concat(pequenoPrincipe.getTitulo(), " possui ").concat(pequenoPrincipe.getQtdPaginas(), " p\u00E1ginas."));
        pequenoPrincipe.setPaginasLidas(20);
        console.log("Verificando o progresso após ler 20 páginas:");
        pequenoPrincipe.verificarProgresso();
        pequenoPrincipe.setPaginasLidas(50);
        console.log("Verificando o progresso após ler 50 páginas:");
        pequenoPrincipe.verificarProgresso();
        var meuLivro = new Livro("A Bíblia Sagrada", 368, 1); // 
        console.log("Livro em progresso: ".concat(meuLivro.getTitulo()));
        console.log("Total de p\u00E1ginas: ".concat(meuLivro.getQtdPaginas()));
        console.log("P\u00E1ginas lidas: ".concat(meuLivro.getPaginasLidas()));
        console.log("O livro ".concat(meuLivro.getTitulo(), " possui ").concat(meuLivro.getQtdPaginas(), " p\u00E1ginas."));
        meuLivro.verificarProgresso();
    };
    return TestarLivros;
}());
TestarLivros.main();
// Exercicio 27, lista 2
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeAtual = 0;
    }
    Veiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Veiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Veiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Veiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Veiculo.prototype.getVelocidadeAtual = function () {
        return this.velocidadeAtual;
    };
    Veiculo.prototype.acelerar = function (valor) {
        this.velocidadeAtual += valor;
    };
    Veiculo.prototype.frear = function (valor) {
        this.velocidadeAtual -= valor;
    };
    Veiculo.prototype.imprimirInformacoes = function () {
        console.log("Marca: ".concat(this.marca));
        console.log("Modelo: ".concat(this.modelo));
        console.log("Velocidade Atual: ".concat(this.velocidadeAtual, " km/h"));
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, numeroPortas) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.numeroPortas = numeroPortas;
        return _this;
    }
    Carro.prototype.getNumeroPortas = function () {
        return this.numeroPortas;
    };
    Carro.prototype.setNumeroPortas = function (numeroPortas) {
        this.numeroPortas = numeroPortas;
    };
    Carro.prototype.imprimirInformacoes = function () {
        _super.prototype.imprimirInformacoes.call(this);
        console.log("N\u00FAmero de Portas: ".concat(this.numeroPortas));
    };
    return Carro;
}(Veiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, cilindradas) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.cilindradas = cilindradas;
        return _this;
    }
    Moto.prototype.getCilindradas = function () {
        return this.cilindradas;
    };
    Moto.prototype.setCilindradas = function (cilindradas) {
        this.cilindradas = cilindradas;
    };
    Moto.prototype.imprimirInformacoes = function () {
        _super.prototype.imprimirInformacoes.call(this);
        console.log("Cilindradas: ".concat(this.cilindradas));
    };
    return Moto;
}(Veiculo));
// Exercicio 28, lista 2
var Contato = /** @class */ (function () {
    function Contato(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
    Contato.prototype.getNome = function () {
        return this.nome;
    };
    Contato.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Contato.prototype.getTelefone = function () {
        return this.telefone;
    };
    Contato.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    return Contato;
}());
// Exercicio 29, lista 2
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.agendaDeContatos = [];
    }
    Agenda.prototype.main = function () {
        var leitor = require("readline-sync");
        var opcao = 0;
        while (opcao !== 5) {
            console.log("Escolha uma opção:");
            console.log("1. Cadastrar Contato");
            console.log("2. Buscar Contato");
            console.log("3. Excluir Contato");
            console.log("4. Imprimir Agenda");
            console.log("5. Sair");
            opcao = Number(leitor.question("Opção: "));
            switch (opcao) {
                case 1:
                    var nome = leitor.question("Digite o nome do contato: ");
                    var telefone = leitor.question("Digite o telefone do contato: ");
                    var novoContato = new Contato(nome, telefone);
                    this.agendaDeContatos.push(novoContato);
                    break;
                case 2:
                    var nomeBusca = leitor.question("Digite o nome do contato a buscar: ");
                    var contatoEncontrado = this.buscarContato(nomeBusca);
                    if (contatoEncontrado) {
                        console.log("Telefone do contato ".concat(contatoEncontrado.getNome(), ": ").concat(contatoEncontrado.getTelefone()));
                    }
                    else {
                        console.log("Contato não encontrado.");
                    }
                    break;
                case 3:
                    var nomeExclusao = leitor.question("Digite o nome do contato a excluir: ");
                    this.excluirContato(nomeExclusao);
                    break;
                case 4:
                    this.imprimirAgenda();
                    break;
                case 5:
                    console.log("Encerrando a execução.");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
                    break;
            }
        }
    };
    Agenda.prototype.buscarContato = function (nome) {
        return this.agendaDeContatos.find(function (contato) { return contato.getNome() === nome; });
    };
    Agenda.prototype.excluirContato = function (nome) {
        var index = this.agendaDeContatos.findIndex(function (contato) { return contato.getNome() === nome; });
        if (index !== -1) {
            this.agendaDeContatos.splice(index, 1);
            console.log("Contato excluído com sucesso.");
        }
        else {
            console.log("Contato não encontrado para exclusão.");
        }
    };
    Agenda.prototype.imprimirAgenda = function () {
        console.log("Agenda de Contatos:");
        this.agendaDeContatos.forEach(function (contato) {
            console.log("Nome: ".concat(contato.getNome(), ", Telefone: ").concat(contato.getTelefone()));
        });
    };
    return Agenda;
}());
var minhaAgenda = new Agenda();
minhaAgenda.main();
