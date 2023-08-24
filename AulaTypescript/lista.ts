// 1. 
var leitor = require("readline-sync");
let nome:String = leitor.question("Digite o nome: ");
let endereco:String = leitor.question("Digite o endereco: ");
let telefone:Number = leitor.question("Digite o telefone: ");
console.log(`Nome: ${nome}, Endereco: ${endereco}, Telefone: ${telefone}`)


// 2.
// Não usei o "var leitor = require("readline-sync")" pois já consta no inicio do arquivo
let valor:any = leitor.question("Digite um numero: ");
let reajuste = valor * 1.1;
console.log((reajuste).toFixed(3))

// 3.
let valorHA:any = leitor.question("Digite o valor da hora-aula: ");
let numeroAulas:Number = leitor.question("Digite o numero de aulas: ");
let desconto:Number = leitor.question("Digite o % desconto do INSS: ");
let subTotalAula = valorHA * Number(numeroAulas);
let totalAula = subTotalAula - (subTotalAula * Number(desconto)/100);
console.log(`O salário líquido é: R$ ${(totalAula).ToPrecision(2)}`)

// 4.
let vetor1:number[] = [0, 1, 2, 3, 4];
let vetor2:number[] = [5, 6, 7, 8, 9];
console.log(vetor1, vetor2);
let vet0 = vetor1[0] + vetor2[0];
let vet1 = vetor1[1] + vetor2[1];
let vet2 = vetor1[2] + vetor2[2];
let vet3 = vetor1[3] + vetor2[3];
let vet4 = vetor1[4] + vetor2[4];
console.log(vet0, vet1, vet2, vet3, vet4)

// 5.
let vetor10A20:number[] = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(vetor10A20.reverse())

// 6.
let numero:number = leitor.question("Entre com um numero: ");
let antecessor = numero - 1;
console.log(`O antecessor de ${numero} é ${antecessor}`)

// 7.
let alturaRetangulo:number = leitor.question("Entre com a altura do Retangulo: ");
let baseRetangulo:number = leitor.question("Entre com a base do Retangulo: ");
let area = alturaRetangulo * baseRetangulo;
console.log(area)

// 8.
let anos:number = leitor.question("Entre com a sua idade em anos: ");
let meses:number = leitor.question("Entre com os meses restantes: ");
let dias:number = leitor.question("Entre com os dias restantes: ");
let somaIdade = (anos * 365) + (meses * 30) + Number((dias));
console.log(`A sua idade em dias são: ${somaIdade} dias`)

// 9.
let totalEleitores:number = leitor.question("Entre com o numero total de eleitores: ");
let votosBrancos:number = leitor.question("Entre com o numero de votos em branco: ");
let votosNulos:number = leitor.question("Entre com o numero de votos nulos: ");
let votosValidos:number = leitor.question("Entre com o numero de votos validos: ");
let percBrancos = (votosBrancos * 100) / Number(totalEleitores);
let percNulos = (votosNulos * 100) / Number(totalEleitores);
let percValidos = (votosValidos * 100) / Number(totalEleitores);
console.log(`O total de eleitores é: ${totalEleitores}`);
console.log(`O percentual de votos brancos é: ${percBrancos}%`);
console.log(`O percentual de votos nulos é: ${percNulos}%`);
console.log(`O percentual de votos validos é: ${percValidos}%`);

// 10.
let salarioMensal:number = leitor.question("Entre com o seu salario atual: ");
let perReajuste:number = leitor.question("Entre com o percentual de reajuste: ");
let novoSalario = (salarioMensal * (perReajuste / 100)) + Number(salarioMensal);
console.log(`O novo salário é de R$ ${novoSalario},00`);

// 11.
let custoFabrica:number = leitor.question("Entre com o valor do custo de fabrica do veiculo: ");
let perDistri = custoFabrica * (28/100);
let perImposto = custoFabrica * (45/100);
let custoFinal = Number(custoFabrica) + Number(perDistri) + Number(perImposto);
console.log(`O valor final do veiculo é de R$ ${custoFinal},00`)

// 12.
let quantidadeCarros:number = leitor.question("Entre com a quantidade de carros vendidos: ");
let valorTotalVendas:number = leitor.question("Entre com o valor total de vendas: R$ ");
let salarioFixo:number = leitor.question("Entre com o salário fixo: R$ ");
let valorCarroVendido:number = leitor.question("Entre com o valor recebido por carro vendido: R$ ");
let vendaTotal = salarioFixo + Number((quantidadeCarros * valorCarroVendido)) + 




