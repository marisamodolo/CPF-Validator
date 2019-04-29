## Validador de CPF

Esta biblioteca tem a funcionalidade de checar se um número de CPF é valido, para uso em aplicações web. 

### Como instalar:

```
  $  npm install mahc3-cpf
```

### Como utilizar:

``` 
  const cpfValidator = require("mahc3-cpf");
  console.log(cpfValidator(00000000000)) 
 ```

### Funcionalidades: 
* Checa se um cpf é válido através dos dígitos verificadores (utilizando regra matemática específica) e retorna *true* ou *false* de acordo com o caso.

### Versão:
* **1.0.0**
