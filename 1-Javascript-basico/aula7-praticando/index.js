function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = form.querySelector(".resultado")

    const pessoas = [];
    
    //evento que vigia se usuario envia formulario
    /*form.onsubmit = function(evento){
        evento.preventDefault(); // previne comportamento padrao que enviaria o formulario
        alert(1);
        console.log("enviado!")
    }*/
    
    //o codigo acima comentado pode ser feito de modo mais avançado com addEnventListener
    function recebeEventoForm(evento){
        evento.preventDefault()

        const nome = document.querySelector(".nome");
        const sobrenome = document.querySelector(".sobrenome");
        const peso = document.querySelector(".peso");
        const idade = document.querySelector(".idade");
    
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            idade: idade.value,
        });

        console.log(pessoas)
        
    }
    form.addEventListener('submit', recebeEventoForm);

    //resultado.innerHTML= ("Lucas")
}
meuEscopo()