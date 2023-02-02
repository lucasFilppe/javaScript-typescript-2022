function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque',{
        enumerable: true,//mostra a chave
        value: estoque,//pode alterar ou nao
        writable: true// reconfiguar a chave
    })
}

const p1 = new Produto('Camisa', 20, 3)
console.log(p1)