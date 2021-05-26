let metrocubicoqueconsumedeagua=0, costoXmetrocubico= 0, Pagototaldeagua;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada:Metro cubico que consume de agua= 2000litros= 
Costo por metro cubico: 1centimo= 0,01

  * Salida: Pago total de agua= 20 soles
  */

 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
  metrocubicoqueconsumedeagua= +prompt("Ingrese el metro cubico que consume de agua es: " );
 
  costoXmetrocubico= +prompt("Ingrese el costo por metro cubico es: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
 
Pagototaldeagua=costoXmetrocubico* metrocubicoqueconsumedeagua;
 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("Pago total de agua es:" + Pagototaldeagua );
 document.write("Pago total de agua es:" + Pagototaldeagua )