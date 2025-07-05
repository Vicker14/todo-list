import { TaskListManagement } from "./manage-task";

export function setLocalStorage() {
    localStorage.setItem("tasksList", JSON.stringify(TaskListManagement.tasksList))
}

export function getLocalStorage() {
    const tasksArray = JSON.parse(localStorage.getItem("tasksList"));
    return tasksArray;
}