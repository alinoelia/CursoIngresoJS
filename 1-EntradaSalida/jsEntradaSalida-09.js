/*
Alizon Gamboa
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;
	var porcentaje;
	

	sueldo= document.getElementById('txtIdSueldo').value;
	sueldo= parseInt(sueldo);
	
	//aumento= sueldo * 10 /100;
	

	porcentaje= prompt("Ingrese porcentaje deseado, por favor");
	porcentaje= parseInt(porcentaje);

	aumento= (sueldo * porcentaje) / 100;


	resultado= aumento + sueldo;


	document.getElementById('txtIdResultado').value =resultado;

 	//console.log(resultado);


}

