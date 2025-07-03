import { ProjectsListManagement} from "./manage-projects";

const divForm = document.querySelector(".newProjectForm");
const form = document.querySelector(".newProjectForm form");

const addProjectButton = document.querySelector(".add-project");

const closeForm = form.querySelector(".close-form");

addProjectButton.addEventListener("click", () => {
    divForm.classList.toggle("hidden");
})

closeForm.addEventListener("click", () => {
    divForm.classList.add("hidden");
    form.reset();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newProjectName = form.projectName.value.trim();
    if (newProjectName.length >= 1) {
        ProjectsListManagement.addProject(newProjectName);
    };
    divForm.classList.add("hidden");
    form.reset();
});