let horaBr, horaFr

horaBr = Number(prompt("Hora: "))
horaFr = (horaBr+5).toFixed(2)
if(horaFr > 23){
    horaFr = (horaFr - 24).toFixed(2)
}
alert(`O horario na França é ${horaFr} hrs`)