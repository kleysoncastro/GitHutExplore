## Configuração do babel e Webpack

### De maneira simples, babel é transpilador de javascript, e webpack é empacotador de arquivos para dentro do condigo javascrit

### Ferramentas utilizadas 

`html-webpack-plugin` 
para nao precisar fazer o `import React from 'react'` em todos os arquivos jsx

### Funcionalidades do webpack

devtool: 'eval-source-map

para melhor depuração de erros, no lugar de visualizarmos os erros do arquivo bundle.js, ele nos mostrará o
aquivo js ou jsx que produziu o erro.

Para importar aquivos css para dentro do js/jsx precisamos de dois laader, `style-loader` `css-loader`

```bash
$ yarn add style-load css-loader
```

no arquivo webpack.json, nas rules, só adicionar
```json
  module: {
        rules: [
          { test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' },
          { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
         
        ],
      },
```
Caso seja necessário usar o `sass`, basta baixar o `sass-loader` e `node-sass`. Os aquivos .css -> .scss
As rules ficaram assim.

```json
    rules: [
          { test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' },
          { test: /\.scss$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader'] },
         
        ],
```

### cross-env

Esse é um birário injetar no SO a variável de ambinte correta, já que tem diferenças na definição de sistemas win e linux

No bash basta rotar na mesma sessão de terminal `NODE_ENV=production`

Mas como vamos usasr o binário para faciliar algo que já é facil, vamos fazer com o cross-env

No arquivo package.json vamos adicioar os escripts

```json
"scripts": {
"build":  "cross-env NODE_ENV=production webpack",
"dev":  "webpack server"
},