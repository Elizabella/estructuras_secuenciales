let Costoporkilowats=0, Consumedekilowats= 0, costototal=0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada: Costo x kilowasts= 
Consume de kilowats

  * Salida: Costo total del recibo del energía electrica
  */

 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
  Costoporkilowats= +prompt("Ingrese el costo por kilowatse es: " );
 
  Consumedekilowats= +prompt("Ingrese el consume de kilowats es: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
costototal=Consumedekilowats*Costoporkilowats;

 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log(" Pago total de agua es:" + costototal );
 document.write(" Pago total de agua es:" + costototal  )