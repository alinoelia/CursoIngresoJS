function mostrar()
{
	/*var contador;
	var numeroIngresado;
	var contadorCantidadDePares;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);	
	contadorCantidadDePares=0;

	for(contador=1;contador>0;contador++)
	{
		numeroIngresado=numeroIngresado-1;
		if(numeroIngresado%2==0)
		{
			console.log(numeroIngresado);
			contadorCantidadDePares=contadorCantidadDePares+1;
		}
		if(numeroIngresado==1)
		{
			break;
		}
	}
	//console.log("La cantidad de numero pares entre el número ingresado y el 1 es de: "+contadorCantidadDePares);
	alert("La cantidad de numero pares entre el número ingresado y el 1 es de: "+contadorCantidadDePares);
	*/

	var cantidadDePares;
	var numeroIngresado;
	var contador;
	var mensaje;


	cantidadDePares=0;

	numeroIngresado=prompt("Ingrese un número mayor a 1");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true || numeroIngresado<1)
	{
		numeroIngresado=prompt("Error, ingrese un número mayor a 1");
		numeroIngresado=parseInt(numeroIngresado);
	}

	for(contador=1;contador<numeroIngresado;contador++)
	{
		
		/*
		if(contador%2==0) // es número par
		{
			cantidadDePares++;
			console.log(contador);
		} */
		if(contador%2==1) //en busca de números impares
		{
			continue;
		}

		cantidadDePares++;
		console.log(contador);
	}

	mensaje="La cantidad de números pares es: " + cantidadDePares;

	alert(mensaje);

}//FIN DE LA FUNCIÓN