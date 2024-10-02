# Clima App (JavaScript)

Este projeto é um exercício para praticar JavaScript, manipulação de DOM e consumo de APIs. O objetivo é construir uma aplicação web simples que permite ao usuário consultar a previsão do tempo de uma cidade.

## Funcionalidades:

- O usuário pode inserir o nome de uma cidade em um campo de busca.
- Ao pressionar "Enter" ou submeter o formulário, a aplicação faz uma requisição para a API OpenWeatherMap.
- A aplicação exibe o nome da cidade, país, temperatura atual, ícone de condição climática, velocidade e direção do vento para a cidade pesquisada.

## Exemplo de uso da API OpenWeatherMap:

```javascript
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
```

## Principais pontos de aprendizado:

- **Manipulação de DOM:** A aplicação utiliza JavaScript para atualizar dinamicamente o conteúdo da página HTML com base na interação do usuário e nos dados recebidos da API.
- **Consumo de APIs:** O projeto demonstra como fazer requisições para a API OpenWeatherMap utilizando a função `fetch` e `async/await`.
- **Tratamento de dados JSON:** A resposta da API é em formato JSON. O código JavaScript analisa esses dados para extrair as informações relevantes.
- **Assincronismo:** O código utiliza `async/await` para lidar com a natureza assíncrona das requisições à API.
- **Validação de entrada:** O código verifica se o campo de busca está vazio antes de fazer a requisição.

## Como executar o projeto:

1. Clone este repositório
2. Abra o arquivo index.html no seu navegador
3. Insira o nome de uma cidade no campo de busca e pressione Enter ou clique no botão de busca

Nota: Este projeto utiliza uma chave de API do OpenWeatherMap. Certifique-se de substituir 'APIKEY' pela sua própria chave de API para que o projeto funcione corretamente.