const { Person } = require("./person")

//arrow function    
function somaArrow (a,b){
    console.log(a,b)
    return a + b
}

console.log(somaArrow(5, 15))


// orientacao a objetos
//classe
class Pessoa {
    constructor(nome, sobrenome, idade, sexo){
        this.nome = nome,
        this.sobrenome = sobrenome
        this.idade = idade,
        this.sexo = sexo
    }
        
        //método
    getFullName (){
        console.log(`Nome completo: ${this.nome} ${this.sobrenome}`)
    }

    static salve(){
        console.log('Salve salve familia')
    }
}

const pessoa = new Pessoa('Barney', 'Brabo', 40, 'Masculino')

pessoa.getFullName()

Pessoa.salve()