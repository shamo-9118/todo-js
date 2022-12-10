const addButton: HTMLElement = document.getElementById("js-addButton")!;
const taskList: HTMLElement = document.getElementById("js-taskList")!;

addButton.addEventListener("click", () => {
    addTask();
});

const addTask = () => {
    const inputValue = <HTMLInputElement>document.getElementById("js-taskText");
    const taskText: string = inputValue.value;
    if (validateTasks(taskText)) {
        inputValue.value = "";
        return;
    }
    createTask(taskText);
    inputValue.value = "";
};

const createTask = (taskText: string) => {
    const task: HTMLElement = document.createElement("li");
    const taskWrapper: HTMLElement = document.createElement("div");
    taskWrapper.className = "task-wrapper";
    task.innerText = taskText;
    taskWrapper.appendChild(task);
    taskWrapper.appendChild(createDeleteButton());
    taskList.appendChild(taskWrapper);
};

const removeTask = (deleteButton: HTMLElement) => {
    const Target = <HTMLElement>deleteButton.parentNode;
    taskList.removeChild(Target);
};

const createDeleteButton = () => {
    const deleteButton = <HTMLElement>document.createElement("button");
    deleteButton.addEventListener("click", () => {
        removeTask(deleteButton);
    });
    deleteButton.innerText = "削除";
    return deleteButton;
};

const validateTasks = (taskText: string) => {
    const list: HTMLCollection = taskList.children;
    const taskCount: number = list.length;

    for (let i: number = 0; i < taskCount; i++) {
        const existText: string = list[i].firstElementChild!.textContent!;
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
