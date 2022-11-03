function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado")

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

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const idade = form.querySelector(".idade");
    
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            idade: idade.value,
        });

        console.log(pessoas);
        resultado.innerHTML += (`${nome.value} ${sobrenome.value}  ${peso.value} ${idade.value}`);        
    }
    form.addEventListener('submit', recebeEventoForm);
    
}
meuEscopo()