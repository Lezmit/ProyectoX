window.addEventListener("load", function(){
    var boton = document.getElementById("comenzar");	
    var llegadaSpider=document.getElementById("final");	
    var inicioSpider=document.getElementById("inicio");
    var enviar = document.getElementById("enviar");
    var caja = document.getElementById("cambio-color");
    enviar.addEventListener("click", function(){
        var nombreIngresado = document.getElementById("nombre-ingresado");
        var name = document.getElementById("nombre").value;
        nombreIngresado.innerHTML = name;    
    });
    var nuevaCaja = function(){
        caja.style.background = "red";
    }
    caja.addEventListener("mouseover",nuevaCaja);
    var nuevaCaja = function(){
        caja.style.background = "#FE5443";
    }
    caja.addEventListener("mouseout",nuevaCaja);
    
    /*empieza otra funcion*/
    
    function dragDrop(drag, drop){
        var drag = document.getElementById(drag);
        var drop = document.getElementById(drop);
        drag.ondragstart = function(e){
            //Guardamos el id del elemento para transferirlo al elemento drop
            //Content es una clave que nos permitirá acceder al valor asignado
            e.dataTransfer.setData("content", e.target.id);
        }
        drop.ondragover = function(e){
            //Cancelar el evento que impide que podamos soltar el elemento drag
            e.preventDefault();
        }
        drop.ondrop = function(e){
            //Obtenemos los datos a través de la clave content, en este caso el id
            var id = e.dataTransfer.getData("content");
            e.target.appendChild(document.getElementById(id));
            var parrafo = document.getElementById("parrafo");
            parrafo.style.display="none";
        }
    };   
    dragDrop("drag12", "drop122");
    dragDrop("drag22", "drop22");
    dragDrop("drag32", "drop3");
    dragDrop("drag4", "drop4");
    
    /*finaliza funcion*/
    
    /*inicia juego 2*/
    
    var inicio = document.getElementById("inicio");
    var botonInicio = document.getElementById("btnTest");
    var botonTest = document.getElementById("listo");
    var pregunta1 = document.getElementById("pregunta1");
    var pregunta2 = document.getElementById("pregunta2");
    botonTest.addEventListener("click", function (){
        dragDrop("drag", "drop1");
        dragDrop("drag2", "drop1");
        dragDrop("drag3", "drop1");
    });
/*
    //Esto sirve para bloquear el clic derecho dentro de nuestra pagina e impedir que entren al inspector
  /*  document.oncontextmenu = function(){return false}
*/
    //ESTO EVITA Q EL USUARIO IMPIDA LA SELECCION Y COPIA DE TEXTO DE NUESTRA PAGINA
    // Para internet Explorer
  /*  document.onselectstart = function(){return false;} 
    // Para Firefox*/
    //document.onmousedown = function(){return false;}


    botonTest.addEventListener("click", function (){
        var no = document.getElementById("no");
        var si = document.getElementById("si");
        var msj = document.getElementById("mensaje");


        //segundo ejercicio 
        var pelota = document.getElementById("pelota");
        pelota.addEventListener("click", function(){
            pelota.style.display= "none";
            no.style.display= "none";
            msj.innerHTML="CORRECTO";
            si.style.display= "block";

        });

        var pera = document.getElementById("pera");
        pera.addEventListener("click", function(){
            //pera.style.width= "300px";
            //pera.style.heigth= "300px";
            si.style.display= "none";
            msj.innerHTML="INCORRECTO";
            no.style.display= "block";
        });

        var apple = document.getElementById("apple");
        apple.addEventListener("click", function(){
            //pera.style.width= "300px";
            //pera.style.heigth= "300px";
            si.style.display= "none";
            msj.innerHTML="INCORRECTO";
            no.style.display= "block";
        });

        var uva = document.getElementById("uva");
        uva.addEventListener("click", function(){
            si.style.display= "none";
            msj.innerHTML="INCORRECTO";
            no.style.display= "block";
        });

    });

    function dragDrop(drag, drop) {
        var drag = document.getElementById(drag);
        var drop = document.getElementById(drop);
        drag.ondragstart = function(e)
        {
            //Guardamos el id del elemento para transferirlo al elemento drop
            //Contenido es una clave que nos permitirá acceder al valor asignado
            e.dataTransfer.setData("contenido", e.target.id);
        }
        drop.ondragover = function(e){
            //Cancelar el evento que impide que podamos soltar el elemento drag
            e.preventDefault();
        }
        drop.ondrop = function(e){
            //Obtenemos los datos a través de la clave contenido, en este caso el id
            var id = e.dataTransfer.getData("contenido");
            e.target.appendChild(document.getElementById(id));
        }
    }  
    
/*finaliza juego 2*/
/*inicia juego 3*/ 
    var boton = document.getElementById("comenzar");
	boton.addEventListener("click",function(){
		llegadaSpider.style.display="none";
		inicioSpider.classList.add("caminando");
		inicioSpider.classList.remove("partida");
        var contenedor=document.getElementById("contenedor");
        contenedor.addEventListener("keydown",function(event){
			var x = inicioSpider.offsetLeft;
			var y = inicioSpider.offsetTop;
			var m = llegadaSpider.offsetLeft;
			var n = llegadaSpider.offsetTop;
			var tecla; 
			if(event==null){ tecla=window.event.keyCode;} //recibe la tecla que fue presionada
				else{ tecla=event.keyCode;} 				  // para funcionar en todos los navegadores)
				//switch para identificar una tecla presionada 
				switch(tecla){ 		
					//derecha
					case 39:	
							if (x<455) {	
							x=x+3;
							inicioSpider.style.left=x+"px";	
							}if(x>454){
							llegadaSpider.style.display="inline-block";
							llegadaSpider.style.position="absolute";
							inicioSpider.style.display="none";
                            alert("muy bien culminaste");
						     }    
							break;
				/*	//izquierda
					case 37: 		
							x=x-3;
							inicioSpider.style.left=x+"px";
							break;		
					//arriba
					case 38: 
							y=y-3;
							inicioSpider.style.top=y+"px";				 
							break;
					//abajo
					case 40:
							y=y+3;
							inicioSpider.style.top=y+"px";				
							break;
				*/		
                }
			});
	});
});	
