import { TodoTask } from "./task-creation";

export class TaskListManagement {
    static tasksList = [];

    static get getTasksList() {
        return this.tasksList;
    }

    static addTask(task) {
        this.tasksList.push(task);
    }
    static removeTask(task) {
        this.tasksList.splice(this.tasksList.indexOf(task), 1);
    }
}

class TaskListDisplay {};