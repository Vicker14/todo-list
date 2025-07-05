import { ProjectsListManagement } from "./manage-projects";
import { TaskListManagement } from "./manage-task";

export function setTasksLocalStorage() {
    localStorage.setItem("tasksList", JSON.stringify(TaskListManagement.tasksList))
}

export function getTasksLocalStorage() {
    return JSON.parse(localStorage.getItem("tasksList"))
}

export function setProjectsLocalStorage() {
    localStorage.setItem("projectsList", JSON.stringify(ProjectsListManagement.projectsList))
}

export function getProjectsLocalStorage() {
    return JSON.parse(localStorage.getItem("projectsList"))
}