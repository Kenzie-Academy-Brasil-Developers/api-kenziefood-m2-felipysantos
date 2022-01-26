class TemplateVitrine {
    constructor({
        nome,
        categoria,
        descricao,
        preco,
        imagem,
        id
    }) {
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
        this.id = id
    }

    gerarTemplate() {
        const ul = document.querySelector("#vitrine");
        const li = document.createElement("li");
        const imagemCategoria = document.createElement("img");

        if (this.categoria === "Frutas") {
            imagemCategoria.src = "public/image/frutas.png";
        }
        if (this.categoria === "Panificadora") {
            imagemCategoria.src = "public/image/pao.png";
        }
        if (this.categoria === "Bebidas") {
            imagemCategoria.src = "public/image/bebida.png";
        }
        li.setAttribute('id', this.id)
        li.innerHTML = `
            <div>
            <figure>
                <img src="${this.imagem}" alt="${this.nome}">
                <figcaption><img src="${imagemCategoria.src}" alt="${this.categoria}">${this.categoria}</figcaption>
            </figure>
            <h2>${this.nome}</h2>
            <p>${this.descricao}</p>
            </div>
        
            <div class="li-inferior">
                <span>R&#36;${this.preco}</span>
                <button id="${this.id}"><i class="fas fa-cart-plus"></i></button>
            </div>
        `;

        return ul.appendChild(li);
    }
}

export {
    TemplateVitrine
};