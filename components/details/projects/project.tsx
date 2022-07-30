import Image from "next/image";
import React from "react";

interface ProjectDetailsInterface {
  id: number;
  title: string;
  web_link?: string;
  type: string;
  status: string;
  tech_stack: Array<string>;
  desc: string;
  figma_link?: string;
  github_link?: string;
}

function ProjectBox(item: ProjectDetailsInterface) {
  return (
    <div className="px-8 py-8 mb-8   rounded-xl sm:w-[40rem] common-bg-color font-semibold  border-[1px] border-transparent  ">
      <div className="flex justify-between">
        <span className=""> {item.title}</span>

        <div className="flex justify-start font-normal ">
          <span className="text-gray-400 ">type</span>
          <span className="w-2 "></span>
          {item.type}
        </div>
      </div>

      <div className="flex justify-between font-normal">
        <span className="cursor-pointer title-gradient-2 ">
          <a href={item.web_link} target="_blank" rel="noreferrer">
            {item.web_link}
          </a>
        </span>
        <div className="flex justify-start ">
          <span className="text-gray-400 ">status</span>
          <span className="w-2 "></span>
          {item.status}
        </div>
      </div>

      <div className="mt-4 text-sm font-normal">{item.desc}</div>

      <div className="flex justify-between mt-8 ">
        <div className="flex items-start justify-start font-normal">
          <Image src="/assets/layer.png" width={24} height={24} alt="" />

          <span className="grid grid-cols-2 ml-4 text-sm font-semibold w-28">
            {item.tech_stack.map((items) => (
              <div key={items} className="hover:title-gradient-2">
                {items}
              </div>
            ))}
          </span>
        </div>

        <div className="flex justify-start space-x-4 text-sm">
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
              <span className="mt-1 "> Figma File</span>
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
              <span className="mt-1 "> Code</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
