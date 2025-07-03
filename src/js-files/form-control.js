import { ProjectsListManagement} from "./manage-projects";

const submitButton = document.querySelector("#form-submit");
const divForm = document.querySelector(".newProjectForm");

const addProjectButton = document.querySelector(".add-project");

addProjectButton.addEventListener("click", () => {
    divForm.classList.toggle("hidden");
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newProjectName = document.getElementById("projectName").value;
    const input = document.getElementById("projectName");
    input.textContent = "";

    ProjectsListManagement.addProject(newProjectName);
    divForm.classList.toggle("hidden");
});