// let arrayNumeros = [1,2,3,4,5,6,7,8,9]

// let arrayNumeroMaioresQuatro = []


// Este abaixo e um exemplo de objeto simples referente a um carro;
// um Objeto e um grupo de dados referente a alguma coisa

// let carro  = {

//     marca: 'Chevrolet',
//     modelo: 'Corvette',
//     ano: '2022',
//     cor: 'Laranja'

// }

// console.log(carro.marca);


// Exemplo 1, For Each
// Ele percorre o array e faz alguma coisa com cada valor do array

// arrayNumeros.forEach(numero => {
    
//     if (numero > 4) {
//         arrayNumeroMaioresQuatro.push(numero)
//     }

// });

// Exemplo 2
// Loop for faz algo baseado na quantidade de vezes que o loop rodar
// se especifica essa quantidade no propio for

// for (let batata = 0; batata < 5; batata++) {

//     console.log(batata);

// }


let APIHarryPotter = 'http://hp-api.herokuapp.com/api/characters'
let APIStarWars = 'https://swapi.dev/api/people/1'
const card = document.getElementById('card')
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

