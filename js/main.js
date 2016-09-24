window.addEventListener("load", function(){
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
    boton2.addEventListener("click", function (){
        pregunta1.style.display = "none";
        pregunta2.style.display = "block";
    });
})