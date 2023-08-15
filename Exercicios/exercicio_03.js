let valor = Number(prompt("Informe o valor desejado para retirar"))

let ced10 = 10
let ced50 = 50
let ced100 = 100

if(valor == 50 || valor == 100 || valor == 10){
    alert(`Foi retirado uma nota de ${valor}`)
}
else if((valor%10)>0){
    alert("não é possivel realizar o saque")
}

else if((valor%100)>0){
    let n100 = parseInt(valor/100)
    let n50 = (valor%100)/50
    let n10 = (valor%50)/10
    alert(`${n100} notas de 100\n${(n50).toFixed(0)} notas de 50\n${n10} notas de 10`)
}