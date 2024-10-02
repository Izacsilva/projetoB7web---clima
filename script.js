import { APIKEY } from './config.js';
const inputCidade = document.querySelector("#searchInput")
const formBuscarCidade = document.querySelector(".busca")

formBuscarCidade.addEventListener('submit', (event) => {
    event.preventDefault()

    verificaCampo(inputCidade.value)
    
})

document.addEventListener('keyup', (event)=> {
    if(event.key == "Enter") {
        getClima(inputCidade.value)
    }
})


async function getClima(cidade) {
    
    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid=${APIKEY}&units=metric&lang=pt_br`

    let result = await fetch(baseUrl);
    let jsonData = await result.json();


    let dataCity = {
        nome: jsonData.name,
        country: jsonData.sys.country,
        temp: jsonData.main.temp,
        speedWind: jsonData.wind.speed,
        weatherIcon: jsonData.weather[0].icon,
        angleSpeed: jsonData.wind.deg,
    }

    exibeClima(dataCity)
}

function exibeMensagem(msg) {
    const avisos = document.querySelector('.aviso')

    //avisos.innerHTML = `${msg}`
}

function exibeClima(clima) {
    
    const nomeDaCidade = clima.nome
    const paisDaCidade = clima.country
    const temperaturaDaCidade = clima.temp
    const velocidadeDaCidade = clima.speedWind
    const IconClimaDaCidade = clima.weatherIcon
    const anguloVentoDaCidade = clima.angleSpeed

    const nomeCidade = document.querySelector(".titulo")
    const temperaturaCidade = document.querySelector(".tempInfo")
    const ventoCidade = document.querySelector(".ventoInfo")
    const iconClimaCidade = document.querySelector(".temp img")
    const ventoDegCidade = document.querySelector(".ventoPonto")


    nomeCidade.innerHTML = `${nomeDaCidade}, ${paisDaCidade}`
    temperaturaCidade.innerHTML = `${temperaturaDaCidade} <sup>ºC</sup>`
    ventoCidade.innerHTML = `${velocidadeDaCidade} <span>km/h</span>`
    iconClimaCidade.setAttribute("src", `http://openweathermap.org/img/wn/${IconClimaDaCidade}@2x.png`)
    ventoDegCidade.setAttribute("style", `transform: rotate(${anguloVentoDaCidade-90}deg)`)
}

function verificaCampo(campo) {

    if(campo.trim() !== "") {

        exibeMensagem("Carregando...")

        setTimeout(() => {
            getClima(inputCidade.value)
            exibeMensagem(inputCidade.value)
        }, 1000)

    } else {
        exibeMensagem("⚠️ É preciso escrever o nome de uma cidade do mundo!")
    }
}