
//Alizon Gamboa
function mostrar()
{
	var destinoIngresado = document.getElementById('txtIdDestino').value;
	//alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case ("Bariloche"):
		case ("Ushuaia"):
			alert("FRIO");
			break;			
		default :
			alert("CALOR");
			break;
	}
			
			
		


}//FIN DE LA FUNCIÓN