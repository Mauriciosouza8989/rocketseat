const timer = 1000;
const chech = () => console.log(`Checking...`);

const interval = setInterval(chech, timer);

//limpar setInterval
setTimeout(() => clearInterval(interval), 4000)