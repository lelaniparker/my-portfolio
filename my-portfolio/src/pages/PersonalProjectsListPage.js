import React from 'react';
import ProjectsList from '../components/ProjectsList';
import personalProjectContent from "./personalProjectContent";

const PersonalProjectsListPage = () => (
    <>
        <h1>This is my Personal Projects List Page</h1>
        <p>Here's a list of all my personal projects that I have completed. Some are projects that I have completed on my own while others are group projects that I have completed in Hackathons.</p>
        <ProjectsList projects={personalProjectContent} />
    </>
);

export default PersonalProjectsListPage;