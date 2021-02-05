/*
Alizon Gamboa
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt(precioUno);
	precioDos= parseInt(precioDos);
	precioTres= parseInt(precioTres);

	resultado= precioUno + precioDos + precioTres;

	alert(resultado);


}

function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt(precioUno);
	precioDos= parseInt(precioDos);
	precioTres= parseInt(precioTres);

	resultado= (precioUno + precioDos + precioTres) / 3;

	alert(resultado);


}

function PrecioFinal () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var iva;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt(precioUno);
	precioDos= parseInt(precioDos);
	precioTres= parseInt(precioTres);

	iva=((precioUno + precioDos + precioTres) * 21) / 100;
	iva= parseInt(iva);

	resultado= (precioUno + precioDos + precioTres) + iva;

	alert("El precio con el IVA21% es de: " + resultado);



}