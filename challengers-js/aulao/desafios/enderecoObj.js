/*
Criar um objeto endereço que contenha:
Rua :
bairro:
cidade: 
cep:

Criar function exibrEndereco(endereco) 
e retornar no console todas as propriedades e valores referentes.
*/

function criarEndereco(rua, bairro, cidade, cep) {
    return {
        rua,
        bairro,
        cidade,
        cep
    }
};

const endereco = new criarEndereco('dois', 'Figueiredo Felipe', 'Altinópolis', '14350-000');


function exibrEndereco(endereco) {
    for (let i in endereco) {
        console.log(`${i}: ${endereco[i]}`)
    }
}
exibrEndereco(endereco)