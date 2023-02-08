/*Prototypes
    javascript é baseado em prototipos para passar propriedades
    de um objeto para outro.

    Definação de prototipo
    Prototipo é o termo usado para se referir
    ao que foi criado pela primeira vez, servindo
    de modelo ou molde para futuras producoes
*/
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

console.dir(Person)