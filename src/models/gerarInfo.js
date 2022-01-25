import {
    TemplateVitrine
} from './TemplateVitrine.js'

async function gerarInfo() {
    const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((element) => {
                const vitrine = new TemplateVitrine(element)
                vitrine.gerarTemplate()
            })
        })
}

gerarInfo()