let bairro = prompt("Digite seu bairro: ").toUpperCase()

switch (bairro) {
    case "ANTARES":
        alert("R$7,00");
        break;

    case "BARRO DURO":
        alert("R$5,00");
        break;

    case "BEBEDOURO":
        alert("R$8,00");
        break;
        
    case "BENEDITO BENTES" :
    case "BIU" :
    case "BENEDITO":
        alert("R$6,00")
        break;

    case "CENTRO":
        alert("R$10,00");
        break;

    case "CLIMA BOM":
        alert("R$4,00");
        break;
    
    case "PAJUCARA" :
    case "PAJUÇARA" :
    case "PONTA VERDE" :
    case "JATIUCA" :
    case "JATIÚCA":
        alert("R$15,00");
        break;

}