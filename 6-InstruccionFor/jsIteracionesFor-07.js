function mostrar()
{

	var numeroIngresado;
	var cantidadDivisores;
	var contador;

	cantidadDivisores=0;

	numeroIngresado=prompt("Ingrese un número mayor a 1");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true || numeroIngresado<1)
	{
		numeroIngresado=prompt("Error, ingrese un número mayor a 1");
		numeroIngresado=parseInt(numeroIngresado);
	}


	for(contador=1;contador<=numeroIngresado;contador++)
	{
		if(numeroIngresado%contador==0) 
		{
			cantidadDivisores++;
			console.log(contador);
			// alert(contador);
		}
	}

	var mensaje="La cantidad de números divisores es: " + cantidadDivisores;

	alert(mensaje);
	console.log(mensaje);


	let contador;
	let numeroIngresado;
	let contadorDivisores;

	contadorDivisores=0;

	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true)
	{
		numeroIngresado = prompt("ERROR: Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
	}

	for(contador=0;contador<numeroIngresado;contador++)
	{
		if(numeroIngresado%contador==0)
		{
			console.log("El divisor es #" +contador);
			contadorDivisores++;
		}
	}

	console.log("En total hay #" +contadorDivisores+ " divisores del número " +numeroIngresado);

}//FIN DE LA FUNCIÓN