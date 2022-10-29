//funçaõ executa uma ação
function saudacao(nome){
    return `Bom dia ${nome}!`;
}

//podemos chama-la quantas vezes quiser
const variavel = saudacao('Lucas');
console.log(variavel)

//função que faz uma soma
function soma(x, y){
    const resultado =  x + y;
    return resultado;
}

const resultado = soma(10, 13);
console.log(resultado)

//função que calcula 
const raiz = function(n) {
    return Math.sqrt(n);
}
console.log(raiz(9))
console.log(raiz(25))

//arrow function que imprime uma mensagem positiva
const goodVibe = () => console.log("Seja feliz!!");
goodVibe()