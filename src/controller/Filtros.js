import { TemplateVitrine } from "../models/TemplateVitrine.js";

class Filtros {

    static async FiltroPanificadora() {
        const ul = document.querySelector("#vitrine");
        ul.innerHTML = ""
        const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
            .then((res) => res.json())
            .then((data) => data.filter(item => {
                return item.categoria === "Panificadora"
            }))
            .then((arr) => arr.forEach((element) => {
                const vitrine = new TemplateVitrine(element)
                vitrine.gerarTemplate()
            }));
    }

    static async FiltroFrutas() {
        const ul = document.querySelector("#vitrine");
        ul.innerHTML = ""
        const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
            .then((res) => res.json())
            .then((data) => data.filter(item => {
                return item.categoria === "Frutas"
            }))
            .then((arr) => arr.forEach((element) => {
                const vitrine = new TemplateVitrine(element)
                vitrine.gerarTemplate()
            }));
    }

    static async FiltroBebidas() {
        const ul = document.querySelector("#vitrine");
        ul.innerHTML = ""
        const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
            .then((res) => res.json())
            .then((data) => data.filter(item => {
                return item.categoria === "Bebidas"
            }))
            .then((arr) => arr.forEach((element) => {
                const vitrine = new TemplateVitrine(element)
                vitrine.gerarTemplate()
            }));
    }

    static async FiltroTodos() {
        const ul = document.querySelector("#vitrine");
        ul.innerHTML = ""
        const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
            .then((res) => res.json())
            .then((data) => {
                data.forEach((element) => {
                    const vitrine = new TemplateVitrine(element)
                    vitrine.gerarTemplate()
                })
            })
    }

    static async FiltroBusca() {
        const input = document.getElementById("barra-pesquisar")
        const buscando = input.value.toLowerCase()
        const newArr = []
        const ul = document.querySelector("#vitrine");
        ul.innerHTML = ""

        const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
            .then((res) => res.json())            
            .then((arr) => {
                arr.forEach((item) => {
                    let busca = item.nome.toLowerCase()                                        
                    if (busca.includes(buscando)) {
                        newArr.push(item)                        
                        const vitrine = new TemplateVitrine(item)
                        vitrine.gerarTemplate()
                    }
                })
            })
    }
}

export { Filtros }