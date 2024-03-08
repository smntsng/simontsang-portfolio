import React, { useRef, useState } from 'react';
import './Projects.css';
// images
import sneakerstreetscreenshot1 from "../../assets/images/sneakerstreetsscreenshot.jpg"
import sneakerstreetscreenshot2 from "../../assets/images/sneakerstreetsscreenshot2.jpg"
import harmonyhealscreenshot from "../../assets/images/harmonyhealscreenshot.jpg"
import harmonyhealscreenshot2 from "../../assets/images/harmonyhealscreenshot2.jpg"
import labcloscreenshot from "../../assets/images/labcloscreenshot.jpg"
import labcloscreenshot2 from "../../assets/images/labcloscreenshot2.jpg"


const Projects = () => {
    const projectsRef = useRef(null);
    


    return (
        <div className="projects-container" ref={projectsRef} >
            <div className="projects-wrapper">
                <div className="project-item">
                    <img className="display-image" src={sneakerstreetscreenshot1} alt="Sneaker Streets Project" />
                    <img className="hover-image" src={sneakerstreetscreenshot2} alt="Hover Image" />
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
                    <img className="display-image" src={harmonyhealscreenshot} alt="Sneaker Streets Project" />
                    <img className="hover-image" src={harmonyhealscreenshot2} alt="Hover Image" />
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
                    <img className="display-image" src={labcloscreenshot} alt="Sneaker Streets Project" />
                    <img className="hover-image" src={labcloscreenshot2} alt="Hover Image" />
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
