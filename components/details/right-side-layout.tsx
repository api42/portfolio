import React, { useState } from "react";

function RightSideLayout() {
  const l1data = [
    {
      id: 0,
      emoji: "🤹‍♂️",
      title: "Blog",
      text: "I am avialable for 20 hours a week",
    },
    {
      id: 1,
      emoji: "🏡",
      title: "Contact",
      text: "Contact",
    },
  ];

  return (
    <div className="font-semibold ">
      <div className="items-center justify-center hidden w-32 text-center bg-purple-400 rounded-md cursor-pointer  sm:flex h-28">
        NFT
        <br /> Coming soon
      </div>
      <div className="flex items-center justify-center mt-8 space-x-8 text-center ">
        {l1data.map((item) => (
          <div
            key={item.id}
            className="flex-col items-center justify-center hidden mb-6 text-center sm:flex square-shape"
          >
            <div className="bg-green-300 square-shapes">
              {" "}
              <span className="text-3xl ">{item.emoji}</span>{" "}
            </div>
            <div className="mt-2">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-32 h-16 text-center text-black bg-blue-400 rounded-md cursor-pointer ">
        👋
        <br />
        Work with me
      </div>
    </div>
  );
}

export default RightSideLayout;
