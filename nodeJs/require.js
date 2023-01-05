//Modulos nativos;
const path = require('path')
    // console.log('Caminha da Pasta: ' + __dirname);
    // console.log('Caminho do arquivo: ' + __filename);
console.log(path.basename(__filename))

//maus modoulos 
const myModules = require('./exports');
console.log(myModules)