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
function Ex14() {
    var leitor = require("readline-sync");
    var temp = Number(leitor.question("Entre com a temperatura °C: "));
    if (temp <= 18) {
        console.log("O clima está frio!");
    }
    else if (19 <= temp && temp <= 23) {
        console.log("O clima é agradável!");
    }
    else if (24 <= temp && temp <= 35) {
        console.log("O clima é agradável!");
    }
    else if (35 < temp) {
        console.log("O clima é muito quente!");
    }
    else {
        console.log("Entre com um valor correto em °C!");
    }
}
function Ex15() {
    var leitor = require("readline-sync");
    var quarto = Number(leitor.question("Entre com o tipo do quarto (1.Suite, 2.Suite Master, 3.Suite Mega Blaster): "));
    var horasOuDias = (leitor.question("Entre com a permanencia, sendo H para horas ou D para dias: ")).toUpperCase();
    var quantidade = Number(leitor.question("Entre com a quantidade de acordo com horas ou dias: "));
    if (quarto == 1) {
        var precoHoraPernoite = 30 / 6;
        var precoHoraDia = 60 / 24;
        var precoDia = 60;
        if (horasOuDias == "H") {
            if (quantidade <= 6) {
                var calculo = precoHoraPernoite * quantidade;
                console.log("Valor a pagar pelo quarto Suite, pela permanencia de ".concat(quantidade, " horas, e de R$").concat(calculo, "!"));
            }
            else if (6 < quantidade) {
                var calculo = precoHoraDia * quantidade;
                console.log("Valor a pagar pelo quarto Suite, pela permanencia de ".concat(quantidade, " horas, e de R$").concat(calculo, "!"));
            }
        }
        else if (horasOuDias == "D") {
            var calculo = precoDia * quantidade;
            console.log("Valor a pagar pelo quarto Suite, pela permanencia de ".concat(quantidade, " dias, e de R$").concat(calculo, "!"));
        }
        else {
            console.log("Letra ".concat(horasOuDias, " incorreto!"));
        }
    }
    else if (quarto == 2) {
        var precoHoraPernoite = 50 / 6;
        var precoHoraDia = 90 / 24;
        var precoDia = 90;
        if (horasOuDias == "H") {
            if (quantidade <= 6) {
                var calculo = precoHoraPernoite * quantidade;
                console.log("Valor a pagar pelo quarto Suite, pela permanencia de ".concat(quantidade, " horas, e de R$").concat(calculo, "!"));
            }
            else if (6 < quantidade) {
                var calculo = precoHoraDia * quantidade;
                console.log("Valor a pagar pelo quarto Suite, pela permanencia de ".concat(quantidade, " horas, e de R$").concat(calculo, "!"));
            }
        }
        else if (horasOuDias == "D") {
            var calculo = precoDia * quantidade;
            console.log("Valor a pagar pelo quarto Suite, pela permanencia de ".concat(quantidade, " dias, e de R$").concat(calculo, "!"));
        }
        else {
            console.log("Letra ".concat(horasOuDias, " incorreto!"));
        }
    }
    else if (quarto == 3) {
        var precoHoraPernoite = 140 / 6;
        var precoHoraDia = 140 / 24;
        var precoDia = 140;
        if (horasOuDias == "H") {
            if (quantidade <= 6) {
                var calculo = precoHoraPernoite * quantidade;
                console.log("Valor a pagar pelo quarto Suite, pela permanencia de ".concat(quantidade, " horas, e de R$").concat(calculo, "!"));
            }
            else if (6 < quantidade) {
                var calculo = precoHoraDia * quantidade;
                console.log("Valor a pagar pelo quarto Suite, pela permanencia de ".concat(quantidade, " horas, e de R$").concat(calculo, "!"));
            }
        }
        else if (horasOuDias == "D") {
            var calculo = precoDia * quantidade;
            console.log("Valor a pagar pelo quarto Suite, pela permanencia de ".concat(quantidade, " dias, e de R$").concat(calculo, "!"));
        }
        else {
            console.log("Letra ".concat(horasOuDias, " incorreto!"));
        }
    }
    else {
        console.log("Valor ".concat(quarto, " de quarto incorreto!"));
    }
}
function Ex16() {
    var leitor = require("readline-sync");
    var diaSemana = Number(leitor.question("Entre com um dia da semana (1 a 7): "));
    var diaDaSemana = " ";
    switch (diaSemana) {
        case 1:
            diaDaSemana = "Domingo";
            break;
        case 2:
            diaDaSemana = "Segunda-feira";
            break;
        case 3:
            diaDaSemana = "Terça-feira";
            break;
        case 4:
            diaDaSemana = "Quarta-feira";
            break;
        case 5:
            diaDaSemana = "Quinta-feira";
            break;
        case 6:
            diaDaSemana = "Sexta-feira";
            break;
        case 7:
            diaDaSemana = "Sábado";
            break;
        default:
            diaDaSemana = "Número fora do intervalo (1 a 7)";
            break;
    }
    console.log("O dia da semana correspondente a entrada ".concat(diaSemana, " \u00E9 ").concat(diaDaSemana));
}
function Ex17() {
    var leitor = require("readline-sync");
    var regiao = (leitor.question("Entre com a regiao do Brasil: ")).toUpperCase();
    var regioes = [];
    switch (regiao) {
        case "NORTE":
            regioes = ["Amazonas", "Roraima", "Amapa", "Para", "Tocantins", "Rondônia", "Acre"];
            break;
        case "NORDESTE":
            regioes = ["Maranhão", "Piauí", "Ceará", "Rio Grande do Norte", "Pernambuco", "Paraíba", "Sergipe", "Alagoas", "Bahia"];
            break;
        case "CENTRO-OESTE":
            regioes = ["Mato Grosso", "Mato Grosso do Sul", "Goiás"];
            break;
        case "SUDESTE":
            regioes = ["São Paulo", "Rio de Janeiro", "Espírito Santo", "Minas Gerais"];
            break;
        case "SUL":
            regioes = ["Paraná", "Rio Grande do Sul", "Santa Catarina"];
            break;
        default:
            regioes = ["Entre com uma regiao valida!"];
            break;
    }
    console.log("Estados: ".concat(regioes));
}
function Ex18() {
    var leitor = require("readline-sync");
    var senhaSistemaGerente1 = 123456;
    var nomeSistemaGerente1 = "Fulaninho";
    var senhaSistemaGerente2 = 654321;
    var nomeSistemaGerente2 = "Ciclaninho";
    var codigoProduto = Number(leitor.question("Entre com o codigo do produto: "));
    var nomeGerente1 = leitor.question("Entre com o nome do Gerente 1: ");
    var senhaGerente1 = Number(leitor.question("Entre com a senha do Gerente 1: "));
    var nomeGerente2 = leitor.question("Entre com o nome do Gerente 2: ");
    var senhaGerente2 = Number(leitor.question("Entre com a senha do Gerente 2: "));
    if (nomeGerente1 == nomeSistemaGerente1 && nomeGerente2 == nomeSistemaGerente2) {
        if (senhaGerente1 == senhaSistemaGerente1 && senhaGerente2 == senhaSistemaGerente2) {
            console.log("Cancelamento realizado para o produto c\u00F3digo ".concat(codigoProduto, "!"));
        }
        else {
            console.log("Senha incorreta!");
        }
    }
    else {
        console.log("Credencial nome incorreto!");
    }
}
function Ex19() {
    var leitor = require("readline-sync");
    var operacao = Number(leitor.question("Entre com a operacao desejada (1 - SAQUE, 2 - DEPOSITO, 3 - SALDO): "));
    var saldo = 500;
    switch (operacao) {
        case 1:
            var valorSaque = leitor.question("Entre com o valor do saque: ");
            if (valorSaque <= saldo) {
                var novoSaldo = saldo - valorSaque;
                console.log("Saque realizado! Novo saldo R$ ".concat(novoSaldo));
            }
            else if (saldo < valorSaque) {
                console.log("Saldo insuficiente!");
            }
            else {
                console.log("Entre com um valor válido!");
            }
            break;
        case 2:
            var valorDeposito = Number(leitor.question("Entre com o valor do deposito: "));
            if (0 < valorDeposito) {
                var novoSaldo = saldo + valorDeposito;
                console.log("Deposito realizado! Novo saldo R$ ".concat(novoSaldo));
            }
            else if (0 == valorDeposito) {
                console.log("Entre com um valor maior do que zero!");
            }
            else {
                console.log("Entre com um valor válido!");
            }
            break;
        case 3:
            console.log("Saldo atual de ".concat(saldo, ". Agradecemos por usar os nossos servicos!"));
            break;
        default:
            console.log("Valor de operação inválido!");
    }
}
function Ex20() {
    var leitor = require("readline-sync");
    var contador = 0;
    var soma = 0;
    while (contador < 10) {
        var numero = Number(leitor.question("Entre com um número"));
        soma += numero;
        contador++;
    }
    console.log("A soma dos valores \u00E9 ".concat(soma));
}
function Ex21() {
    var leitor = require("readline-sync");
    var i = 0;
    var soma = 0;
    var media = 0;
    do {
        var numero = Number(leitor.question("Entre com um número"));
        soma += numero;
        media = numero / 10;
        i += 1;
    } while (i < 10);
    console.log("A media dos valores \u00E9 ".concat(media));
}
function Ex22() {
    var leitor = require("readline-sync");
    var multiplicacao = 0;
    for (var i = 0; i < 10; i++) {
        var numero = Number(leitor.question("Entre com um número"));
        multiplicacao *= numero;
    }
    console.log("A media dos valores \u00E9 ".concat(multiplicacao));
}
function Ex23() {
    var leitor = require("readline-sync");
    var nomeMenorIdade = "";
    var nome = "";
    var idade = 0;
    var menorIdade = 120;
    for (var i = 0; i < 3; i++) {
        nome = leitor.question("Entre com o nome: ");
        idade = Number(leitor.question("Entre com a idade: "));
        if (idade < menorIdade) {
            menorIdade = idade;
            nomeMenorIdade = nome;
        }
    }
    console.log("A pessoa mais nova \u00E9 ".concat(nomeMenorIdade, " com ").concat(menorIdade, " anos"));
}
function Ex24() {
    var leitor = require("readline-sync");
    var numero = Number(leitor.question("Entre com um numero: "));
    var lista = "";
    for (var i = 1; i < numero; i++) {
        if (i % 2 != 0) {
            lista += i + " ";
        }
    }
    console.log("A lista de numeros impares e ".concat(lista));
}
function Ex25() {
    var leitor = require("readline-sync");
    var anoNascimento = Number(leitor.question("Entre com o ano de nascimento: "));
    var anoAtual = 2023;
    var anosIdade = 0;
    var lista = "";
    for (var i = anoNascimento; i < anoAtual + 1; i++) {
        lista += anoNascimento + " : " + anosIdade + " anos, ";
        anosIdade++;
        anoNascimento++;
    }
    console.log("Cronologia: ".concat(lista));
}
function Ex26() {
    var leitor = require("readline-sync");
    var qtdFunc = Number(leitor.question("Entre com a quantidade de funcionarios: "));
    var nome = "";
    var tempoEmpresa = 0;
    var direitoFerias = 0;
    for (var i = 0; i < qtdFunc; i++) {
        nome = leitor.question("Entre com o nome do funcionario: ");
        tempoEmpresa = Number(leitor.question("Entre com o tempo de empresa em meses: "));
        if (12 < tempoEmpresa) {
            console.log("".concat(nome, " tem direito a ferias!"));
            direitoFerias += 1;
        }
        else {
            console.log("".concat(nome, " n\u00E3o tem direito a ferias!"));
        }
    }
    console.log("Ha ".concat(direitoFerias, " funcionarios com direito a ferias!"));
}
function Ex27() {
    var leitor = require("readline-sync");
    var qtdAlunos = Number(leitor.question("Entre com a quantidade de alunos: "));
    var nome = "";
    var nota1 = 0;
    var nota2 = 0;
    for (var i = 0; i < qtdAlunos; i++) {
        nome = leitor.question("Entre com o nome do aluno: ");
        nota1 = Number(leitor.question("Entre com a primeira nota: "));
        nota2 = Number(leitor.question("Entre com a segunda nota: "));
        var media = (nota1 + nota2) / 2;
        if (6 <= media) {
            console.log("Aluno(a) ".concat(nome, " Aprovado(a)!"));
        }
        else {
            console.log("Aluno(a) ".concat(nome, " Reprovado(a)!"));
        }
    }
}
function Ex28() {
    for (var i = 1; i < 10; i++) {
        for (var y = 1; y < 11; y++) {
            var multiplicacao = i * y;
            console.log("".concat(i, " X ").concat(y, " = ").concat(multiplicacao));
        }
    }
}
function Ex29() {
    var leitor = require("readline-sync");
    var total = 0;
    var qtd = 0;
    while (true) {
        while (true) {
            var item = Number(leitor.question("Entre com o valor: "));
            total += item;
            qtd += 1;
            var maisItens = (leitor.question("Ha mais itens para ser processado? (S/N): ")).toUpperCase();
            if (maisItens == "N") {
                console.log("Quantidade: ".concat(qtd, " itens - Total: R$").concat(total, ",00"));
                var total = 0;
                var qtd = 0;
                break;
            }
            else if (maisItens == "S") {
                continue;
            }
            else {
                console.log("Digito: ".concat(maisItens, " inv\u00E1lido!"));
                continue;
            }
        }
        var fecharCaixa = (leitor.question("Deseja fechar o caixa? (S/N): ")).toUpperCase();
        if (fecharCaixa == "S") {
            break;
        }
        else if (fecharCaixa == "N") {
            continue;
        }
        else {
            console.log("Digito: ".concat(fecharCaixa, " inv\u00E1lido!"));
            continue;
        }
    }
}
function Ex30() {
    var leitor = require("readline-sync");
    var mediaTotalTurma = "";
    var qtdTurmas = Number(leitor.question("Entre com a quantidade de turmas: "));
    for (var i = 0; i < qtdTurmas; i++) {
        var qtdAlunos = Number(leitor.question("Entre com a quantidade de alunos da turma ".concat(i + 1, ": ")));
        var mediaAluno = 0;
        for (var y = 0; y < qtdAlunos; y++) {
            mediaAluno += Number(leitor.question("Entre com a media do aluno ".concat(y + 1, ": ")));
        }
        var mediaTurma = mediaAluno / qtdAlunos;
        mediaTotalTurma += "A media da turma " + (i + 1) + " e: " + mediaTurma + ", ";
    }
    console.log(mediaTotalTurma);
}
function Ex31() {
    var leitor = require("readline-sync");
    var qtdUsuarios = Number(leitor.question("Entre com a quantidade de usuarios: "));
    var padrao = "*";
    for (var i = 0; i < qtdUsuarios; i++) {
        console.log(padrao);
        padrao += "*";
    }
}
