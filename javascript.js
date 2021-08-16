import meuEstoque from "./bancodedados/estoque.js";

const form = document.querySelector('form')
const nomeP = document.querySelector('#nomeP')
const valorP = document.querySelector('#valorP')

const lista = document.querySelector('#lista-produtos')


const onSubmit = e => {
    e.preventDefault()
    alert(`adcionado ${nomeP.value} no valor de R$ ${valorP.value}`)

    meuEstoque.addProduto(nomeP.value, valorP.value)

    nomeP.value = ''
    valorP.value = ''
    atualizarList()
}
form.addEventListener( 'submit', onSubmit )

const atualizarList = () => {
    lista.innerHTML = ''

    meuEstoque.produtos.map( el => {

        let $li = document.createElement('li')
        $li.className = 'item-lista'
        $li.innerHTML = `
        <h3>${el.nome}</h3>
        <h3>R$ ${parseFloat(el.valor).toFixed(2)}</h3>
        `
        lista.appendChild($li)
    })
}
atualizarList()