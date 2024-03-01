import React from 'react';
import './Resume.css'; // Assuming you have a CSS file for styling
import cv from "../../assets/documents/cv.pdf";

const Resume = () => {
    return (
        <div className="resume-container">
            <a href={cv} download="Simon Tsang Resume.pdf" className="download-button">Download Resume</a>
            <iframe src={cv} title="Simon Tsang Resume" width="200%" height="800px"></iframe>
        </div>
    );
}

export default Resume;
