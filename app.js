;// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*  Amigo secreto
En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.
*/

// Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = []

/*
Implementa una función para agregar amigos
Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
Tareas específicas:
 

Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
*/

function agregarAmigo() {
    let amigosIngresado = document.getElementById('amigo').value;
    
    //console.log(amigosIngresado);
    if (amigosIngresado != ""){
        amigos.push(amigosIngresado);           
        actualizarLista();       
    }else{
        alert("Por favor ingrese un nombre valido");
     }
     limpiarTextBox();
     //console.log(amigosIngresado);
    return;
}


function limpiarTextBox(){
    document.querySelector('#amigo').value ="";
}


/* 
Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/
function actualizarLista() {
      const lista = document.getElementById("listaAmigos");
      lista.innerHTML = ""; // Limpiar la lista actual
      amigos.forEach(amigosIngresado => {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = amigosIngresado;
        lista.appendChild(elementoLista);
      });
    }

/* 
Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:

Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
*/     

    function sortearAmigo() {
      if (amigos.length > 0) {
        const amigoAleatorio = Math.floor(Math.random() * amigos.length)+1;
        const amigoSecreto = amigos[amigoAleatorio];
        document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSecreto}`;
      } else {
        document.getElementById("resultado").textContent = "Agrega al menos un amigo primero.";
      }
    }