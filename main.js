const taskList = document.getElementById("js-taskList");
const addButton = document.getElementById("js-addButton");

addButton.addEventListener("click", () => {
    addTask();
});

const addTask = () => {
    const taskText = document.getElementById("js-taskText").value;
    if (taskText.trim() === "") {
        alert("空白のみの追加はできません");
        return;
    }
    createTask(taskText);
    document.getElementById("js-taskText").value = "";
};

const createTask = (taskText) => {
    const task = document.createElement("li");
    task.innerText = taskText;
    task.appendChild(createDeleteButton());
    taskList.appendChild(task);
};

const removeTask = (deleteButton) => {
    const Target = deleteButton.parentNode;
    taskList.removeChild(Target);
};

const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => {
        removeTask(deleteButton);
    });
    deleteButton.innerText = "削除";
    return deleteButton;
};
