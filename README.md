## Configução do babel e Webpack

### De maneira simples, babel é transpilador de javascript, e webpack é empacotador de arquivos para dentro do condigo javascrit

### Ferramentas utilizadas 

`html-webpack-plugin` 
para nao precisar fazer o `import React from 'react'` em todos os arquivos jsx

### Funcionalidades do webpack

devtool: 'eval-source-map

para melhor depuração de erros, no lugar de visualizarmos os erros do arquivo bundle.js, ele nos mostrará o
aquivo js ou jsx que produziu o erro.