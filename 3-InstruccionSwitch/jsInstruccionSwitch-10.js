
//Alizon Gamboa
function mostrar()
{
	var estacionIngresada = document.getElementById('txtIdEstacion').value;
	var destinoIngresado = document.getElementById('txtIdDestino').value;

	switch (estacionIngresada)
	{
		case "Invierno" :
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default :
					alert("No se viaja");
					break;			
			}
			break
		case "Verano" :
			switch (destinoIngresado)
			{
				case "Cataratas" :
				case "Mar del plata" :
					alert("Se viaja");
					break;
				default :
					alert("No se viaja");
					break;
			}
			break
		case "Primavera" :
			switch (destinoIngresado)
			{
				case "Bariloche" :
					alert("No se viaja")
					break ;
				default :
					alert("Se viaja");
					break;	
			}
			break
		case "Otoño" :
			switch (destinoIngresado)
			{
				case "Cordoba" :
				case "Mar del plata" :
				case "Cataratas":
				case "Bariloche":
					alert("Se viaja");
					break ;	
			}
			break
			
	}
}//FIN DE LA FUNCIÓN