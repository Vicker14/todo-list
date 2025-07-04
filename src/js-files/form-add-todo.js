import { ProjectsListManagement } from "./manage-projects";

const addButton = document.querySelector(".add-todo");

const divForm = document.querySelector(".newTodoForm");
const form = document.querySelector(".newTodoForm form");

const projectSelection = document.getElementById("project-selection")
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

    // Create a task object

    // Append task object to tasks list
    
    divForm.classList.add("hidden");
    form.reset();
});