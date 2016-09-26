window.addEventListener("load",function(){
var boton = document.getElementById("comenzar");	
var llegadaSpider=document.getElementById("final");	
var inicioSpider=document.getElementById("inicio");

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
