// API Harry Potter    http://hp-api.herokuapp.com/api/characters


// este exemplos abaixo mostrata o corpo da API no console 

// fetch('http://hp-api.herokuapp.com/api/characters').then(resposta =>{
//     return resposta.json()
// }).then(corpo=>{
//     console.log(corpo)  
// })

//  exemplo 2

fetch('http://hp-api.herokuapp.com/api/characters')
.then(resposta => resposta.json())
.then(console.log)

// Este exemplos abaixo mostrara o resultado da API no HTML

// fetch('http://hp-api.herokuapp.com/api/characters').then(resposta =>{
//     return resposta.json()
// }).then(corpo=>{
//     document.getElementById('span').innerHTML=corpo.name  // Depois do innerhtml vai o =corpo.  e depois vai o que voce quer mostrar na API
// })
