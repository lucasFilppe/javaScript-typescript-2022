//reduce, reda um unico elementouz o array 
const numeros = [1, 5, 80, 1, 5]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador
}, 0)
console.log(total)


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

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador
    
    return valor
})
console.log(maisVelha)