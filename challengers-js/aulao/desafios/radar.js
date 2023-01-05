//Velocidade maxima de até 70km/h
//A cada 5km acima do limite, condutor ganha 1 ponto na CNH
//Math.floor()

verivicaVelocidade(75)
verivicaVelocidade(74)
verivicaVelocidade(120)

function verivicaVelocidade(vel) {
    if (vel > 70) {
        let velAcima = vel - 70;
        let pontos = Math.floor(velAcima / 5);
        console.log(`Multado em R$130,00 por estar a ${vel}Km/h em uma pista de 70Km/h.`);
        pontos > 0 ? console.log(`E por isso ganhou ${pontos} pontos na CNH.`) : console.log("Não ganhou pontos na CNH.")

    } else {
        console.log(`Não houve multa. Pois o condutor estava a ${vel}Km/h.`);

    }
}