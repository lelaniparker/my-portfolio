import React from "react";
import ProjectsList from "../components/ProjectsList";
import NotFoundPage from "./NotFoundPage";
import caProjectContent from "./caProjectContent";

const CAProjectPage = ({ match }) => {
    const name = match.params.name;
    const project = caProjectContent.find(project => project.name === name);
    const otherProjects = caProjectContent.filter(project => project.name !== name);

    if (!project) return <NotFoundPage />
    
    return (
        <>
            <h1>{project.title}</h1>
            {project.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <p>Tech stack used: {project.techStack}</p>
            {project.websiteLink ? (<p>Here's the link to <a href={project.websiteLink} target="_blank">the site</a></p>) : null}            
            <p>If you would like to check it out, take a look at the <a href={project.githubLink} target="_blank">Git Repo</a></p>

            <h3>Other Projects</h3>
            <ProjectsList projects={otherProjects} />
        </>
    );
}

export default CAProjectPage;