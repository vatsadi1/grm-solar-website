// VisionaryProjects.jsx
import React from "react";
import "./OurProjects.css";


const projects = [
  { capacity: "1300 Kilowatt 1.3 MW", type: "Rooftop", location: "Bihar"  },
  { capacity: "1100 KILOWATT 1.1MW", type: "Rooftop", location: "Jharkhand" },
  {capacity: "Industrial consumers", location: "Across India"},
  { capacity: " PM SURYA GHAR YOJNA ", location: "Bihar" },
   
];

const OurProjects = () => {
  return (
    <div className="visionary-projects">
      <h2 className="title">Visionary Projects <br />Building A New Bharat</h2>
      <div className="main-image">
        
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="capacity">{project.capacity}</div>
            <div className="type">{project.type}</div>
            <div className="location">{project.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
