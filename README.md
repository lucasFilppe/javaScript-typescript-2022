# javaScript-typescript-2022

## JavaScript-básico

### Variáveis
 
As variáveis são caixas para armazenar dados.Existe três maneiras de declara-las:

- Usando var
- Usando const
- Usando let

### Arrays

É uma variável especial, cque conter mais de um valor. Exemplo: 

- const cars = ["Saab", "Volvo", "BMW"];

### Funçoes

Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica. 

#### Função retorno:

Quando o JavaScript atinge uma return instrução, a função para de ser executada. Se a função foi invocada a partir de uma instrução, o JavaScript "retornará" para executar o código após a instrução invocada. Exemplo: 

- function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

#### Função de seta, arrow function:

As funções de seta permitem uma sintaxe curta para escrever expressões de função.

Você não precisa da palavra- functionchave, da palavra- returnchave e das chaves . Exemplo: 

- const x = (x, y) => x * y;

### Objetos

A linguagem JavaScript é projetada com base em um simples paradigma orientado a objeto. Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objeto

- const car = {type:"Fiat", model:"500", color:"white"};

## JavaScript-logica-programção

### Operadores

- Operadores de comporação {>=, <=, >, <}

### Condições

- Use if para especificar um bloco de código a ser executado, se uma condição especificada for verdadeira

- Use else para especificar um bloco de código a ser executado, se a mesma condição for falsa

- Use else if para especificar uma nova condição para testar, se a primeira condição for falsa

- Use switch para especificar muitos blocos alternativos de código a serem executados

### Objetos de data

Nos permite trabalhar com datas

- const d = new Date()

### try..catch

A estrutura try...catch deve ser utilizada em operações que podem falhar. Assim, quando a falha acontece a aplicação tem o controle de como era será tratada.

- try: comandos/invocações de métodos que podem gerar uma situação de exceção.
- catch: bloco executado em caso de exceção no bloco try.

### setInterval()

- O setInterval()método chama uma função em intervalos especificados (em milissegundos).
- O setInterval()método continua chamando a função até que clearInterval()seja chamado ou a janela seja fechada.

## Funções avançado

### Método constructor do JavaScript

É um método especial executado no momento em que a classe é instanciada, além disso os atributos da classe são definidos dentro deste método. Abaixo podemos ver como é feita sua declaração.

## Arrays avançado

### Slice

O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.

### Filter 

O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

### Map()

O map()método cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida em cada elemento da matriz de chamada.

### Reduce

O reduce()método executa uma função de retorno de chamada "redutor" fornecida pelo usuário em cada elemento da matriz, em ordem, passando o valor de retorno do cálculo no elemento anterior. O resultado final da execução do redutor em todos os elementos da matriz é um único valor.


