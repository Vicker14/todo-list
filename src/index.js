import "./styles/styles.css";
import {ProjectsListManagement} from "./js-files/manage-projects";

const projectAdd = document.querySelector(".add-project")
projectAdd.addEventListener("click", () =>{
    
});

ProjectsListManagement.addProject("Gym");
ProjectsListManagement.addProject("Games");

console.log(ProjectsListManagement.getProjectsList());