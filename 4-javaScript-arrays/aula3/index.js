//map
//mesma coisa do filter só que altera o array em questão,
const numeros = [1, 50, 80, 1, 5, 8, 7, 11, 15, 22]
const numerosDobro = numeros.map(valor => valor * 2)
console.log(numerosDobro)


//para cada elemento:
//retorna apenas uma string com o nome da pessoa
//remova apenas a chave nome do objeto
//adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Lucas', idade: 24},
    {nome: 'maria', idade: 62},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'wallace', idade: 47}
    
];

const nomes = pessoas.map(function(valor){
    return valor.nome
})
console.log(nomes)