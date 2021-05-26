let P=0, CM2= 0, PagoTotal=0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada: costo metro por cuadrado= CM2 y pintado =P
  * Salida: Cobro= pagototal
  */

 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
 P= +prompt("Ingrese un valor de pintados: " )
 
 CM2= +prompt("Ingrese el costo por metro cuadrado: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
 
 PagoTotal= CM2*P;
 
 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("Total es:" + PagoTotal );
 document.write("Total es:" + PagoTotal)
 