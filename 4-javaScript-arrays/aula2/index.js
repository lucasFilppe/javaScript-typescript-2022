//filter
/*Recebe uma função callback*/
const numeros = [1, 50, 80, 1, 5, 8, 7, 11, 15, 22]

function callbackFilter(valor, indice, array){
    return valor > 10
}
const numerosFiltrados = numeros.filter(callbackFilter);//retornara os valores maiores que 10 do array
console.log(numerosFiltrados)


//retorne as pessoas que tem o nome com 5 letras ou maois
// retorn as pessoas cpm mais de 50 anos
//retorne as pessoas cujo nome termina em A
const pessoas = [
    {nome: 'Lucas', idade: 24},
    {nome: 'maria', idade: 62},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'wallace', idade: 47}
    
];
const pessoasNomeGrande = pessoas.filter(function(valor) {
    return valor.nome.length >= 6

})
console.log(pessoasNomeGrande)

const pessoasIdosas = pessoas.filter(function(valor){
    return valor.idade > 50
})
console.log(pessoasIdosas)

const nomeTerminandoA = pessoas.filter(function(valor){
    return valor.nome.toLowerCase().endsWith('a')
})
console.log(nomeTerminandoA)