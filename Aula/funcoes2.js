/*
Crie uma função chamada virificarMaiorIdade que receba a idade de uma pessoa como argumento e retorne "Maior de idade" se a idade for igual ou superior a 18, e "Menor de idade" caso contrário.
*/

let idade

function VerificarMaiorIdade(idade) {
    if (idade >= 18) {
        return "é"
    } else if(idade < 18){
        return 'não é'
    }
}

console.log(VerificarMaiorIdade(19))
// console.log(VerificarMaiorIdade())
