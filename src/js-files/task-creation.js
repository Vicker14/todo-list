import { TaskListManagement } from "./manage-task";

export class TodoTask {
    constructor(title, description, project, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.project = project;
        this.dueDate = dueDate;
        this.priority = priority;
        this.code = Math.random();
    }

    get getTitle() {
        return this.title;
    }
    get getDescription() {
        return this.description;
    }
    get getProject() {
        return this.project;
    }
    get getDate() {
        const dateArray = this.dueDate.split("-");

        const dateString = `${dateArray[2]} / ${dateArray[1]} / ${dateArray[0]}`

        return dateString;
    }
    get getPriority() {
        return this.priority;
    }
    get getCode() {
        return this.code;
    }

    set setPriority(value) {
        this.priority = value;
    }
}