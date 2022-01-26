import {Filtros} from './controller/Filtros.js'

const botãoPanificadora = document.querySelector(".botao-panificadora")
const botãoFrutas = document.querySelector(".botao-frutas")
const botãoBebidas = document.querySelector(".botao-bebidas")
const botãoTodos = document.querySelector(".botao-todos")
const input = document.getElementById("barra-pesquisar")        

botãoPanificadora.addEventListener("click", Filtros.FiltroPanificadora)
botãoFrutas.addEventListener("click", Filtros.FiltroFrutas)
botãoBebidas.addEventListener("click", Filtros.FiltroBebidas)
botãoTodos.addEventListener("click", Filtros.FiltroTodos)
input.addEventListener("keyup", Filtros.FiltroBusca)

const vitrine = document.querySelector("#vitrine")
vitrine.addEventListener("click", (event) => {
    const botaoComprar = event.target
    if (botaoComprar.tagName === "BUTTON" || botaoComprar.tagName === "I") {
        console.log("oi")
    }
})
