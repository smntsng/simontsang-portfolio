import React from 'react';
import './Contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
    return (
        <div className="Contact-container">
            <ul className="contact-list">
                <li>GITHUB: 
                    <a href="https://github.com/SMNTSNG" target="_blank" rel="noopener noreferrer">
                     SMNTSNG
                    </a>
                </li>
                <li>
                    <a href="mailto:simontsang.work@gmail.com">
                        SIMONTSANG.WORK@GMAIL.COM
                    </a>
                </li>
                <li>
                
                    <a href="https://www.linkedin.com/in/yourlinkedinusername" target="_blank" rel="noopener noreferrer">
                    LINKEDIN
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
