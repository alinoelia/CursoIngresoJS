
//Alizon Gamboa
function mostrar()
{
	var destinoIngresado =document.getElementById('txtIdDestino') .value;
	//alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case ("Bariloche"):
			alert("Oeste");
			break;
		case ("Cataratas"):
			alert("Norte");
			break;
		case ("Mar del plata"):
			alert("Este");
			break;
		case ("Ushuaia"):
			alert("Sur");
			break;
		default :
			break;
	}

}//FIN DE LA FUNCIÓN