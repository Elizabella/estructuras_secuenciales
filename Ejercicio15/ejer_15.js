/**
 * ENTRADA:
 * V: VOLTAJE Y I: CORRIENTE EN AMPERIO
 * R: RESISTENCIA OHMIO= 4 OHMIO
 * SALIDA:
 * P: POTENCIA
 */
let V=0, R= 4, I=0, P=0;
 
 V= +prompt("Ingrese un valor de voltaje: " );
 I= +prompt("Ingrese un valor de corriente en amperio: " );
 
V=R*I;
P=V*I;
 
 console.log("Calcular la potencia electrica es:" + P );
 document.write("Calcular la potencia electrica es:" + P);
 