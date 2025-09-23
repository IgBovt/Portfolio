import { projects } from "./projects";

export default function getProject() {
    const getProject = () => {
        return window.location.pathname.slice(1);
      };
    
      const currentProject = projects.find(
        project => project.name === getProject()
      );
     return currentProject
}