import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useHomeViewStore } from "../../../ViewStore/homeViewStore";

function ClickToMint() {
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
    changeStopDMAnimation(false);
  }
  function mouseLeave() {
    setMintStatusHook(false);
    changeStopDMAnimation(true);
  }

  function NFTPreviewClicked() {
    console.log("mm2");
    changeNFTDisplayViewStore(!NFTDisplayViewStore);
  }
  useEffect(() => {
    changeStopDMAnimation(StopDMAnimation);
  }, [StopDMAnimation]);

  return (
    <>
      <div
        className="flex items-center justify-center -mb-6 duration-1000 animate-[bounce_2s_infinite] sm:hidden "
        onClick={NFTPreviewClicked}
      >
        <Image src="/assets/red-bag.png" alt="NFT" width={42} height={52} />
      </div>
      <div className="hidden sm:block">
        <div
          className={`   " animate-pulse items-center justify-center  text-center transition-all duration-300 rounded-md cursor-pointer sm:common-bg-color sm:flex  hover:blur-none "   ${
            L1Hook == 8 ? " sm:blur-none" : "sm:blur-sm"
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
            <span className="mt-3 opacity-100 title-gradient-2 hover:text-white animate-bounce">
              Click to mint
            </span>
          </div>

          <div className="hidden sm:block">
            <Image
              src="/assets/nft1.png"
              alt="NFT"
              width={144}
              height={144}
              className="rounded-lg "
            />
          </div>
          <div className="block sm:hidden">
            <Image
              src="/assets/nft1.png"
              alt="NFT"
              width={42}
              height={42}
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ClickToMint;
