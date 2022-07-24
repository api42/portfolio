import ProjectBox from "./project";
import ProjectsDetails from "../projects";
import React from "react";

function CurrentProjects() {
  const project = [
    {
      id: 0,
      title: "MetaRings",
      web_link: "https://metarings.xyz",
      type: "Passion Project",
      status: "Devlopment Phase",
      tech_stack: "React TailwindCSS Redux MongoDB Figma Velcer",
      desc: "MetaRings is NFT proejct where this and that and too and eff and lev len and lev lenand lev lenand lev lenand lev lenand lev len",
      figma_link: "figma link",
      github_link: "github link",
    },
  ];

  return (
    <div>
      {project.map((item) => (
        <ProjectBox
          key={item.id}
          id={item.id}
          title={item.title}
          web_link={item.web_link}
          type={item.type}
          status={item.status}
          tech_stack={item.tech_stack}
          desc={item.desc}
          figma_link={item.figma_link}
          github_link={item.github_link}
        />
      ))}
    </div>
  );
}

export default CurrentProjects;
