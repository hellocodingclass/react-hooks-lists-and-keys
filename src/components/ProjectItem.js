import React from "react";

function ProjectItem({ project }) {
  const { name, about, technologies } = project;
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key = {index} > {technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
