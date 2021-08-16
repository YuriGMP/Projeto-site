const Produto = function( nome, valor ) {
    this.nome = nome,
    this.valor = valor,
    this.date = new Date().toISOString()
} 

const Estoque = function (){
    this.produtos = [],
    this.addProduto = (nome, valor) => this.produtos = [ ...this.produtos, new Produto(nome, valor) ]
}

const meuEstoque = new Estoque()
meuEstoque.addProduto( 'lapis', 5 )
meuEstoque.addProduto( 'caneta', 6 )

export default meuEstoque