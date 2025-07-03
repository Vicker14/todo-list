import "./styles/styles.css";
import {ProjectsListManagement} from "./js-files/manage-projects";
import "./js-files/form-control.js";

ProjectsListManagement.addProject("Gym");
ProjectsListManagement.addProject("Games");

console.log(ProjectsListManagement.getProjectsList());