// Crie um programa que preencha um vetor com oito numeros inteiros, calcule e mostre os resultntes.
//  -O primeiro vetor resultante deve conter os numeros positivos;
//  -O segundo deve conter os numeros negativos;

let vetor = []
let vetor1 = []
let vetor2 = []
let i = 0
let j = 0
let c = 0

do {
    vetor[i] = prompt(`valor ${i}`)
    if(vetor[i] < 0){
        vetor1[j] = vetor[i]
        j++
    }
    else if(vetor[i] >= 0){
        vetor2[c] = vetor[i]
        c++
    }
        i++
} while (i < 5)

document.write(`Valores : [${vetor}]<br><hr>Vetor 1 : [${vetor1}]<br>Vetor 2 : [${vetor2}]`)
