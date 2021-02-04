/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno  txtIdNumeroDos

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

	alert(mensaje); //entre parentesis va lo que yo quiero que se muestre  
	//aler(numeroUno+numeroDos)//aca estamos concatenando
	//alert("la suma es : "+(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value)));

	
}

