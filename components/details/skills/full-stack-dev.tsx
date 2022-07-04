import L3CommonLayout from "../l3-common-layout";
import React from "react";

function FullStackDev() {
  const title =
    "Here goes 2-3 lines about my relationship with fornt end coding.";
  const titleUnderlineColor = "bg-yellow-400";

  const projects_for_fullstack_data = [
    {
      id: 0,
      title: "MetaRings | Ithaka ",
      link: "https://metarings.xyz",
    },
    { id: 1, title: "ITsOK", link: "https://itsok.co.in" },
    { id: 2, title: "zustand yo", link: "https://itsok.co.in" },
  ];

  const full_stack_data = [
    {
      id: 0,
      title: "Next JS | React JS | Express JS |  jQuery | Vanila JS",
      data: projects_for_fullstack_data[0],
      skills: "💎 💎 💎",
      logo: "/assets/js.png",
    },

    {
      id: 1,
      title: "Tailwind CSS | Bootstrap | Material UI | SASS | CSS",
      data: projects_for_fullstack_data[1],
      skills: "💎 💎 💎 💎",
      logo: "/assets/css-3.png",
    },

    {
      id: 2,
      title: "Redux | Zustand",
      data: projects_for_fullstack_data[2],
      skills: "💎 💎",
      logo: "/assets/redux.png",
    },
  ];

  return (
    <div>
      <L3CommonLayout
        title={title}
        titleUnderlineColor={titleUnderlineColor}
        data={full_stack_data}
      />
    </div>
  );
}

export default FullStackDev;
