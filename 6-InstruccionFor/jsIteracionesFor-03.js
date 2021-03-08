function mostrar()
{

/*

al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

*/


	let repeticiones;
	let contador;

	repeticiones = prompt("Ingrese la cantidad de repeticiones:");
	repeticiones = parseInt(repeticiones);


	for(contador = 1; repeticiones > (contador-1); contador++ )
	{
		console.log("Hola UTN FRA #" + contador);
	}
	




}//FIN DE LA FUNCIÓN