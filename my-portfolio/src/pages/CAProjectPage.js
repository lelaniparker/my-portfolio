import React from "react";
import assessmentContent from "./assessmentContent";

const CAProjectPage = ({ match }) => {
    const name = match.params.name;
    const assessment = assessmentContent.find(assessment => assessment.name === name);

    if (!assessment) return <h1>Project does not exist</h1>
    
    return (
        <>
            <h1>{assessment.name}</h1>
            {assessment.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
        </>
    );
}

export default CAProjectPage;