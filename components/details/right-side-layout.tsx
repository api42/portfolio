import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useHomeViewStore } from "./../../ViewStore/homeViewStore";

function RightSideLayout() {
  const StopDMAnimation = useHomeViewStore((state) => state.StopDMAnimation);

  const changeStopDMAnimation = useHomeViewStore(
    (state) => state.changeStopDMAnimation
  );

  const L1Selection = useHomeViewStore((state) => state.L1Selection);

  const changeL1Selection = useHomeViewStore(
    (state) => state.changeL1Selection
  );

  const NFTDisplayViewStore = useHomeViewStore(
    (state) => state.NFTDisplayViewStore
  );
  const changeNFTDisplayViewStore = useHomeViewStore(
    (state) => state.changeNFTDisplayViewStore
  );

  const [mintStatusHook, setMintStatusHook] = useState(false);
  const [mintselectedHook, setMintselectedHook] = useState(false);

  const [L1Hook, setL1Hook] = useState(L1Selection);

  const mintStatus = mintStatusHook ? "visible" : "invisible";
  const mintStatusText = mintStatusHook ? "visible" : "invisible";

  function mouseEnter() {
    setMintStatusHook(true);
    changeStopDMAnimation(true);
  }
  function mouseLeave() {
    setMintStatusHook(false);
    changeStopDMAnimation(false);
  }

  function NFTPreviewClicked() {
    console.log("mm2");
    changeNFTDisplayViewStore(!NFTDisplayViewStore);
  }
  useEffect(() => {
    changeStopDMAnimation(StopDMAnimation);
  }, [StopDMAnimation]);

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
      emoji: "🏡",
      title: "Contact",
      text: "Contact",
      link: "#",
    },
  ];

  return (
    <div className="font-semibold">
      <div
        className={`   "items-center justify-center hidden text-center transition-all duration-300 rounded-md cursor-pointer common-bg-color sm:flex  hover:blur-none "   ${
          L1Hook == 8 ? " blur-none" : "blur-sm"
        }`}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={NFTPreviewClicked}
      >
        <div
          className={` ${mintStatus} absolute z-50 flex justify-center  w-full h-10 mb-28 bg-black  opacity-60  `}
        ></div>
        <div
          className={` ${mintStatusText} absolute z-50 flex justify-center  w-full h-10     `}
        >
          <span className="-mt-12 opacity-100 title-gradient-2 hover:text-white animate-bounce">
            Click to mint
          </span>
        </div>

        <Image
          src="/assets/nft1.png"
          alt="NFT"
          width={144}
          height={144}
          className="rounded-lg "
        />
      </div>

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
