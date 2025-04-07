import ProjectsIcon from "./icons/projectsIcon";
import ProjectsData from "./data/projects";
import ProjectsItem from "./projects-item";

const projects = () => {
    return (
        <section className="smj-projects">
            <h2 className="smj-h2">
                <ProjectsIcon/> Proyectos
            </h2>
            {ProjectsData.map(({projectKey, projectTitle, projectDescription, projectImage, projectTechnologies, projectDetails}) => (
                <ProjectsItem 
                    key={projectKey}
                    projectTitle={projectTitle}
                    projectDescription={projectDescription}
                    projectImage={projectImage}
                    projectTechnologies={projectTechnologies}
                    projectDetails={projectDetails}
                />
            ))}
        </section>
    );

}

export default projects;