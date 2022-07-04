import React, { useState } from "react";

function RightSideLayout() {
  const l1data = [
    {
      id: 0,
      emoji: "",
      title: "NFT",
      text: "I am avialable for 20 hours a week",
    },
    {
      id: 1,
      emoji: "",
      title: "Work with me",
      text: "Working full time on MetaRings",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-center space-x-8 text-center ">
        <div className="">
          {l1data.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center justify-end mb-6 text-center square-shape"
            >
              <div className="mr-2">{item.title}</div>

              <div className="bg-green-300 square-shapes"></div>
            </div>
          ))}

          <div>{}</div>
        </div>
      </div>
    </div>
  );
}

export default RightSideLayout;
