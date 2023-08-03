const fs = require('fs')
const path = require('path')

// Criando pasta
// fs.mkdir(path.join(__dirname, '/teste'), (error) =>{
//     if(error){
//         return console.log("Erro: ", error);
//     }

//     console.log("Pasta criada com sucesso!")
// })

// Criando arquivo
fs.writeFile(path.join(__dirname, 'teste', 'teste.txt'), 'hello node!', (error) => {
    if (error){
        return console.log('Erro: ', error);
    }

    console.log('Arquivo criado sucesso!')

    //Adicionando ao arquivo
    
    fs.appendFile(path.join(__dirname, '/teste', 'teste.txt'), ' hello world!', (error) => {
        if(error){
            return console.log('Erro: ', error)
        }
        console.log('Arquivo modificado com sucesso.')
    })
    
    fs.readFile(path.join(__dirname, '/teste', 'teste.txt'), 'utf8', (error, data) => {
        if(error){
            return console.log("Erro: ", error)
        }
    
        console.log(data)
    })
})


//Ler arquivo