import L3CommonLayout from "../l3-common-layout";
import React from "react";
import Rive from "@rive-app/react-canvas";

function Blockchain() {
  const title =
    "Here goes 2-3 lines about my relationship with fornt end coding.";
  const titleUnderlineColor = "yelllow-red-grad";

  const projects_for_fullstack_data = [
    {
      id: 0,
      title: ["MetaRings", "Ithaka "],
      link: "https://metarings.xyz",
      AnimationX: 5,

      AnimationY: -4,
      titleArray: ["Solidity", "Custom Smart", "Documentation", "Timeline"],
    },
    {
      id: 1,
      title: ["MetaRings", "Ithaka "],
      link: "https://itsok.co.in",
      AnimationX: 5,

      AnimationY: -4,
      titleArray: [
        "Wireframe",
        "Web App UI/UX",
        "Mobile App UI/UX",
        "Mockups",
        "Animation",
      ],
    },
    {
      id: 2,
      title: ["MetaRings", "Ithaka "],
      link: "https://itsok.co.in",
      AnimationX: 5,

      AnimationY: -4,
      titleArray: [],
    },
  ];

  const full_stack_data = [
    {
      id: 0,
      title: "Next JS | React JS | Express JS |  jQuery | Vanila JS",
      data: projects_for_fullstack_data[0],
      skills: "💎 💎 💎",
      logo: "/assets/etherum-logo-1.png",
      uid: 101,
      AnimationX: 0,
      experience: 3,

      AnimationY: 5,
    },

    {
      id: 1,
      title: "Tailwind CSS | Bootstrap | Material UI | SASS | CSS",
      data: projects_for_fullstack_data[1],
      skills: "💎 💎 💎 💎",
      logo: "/assets/polygon-matic-logo.png",
      uid: 102,
      AnimationX: 5,
      experience: 3,

      AnimationY: 0,
    },

    {
      id: 2,
      title: "Rive",
      data: projects_for_fullstack_data[2],
      skills: "💎 💎",
      logo: "/assets/solana-sol-logo.png",
      uid: 103,
      AnimationX: 0,
      experience: 1,

      AnimationY: 5,
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

export default Blockchain;
