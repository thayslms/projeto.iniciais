function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button onclick="deleteTask(this)">X</button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function toggleTask(element) {
    element.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}