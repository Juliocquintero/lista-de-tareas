

(function () {
    var lista = document.getElementById ("lista");
    var tareaInput = document.getElementById ("tarea-input");
    var tareaBtn = document.getElementById ("tarea-button");
    var ordenBtn = document.getElementById ("orden-button")

    //funciones
    var agregarTarea = function () {
        var tarea = tareaInput.value, 
        nuevaTarea = document.createElement ("li"),
        enlace = document.createElement ("a"),
        contenido = document.createTextNode (tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            tareaInput.className = "tarea-input error";
            return false; 
        }

        //le agregamos contenido al enlace
        enlace.appendChild(contenido);
        //le agregamos el hfref al enlace (a)
        enlace.setAttribute ("href", "#");
        //introducimos el enlace a el li
        nuevaTarea.appendChild (enlace);

        var primerElemento = document.getElementsByTagName("li")[0];

        //agregamos la lista al ul
        lista.insertBefore(nuevaTarea, primerElemento);

        tareaInput.value = "";

        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener ("click", function () {
                this.parentNode.removeChild(this)
                
            });
            
        }

    };
    var comprobarInput = function () {
        tareaInput.className = "tarea-input";
        tareaInput.setAttribute ("placeholder", "Ingresa aquí tu tarea")
    };
    var eliminarTarea = function () {
        this.parentNode.removeChild (this)
    
    };      


    //eventos

    // ordenar lista
    ordenBtn.addEventListener("click", function () {
        if (lista.className === "lista"){
            lista.className = "lista ordenada";
        }
        else {
            lista.className = "lista";
        }  
    })

    //agregar tarea
    tareaBtn.addEventListener("click", agregarTarea);
    

    //comprobar input
    tareaInput.addEventListener("click", comprobarInput);


    //eliminar tarea
    for (var i = 0; i <= lista.children.length -1; i++){
        lista.children[i].addEventListener ("click", eliminarTarea);
    }
    

}())

