import { ProdutoCarrinho } from './../models/TemplateCarrinho.js'



class ControllerCarrinho {
    static container = document.getElementById("vitrine-carrinho");
    static qtd = document.getElementById("id-span");
    static valorTotal = document.getElementById("id-total");
    static pro = []

    static async pegarId(id) {
        this.container.innerHTML = "";
        const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
            .then((res) => res.json())
            .then((data) => {
                const busca = data.find((element) => element.id === parseInt(id))
                this.pro.push(busca)
            })

        this.pro.forEach((element) => {
            const newObj = ProdutoCarrinho.gerarProdutoCarrinho(element)
            this.pegarQtd()
            this.pegarTotal()
        })
    }

    static pegarQtd() {
        this.qtd.innerText = this.pro.length
    }

    static pegarTotal() {
        const soma = this.pro.reduce((acc, atual) => {
            return acc + atual.preco
        }, 0)
        const novoValor = soma.toFixed(2).replace(".", ",")
        this.valorTotal.innerText = `R$ ${novoValor}`
    }

    static async deletarItem(id) {
        this.container.innerHTML = "";
        const deletar = this.pro.find((element) => {
            return element.id === parseInt(id)
        })
        const indice = this.pro.indexOf(deletar)
        this.pro.splice(indice, 1)
        if (this.pro.length > 0) {
            this.pro.forEach((element) => {
                const listagem = ProdutoCarrinho.gerarProdutoCarrinho(element)
                this.pegarQtd()
                this.pegarTotal()
            })
        } else {
            this.pegarQtd()
            this.pegarTotal()
            this.AvisoVazio()
        }
    }

    static AvisoVazio() {
        const teste = ProdutoCarrinho.gerarAviso()
    }
}

export { ControllerCarrinho }