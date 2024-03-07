import React, { useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
    const projectsRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseEvents = (event) => {
        if (event.type === 'mousedown') {
            setIsDragging(true);
            setStartX(event.pageX - projectsRef.current.offsetLeft);
            setScrollLeft(projectsRef.current.scrollLeft);
        } else if (event.type === 'mouseup' || event.type === 'mouseleave') {
            setIsDragging(false);
        } else if (event.type === 'mousemove' && isDragging) {
            const x = event.pageX - projectsRef.current.offsetLeft;
            const walk = (x - startX) * 2; // Adjust the multiplier for faster or slower scrolling
            projectsRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <div className="projects-container" ref={projectsRef} onMouseDown={handleMouseEvents} onMouseUp={handleMouseEvents} onMouseLeave={handleMouseEvents} onMouseMove={handleMouseEvents}>
            <div className="projects-wrapper">
                <div className="project-item">
                    <img className="display-image" src="src/assets/images/Website screenshot/Sneakerstreets screen shot.jpg" alt="Sneaker Streets Project" />
                    <img className="hover-image" src="src/assets/images/Website screenshot/Sneakerstreets screen shot 2.jpg" alt="Hover Image" />
                    <div className="project-details">
                        <h3>SneakerStreets Ecommerce Store</h3>
                        <p>SneakStreets is an ecommerce store and news aggregator for trending sneakers. It was built as a collaborative project to highlight use of React to build a web application.
</p>
                        <div className="project-icons">
                            <img width="60" height="60" src="https://img.icons8.com/fluency/48/html-5.png" alt="HTML5" />
                            <img width="60" height="60" src="https://img.icons8.com/color/48/css3.png" alt="CSS3" />
                            <img width="60" height="60" src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript" />
                            <img width="60" height="60" src="https://img.icons8.com/fluency/60/bootstrap.png" alt="Bootstrap" /> 
                            <img width="60" height="60" src="https://img.icons8.com/officel/48/react.png" alt="React.js" />
                            <img width="60" height="60" src="https://img.icons8.com/color/48/npm.png" alt="npm" />
                        </div>
                        <a className="github" href="https://bit.ly/SneakerStreets" target="_blank" rel="noopener noreferrer">See Details on GitHub...</a>
                    </div>
                </div>
                <div className="project-item">
                    <img className="display-image" src="src\assets\images\Website screenshot\Harmony Heal screen shot.jpg" alt="Sneaker Streets Project" />
                    <img className="hover-image" src="src\assets\images\Website screenshot\Harmony Heal screen shot 2.jpg" alt="Hover Image" />
                    <div className="project-details">
                        <h3>Harmony Heal</h3>
                        <p>The website has been developed with wellbeing in mind and aims to be a simple to use tool that can be accessed by carers or users who want to listen to different music playlists depending on how they are feeling.
</p>
                        <div className="project-icons">
                            <img width="60" height="60" src="https://img.icons8.com/fluency/48/html-5.png" alt="HTML5" />
                            <img width="60" height="60" src="https://img.icons8.com/color/48/css3.png" alt="CSS3" />
                            <img width="60" height="60" src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript" />
                            <img width="60" height="60" src="https://img.icons8.com/fluency/60/bootstrap.png" alt="Bootstrap" /> 
                        </div>
                        <a className="github" href="https://bit.ly/HarmonyHeal" target="_blank" rel="noopener noreferrer">See Details on GitHub...</a>
                    </div>
                </div>

                <div className="project-item">
                    <img className="display-image" src="src\assets\images\Website screenshot\Labclo screen shot.jpg" alt="Sneaker Streets Project" />
                    <img className="hover-image" src="src\assets\images\Website screenshot\Labclo screen shot 2.jpg" alt="Hover Image" />
                    <div className="project-details">
                        <h3>Labclo Ecommerce Store</h3>
                        <p>Labclo is a live Ecommerce store built using Wix with an inventory of over 600 items
</p>
                        <div className="project-icons">
                        <img width="60" height="60" src="https://img.icons8.com/windows/48/wix.png" alt="Wix" />
                        </div>
                        <a className="github" href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">See Website</a>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Projects;
