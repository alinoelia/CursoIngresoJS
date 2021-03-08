function mostrar()
{
	//tomo la edad  
	var edad;
	var valorDeVerdad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad==15)
	{
		alert("niña bonita");
	}

	console.log("la edad ingresada es: " + edad);

	/*
	if(edad==15) //me tiene que devolver y valor de verdad El if detecta falsos o cero, cualquier otra cosa que no sea cero es verdadero
		//no va el ; porque sino se cierrra el if
	{
		alert("niña bonita");  //este alert funciona con la inscripcion if y para funcionar tiene que estar tabulado
		// funciona tambien sin las llaves pero no estaria correcto ya que solo afecta al primer renglon
	}
	*/

	valorDeVerdad= edad==15;
	console.log(valorDeVerdad);

	if(valorDeVerdad) // el numero 1 es un verdadero
	{
		alert("verdadero");

	}
	else
	{
		alert("falso");
	}

	/*
	verdaderos:
		1
		"1"
		"0"
		"cualquier texto"
		true
	falsos;
		0
		false
	*/

}//FIN DE LA FUNCIÓN