let mensagem = '   minha primeira mensagem   ';
let msg = new String('minha mensagem');


manipulando
console.log(typeof(mensagem));
console.log(typeof(msg));
console.log(msg.length);
console.log(msg[2]);
console.log(mensagem.includes('primeira')); // pra saber se há a palavra ou letra na frase.
console.log(mensagem.startsWith('minha'));
console.log(mensagem.endsWith('mensagem'));
console.log(mensagem.indexOf('mensagem'));
console.log(mensagem.replace('minha', 'sua'));
console.log(mensagem.trim()); //retira todos os espaços desnecessários.
console.log(mensagem.split(' '));