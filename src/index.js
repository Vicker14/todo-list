import "./styles/styles.css";
import {ProjectsListDisplay, ProjectsListManagement} from "./js-files/manage-projects";
import "./js-files/form-control.js";
import "./js-files/form-add-todo.js";
import {TaskListDisplay, TaskListManagement} from "./js-files/manage-task.js";

ProjectsListManagement.getProjectsList().forEach(name => {
    ProjectsListDisplay.displayProjects(name)
}); 

TaskListManagement.getTasksList.forEach(name => {
    TaskListDisplay.displayTask(name)
}); 