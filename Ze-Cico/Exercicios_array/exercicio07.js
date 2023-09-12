//Faça um programa que preencha um vetor com dez numeros inteiros, calcule o mostre o vetor resultante de uma ordenação decrescente.

// Exemplo
// Vetor inicial    8,6,9,4
// Vetor Final      9,8,6,4

let valores = []
let aux

for(let i = 0; i<4; i++){
    valores[i] = Number(prompt(`Valor ${i} :`))
}
    for(let i = 0; i<4; i++){
        for(let j = 0; j<4; j++){
            if(valores[j] < valores[j++]){
                aux = valores[j]
                valores[j] = valores[j++]
                valores[j++] = aux
            }
        }
    }
document.write(`${valores}`)
