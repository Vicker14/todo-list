import { TodoTask } from "./task-creation";

export class TaskListManagement {
    static tasksList = [];

    static get getTasksList() {
        return this.tasksList;
    }

    static addTask(task) {
        this.tasksList.push(task);
        TaskListDisplay.displayTask(task);
    }
    static removeTask(task) {
        this.tasksList.splice(this.tasksList.indexOf(task), 1);
    }
}

class TaskListDisplay {
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
        title.textContent = task.getTitle;

        const description = document.createElement("div");
        description.classList.add("todo-description");
        description.textContent = task.getDescription;

        cardTop.append(svg, title, description);

//-------------
        const cardBottom = document.createElement("div");
        cardBottom.classList.add("card-bottom");

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");
        
        const taskProject = document.createElement("div");
        taskProject.classList.add("todo-project");
        taskProject.textContent = task.getProject;
        const taskDate = document.createElement("div");
        taskDate.classList.add("todo-date");
        taskDate.textContent = task.getDate;

        cardInfo.append(taskProject, taskDate);

        const removeButton = document.createElement("button");
        removeButton.classList.add("todo-remove");
        removeButton.textContent = "remove";

        cardBottom.append(cardInfo, removeButton);

        newCard.append(cardTop, cardBottom);

        this.tasksContainer.append(newCard);
    }
};

function priority(task) {
    if (task.getPriority == 1) { return "high"}
    else if (task.getPriority == 2) { return "mid"}
    else if (task.getPriority == 3) { return "low"}
    else return "grey"
}