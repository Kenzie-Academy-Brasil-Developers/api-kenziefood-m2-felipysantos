class TemplateVitrine {
    constructor({
        nome,
        categoria,
        descricao,
        preco,
        imagem
    }) {
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
    }

    gerarTemplate() {
        const ul = document.querySelector("#vitrine");
        const li = document.createElement("li");

        li.innerHTML = `
            <div>
            <figure>
                <img src="${this.imagem}" alt="">
                <figcaption>${this.categoria}</figcaption>
            </figure>
            <h2>${this.nome}</h2>
            <p>${this.descricao}</p>
            </div>
        
            <div>
                <span>${this.preco}</span>
                <button><i class="fas fa-cart-plus"></i></button>
            </div>
        `;

        return ul.appendChild(li);
    }
}

export {
    TemplateVitrine
};