import React from "react";

function PersonalStory() {
  const title = "The story so far...";
  const underlinecolor = "green-green-grad";

  return (
    <div className="sm:w-[40rem] w-full">
      <div>
        <span className="text-base font-semibold sm:text-xl">{title}</span>
        <div className={`${underlinecolor} w-44 mt-4 h-1 rounded-sm`}></div>
      </div>

      <div className="mt-12">Hii! This is Apurva Raj</div>
    </div>
  );
}

export default PersonalStory;
