//Manipulando arrays 
const array = [1, 2, 3];

//adicionando item no início
array.unshift(5);
console.log(array);

//adicionando item entre um e outro
array.splice(2, 1, 'a');
/*1°->Posiçao que o item vai ocupar|
 2°->item que vai deletar caso queira|
 3°-> o que será adicionado
 Obs: se o segundo for '0', nao apaga nenhum*/
console.log(array);


//adicionando item no fim
array.push('c');
console.log(array);