import "./styles/styles.css";
import {ProjectsListManagement} from "./js-files/manage-projects";
import "./js-files/form-control.js";
import "./js-files/form-add-todo.js";
import {TaskListDisplay, TaskListManagement} from "./js-files/manage-task.js";

ProjectsListManagement.addProject("Gym");
ProjectsListManagement.addProject("Games");

TaskListManagement.getTasksList.forEach(name => {
    TaskListDisplay.displayTask(name)
}); 