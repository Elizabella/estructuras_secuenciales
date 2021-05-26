let  Costodelallamda= 0, tiempodelallamada=0, costoporminutos=0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada: Tiempo de la llamada=15min
     Costo por minutos= 0.2soles

  * Salida: Costo de la llamada=3 soles
  */

 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
  tiempodelallamada= +prompt("Ingrese el tiempo de la llamadda es: " );
 
  costoporminutos= +prompt("Ingrese el costo por minuto  es: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
 
Costodelallamda= tiempodelallamada * costoporminutos
 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("El costo de la llamada es:" + Costodelallamda );
 document.write("El costo de la llamada es:" + Costodelallamda)