let idade
let idades = []
let i = 0
let maiorIdade = 0
let menorIdade = 151

do {
    idade = prompt(`idade [${i}]`)
    idades[i] = idade
    i++
} while (idade != "SAIR" || idade < 150)

idades.pop()

for (let i = 0; i <= idades.length; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i]
    }
    if(idades[i] < menorIdade){
        menorIdade = idades[i]
    }
}
if(menorIdade == 151){
    document.write(` `)
}
else{
document.write(`Idades : ${idades}<br><hr><br>Maior : ${maiorIdade} anos<br>Menor : ${menorIdade} anos`)
}