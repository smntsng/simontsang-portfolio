import React from 'react';
import './Skills.css'; // Assuming you have a CSS file for styling

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="frontend-skills">
                <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="skill-grid">
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/html-5.png" alt="HTML5" />
                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="CSS3" />
                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript" />
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Frameworks</h3>
                    <div className="skill-grid">
                        <img width="48" height="48" src="https://img.icons8.com/officel/48/react.png" alt="React.js" />
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Libraries</h3>
                    <div className="skill-grid">
                        <img height="48" src="https://www.cdnlogo.com/logos/j/44/jquery.svg" alt="jQuery" />
                        <img width="48" height="48" src="https://img.icons8.com/color/48/npm.png" alt="npm" />
                    </div>
                </div>
            </div>
            <div className="other-skills">
                <div className="skill-category">
                    <h3>Tools & Software</h3>
                    <div className="skill-grid">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/github--v1.png" alt="GitHub" />
                        <img width="48" src="https://www.cdnlogo.com/logos/n/75/netlify.svg" alt="Netlify" />
                        <img width="48" height="48" src="https://img.icons8.com/color/48/visual-studio--v2.png" alt="Visual Studio" />
                        <img width="48" src="https://www.cdnlogo.com/logos/g/24/git-bash.svg" alt="Git Bash" />
                        <img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="Node.js" />
                        <img width="48" height="48" src="https://img.icons8.com/color/48/adobe-lightroom--v1.png" alt="Adobe Lightroom" />
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/canva.png" alt="Canva" />
                        <img width="48" height="48" src="https://img.icons8.com/windows/48/wix.png" alt="Wix" />
                        <img height="48" src="https://img.icons8.com/windows/32/squaredspace.png" alt="Squarespace" />
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/wordpress--v1.png" alt="WordPress" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
