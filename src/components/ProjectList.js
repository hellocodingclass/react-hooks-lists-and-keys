import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projects.map(project => <ProjectItem key = {project.id} project={project} />)}

      </div>
    </div>
  );
}

export default ProjectList;



  /*

    Array.map() takes an array, and returns a new array
      where each index of the new array is the result of
      applying some function to each index of the old array.

      For example, let's say we have an array [0, 1, 2, 3].
      How could we transform that array to [1, 2, 3, 4]?
      We could iterate over the array, and for each index, we could add one.

      In other words, we can map the old array to a new one with the function (number) => number + 1.
      i.e., numbers.map(number => number + 1);

      const newNumbers = numbers.map(number => number);
      // numbers: [0, 1, 2, 3]
      // newNumbers: [0, 1, 2, 3]

    projects.map(project => <ProjectItem key = {project.id} project={project} />)

    ...returns...

    [
      <ProjectItem key = {projects[0].id} project={projects[0]} />,
      <ProjectItem key = {projects[1].id} project={projects[1]} />,
      <ProjectItem key = {projects[2].id} project={projects[2]} />,
      <ProjectItem key = {projects[3].id} project={projects[3]} />,
      ...
    ]

  */

