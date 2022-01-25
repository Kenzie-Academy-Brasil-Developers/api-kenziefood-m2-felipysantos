class ProdutoCarrinho {

    static container = document.getElementById("vitrine-carrinho");

    static
        gerarProdutoCarrinho(produto) {

        const { imagem, nome, descricao, preco } = produto
        const li = document.createElement("li")

        this.container.innerHTML = "";

        li.innerHTML =
            `
            <div><img src="${imagem}" alt=""></div>
            <div>
                <h2>${nome}</h2>
                <p>${descricao}</p>
                <span>R&#36;${preco}</span>
            </div>
            <div>
                <button id="remover"><i class="fas fa-trash"></i></button>
            </div>
            `
        this.container.appendChild(li)
    }
}

export { ProdutoCarrinho }