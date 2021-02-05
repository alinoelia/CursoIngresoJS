/*
Alizon Gamboa
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ 
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

}
