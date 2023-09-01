let a = parseInt(window.prompt("Digite a categoria 1/2/3/4/5: "))
preco = 0

if (a==1){
    preco = 10;
}
else if (a==2){
    preco = 18;
}
else if (a==3){
    preco = 23;
}
else if (a==4){
    preco = 26;
}
else if (a==5){
    preco = 31;
}

alert("O valor do produto é " + preco.tolocaleString('pt-BR', {style: 'currency': currency: 'BRL'}));