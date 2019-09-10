//El boton que abre el input para escribir la nueva tarea
let moreButton = document.getElementById('moreButton');

moreButton.addEventListener('click', function() {
    let principalBoxNewInput = document.getElementById('principal-box-new-input');
    principalBoxNewInput.classList.toggle('principal-box-new-input-show');
});

//El boton de "ok" de la nueva tarea. Ejecuta addCard() y crea una carta de tarea
let confirmButton = document.getElementById('confirmButton');
confirmButton.addEventListener('click', function() {
    let title = document.getElementById('tasktitle').value;
    let description = document.getElementById('taskdescription').value;

    let card = addToDoBox(title, description);
    let pendientes = document.getElementById('pendientes');

    apendizar(card, pendientes);
});

//Function de nueva tarjeta
function addToDoBox(title, description) {
    let newToDoBox = crearEtiqueta('div', 'to-do-box');
    let toDoBoxInfo = crearEtiqueta('div', 'to-do-box-info');
    apendizar(toDoBoxInfo, newToDoBox);

    let toDoBoxTitle = crearEtiqueta('h3', 'to-do-box-title');
    toDoBoxTitle.innerText = title;
    apendizar(toDoBoxTitle, toDoBoxInfo);

    let toDoBoxText = crearEtiqueta('p', 'to-do-box-text');
    toDoBoxText.innerText = description;
    apendizar(toDoBoxText, toDoBoxInfo);

    let toDoBoxIcons = crearEtiqueta('div', 'to-do-box-icons');
    apendizar(toDoBoxIcons, newToDoBox);

    let checkIcon = crearEtiqueta('i', 'fas');
    checkIcon.classList.add('fa-check-circle');
    checkIcon.addEventListener('click', tareaTerminada);
    apendizar(checkIcon, toDoBoxIcons);

    let trashIcon = crearEtiqueta('i', 'fas');
    trashIcon.classList.add('fa-trash-alt');
    trashIcon.addEventListener('click', eliminarTarea);
    apendizar(trashIcon, toDoBoxIcons);

    return newToDoBox;
}

//Function para crear etiquetas, solo le paso de valor la etiqueta y el nombre de la clase
function crearEtiqueta(etiqueta, clase) {
    let elemento = document.createElement(etiqueta);
    elemento.classList.add(clase);
    return elemento;
}

//Function para apendizar etiquetas
function apendizar(hijo, padre) {
    return padre.appendChild(hijo);
}

//Function para agregar la nueva tarjeta a tarea terminadas
function tareaTerminada() {
    let padre = this.parentNode.parentNode;
    padre.classList.add('to-do-box-completed');
    let tareasTerminadas = document.getElementById('terminadas');
    apendizar(padre, tareasTerminadas);

    return padre;
}

// Function para eliminar la tarjeta
function eliminarTarea() {
    let padre = this.parentNode.parentNode;
    let listaPadre = this.parentNode.parentNode.parentNode;
    return listaPadre.removeChild(padre);
}
