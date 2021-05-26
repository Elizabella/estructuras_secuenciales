let  MXN = 0, R_USD= 0;
 /**
  * typeof [variable] => devuelve un string con el tipo de dato 
  * de un elemento
  * Entrada: pesos mexicano (MXN)
  * Salida: dolares (UDS)
  */
 console.log(typeof c1);
 /**
  * OJO: Anteponer el símbolo "+" a una instrucción o variable la
  * convierte automáticamente en un número.
  */
 MXN= +prompt("Ingresa una cantidad en pesos mexicanos: ");
 

 // ¿Como mostrar el tipo de dato de una variable?
 console.log(typeof c1);
 
 R_USD= (MXN)/19.80;
 
 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log( MXN+" Pesos convertido a dolares es: " + R_USD);
 document.write( MXN+ " Pesos convertido a dolares es: " +R_USD)
 