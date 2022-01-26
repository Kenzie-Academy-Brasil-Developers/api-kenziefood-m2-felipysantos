import {ProdutoCarrinho} from './../models/TemplateCarrinho.js'



class ControllerCarrinho {
    static container = document.getElementById("vitrine-carrinho");
    static pro = []
    static async pegarId(id) {
        this.container.innerHTML = "";
        const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
        .then((res) => res.json())
        .then((data) => {
            const busca = data.find((element) => element.id === parseInt(id))
            this.pro.push(busca)
        })
        
        this.pro.forEach((element) =>{
            const newObj = ProdutoCarrinho.gerarProdutoCarrinho(element)
            this.pegarQtd()
            this.pegarTotal()
        })
    }
    
    static qtd = document.getElementById("id-span");
    static pegarQtd(){
        this.qtd.innerText = this.pro.length 
    }

    static valorTotal = document.getElementById("id-total");
    static pegarTotal(){
        const soma = this.pro.reduce((acc, atual) => {
            return acc + atual.preco},0)
            this.valorTotal.innerText = `R$ ${soma.toFixed(2)}`
    } 
}

export {ControllerCarrinho}