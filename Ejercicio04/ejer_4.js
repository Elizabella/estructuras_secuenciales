let F=0, CXH= 0, T= 0, Cobro=0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada: Tiempo= T y costo por hora = CXH
  * Salida: Cobro = C
  */

 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
 T= +prompt("Ingrese un valor en horas: " )
 console.log( T);
 F=Math.ceil(T);
 console.log( F);
 CXH= +prompt("Ingrese el costo por hora: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
 
 Cobro= F*CXH;
 
 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("Total es:" + Cobro );
 document.write("Total es:" + Cobro)