const data = new Date();
let diaSemana = data.getDay();
let diaDaSemanaTxt;

switch (diaSemana) {
  case 0:
    diaDaSemanaTxt = "Domingo";
    break;
  case 1:
    diaDaSemanaTxt = "Segunda";
    break;
  case 2:
    diaDaSemanaTxt = "terça";
    break;
  case 3:
    diaDaSemanaTxt = "quarta";
    break;
  case 4:
    diaDaSemanaTxt = "quinta";
    break;
  case 5:
    diaDaSemanaTxt = "sexta";
    break;
  case 6:
    diaDaSemanaTxt = "sabado";
    break;

}
console.log(diaSemana, diaDaSemanaTxt);
