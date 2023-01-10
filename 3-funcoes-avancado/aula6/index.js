function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        realizaConta(){
          let conta = this.display.value;
          try{
            conta = eval(conta);
            if(!conta){
              alert("Conta invalida")
            }
            this.display.value = conta
          }
          catch(e){
            alert("Conta invalida")
          }
        },

        clearDisplay(){
          this.display.value = ''
        },

        apagaUm(){
          this.display.value = this.display.value.slice(0, -1)
        },

        inicia(){
            this.cliqueBotoes()
        },

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;//o que estou clicando

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                  this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                  this.apagaUm()
                }

                if(el.classList.contains('btn-ig')){
                  this.realizaConta()
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia()