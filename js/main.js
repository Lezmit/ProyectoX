window.addEventListener("load", function(){










































































































































































































































































































DragDrop("drag", "drop1");
DragDrop("drag2", "drop1");


    inicio = document.getElementById("inicio");
    boton = document.getElementById("btnTest");
    boton2 = document.getElementById("btnTest2");
    pregunta1.style.display = "none";
    pregunta2.style.display = "none";
    pregunta1 = document.getElementById("pregunta1");
    pregunta2 = document.getElementById("pregunta2");
    boton.addEventListener("click", function (){
        inicio.style.display = "none";
        pregunta1.style.display = "block";
        
    });

//Esto sirve para bloquear el clic derecho dentro de nuestra pagina e impedir que entren al inspector
document.oncontextmenu = function(){return false}

//ESTO EVITA Q EL USUARIO IMPIDA LA SELECCION Y COPIA DE TEXTO DE NUESTRA PAGINA
// Para internet Explorer
document.onselectstart = function(){return false;} 
// Para Firefox
//document.onmousedown = function(){return false;}




    boton2.addEventListener("click", function (){
        pregunta1.style.display = "none";
        pregunta2.style.display = "block";
    });



    function DragDrop(drag, drop) {

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






})