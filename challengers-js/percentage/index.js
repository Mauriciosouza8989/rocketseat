const porcentage = (nominator, denominator) => {
    const result = (denominator / nominator) * 100;

    console.log(`${denominator}, equivale à ${result}% de ${nominator}.`)
}

porcentage(50, 25)