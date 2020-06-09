import React from 'react';
import ProjectsList from "../components/ProjectsList";
import NotFoundPage from "./NotFoundPage";
import personalProjectContent from "./personalProjectContent";

const PersonalProjectPage = ({ match }) => {
    const name = match.params.name;
    const project = personalProjectContent.find(project => project.name === name);
    const otherProjects = personalProjectContent.filter(project => project.name !== name);

    if (!project) return <NotFoundPage />
    
    return (
        <>
            <h1>{project.title}</h1>
            {project.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <p>Tech Stack used: {project.techStack}</p>
            {project.videoLink ? (<p>Here's the link to our <a href={project.videoLink} target="_blank" rel="noopener noreferrer">video submission</a> for our Hackathon entry.</p>) : null}
            {project.websiteLink ? (<p>Here's the link to <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">the site</a></p>) : null}
            <p>If you would like to check it out, take a look at the <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Git Repo</a></p>

            <h3>Other Projects</h3>
            <ProjectsList projects={otherProjects} />
        </>
    );
};

export default PersonalProjectPage;