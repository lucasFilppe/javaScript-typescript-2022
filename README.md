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
