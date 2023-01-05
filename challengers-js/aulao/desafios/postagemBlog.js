function CriarPostagem(titulo, mensagem, autor, vizualizacoes, comentarios, estaAoVivo) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.vizualizacoes = vizualizacoes,
        this.comentarios = comentarios,
        this.estaAoVivo = estaAoVivo
};

let novaPostagem = new CriarPostagem(
    'pai rico, pai pobre',
    'esse livro aborda varias tecnicas e blablabla',
    'Mauricio Sousa',
    200,
    coments = [{
            autor01: 'mauricio',
            msg: 'esse é um livro muito interessante.'
        },
        {
            autor02: 'luciano',
            msg: 'Eu já li esse livro.'
        },
        {
            autor03: 'gessica',
            msg: 'muito interessante.'
        }

    ],
    estaAoVivo = true

);

for (i in novaPostagem) {

    console.log(`${i}: ${novaPostagem[i]}`)

}