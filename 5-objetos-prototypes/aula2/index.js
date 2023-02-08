//getters e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    this.estoque = estoque;

    Object.defineProperty(this, 'estoque',{
    enumerable: true, //mostra chave
    configurable: true,
    get: function(){
        return estoque
    }, 

    set: function(valor){
        if(typeof valor !== 'number'){
            return 'valor invalido, deve ser do tipo number'
        }
    }

 })
}

const p1 = new Produto("camiseta", 20, 3)
p1.estoque = 'let'
console.log(p1.estoque)