/*
Faça um programa que preencha dois vetores com dez elementos numericos cada um e mostre um vetor resultante da intercalação deles
*/

let vetor1 = []
let vetor2 = []
let vetorRes = []

let a = 0
let b = 0
let c = 0

do {
    vetor1[a] = prompt(`Valor ${a}`)
    a++
}
while (a <= 3)

do {
    vetor2[b] = prompt(`Valor ${b}`)
    b++
}
while (b <= 3)

do {
    vetorRes.push(vetor1[c])
    vetorRes.push(vetor2[c])
    c++
}
while (c < (vetor1.length + vetor2.length)/2)

console.log(vetorRes)
