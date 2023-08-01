let bairro = prompt("Digite seu bairro: ")

switch (bairro) {
    case "Antares":
        alert("R$7,00")
        break;

    case "Barro Duro":
        alert("R$5,00")
        break;

    case "Bebedouro":
        alert("R$8,00")
        break;

    case "Benedito Bentes":
        alert("R$6,00")
        break;

    case "Centro":
        alert("R$10,00")
        break;

    case "Clima Bom":
        alert("R$4,00")
        break;
    
    case "Pajuçara", "Ponta Verde", "Jatiúca":
        alert("R$15,00")
        break;

        default:
        alert("Digite corretamente")
        break;
}