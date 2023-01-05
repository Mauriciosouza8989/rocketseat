const contato = {
    nome: 'paty',
    numero: '(16)99999-9999',
    email: 'paty123@gmail.com',
    cidade: 'Altinópolis',
}


//Dessa forma, podemos fazer uma cópia do objeto, e ainda adicionar novos atributos.

const cloneContato = Object.assign({ novoObj: 'novoObj' }, contato);

console.log(cloneContato);

//outra forma de clonar um bojeto

const obj2 = {...contato };
console.log(obj2)