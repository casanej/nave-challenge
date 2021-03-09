# Desafio de front-end

## Navedex

O sistema consiste em uma web app para visualização e criação dos navers, possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participou.

Será um diferencial realizar o desenvolvimento usando [React](https://pt-br.reactjs.org/), pois é a biblioteca que mais usamos na empresa. Também serão aceitos testes desenvolvidos com [Vue.js](https://vuejs.org/), [Angular](https://angular.io/) ou sem uso de um framework específico, mas com as funcionalidades desenvolvidas utilizando JavaScript.

## Figma

Use as telas do [figma](https://www.figma.com/file/II8UDFm2uJFZaD0FOPcinP/Teste-Fornt-End) para se guiar no desenvolvimento. O código de css não será tão importante quando o javascript, mas esperamos que o layout fique de acordo com as telas.

## API

Para as funcionalidades da aplicação, faça integração com a [api](https://navedex-api.herokuapp.com/v1/). Recomendamos o uso da [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) ou do [axios](https://github.com/axios/axios) para realizar as chamadas http.

A documentação da API oficial do teste pode ser utilizada com o [postman](https://www.postman.com/) importando [esse](https://www.getpostman.com/collections/e6afe4028c2a1e56e577) link. Todos os parâmetros para cada rota estão documentados nessa URL, então a utilize como base para montar a web app.

Após importar o link no postman, você deve criar um cadastro utilizando a request de `users/signup`. 

## Iniciando

Para começar, você precisará instalar os pacotes em seu projeto usando um gerenciador de pacotes como npm e yarn.

```
yarn install
```

## Usando

Para executar o modo de desenvolvimento execute o comando a seguir, e acesse a URL em [localhost:3000](http://localhost:3000).

```
yarn start
```

Para montar um build para produção utilize o comando e uma pasta será criada na raiz do projeto chamada `./dist` compilando todo o projeto proto para uso.

```
yarn build
```

Para testar o modo produção, utilize o pacote `serve` utilizando o comando

```
yarn global add serve
```

Ao final da instalação, execute o comando

```
npx serve ./dist
```

Verifique a porta que foi disponibilizada, acesse o link e verifique o projeto em modo produção