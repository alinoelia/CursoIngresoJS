/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;





	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;
	var valorDeVerdad;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos =1;
	respuesta = 'si';

	while (respuesta == "si")
	{
		contador = contador + 1;
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		valorDeVerdad = isNaN(numero);
	}

}//FIN DE LA FUNCIÓN