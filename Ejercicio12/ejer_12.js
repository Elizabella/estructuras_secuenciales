let preciofinal=0, preciocondescuento= 0,  Costodeobjeto;
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
 Costodeobjeto= +prompt("Ingrese el costo  de objeto es: " );
 
//  preciocondescuento= +prompt("Ingrese Cateto 2 opuesto es: " );
 

 // ¿Como mostrar el tipo de dato de una variable?
// console.log(typeof c1);
 preciocondescuento=costodeobjeto-(costodeobjeto*0.2);
preciofinal=(preciocondescuento*015) + preciocondescuento;
 
 /**
  * El uso de los backticks ( ` ) nos ayudan a concatenar
  * variables  con strings en una sola línea sin el uso del operador ( + )
  */
 console.log("El precio con descuento es:" + preciocondescuento );
 console.log("El precio final es:" +preciofinal );
 document.write("El precio con descuento es:" + preciocondescuento )
 document.write("<br>El precio final es:" +preciofinal  )