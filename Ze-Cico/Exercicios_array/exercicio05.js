/*
Faça um programa que preencha dois vetores com dez elementos numericos cada um e mostre um vetor resultante da intercalação deles
*/

//Declarando variaveis
let vetor1 = []
let vetor2 = []
let vetorRes = []
//Contadores
let i = 0 //vetor1
let j = 0 //vetor2
let c = 0 //vetorRes

//numeros do vetor1
do {
    vetor1[i] = Number(prompt(`Valor ${i}`))
    i++
}
while (i <= 10)

//numeros do vetor2
do {
    vetor2[j] = Number(prompt(`Valor ${j}`))
    j++
}
while (j <= 10)

//Maximo de numeros dentro do vetorRes
maximoN = ((vetor1.length + vetor2.length) / 2)
maximoN = Math.floor(maximoN)

do {
    vetorRes.push(vetor1[c])
    vetorRes.push(vetor2[c])
    c++
}
while (c < maximoN)

//Escrever o resultado
document.write(`Vetor 1 : [${vetor1}]<br>Vetor 2 : [${vetor2}]<br><hr>Intercalação : [${vetorRes}]`)
