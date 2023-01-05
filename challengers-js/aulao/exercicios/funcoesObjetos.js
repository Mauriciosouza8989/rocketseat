function criarContato(nome, numero, email, cidade, ) {
    return {
        nome,
        numero,
        email,
        cidade,
        ligar() {
            console.log('ligando...');
        }
    }
}

const paty = criarContato('paty', '(16)99999-9999', 'paty123@gmail.com', 'Altinópolis');
console.log(paty)