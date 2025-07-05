import { getLocalStorage, setLocalStorage } from "./local-storage-handling";

export class TaskListManagement {
    static tasksList = getLocalStorage() === null ? [] : getLocalStorage();

    static get getTasksList() {
        return this.tasksList;
    }

    static addTask(task) {
        this.tasksList.push(task);
        TaskListDisplay.displayTask(task);
        setLocalStorage();
    }
    static removeTask(task) {
        this.tasksList.splice(this.tasksList.indexOf(task), 1);
        setLocalStorage();
    }
}

export class TaskListDisplay {
    static tasksContainer = document.getElementById("card-container");

    static displayTask(task) {
        const newCard = document.createElement("div");
        newCard.classList.add("card");

//-------------
        const cardTop = document.createElement("div");
        cardTop.classList.add("card-top");

        const svgNS = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(svgNS, "svg");
        svg.classList.add("circle");

        const circle = document.createElementNS(svgNS, "circle");
        circle.classList.add(priority(task)); 
        svg.append(circle);

        const title = document.createElement("div");
        title.classList.add("todo-title");
        title.textContent = task.title;

        const description = document.createElement("div");
        description.classList.add("todo-description");
        description.textContent = task.description;

        cardTop.append(svg, title, description);

//-------------
        const cardBottom = document.createElement("div");
        cardBottom.classList.add("card-bottom");

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");
        
        const taskProject = document.createElement("div");
        taskProject.classList.add("todo-project");
        taskProject.textContent = task.project;
        const taskDate = document.createElement("div");
        taskDate.classList.add("todo-date");
        taskDate.textContent = task.dueDate;

        cardInfo.append(taskProject, taskDate);

        const removeButton = document.createElement("button");
        removeButton.classList.add("todo-remove");
        removeButton.textContent = "remove";
        removeButton.addEventListener("click", () => {
            TaskListManagement.removeTask(task);
            this.tasksContainer.removeChild(newCard);
        })

        cardBottom.append(cardInfo, removeButton);

        newCard.append(cardTop, cardBottom);

        this.tasksContainer.append(newCard);
    }
};

function priority(task) {
    if (task.priority == 1) { return "high"}
    else if (task.priority == 2) { return "mid"}
    else if (task.priority == 3) { return "low"}
    else return "grey"
}