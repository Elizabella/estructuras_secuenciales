
 let c1 = 0, c2 = 0, Atriang = 0;
 /**
  * Entrada: la longitud de la base = c1
  * la longitud de la altura = c2
  * salida : area de triangulo = Atriang
  */
 console.log(typeof c1);
 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
 c1 = +prompt("Ingrese la longitud de la base");
 c2 = +prompt("Ingrese la longitud de la altura");

 // ¿Como mostrar el tipo de dato de una variable?
 console.log(typeof c1);
 Atriang = (c1*c2)/2;
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("Area de Triangulo es:" + Atriang);
 document.write(`Area de Triangulo: ${Atriang}`)
 