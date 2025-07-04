import "./styles/styles.css";
import {ProjectsListManagement} from "./js-files/manage-projects";
import "./js-files/form-control.js";
import {TodoTask} from "./js-files/task-creation.js";
import "./js-files/form-add-todo.js";

const hola = new TodoTask("Hola", "hello", "Uni", "12-3", "high");

ProjectsListManagement.addProject("Gym");
ProjectsListManagement.addProject("Games");

console.log(ProjectsListManagement.getProjectsList());