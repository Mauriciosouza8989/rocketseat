const timer = 3000;
const finished = () => console.log('Done');
const running = ['.', '.', '.'];

setTimeout(finished, timer);
process.stdout.write(`\n\nCarregando...`);