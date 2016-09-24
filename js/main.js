window.addEventListener("load", function(){ 
    var enviar = document.getElementById("enviar");
    enviar.addEventListener("click", function(){
    var nombreIngresado = document.getElementById("nombre-ingresado");
    var name = document.getElementById("nombre").value;
        nombreIngresado.innerHTML = name;
        
    });
    
        
});
