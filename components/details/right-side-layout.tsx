import ClickToMint from "./NFT/clicktomint";
import React from "react";

function RightSideLayout() {
  const l1data = [
    {
      id: 0,
      emoji: "🤹",
      title: "Blog",
      text: "I am avialable for 20 hours a week",
      link: "https://gamify-design-krgewqwtf-gamify-design.vercel.app",
    },
    {
      id: 1,
      emoji: "📧",
      title: "Email",
      text: "Email",
      link: "#",
    },
  ];

  return (
    <div className="font-semibold">
      <ClickToMint />

      <div className="flex items-center justify-center mt-8 space-x-10 text-center ">
        {l1data.map((item) => (
          <a href={item.link} target="_blank" rel="noreferrer" key={item.id}>
            <div className="flex-col items-center justify-center hidden mb-6 text-center hover:scale-105 sm:flex square-shape">
              <div className="common-bg-color square-shapes">
                <span className="text-3xl ">{item.emoji}</span>
              </div>
              <div className="mt-2">{item.title}</div>
            </div>
          </a>
        ))}
      </div>
      {/* <div className="flex flex-col items-center justify-center py-4 text-center text-white rounded-md cursor-pointer w-36 common-bg-color ">
        <div className="hover:scale-105">
          <div className="text-3xl animate-pulse ">👋</div>
          <div className="">Work with me</div>
        </div>
      </div> */}
    </div>
  );
}

export default RightSideLayout;
