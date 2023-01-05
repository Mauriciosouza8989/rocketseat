const patients = [{
        name: 'Mauricio',
        age: 25,
        weight: 65,
        height: 178
    },
    {
        name: 'Gisele',
        age: 21,
        weight: 55,
        height: 167
    },
    {
        name: 'André',
        age: 35,
        weight: 83,
        height: 184
    },
];

//Levamos em consideração que o IMC ideal é entre 18,5 à 24,5...

function calcIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

function printIMC(patient) {
    return `${patient.name} possui o IMC de 
    ${calcIMC(patient.weight, patient.height)}`;
}


for (let patient of patients) {
    alert(`${printIMC(patient)}`)
};