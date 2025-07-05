import { getProjectsLocalStorage, setProjectsLocalStorage } from "./local-storage-handling";

export class ProjectsListManagement {

    static projectsList = getProjectsLocalStorage() === null ? ["-"] : getProjectsLocalStorage();

    static getProjectsList() {
        return this.projectsList;
    }

    static addProject(name) {
        
        if (!this.projectsList.includes(name)){
            this.projectsList.push(name);
            ProjectsListDisplay.displayProjects(name);
        }
        setProjectsLocalStorage();
    }

    static removeProject(name) {
        const index = this.projectsList.indexOf(name);
        this.projectsList.splice(index, 1);
        setProjectsLocalStorage();
    }
}

export class ProjectsListDisplay {
    
    static projectsContainer = document.querySelector(".projects-container");

    static displayProjects(name) {

        const newProject = document.createElement("div");

        const projectName = document.createElement("div");
        const projectRemove = document.createElement("button");
        

        newProject.setAttribute("class", "project");

        projectName.setAttribute("class", "name");
        projectName.textContent = name;
    
        projectRemove.setAttribute("class", "project-delete");
        projectRemove.textContent = "-";
        projectRemove.addEventListener("click", () => {
            
            ProjectsListManagement.removeProject(name);
            this.projectsContainer.removeChild(newProject);
        });

        newProject.append(projectName, projectRemove);

        this.projectsContainer.append(newProject);
    }
}