import React, { useState } from 'react';
import './Tabs.css';
import Nav from 'react-bootstrap/Nav';
import Projects from '../Projects/Projects'; // Import your Projects component
// import Skills from './Skills'; // Import your Skills component
// import Resume from './Resume'; // Import your Resume component
// import Contact from './Contact'; // Import your Contact component

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("/home");

    const handleSelect = (selectedKey) => {
        setActiveTab(selectedKey);
    };

    const renderContent = () => {
        switch (activeTab) {
            case "link-1":
                return <Projects />;
            // case "link-2":
            //     return <Skills />;
            // case "link-3":
            //     return <Resume />;
            // case "link-4":
            //     return <Contact />;
            default:
                return null;
        }
    };

    return (
        <div className="custom-nav">
            <Nav variant="custom" activeKey={activeTab} onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link className="custom-nav-link content" eventKey="link-1">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="custom-nav-link" eventKey="link-2">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="custom-nav-link" eventKey="link-3">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="custom-nav-link" eventKey="link-4">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
}

export default Tabs;
