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
        })
    }
    
    

}

export {ControllerCarrinho}