function mostrarHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

//executa função em um interbvaslo de tempo
const timer = setInterval(function(){
    console.log(mostrarHora())
}, 1000)

//executa função apenas uma vez

setTimeout (function(){
    clearInterval(timer)
}, 10000)