function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	estadoIngresado=document.getElementById('estadoCivil').value;

	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada > 18 && estadoIngresado == "Soltero")
	{
		alert("Es soltero y no es menor.");	
	}
	else
	{
		alert("NO HACER NADA");
	}
	


}//FIN DE LA FUNCIÓN