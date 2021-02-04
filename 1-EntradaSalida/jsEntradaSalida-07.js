/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	//ingreso
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	//parseInt(numeroUno); //esta mal
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	//fin de ingreso

	//inicio operar
	resultado= numeroUno+numeroDos;
	mensaje= "la suma es :" +resultado;
	//mostrar

	alert(mensaje);

}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado= numeroUno-numeroDos;
	mensaje= "la resta es :" + resultado; //el signo + aca sirve para concatenar

	alert(mensaje);

	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado= numeroUno * numeroDos;
	mensaje= "la producto es :" + resultado;

	alert(mensaje);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado= numeroUno / numeroDos;
	mensaje= "el cociente es :" + resultado;

	alert(mensaje);
}

