let sexo = prompt("Genero (Masculino ou Feminino): ").toUpperCase()
let altura = Number(prompt("Altura"))
let peso_ideal = 0

if(isNaN(altura) || altura === 0 || altura >= 3){
    alert(`Digite uma altura valida ${altura}`)
    location.reload()
}

if(sexo == 'MASCULINO'){
    peso_ideal = 22 * (altura*altura)
}
if(sexo == 'FEMININO'){
    peso_ideal = 21 * (altura*altura)
}
peso_ideal = peso_ideal.toFixed(1)

alert (`seu peso ideal é ${peso_ideal}`)
