class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("formulario nao enviado")
    }
}

const valida = new ValidaFormulario()