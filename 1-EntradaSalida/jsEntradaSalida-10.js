/*
Alizon Gamboa
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ 
	/*
	var sueldo;
	var descuento;
	var resultado;
	var porcentaje;
	

	sueldo= document.getElementById('txtIdImporte').value;
	sueldo= parseInt(sueldo);
	
	

	porcentaje= prompt("Ingrese porcentaje deseado, por favor");
	porcentaje= parseInt(porcentaje);

	descuento= (sueldo * porcentaje) / 100;


	resultado= sueldo - descuento;


	document.getElementById('txtIdResultado').value =resultado;
	*/

	var importeProducto;
	var nombreProducto;
	var porcentajeDescuento;
	var descuento;
	var precioFinal;
	var mensaje;

	importeProducto = txtIdImporte.value;
	importeProducto =parseFloat(importeProducto);

	nombreProducto = prompt("Ingrese el nombre del producto");
	
	porcentajeDescuento = 25 //prompt("Ingrese el porcentaje de descuento");
	porcentajeDescuento = parseInt(porcentajeDescuento);

	descuento = importeProducto * porcentajeDescuento/100;

	precioFinal = importeProducto - descuento;

	mensaje = "Usted compro un " + nombreProducto + " con " + porcentajeDescuento;
	mensaje+= "% de descuento, el precio final es " + precioFinal;

	txtIdResultado.value = mensaje;

}
