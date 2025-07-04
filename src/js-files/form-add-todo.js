import { ProjectsListManagement } from "./manage-projects";
import { TaskListManagement } from "./manage-task";
import { TodoTask } from "./task-creation";

const addButton = document.querySelector(".add-todo");

const divForm = document.querySelector(".newTodoForm");
const form = document.querySelector(".newTodoForm form");

const projectSelection = document.getElementById("projectSelection")
let projects = ProjectsListManagement.getProjectsList();

const closeForm = form.querySelector(".close-form");

closeForm.addEventListener("click", () => {
    divForm.classList.add("hidden");
    form.reset();
});

addButton.addEventListener("click", () => {
    projectSelection.innerHTML = "";

    divForm.classList.toggle("hidden");

    for (let i = 0; i < projects.length; i++) {

        const project = document.createElement("option");
        project.textContent = `${projects[i]}`;

        projectSelection.append(project);
    };
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoName = form.todoName.value.trim();
    const todoDescription = form.todoDescription.value.trim();
    const todoProject = form.querySelector("#projectSelection").value;
    const todoDate = form.todoDate.value;
    const todoOption = form.opcion.value;

    const newTask = new TodoTask(
        todoName,
        todoDescription,
        todoProject,
        todoDate,
        todoOption
    );

    TaskListManagement.addTask(newTask);
    
    divForm.classList.add("hidden");
    form.reset();
});