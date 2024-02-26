// Tabs.js
import React from 'react';
import './Tabs.css';
import Nav from 'react-bootstrap/Nav';

const Tabs = () => {
    return (
        <div className="custom-nav">
            <Nav variant="custom"  defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link className="custom-nav-link" href="/home">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="custom-nav-link" eventKey="link-1">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="custom-nav-link" eventKey="link-2">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Item>
                    <Nav.Link className="custom-nav-link" eventKey="link-3">Contact</Nav.Link>
                </Nav.Item>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Tabs;
