function mostrar()
{
	var producto;
	var marcaDelProducto;
	var marcaMasPesada;  
	var pesoDelProducto;
	var temperatura;
	var contadorTemPares; //% 2 ==0
	var pesoMax;
	var pesoMin; 
	var contadorTemMenos0grados; 
	var promedioDelPeso;
	var acumuladorDePeso; 
	var contadorDePeso; 
	var banderaDelPrimero;
	var respuesta;
	
	respuesta= "Si";
	contadorTemPares=0;
	contadorTemMenos0grados=0
	acumuladorDePeso=0
	contadorDePeso=0; 

	banderaDelPrimero=0; 
  

	while (respuesta == "Si") { //hasta qe el usuario quiera

		producto = prompt("Ingrese un producto "); 
		marcaDelProducto= prompt ("Ingrese la marca del producto");

		alert ("Usted ingreso: " + producto+ ". Y su marca es: " + marcaDelProducto);

		pesoProducto=prompt ("Ingrese peso del producto"); //Peso del producto 
		pesoProducto=parseInt(pesoProducto);

	while (isNaN(pesoProducto)==true || pesoProducto <1 || pesoProducto > 100) 
	{
		pesoProducto= prompt ("ERROR: Ingrese peso del producto (Debe ser mayor a 1  y menor a 100"); 
		pesoProducto=parseInt(pesoProducto);
	}

	contadorDePeso = contadorDePeso+1; 
	acumuladorDePeso=acumuladorDePeso +1; 


	if (banderaDelPrimero==0 )
	{
		pesoMax=pesoProducto;
		pesoMin=pesoProducto;
		marcaMasPesada=pesoMax;
		banderaDelPrimero== 1; 
	} 
	else
	{
		if ( pesoProducto > pesoMax)
		{
			pesoProducto=pesoMax; 
			marcaMasPesada=pesoMax;
		}
			if (pesoProducto<pesoMin) 
			{
				pesoProducto=pesoMin; 		
			}
	}
			

	temperatura= prompt ("Ingrese temperatura de conservacion del producto seleccionado");
	temperatura=parseInt (temperatura);		

	while (isNaN(temperatura)== true || temperatura <-30 || temperatura >30 )
	{
	  	temperatura= prompt (" ERROR: Ingrese temperatura entre -30 y 30 grados inclusive ")

	} 
			
	if ( temperatura % 2 == 0) 
	{
		contadorTemPares=contadorTemPares + 1; 
	}
		if ( temperatura <0 ) 
		{ 
			contadorTemMenos0grados=contadorTemMenos0grados+1
		}

		respuesta=prompt ("Ingrese Si para continuar"); 

	}	

	promedioDelPeso =acumuladorDePeso/contadorDePeso;
   
			
		document.write( "La cantidad de temperaturas pares son: "+ contadorTemPares); 
		document.write( " La marca del producto mas pesado es : "+ marcaMasPesada ); 
		document.write( " La cantidad de productos que se conservan a menos de 0 grados es : "+contadorTemMenos0grados); 
		document.write( " El promedio del peso de todos los productos: "+promedioDelPeso); 
		document.write(" El peso máximo es : " + pesoMax); 
		document.write(" El peso minimo es: " + pesoMin); 

	

}
