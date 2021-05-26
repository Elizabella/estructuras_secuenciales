
 /**                          total dias=5dias
  * hotel = 50               250           
  * comida= 20 soles         100
  * otros gastos=100         500
  * total de un dia= 170     
  *         total de viajes   850
  * Entrada: 
CHD= costo de Hotel por dia
CCD= costo de comida por dia
TD= total de dias
  * Salida: 
TGH= total gasto en hotel = costo de hotel * total de dias
TGC= total del gasto en comida = costo de comida por dia * total de dias
TOG= total en otros gastos = 100 * total de dias
GTV= gasto total en el viaje = total gasto en hotel + Total de gasto de comida + total en otros gastos
  */


  let CHD=0, CCD= 0, TD=0,TGH=0,TGC=0, TOG=0, GTV=0 ;
 CHD= +prompt("Ingrese el costo de hotel por dia: " );
 CCD= +prompt("Ingrese el costo de comida por dia: " );
 TD= +prompt("Ingrese el total de dia: " );
 
 TGH=CHD*TD;
 TGC=CCD*TD;
 TOG=100*TD; 
 GTV=TGH+TGC+TOG;
 
console.log("Total gasto en hotel: " + TGH );
document.write("Total gasto en hotel: " + TGH )
 console.log("Total del gasto en comida: " + TGC );
 document.write("<br>Total del gasto en comida: "+ TGC )
 console.log("Total en otros gastos: " + TOG );
document.write("<br>Total en otros gastos: "+ TOG )
 console.log("Gasto total en el viaje: " + GTV );
 document.write("<br>Gasto total en el viaje: "  + GTV )