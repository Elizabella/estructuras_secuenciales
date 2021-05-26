let AhorroTotal=0, Ahorroxmes= 0, Sueldo0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada: Sueldo
  * Salida: Ahorro por mes y ahorro total
  */

 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
 Sueldo= +prompt("Ingrese tu sueldo: " );
 


 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
 
Ahorroxmes= Sueldo*015;
AhorroTotal=Ahorroxmes*4*12;
 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("El ahorro por mes  es:" + Ahorroxmes );
 console.log("El ahorro Total es:" + AhorroTotal );
 document.write("El ahorro por mes  es:" + Ahorroxmes )
 document.write("<br>El ahorro Total es:" + AhorroTotal )