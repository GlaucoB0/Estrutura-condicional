let sexo = prompt("Genero (Masculino ou Feminino): ")
let altura = prompt("Altura")
let peso_ideal

if(sexo == 'masculino' || sexo == 'Masculino'){
    peso_ideal = 22 * (altura*altura)
}
if(sexo == 'feminino' || sexo == 'Feminino'){
    peso_ideal = 21 * (altura*altura)
}
peso_ideal = peso_ideal.toFixed(1)

alert (`seu peso ideal é ${peso_ideal}`)
