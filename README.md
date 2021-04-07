[![CD](https://github.com/nikolasFreitas/e-coffee-frontend/actions/workflows/cd.yml/badge.svg?branch=master)](https://github.com/nikolasFreitas/e-coffee-frontend/actions/workflows/cd.yml)
[![CI](https://github.com/nikolasFreitas/e-coffee-frontend/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/nikolasFreitas/e-coffee-frontend/actions/workflows/CI.yml)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Sobre

Este projeto é um estudo sobre acessibilidade que integra funcionalidades básicas de uma loja online. O objetivo deste estudo não é entregar uma loja online, mas sim um site extremamente acessível, onde o controle de qualdiade é baseado na entrega de componentes e de estruturas simplificadas e que expressam um modelo básico para uma loja online.

-------------------------------------------------

## Utilitários no código

Ao contribuir com este repositório, você deve adicionar aqui quaisquer utilitários interessantes do código, por exemplo:

### Componente Price

> path `components/Price`

Todas as interfaces que demonstram algum preço devem utilizar este componente para serem atualizadas conforme a unidade monetária da linguagem selecionada pelo usuário.

-------------------------------------------------

### Traduções

path `locale/strings/*.json`

Todas as linguagens presentes nesta seção devem ter as mesmas chaves que os documentos pt-br.json ou en.json e serem formas inteligíveis da utilização da linguagem.

Ex.:
path `locale/strings/en.json`

content:

```json
{
  "recomendations": {
    "title": "Clients also enjoyed:"
  }
}
```

path `locale/strings/pt-br.json`

content:

```json
{
  "recomendations": {
    "title": "Clientes também gostaram"
  }
}
```

Para adicionar a tradução ao seu código, basta utilizar o objeto `Translator` em `locale/translate` que possibilita a internacionalização dos textos:

```TypeScript
function App() {
  return(
    <h3>{Translator.i18n.t('recomendations.title')}</h3>
  )
}
```

Este objeto contém uma instância da interface [i18n](http://i18njs.com/), e possibilita a modificação e adição de novos idiomas à aplicação...

-------------------------------------------------

## Contribuindo com o projeto

Leia as instruções aqui [contribuition.md](https://github.com/githiago-f/e-coffee-frontend/blob/master/CONTRIBUITION.md)
