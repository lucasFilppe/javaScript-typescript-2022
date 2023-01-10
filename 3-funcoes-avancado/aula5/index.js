//factory function
function criaPessoa(nome, sobrenome,a , p){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} esta ${assunto}`
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso /(this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('lucas', 'filipe', 1.71, 65)
console.log(p1.imc())
console.log(p1.fala('falando sobre Js'))