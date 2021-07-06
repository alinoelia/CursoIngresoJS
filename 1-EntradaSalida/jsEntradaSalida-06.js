/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno  
	//txtIdNumeroDos

	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	//ingreso
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	//fin de ingreso

	//inicio operar
	resultado= numeroUno+numeroDos;
	mensaje= "La suma es: " + resultado;

	//mostrar
	alert(mensaje);  

}

