/*transforme Ceucius em fahrenheit e vice e versa
C = (F - 32) * 5/9
F = C*9/5 + 32
*/

//capturar apenas numeros
function apenasNumeros(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}

function transformDegree(degree) {
    degree.toUpperCase()
    const CeuciusExists = degree.toUpperCase().includes('C');
    const FahrenheitExists = degree.toUpperCase().includes('F')


    //fluxo de erro
    if (!CeuciusExists && !FahrenheitExists) {
        throw new Error('Grau não existente');
    }

    //fluxo ideal, F -> C
    let upgradeDegree = apenasNumeros(degree)
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSign = '°C'


    //fluxo alternativo C ->
    if (CeuciusExists) {
        upgradeDegree = apenasNumeros(degree)
        formula = (ceucius) => ceucius * 9 / 5 + 32
        degreeSign = '°F'

    }
    return formula(upgradeDegree).toFixed(0) + degreeSign

}
try {
    console.log(transformDegree('50f'));
    console.log(transformDegree('50fafa'));
    console.log(transformDegree('10c'));
    console.log(transformDegree('50x'));
} catch (error) {
    console.log(error.message)
}