# Clima App (JavaScript)

Este projeto é um exercício da escola B7Web para praticar JavaScript, manipulação de DOM e consumo de APIs. O objetivo é construir uma aplicação web simples que permite ao usuário consultar a previsão do tempo de uma cidade.

## Funcionalidades:

- O usuário pode inserir o nome de uma cidade em um campo de busca.
- Ao pressionar "Enter" ou clicar no botão "Buscar", a aplicação faz uma requisição para a API OpenWeatherMap.
- A aplicação exibe a temperatura atual, ícone de condição climática e velocidade do vento para a cidade pesquisada.

## Exemplo de uso da API OpenWeatherMap:

```javascript

function getClima(cidade) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=SUA_API_KEY&units=metric&lang=pt_br`)
    .then(response => response.json())
    .then(data => {
      // Atualiza a interface do usuário com os dados recebidos da API
      // ...
    })
    .catch(error => {
      console.error("Erro ao buscar dados da API:", error);
      // Exibe mensagem de erro para o usuário
      // ...
    });
}
```

## Principais pontos de aprendizado:

- **Manipulação de DOM:** A aplicação utiliza JavaScript para atualizar dinamicamente o conteúdo da página HTML com base na interação do usuário e nos dados recebidos da API.
- **Consumo de APIs:** O projeto demonstra como fazer requisições para uma API externa (OpenWeatherMap) utilizando a função `fetch`.
- **Tratamento de dados JSON:** A resposta da API é em formato JSON. O código JavaScript analisa esses dados para extrair as informações relevantes.
- **Assincronismo:** O código utiliza Promises para lidar com a natureza assíncrona das requisições à API.

## Como executar o projeto:

1. **Clone este repositório:** `git clone https://github.com/seu-usuario/clima-app.git`
2. **Abra o arquivo index.html no seu navegador.**