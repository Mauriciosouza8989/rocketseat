let booksByCategory = [{
        category: "Riqueza",
        books: [{
                title: "Os segredos das mentes milhonárias",
                Author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                Author: "George S. Clason"
            },
            {
                title: "Pai rico, Pai pobre",
                Author: "Robert T. kiyosaki e Sharlon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligencia emocional",
        books: [{
                title: "Você é insubstituível",
                Author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como infrentar o mal do século",
                Author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas autamente eficazes",
                Author: "Stephen R. Covey"
            }
        ]

    }
]

const categories = booksByCategory.length;
console.log(` total de categorias: ${categories}`);
for (let category of booksByCategory) {

    console.log(`Total de livros da categoria ${category.category}: `);
    console.log(`${category.books.length}`);


}

function contAuthor() {
    let authors = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.Author) == -1)
                authors.push(book.Author);

        }
    }
    console.log(`há ${authors.length} autores`);
}

contAuthor();

function booksOfAuthor(author) {
    let boks = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.Author == author) {
                boks.push(book.title);
            }

        }
    }
    console.log(`Livros do autor ${ author }: ${ boks.join(', ')}`);
}

booksOfAuthor('Stephen R. Covey')