/*
Alizon Gamboa
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
 	var temperaturaF;
 	var temperaturaC;

 	temperaturaF= document.getElementById('txtIdTemperatura').value;
 	temperaturaC= (temperaturaF - 32) / 1.8;

 	temperaturaF= parseInt(temperaturaF);

 	alert(temperaturaF + " grados Farhenheit equivalen a " + temperaturaC + " grados Centigrados");

}

function CentigradosFahrenheit () 
{
	var temperaturaF;
 	var temperaturaC;

 	temperaturaC= document.getElementById('txtIdTemperatura').value;
 	temperaturaF= temperaturaC * 1.8 + 32;

 	temperaturaC= parseInt(temperaturaC);

 	alert(temperaturaC + " grados Centigrados equivalen a " + temperaturaF + " grados Fahrenheit");



}
