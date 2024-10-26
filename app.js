// script.js

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
  
      // Crear un nuevo elemento de lista
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
  
      // Crear botón de eliminar
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.className = "delete-btn";
      deleteButton.onclick = () => taskList.removeChild(listItem);
  
      // Añadir el botón al elemento de la lista
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
  
      // Limpiar el campo de entrada
      taskInput.value = "";
    }
  }
  