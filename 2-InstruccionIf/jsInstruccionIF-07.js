function mostrar()
{
	//tomo la edad  
	var edadIngresada;
	var estadoIngresado;
	//var mensaje;

	edadIngresada=document.getElementById('txtIdEdad').value;
	estadoIngresado=document.getElementById('estadoCivil').value;

	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada <18)
	{
		if(estadoIngresado!= "Soltero")
		{
			alert("Es muy pequeño para No ser soltero")
		}
	}

// se puede hacer de esta manera
	if(edadIngresada<18 && estadoIngresado!="Soltero")
	{
		alert("Es muy pequeño para No ser soltero")
	}
		
	
	


}//FIN DE LA FUNCIÓN