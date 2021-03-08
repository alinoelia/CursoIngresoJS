/*Al presionar el botón pedir 5 números e informar la suma
 acumulada y el promedio.*/
 
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un numeroIngresado:" + contador);
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error, ingrese un numero nuevamente: " + contador);
			numeroIngresado=parseInt(numeroIngresado);
		}
		acumulador=acumulador+numeroIngresado;
	}
	
	promedio =acumulador/contador;
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN