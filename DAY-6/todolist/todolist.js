var addTaskButton = document.getElementById("addTaskButton")
var taskInput = document.getElementById("taskInput")
var taskList = document.getElementById("taskList")

function addTask() {
    var taskText = taskInput.value.trim()
    if (taskText == "") {
        alert("Invalid Input (Empty Input)");
        return
    }

    var listItem = document.createElement('li');
    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete"


    listItem.appendChild(taskSpan)
    listItem.appendChild(deleteButton)

    taskList.appendChild(listItem)

    deleteButton.addEventListener('click', deleteTask)


}


addTaskButton.addEventListener('click', addTask);
function deleteTask(e) {
    e.target.parentNode.remove();
}

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});



