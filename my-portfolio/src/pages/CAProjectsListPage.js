import React from 'react';
import ProjectsList from "../components/ProjectsList";
import caProjectContent from './caProjectContent';

const CAProjectsListPage = () => (
    <>
        <h1>This is the CA Projects List Page</h1>
        <p>Here is a list of all my projects that I completed at Coder Academy's Boot Camp</p>
        <ProjectsList projects={caProjectContent} />
    </>
);

export default CAProjectsListPage;

