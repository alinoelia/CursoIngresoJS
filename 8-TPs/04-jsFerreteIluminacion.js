/* Alizon Gamboa
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

 	var cantLamparas;
 	var marca;
 	var precioBruto;
 	var porcentaje;
 	var mensaje;
 	var ingresosBrutos;

 	cantLamparas=document.getElementById('txtIdCantidad').value;
 	cantLamparas=parseInt(cantLamparas); 

 	marca = document.getElementById('Marca').value;
 	precioBruto = cantLamparas*35;

 	porcentaje=0;

 	ingresosBrutos=precioBruto*10/100;

 	if(cantLamparas>5)
 	{
 		porcentaje=50;
 		//precioBruto= precioBruto - (precioBruto*50/100);
 	}
 	else
 	{
 		if (cantLamparas==5)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				porcentaje= 40;
 				//precioBruto= precioBruto - (precioBruto*40/100);
 			}
 			else
 			{
 				porcentaje=30;
 				//precioBruto= precioBruto - (precioBruto*30/100);
 			}
 		}
 		else
 		{
 			if(cantLamparas==4)
 			{
 				if(marca=="FelipeLamparas" && "ArgentinaLuz")
 				{
 					porcentaje=25;
 				}else
 				{
 					porcentaje=20;
 				}
 			}
 			else
 			{
 				if(cantLamparas==3)
 				{
 					if(marca=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}
 					else
 					{
 						if(marca=="FelipeLamparas")
 						{
 							porcentaje=10;
 						}
 						else
 						{
 							porcentaje=5;
 						}
 					}
 			    }
 			}
 		}
 	}


	// hago el calculo de las lamparas y las cantidades multiplicando
    precio=lampara*cantidadLamparas
    
    // hago el descuento, es una regla de 3 simples
    precio=precio*((100-descuento)/100);

    // acá evaluo si el precio es mayor a 120, llegado el caso debo agregar ingresos brutos
    if(precio>120)
    {
        //Esta linea le deja el %10 del valor que debería pagar
        ingresosBrutos=precio*0.10;

        //Acá lo que hago es al precio sumarle ingresos brutos
        precio=precio+ingresosBrutos;

        //preparo el mensaje
        mensaje="IIBB Usted pago $"+precio+" , siendo $"+ingresosBrutos+" el impuesto que se pagó"


        //notifico al usurio del mensaje, con el alert()
        alert(mensaje)
    }
    
    document.getElementById("txtIdprecioDescuento").value=precio;

	

} 

/*
 	var cantLamparas;
 	var descuento;
 	var precio;


 	cantLamparas=document.getElementById('txtIdCantidad').value;
 	cantLamparas=parseInt(cantLamparas);

 	precio= 35 * cantLamparas;


 	if(cantLamparas>5)
 	{
 		descuento= precio * 0.5;
 		precio= precio - descuento;

 	}
 	else
 	{
 		descuento= precio;
 	}


 	document.getElementById('txtIdprecioDescuento').value=descuento;
 	*/


/*precioBruto= precioBruto - (precioBruto*porcentaje/100)

	document.getElementById('txtIdprecioDescuento').value=precioBruto;


 	if(precioBruto>120)
	{
		mensaje="Usted pago " ingresosBrutos + precioBruto + "siendo de IIBB " + ingresosBrutos;
		alert(mensaje);
		
	}*/