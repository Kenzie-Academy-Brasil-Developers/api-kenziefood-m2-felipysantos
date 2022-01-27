import { ControllerCarrinho } from "../controller/ControllerCarrinho.js"

class ProdutoCarrinho {

    static container = document.getElementById("vitrine-carrinho");

    static
        gerarProdutoCarrinho(produto) {

        const { imagem, nome, categoria, preco, id } = produto
        const li = document.createElement("li")
        li.setAttribute("id", id)
        const novoPreco = preco.toFixed(2).replace(".", ",")

        li.innerHTML =
            `            
            <div><img src="${imagem}" alt=""></div>
            <div>
                <h2>${nome}</h2>
                <p>${categoria}</p>
                <span>R&#36;${novoPreco}</span>
            </div>
            <div>
                <button id="remover"><i class="fas fa-trash"></i></button>
            </div>            
            `
        this.container.appendChild(li)
    }
    static
        gerarAviso() {
        const div = document.createElement("div")
        div.className = "aviso-vazio"
        div.innerHTML = `
        
            <span><i class="fas fa-shopping-bag"></i></span>
            <span>Oops&#33;&#33;</span>
            <p>Não temos nenhum produto no momento</p>
        
        `
        this.container.appendChild(div)
    }
}

export { ProdutoCarrinho }