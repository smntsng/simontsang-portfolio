import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-wrapper">
                <div className="project-item">
                    <img src="src\assets\images\Website screenshot\Sneakerstreets screen shot.jpg" alt="Project 1" />
                    <div className="project-details">
                        <h3>Project 1</h3>
                        <p>Description of Project 1</p>
                    </div>
                </div>
                {/* Add more project items as needed */}
            </div>
        </div>
    );
}

export default Projects;
