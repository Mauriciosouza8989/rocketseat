const questions = [
    "Qual é o seu nome?",
    "O que eu aprendí hoje?",
    "O que me deixou aborrecido? E o que eu posso fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?",
];



const ask = (index = 0) => {
    process.stdout.write(`\n\n${questions[index]}: `);

}
ask();

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);

    } else {
        process.exit();
    }

});
process.on('exit', () => {

    console.log(`
    
    Que legal ${answers[0]}!

    O que você aprendeu hoje foi:
    ${answers[1]}.

    O que te aborreceu e você poderia melhorar foi:
    ${answers[2]}.

    O que me deixou feliz hoje:
    ${answers[3]}.
    
    Você ajudou ${answers[4]} pessoas hoje!

    Volte amanhã para mais uma reflexão...
    ABRAÇO😉 
    `);

})