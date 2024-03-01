import React, { useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
    const projectsRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.pageX - projectsRef.current.offsetLeft);
        setScrollLeft(projectsRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const x = event.pageX - projectsRef.current.offsetLeft;
            const walk = (x - startX) * 2; // Adjust the multiplier for faster or slower scrolling
            projectsRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <div 
            className="projects-container" 
            ref={projectsRef} 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
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
                        <h3>Project 2</h3>
                        <p>Description of Project 2</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src="src\assets\images\Website screenshot\Sneakerstreets screen shot.jpg" alt="Project 1" />
                    <div className="project-details">
                        <h3>Project 3</h3>
                        <p>Description of Project 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
