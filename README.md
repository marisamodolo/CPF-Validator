## Validador de CPF

Esta biblioteca tem a funcionalidade de checar se um número de CPF é valido, para uso em aplicações web. 

### Como instalar:

```js
  $  npm install mhs-cpf-val
```

### Como utilizar:

```js
  const cpf = require("mhs-cpf-val");
  console.log(cpf.cpfValidator(00000000000)) 
 ```

### Funcionalidades: 
* Checa se um cpf é válido através dos dígitos verificadores (utilizando regra matemática específica) e retorna *true* ou *false* de acordo com o caso.

### Versão:
* **1.0.0**
