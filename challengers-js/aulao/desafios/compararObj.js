//igualdade de objetos

function criarEndereco(rua, bairro, cidade, cep) {
    this.rua = rua,
        this.bairro = bairro,
        this.cidade = cidade,
        this.cep = cep
};

const endereco1 = new criarEndereco('dois', 'Figueiredo Felipe', 'Altinópolis', '14350-000');
const endereco2 = new criarEndereco('oito', 'Figueiredo Felipe', 'Altinópolis', '14350-000');

function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
        endereco1.bairro === endereco2.bairro &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep;
}; //esse tem que daar false pq a rua é diferende...


function temEnderecomemorialIgual(endereco1, endereco2) {
    return endereco1 === endereco2;

}; // tembem retorna false pq cada variável ocupa um espaço diferente na memoria,
// a nao ser que atribua uma variavel a outra. ex let endereco3 = endereco1

console.log(saoIguais(endereco1, endereco2))
console.log(temEnderecomemorialIgual(endereco1, endereco2))