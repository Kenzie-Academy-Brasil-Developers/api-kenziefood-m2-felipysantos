class Produto {
    constructor({id, nome, preco, categoria, descricao, imagem, createdAt, updatedAt}) {
        this.id = id,
        this.nome = nome,
        this.preco = preco,
        this.categoria = categoria,
        this.descricao = descricao,
        this.imagem = imagem,
        this.createdAt = createdAt,
        this.updatedAt = updatedAt
    }
}

export {Produto}