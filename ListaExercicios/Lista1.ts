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

function Ex14(){
    var leitor = require("readline-sync");
    let temp = Number(leitor.question("Entre com a temperatura °C: "));
    if(temp <= 18){
        console.log("O clima está frio!");
    } else if(19 <= temp && temp <= 23){
        console.log("O clima é agradável!");
    } else if(24 <= temp && temp <= 35){
        console.log("O clima é agradável!");
    } else if(35 < temp){
        console.log("O clima é muito quente!");
    } else {
        console.log("Entre com um valor correto em °C!");
    }
}

function Ex15(){
    var leitor = require("readline-sync");
    let quarto = Number(leitor.question("Entre com o tipo do quarto (1.Suite, 2.Suite Master, 3.Suite Mega Blaster): "));
    let horasOuDias = (leitor.question("Entre com a permanencia, sendo H para horas ou D para dias: ")).toUpperCase();
    let quantidade = Number(leitor.question("Entre com a quantidade de acordo com horas ou dias: "));
    if(quarto == 1){
        let precoHoraPernoite = 30/6;
        let precoHoraDia = 60/24;
        let precoDia = 60;

        if(horasOuDias == "H"){
            if(quantidade <= 6){
                let calculo = precoHoraPernoite * quantidade;
                console.log(`Valor a pagar pelo quarto Suite, pela permanencia de ${quantidade} horas, e de R$${calculo}!`);
            } else if(6 < quantidade){
                let calculo = precoHoraDia * quantidade;
                console.log(`Valor a pagar pelo quarto Suite, pela permanencia de ${quantidade} horas, e de R$${calculo}!`);
            }
        } else if(horasOuDias == "D"){
            let calculo = precoDia * quantidade;
            console.log(`Valor a pagar pelo quarto Suite, pela permanencia de ${quantidade} dias, e de R$${calculo}!`);
        } else {
            console.log(`Letra ${horasOuDias} incorreto!`);
        }
    } else if(quarto == 2){
        let precoHoraPernoite = 50/6;
        let precoHoraDia = 90/24;
        let precoDia = 90;

        if(horasOuDias == "H"){
            if(quantidade <= 6){
                let calculo = precoHoraPernoite * quantidade;
                console.log(`Valor a pagar pelo quarto Suite, pela permanencia de ${quantidade} horas, e de R$${calculo}!`);
            } else if(6 < quantidade){
                let calculo = precoHoraDia * quantidade;
                console.log(`Valor a pagar pelo quarto Suite, pela permanencia de ${quantidade} horas, e de R$${calculo}!`);
            }
        } else if(horasOuDias == "D"){
            let calculo = precoDia * quantidade;
            console.log(`Valor a pagar pelo quarto Suite, pela permanencia de ${quantidade} dias, e de R$${calculo}!`);
        } else {
            console.log(`Letra ${horasOuDias} incorreto!`);
        }
    } else if(quarto == 3){
        let precoHoraPernoite = 140/6;
        let precoHoraDia = 140/24;
        let precoDia = 140;

        if(horasOuDias == "H"){
            if(quantidade <= 6){
                let calculo = precoHoraPernoite * quantidade;
                console.log(`Valor a pagar pelo quarto Suite, pela permanencia de ${quantidade} horas, e de R$${calculo}!`);
            } else if(6 < quantidade){
                let calculo = precoHoraDia * quantidade;
                console.log(`Valor a pagar pelo quarto Suite, pela permanencia de ${quantidade} horas, e de R$${calculo}!`);
            }
        } else if(horasOuDias == "D"){
            let calculo = precoDia * quantidade;
            console.log(`Valor a pagar pelo quarto Suite, pela permanencia de ${quantidade} dias, e de R$${calculo}!`);
        } else {
            console.log(`Letra ${horasOuDias} incorreto!`);
        }
    } else {
        console.log(`Valor ${quarto} de quarto incorreto!`);
    }
}

function Ex16(){
    var leitor = require("readline-sync");
    let diaSemana = Number(leitor.question("Entre com um dia da semana (1 a 7): "));
    let diaDaSemana = " ";

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
    
      console.log(`O dia da semana correspondente a entrada ${diaSemana} é ${diaDaSemana}`);
}

