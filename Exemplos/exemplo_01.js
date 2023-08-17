let numero = Number(prompt("Informe um numero:"))
let resultado

for(let i = 0 ; i<=10 ; i++){
    resultado = numero * i
    document.write(`${numero} X ${i} = ${resultado} <br>`)
}