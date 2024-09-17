const inputCidade = document.querySelector("#searchInput")
const btnBuscarCidade = document.querySelector(".busca")

btnBuscarCidade.addEventListener('submit', (event) => {
    event.preventDefault()

    
    getClima(inputCidade.value)
})

document.addEventListener('keyup', (event)=> {
    if(event.key == "Enter") {
        getClima(inputCidade.value)
    }
})


function getClima(cidade) {
    console.log(`${cidade}`)

    const nomeCidade =  document.querySelector(".titulo")

    nomeCidade.innerHTML = `${cidade}`
}