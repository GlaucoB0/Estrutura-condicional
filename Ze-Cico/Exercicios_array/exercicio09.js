/*

Crie um programa para corrigir provas de multipla escolha.
Cada prova tem 10 questoes e cada questao vale um ponto.
O primeiro conjunto de dados a ser lido é o gabarito da prova.
Os outros  dados sao os numeros dos alunos e as respostas que deram as questoes.

calcule e mostre: 
• O numero e nota de cada aluno.
• A porcentagem de aprovação, nota mínima 6.

*/

// Declarando variaveis
let aluno = []
let resposta = []
let nota = 0
let media = []
let passou = 0
let porcentagem
let gabarito = []

/**********************************************************/
/* Para mudar a quantidade de alunos na turma:*/
let alunosSala = Number(prompt(`Quantos alunos tem nesta sala?`))

/* Para mudar a quantidade de Questões da avaliação: */
let nquestoes = Number(prompt(`Quantidade de questões: `))
/*************************************************************/
let cdquestao = Math.round(10 / nquestoes)

for (let i = 0; i < nquestoes; i++) {
    gabarito[i] = prompt(`Resposta certa da questão ${i + 1}`)
}


for (let i = 0; i < alunosSala; i++) {
    aluno[i] = prompt(`Número do aluno: `)

    for (let j = 0; j < nquestoes; j++) {
        resposta[j] = prompt(`A resposta do mano na questão ${j + 1} é: `)
        if (resposta[j] == gabarito[j]) {
            nota = nota + cdquestao
        }
    }
    media[i] = nota
    nota = 0
}
for (let i = 0; i < alunosSala; i++) {
    document.write(`<hr><strong>Aluno</strong> ${aluno[i]}<br>ficou com: ${media[i]}`)
}
for (let j = 0; j < alunosSala; j++) {
    if (media[j] >= 6) {
        passou++
    }
}
porcentagem = (passou / alunosSala) * 100

document.write(`<br><hr>Porcentagem de aprovação <strong>${porcentagem.toFixed(1)}%</strong>`)