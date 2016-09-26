window.addEventListener("load", function(){ 
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
    
    function DragDrop(drag, drop){
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
    DragDrop("drag1", "drop1");
    DragDrop("drag2", "drop2");
    DragDrop("drag3", "drop3");
    DragDrop("drag4", "drop4");
    
/*    finaliza funcion*/
});