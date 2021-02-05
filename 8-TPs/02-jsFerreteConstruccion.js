/*
Alizon Gamboa
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo= document.getElementById('txtIdLargo').value;
	ancho= document.getElementById('txtIdAncho').value;

	largo= parseInt(largo);
	ancho= parseInt(ancho);

	perimetro= (ancho + largo) * 2;

	alambre= (perimetro * 3);

	alert("Se necesitan comprar " + alambre + " metros de alambre")

}

function Circulo ()
{
	var perimetro;
	var radio;
	var alambre;
	const PI = 3.14;

	radio= document.getElementById('txtIdRadio').value;
	radio= parseInt(radio);

	perimetro= 2 * PI * radio;

	alambre= perimetro * 3;

	alert("Se necesitan comprar " + alambre + " metros de alambre");




}

function Materiales () 
{
	
	var largo;
	var ancho;
	var superficie;
	var cemento;
	var cal;

	largo= document.getElementById('txtIdLargo').value;
	ancho= document.getElementById('txtIdAncho').value;

	largo= parseInt(largo);
	ancho= parseInt(ancho);

	superficie= largo * ancho;

	cemento= superficie * 2;
	cal= superficie * 3;

	alert("Para un contrapiso de " + superficie + "m2 necesito comprar " + cemento + " bolsas de cemento y " + cal+ " bolsas de cal");







}