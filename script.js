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

    dados.slice(0, 13).forEach(personagem => {
        const divCard = document.createElement('div')
        divCard.className = "card"

        let srcImg = personagem.image.toString()
        const img = document.createElement('img')
        img.src = (srcImg)
        img.className = "img";

        const nome = document.createElement('p')
        nome.textContent = personagem.name

        const casa = document.createElement('p')
        casa.textContent = personagem.house

        const ator = document.createElement('p')
        ator.textContent = personagem.actor

        const arrayElementos = [img, nome, casa, ator]

        arrayElementos.forEach(elemento => {
            divCard.appendChild(elemento)
        });

        cards.appendChild(divCard)

    });

}

gerarCardsComImagens()

