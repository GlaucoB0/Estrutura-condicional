let limite = Number(prompt("Qual o limite máxima permitida:"))
if(isNaN(limite)){
    alert("Digite um valor numerico")
    location.reload
}
else{
        let velocidade = Number(prompt("Digite sua velocidade"))
        if(isNaN(limite)){
            alert("Digite um valor numerico")
            location.reload
        }

        else if(velocidade <= (1.20*limite) & velocidade > limite){
            alert("Multa Leve")
        }
        else if(velocidade > (1.20*limite)){
            alert("Multa Grave")
        }

        else if(velocidade <= velocidade){
            alert("Sem multa")
        }

        else{
            alert("")
        }
}