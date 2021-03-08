/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	
	
	/*
	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;


	//declaración de variables
	var banderaMenorPar;
	var banderaMayorNegativo;
	var numeroIngresado;
	var numeroMenorPar;
	var numeroMayorNegativo;
	var respuesta;
	var mensajeMenorPar;
	var mensajeMayorNegativo;

	//inicialización de variables
	banderaMenorPar=true;
	banderaMayorNegativo=true;
	respuesta='si';


	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error, Ingrese un número:" );
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(numeroIngresado%2==0)//número par
		{
			if(banderaMenorPar==true)
			{
				banderaMenorPar=false;
				numeroMenorPar=numeroIngresado;
			}
			else
			{
				if(numeroIngresado<numeroMenorPar)
				{
					numeroMenorPar=numeroIngresado;
				}
			}
		}

		if(numeroIngresado<0)
		{
			if(banderaMayorNegativo==true)
			{
				banderaMayorNegativo=false;
				numeroMayorNegativo=numeroIngresado;
			}
			else
			{
				if(numeroIngresado>numeroMayorNegativo)
				{
					numeroMayorNegativo=numeroIngresado;
				}
			}
		}

		respuesta=prompt("Si quiere seguir tipiar 'si'");
	}//fin while(respuesta=="si")
	

	if(banderaMenorPar==false)
	{
		mensajeMenorPar="El menor par es "+numeroMenorPar;
	}
	else
	{
		mensajeMenorPar="No hay números pares";
	}
	document.getElementById("txtIdMinimo").value=mensajeMenorPar;
	console.log(mensajeMenorPar);

	if(banderaMayorNegativo==false)
	{
		mensajeMayorNegativo="El mayor de los negativo es "+numeroMayorNegativo;
	}
	else
	{
		mensajeMayorNegativo="No hay números negativos";
	}
	document.getElementById("txtIdMaximo").value=mensajeMayorNegativo;
	console.log(mensajeMayorNegativo);

*/	






//declaro las variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//inicio las variables
	banderaDelPrimero="es el primero"; //inicializacion de la bandera
	respuesta= "si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		//tengo que evaluar si el numero igresado es maximo o minimo y la logica para que esto funcione es
		if(banderaDelPrimero=="es el primero") //logica de la bandera
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero=="NO, no es el primero"; //cambio de la bandera
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			// si necesito encontrar un maximo 
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
		}

		respuesta=prompt("Escriba si, si desea continuar");
	}
	//el while tiene 3 partes

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;


}//FIN DE LA FUNCIÓN