// console.log(process);
console.log('=============================');
console.log(process.argv);
const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Olá ${firstName} ${lastName}`);