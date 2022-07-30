import ProjectBox from "./project";
import ProjectsDetails from "../projects";
import React from "react";

function PreviousProjects() {
  const project = [
    {
      id: 0,
      title: "Its OK",
      web_link: "https://itsok.co.in",
      type: "Contract Work",
      status: "Product Live",
      tech_stack: ["Design", "Figma"],
      desc: "MetaRings is NFT proejct where this and that and too and eff and lev len and lev lenand lev lenand lev lenand lev lenand lev len",
      figma_link: "figma link",
      github_link: "github link",
    },

    {
      id: 1,
      title: "Ithaka",
      web_link: "https://ithaka.app",
      type: "Passion Project",
      status: "Product Dead",
      tech_stack: ["Firebase", "Flutter"],
      desc: "MetaRings is NFT proejct where this and that and too and eff and lev len and lev lenand lev lenand lev lenand lev lenand lev len",
      figma_link: "figma link",
      github_link: "github link",
    },

    {
      id: 2,
      title: "Gamify Design",
      web_link: "https://gamify.design",
      type: "Passion Project",
      status: "Product Dead",
      tech_stack: ["Contetntful", "Next js"],
      desc: "MetaRings is NFT proejct where this and that and too and eff and lev len and lev lenand lev lenand lev lenand lev lenand lev len",
      figma_link: "figma link",
      github_link: "github link",
    },

    {
      id: 3,
      title: "Pushstart",
      web_link: "https://pushstart.in",
      type: "Startup",
      status: "Left the work",
      tech_stack: ["Contetntful", "Next js"],
      desc: "MetaRings is NFT proejct where this and that and too and eff and lev len and lev lenand lev lenand lev lenand lev lenand lev len",
      figma_link: "figma link",
      github_link: "github link",
    },
    {
      id: 4,
      title: "The Last wish",
      web_link: "Figma only",
      type: "Startup",
      status: "Left the work",
      tech_stack: ["Contetntful", "Next js"],
      desc: "MetaRings is NFT proejct where this and that and too and eff and lev len and lev lenand lev lenand lev lenand lev lenand lev len",
      figma_link: "figma link",
      github_link: "github link",
    },
  ];

  return (
    <div>
      <div className="overflow-y-scroll h-[62vh] relative hide-scrollbar">
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
      <div className="w-full h-10 main-bg opacity-20"></div>
    </div>
  );
}

export default PreviousProjects;
