//modulo path do node

const path = require('path')


// apenas o nome do arquivo atual
console.log(path.basename(__filename))


// nome do diretorio atual
console.log(path.dirname(__filename))

//extensao do arquivo
console.log(path.extname(__filename))

//criando objeto PATh
console.log(path.parse(__filename))

// juntar diretorios de arquivos
console.log(path.join(__dirname, 'teste', 'teste.html'))