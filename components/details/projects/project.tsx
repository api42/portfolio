import Image from "next/image";
import React from "react";

interface ProjectDetailsInterface {
  id: number;
  title: string;
  web_link?: string;
  type: string;
  status: string;
  tech_stack: string;
  desc: string;
  figma_link?: string;
  github_link?: string;
}

function ProjectBox(item: ProjectDetailsInterface) {
  return (
    <div className="px-8 py-8 rounded-lg sm:w-[40rem] common-bg-color font-semibold">
      <div className="flex justify-between">
        <span className=""> {item.title}</span>

        <div className="flex justify-start font-normal ">
          <span className="text-gray-400 ">type</span>
          <span className="w-2 "></span>
          {item.type}
        </div>
      </div>

      <div className="flex justify-between font-normal">
        <span className="text-purple-600 "> {item.web_link}</span>
        <div className="flex justify-start ">
          <span className="text-gray-400 ">staus</span>
          <span className="w-2 "></span>
          {item.status}
        </div>
      </div>

      <div className="mt-4 font-normal">{item.desc}</div>

      <div className="flex items-start justify-start mt-8 font-normal">
        <Image src="/assets/layer.png" width={24} height={24} alt="" />

        <span className="mb-4 ml-2">{item.tech_stack}</span>
      </div>

      <div className="flex justify-start mt-2 space-x-4">
        <span>
          <a
            href={item.figma_link}
            target="_blank"
            rel="noreferrer"
            className="flex items-start justify-start"
          >
            <Image
              src="/assets/figma-logo-1.png"
              width={24}
              height={24}
              alt=""
            />
            <span className="w-2 "></span>
            Figma File
          </a>
        </span>
        <span>
          <a
            href={item.figma_link}
            target="_blank"
            rel="noreferrer"
            className="flex items-start justify-start"
          >
            <Image src="/assets/github.png" width={24} height={24} alt="" />
            <span className="w-2 "></span>
            Code
          </a>
        </span>
      </div>
    </div>
  );
}

export default ProjectBox;
