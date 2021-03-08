
//Alizon Gamboa
function mostrar()
{
	var estacionIngresada = document.getElementById('txtIdEstacion').value;
	var destinoIngresado = document.getElementById('txtIdDestino').value;
	var estadia;
	var porcentaje;
	var mensaje;

	estadia = 15000;
	porcentaje = 0;

	switch (estacionIngresada)
	{
		case "Invierno" :
			switch (destinoIngresado)
			{
				case "Bariloche" :
					porcentaje = 20;
					break;
				case "Mar del plata" :
					porcentaje = -20;
					break;
				default :
					porcentaje = -10;
					break;		
			}
		case "Verano" :
			switch (destinoIngresado)
			{
				case "Bariloche" :
					porcentaje = -20;
					break;
				case "Mar del plata" :
					porcentaje = 20;
					break;
				default :
					porcentaje = 10;
					break;
			}
		case "Primavera" :
		case "Otoño" :
			switch (destinoIngresado)
			{
				case "Cordoba" :
					break ;
				default :
					porcentaje = 10;
					break;	
			}
			
	}

	mensaje = estadia + (estadia * porcentaje/100) ;
	alert(mensaje);


	//alert(estacionIngresada);


}//FIN DE LA FUNCIÓN