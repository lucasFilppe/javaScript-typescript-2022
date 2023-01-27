//função construtora retorna objetos
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

}

const p1 = new Pessoa("lucas", "Filipe")

console.log(p1.nome)