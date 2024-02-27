import React, { useRef } from 'react';
import './Projects.css';

const Projects = () => {
    const projectsRef = useRef(null);

    const handleScroll = (event) => {
        const container = projectsRef.current;
        const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
        container.scrollLeft += delta * 100; // Adjust scroll speed as needed
    };

    return (
        <div className="projects-container" ref={projectsRef} onWheel={handleScroll}>
            <div className="projects-wrapper">
                <div className="project-item">
                    <img src="src\assets\images\Website screenshot\Sneakerstreets screen shot.jpg" alt="Project 1" />
                    <div className="project-details">
                        <h3>Project 1</h3>
                        <p>Description of Project 1</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src="src\assets\images\Website screenshot\Sneakerstreets screen shot.jpg" alt="Project 1" />
                    <div className="project-details">
                        <h3>Project 1</h3>
                        <p>Description of Project 1</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src="src\assets\images\Website screenshot\Sneakerstreets screen shot.jpg" alt="Project 1" />
                    <div className="project-details">
                        <h3>Project 1</h3>
                        <p>Description of Project 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
