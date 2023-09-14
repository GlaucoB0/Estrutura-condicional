/*
Faça um programa que preencha três vetores com cinco posições cada.

O primeiro vetor receberá os nomes de cinco funcionários;

o segundo e o terceiro vetor receberão, respectivamente, o salário e o tempo de serviço de cada um.

Mostre um primeiro relatório apenas com os nomes dos funcionários que não terão aumento;

mostre o segundo relatório apenas com os nomes e novos salários dos funcionários que terão aumento.

Sabe-se que os funcionários que terão direito ao aumento são aqueles que possuem tempo de serviço superior a cinco anos ou salário inferior a R$400,00.

Sabe-se ainda que, se o funcionário satisfazer às duas condições anteriores, tempo de serviço e salário, o aumento será de 35%;

para o funcionário que satisfazer apenas à condição tempo de serviço, o aumento será de 25%;
para aquele que satisfazer apenas à condição salário, o aumento será de 15%
*/

let funcionario = []
let salario = []
let tempo = []
let relatorio = []

for (let i = 0; i < 2; i++) {
    funcionario[i] = prompt(`Nome do funcionario [${i + 1}] : `)
    salario[i] = prompt(`Salario do funcionario [${i + 1}] : `)
    tempo[i] = prompt(`Tempo de serviço do funcionario [${i + 1}] : `)
    relatorio[i] = verificaAumento(salario[i])
    salario[i] = aplicaAumento(tempo[i], salario[i])
}

function aplicaAumento(tempo, salario) {
    if (tempo > 5 && salario < 400) {
        return salario * 1.35
    }
    else if (tempo < 5 && salario < 400) {
        return salario * 1.15
    }
    else if (tempo > 5 && salario > 400) {
        return salario * 1.25
    }
    else if (salario >= 400) {
        return salario
    }
}
/*
(tempo>5 && salario<400) 35%
(tempo>5 && salario<400) 25%
(tempo<=5 && salario<400) 15%
(salario>=400) não tem aumento
*/

function verificaAumento(salario) {
    if (salario < 400) {
        return true
    }
    else if (salario >= 400) {
        return false
    }
}
document.write(`<h2><strong>Relatorio dos funcionarios sem desconto</strong></h2>`)
for (let i = 0; i < 2; i++) {
    if(relatorio[i] == false){
        document.write(`<br>${funcionario[i]} •Salario ${salario[i]}`)
    }
}
document.write(`<hr><h2><strong>Relatorio dos funcionario com desconto</strong></h2>`)
for (let i = 0; i < 2; i++) {
    if(relatorio[i] == true){
        document.write(`<br>${funcionario[i]} •Salario ${salario[i]}`)
    }
}


