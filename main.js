"use strict";
const addButton = document.getElementById("js-addButton");
const taskList = document.getElementById("js-taskList");
addButton.addEventListener("click", () => {
    addTask();
});
const addTask = () => {
    const inputValue = document.getElementById("js-taskText");
    const taskText = inputValue.value;
    if (validateTasks(taskText)) {
        inputValue.value = "";
        return;
    }
    createTask(taskText);
    inputValue.value = "";
};
const createTask = (taskText) => {
    const task = document.createElement("li");
    const taskWrapper = document.createElement("div");
    taskWrapper.className = "task-wrapper";
    task.innerText = taskText;
    taskWrapper.appendChild(task);
    taskWrapper.appendChild(createDeleteButton());
    taskList.appendChild(taskWrapper);
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
const validateTasks = (taskText) => {
    const list = taskList.children;
    const taskCount = list.length;
    // console.log(list);
    for (let i = 0; i < taskCount; i++) {
        const existText = list[i].firstElementChild.textContent;
        if (existText === taskText) {
            alert("同じタスクは入力できません");
            return true;
        }
    }
    if (taskText.trim() === "") {
        alert("空白のみの追加はできません");
        return;
    }
};
