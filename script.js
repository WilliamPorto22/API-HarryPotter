// Consumo da API

let APIHarryPotter = 'http://hp-api.herokuapp.com/api/characters'
const cards = document.getElementById('cards')


const getApiData = async (urlApi) => {

    const respostaAPI = await fetch(urlApi)

    if (respostaAPI.status === 200) {

        const dadosConvertidos = respostaAPI.json()

        return dadosConvertidos
    }

}


async function gerarCardsComImagens() {

    const dados = await getApiData(APIHarryPotter)

    dados.slice(0, 23).forEach(personagem => {
        const divCard = document.createElement('div')
        divCard.className = "card"

        let srcImg = personagem.image.toString()
        const img = document.createElement('img')
        img.src = (srcImg)
        img.className = "img";

        const nome = document.createElement('p')
        nome.textContent =  (`Nome: ${personagem.name}`)

        const casa = document.createElement('p')
        casa.textContent = (`Casa: ${ personagem.house }`)

        const species = document.createElement('p')
        species.textContent =  (`Species: ${ personagem.species }`)

        const actor = document.createElement('p')
        actor.textContent =  (`Ator: ${ personagem.actor }`)

        const dateOfBirth = document.createElement('p')
        dateOfBirth.textContent = (`Nasceu: ${personagem.dateOfBirth}`)

        const hairColour = document.createElement('p')
        hairColour.textContent = (`Cor do Cabelo: ${personagem.hairColour}`)

        const eyeColour = document.createElement('p')
        eyeColour.textContent = (`Cor do Olhos: ${personagem.eyeColour}`)

        const ancestry = document.createElement('p')
        ancestry.textContent = (`Ancestrais: ${personagem.ancestry}`)

        const patronus = document.createElement('p')
        patronus.textContent = (`Patronus: ${personagem.patronus}`)

        const varinha = document.createElement('p')
        varinha.textContent = (`Varinha:`)

        const wand = document.createElement('p')
        wand.textContent = (`Nucleo: ${personagem.wand.core}`)

        const length = document.createElement('p')
        length.textContent = (`Comprimento: ${personagem.wand.length}`)

        const wood = document.createElement('p')
        wood.textContent = (`Madeira: ${personagem.wand.wood}`)


        const arrayElementos = [img, nome, casa, species, actor, dateOfBirth, hairColour,
            eyeColour, ancestry, patronus, varinha, wand, length ,wood
        ]


        arrayElementos.forEach(elemento => {
            divCard.appendChild(elemento)
        });

        cards.appendChild(divCard)

    });

}

gerarCardsComImagens()

async function rodarfunction() {
    console.log(await getApiData(APIHarryPotter))
}

rodarfunction()