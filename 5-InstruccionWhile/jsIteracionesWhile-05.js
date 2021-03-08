/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	while(isNaN(sexoIngresado==true))
	{
		sexoIngresado=prompt("Ingrese f o m nuevamente por favor");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN