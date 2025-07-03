export class ProjectsListManagement {

    static projectsList = [];

    static getProjectsList() {
        return this.projectsList;
    }

    static addProject(name) {
        
        if (!this.projectsList.includes(name)){
            this.projectsList.push(name);
            ProjectsListDisplay.displayProjects(name);
        }
    }
}

class ProjectsListDisplay {
    
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


        newProject.append(projectName, projectRemove);

        this.projectsContainer.append(newProject);
    }
}