function Ex17(){
    var leitor = require("readline-sync");
    let regiao = (leitor.question("Entre com a regiao do Brasil: ")).toUpperCase();
    let regioes = [];
    switch (regiao){
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
    console.log(`Estados: ${regioes}`);
}

function Ex18(){
    var leitor = require("readline-sync");
    const senhaSistemaGerente1 = 123456;
    const nomeSistemaGerente1 = "Fulaninho";
    const senhaSistemaGerente2 = 654321;
    const nomeSistemaGerente2 = "Ciclaninho";
    let codigoProduto = Number(leitor.question("Entre com o codigo do produto: "));
    let nomeGerente1 = leitor.question("Entre com o nome do Gerente 1: ");
    let senhaGerente1 = Number(leitor.question("Entre com a senha do Gerente 1: "));
    let nomeGerente2 = leitor.question("Entre com o nome do Gerente 2: ");
    let senhaGerente2 = Number(leitor.question("Entre com a senha do Gerente 2: "));
    if(nomeGerente1 == nomeSistemaGerente1 && nomeGerente2 == nomeSistemaGerente2){
        if(senhaGerente1 == senhaSistemaGerente1 && senhaGerente2 == senhaSistemaGerente2){
            console.log(`Cancelamento realizado para o produto código ${codigoProduto}!`);
        } else {
            console.log("Senha incorreta!");
        }
    } else {
        console.log("Credencial nome incorreto!");
    }
}

function Ex19(){
    var leitor = require("readline-sync");
    let operacao = Number(leitor.question("Entre com a operacao desejada (1 - SAQUE, 2 - DEPOSITO, 3 - SALDO): "));
    let saldo = 500;
    switch(operacao){
        case 1:
            let valorSaque = leitor.question("Entre com o valor do saque: ")
            if(valorSaque <= saldo){
                let novoSaldo = saldo - valorSaque;
                console.log(`Saque realizado! Novo saldo R$ ${novoSaldo}`);
            } else if(saldo < valorSaque){
                console.log("Saldo insuficiente!");
            } else {
                console.log("Entre com um valor válido!");
            }
            break;
        case 2:
            let valorDeposito = Number(leitor.question("Entre com o valor do deposito: "));
            if(0 < valorDeposito){
                let novoSaldo = saldo + valorDeposito;
                console.log(`Deposito realizado! Novo saldo R$ ${novoSaldo}`);
            } else if(0 == valorDeposito){
                console.log("Entre com um valor maior do que zero!");
            } else {
                console.log("Entre com um valor válido!");
            }
            break;
        case 3:
            console.log(`Saldo atual de ${saldo}. Agradecemos por usar os nossos servicos!`);
            break;
        default:
            console.log("Valor de operação inválido!");
    }
}

function Ex20(){
    var leitor = require("readline-sync");
    var contador = 0;
    let soma = 0;
    while (contador < 10){
        let numero = Number(leitor.question("Entre com um número"));
        soma += numero;
        contador ++;
    }
    console.log(`A soma dos valores é ${soma}`);
}

function Ex21(){
    var leitor = require("readline-sync");
    var i = 0;
    var soma = 0;
    var media = 0;
    do {
        let numero = Number(leitor.question("Entre com um número"));
        soma += numero;
        media = numero / 10;
        i+= 1;
    } while (i<10);
    console.log(`A media dos valores é ${media}`);
}

function Ex22(){
    var leitor = require("readline-sync");
    var multiplicacao = 0;
    for (var i = 0; i<10; i++){
        let numero = Number(leitor.question("Entre com um número"));
        multiplicacao *= numero;
    }
    console.log(`A media dos valores é ${multiplicacao}`);
}

function Ex23(){
    var leitor = require("readline-sync");
    let nomeMenorIdade = "";
    let nome = "";
    let idade = 0;
    let menorIdade = 120;
    for(var i=0; i<3; i++){
        nome = leitor.question("Entre com o nome: ")
        idade = Number(leitor.question("Entre com a idade: "));
        if (idade < menorIdade){
            menorIdade = idade;
            nomeMenorIdade = nome;
        }
    }
    console.log(`A pessoa mais nova é ${nomeMenorIdade} com ${menorIdade} anos`);   
}

function Ex24(){
    var leitor = require("readline-sync");
    let numero = Number(leitor.question("Entre com um numero: "));
    let lista = "";
    for(var i=1; i<numero; i++){
        if(i%2!=0){
            lista += i + " ";
        }       
    }
    console.log(`A lista de numeros impares e ${lista}`);
}

function Ex25(){
    var leitor = require("readline-sync");
    let anoNascimento = Number(leitor.question("Entre com o ano de nascimento: "));
    var anoAtual = 2023;
    let anosIdade = 0;
    let lista = "";
    for(var i=anoNascimento; i<anoAtual+1; i++){
        lista += anoNascimento + " : " + anosIdade + " anos, ";
        anosIdade ++;
        anoNascimento ++;
    }
    console.log(`Cronologia: ${lista}`);
}

function Ex26(){
    var leitor = require("readline-sync");
    let qtdFunc = Number(leitor.question("Entre com a quantidade de funcionarios: "));
    let nome = "";
    let tempoEmpresa = 0;
    let direitoFerias = 0;
    for(var i=0; i<qtdFunc; i++){
        nome = leitor.question("Entre com o nome do funcionario: ");
        tempoEmpresa = Number(leitor.question("Entre com o tempo de empresa em meses: "));
        if(12 < tempoEmpresa){
            console.log(`${nome} tem direito a ferias!`);
            direitoFerias += 1;
        } else {
            console.log(`${nome} não tem direito a ferias!`);
        }
    }
    console.log(`Ha ${direitoFerias} funcionarios com direito a ferias!`);
}

function Ex27(){
    var leitor = require("readline-sync");
    let qtdAlunos = Number(leitor.question("Entre com a quantidade de alunos: "));
    let nome = "";
    let nota1 = 0;
    let nota2 = 0;
    for(var i=0; i<qtdAlunos; i++){
        nome = leitor.question("Entre com o nome do aluno: ");
        nota1 = Number(leitor.question("Entre com a primeira nota: "));
        nota2 = Number(leitor.question("Entre com a segunda nota: "));
        let media = (nota1 + nota2) / 2;
        if(6 <= media){
            console.log(`Aluno(a) ${nome} Aprovado(a)!`);
        } else {
            console.log(`Aluno(a) ${nome} Reprovado(a)!`);
        }
    }
}

function Ex28(){
    for(var i=1; i<10; i++){
        for(var y=1; y<11; y++){
            let multiplicacao = i * y;
            console.log(`${i} X ${y} = ${multiplicacao}`);
        }
    }
}

function Ex29(){
    var leitor = require("readline-sync");
    var total = 0;
    var qtd = 0;
    while (true){
        while (true){
            let item = Number(leitor.question("Entre com o valor: "));
            total += item;
            qtd += 1
            let maisItens = (leitor.question("Ha mais itens para ser processado? (S/N): ")).toUpperCase();
            if(maisItens == "N"){
                console.log(`Quantidade: ${qtd} itens - Total: R$${total},00`);
                var total = 0;
                var qtd = 0;
                break;
            } else if(maisItens == "S"){
                continue;
            } else {
                console.log(`Digito: ${maisItens} inválido!`);
                continue;
            }
        }
        let fecharCaixa = (leitor.question("Deseja fechar o caixa? (S/N): ")).toUpperCase();
        if(fecharCaixa == "S"){
            break;
        } else if(fecharCaixa == "N") {
            continue;
        } else {
            console.log(`Digito: ${fecharCaixa} inválido!`);
                continue;
        }
    }
}

function Ex30(){
    var leitor = require("readline-sync");
    let mediaTotalTurma = "";
    let qtdTurmas = Number(leitor.question("Entre com a quantidade de turmas: "));
    for(var i=0; i<qtdTurmas; i++){
        let qtdAlunos = Number(leitor.question(`Entre com a quantidade de alunos da turma ${i+1}: `));
        let mediaAluno = 0;
        for(var y=0; y<qtdAlunos; y++){
            mediaAluno += Number(leitor.question(`Entre com a media do aluno ${y+1}: `));
        }
        let mediaTurma = mediaAluno / qtdAlunos
        mediaTotalTurma += "A media da turma " + (i+1) + " e: " + mediaTurma + ", ";
    }
    console.log(mediaTotalTurma);
}

function Ex31(){
    var leitor = require("readline-sync");
    let qtdUsuarios = Number(leitor.question("Entre com a quantidade de usuarios: "));
    let padrao = "*";
    for(var i = 0; i < qtdUsuarios; i++){
        console.log(padrao);
        padrao += "*"
    }
}




