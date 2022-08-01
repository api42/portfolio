import Image from "next/image";
import React from "react";
import { useHomeViewStore } from "../../../ViewStore/homeViewStore";

function NFTMain() {
  const NFTDisplayViewStore = useHomeViewStore(
    (state) => state.NFTDisplayViewStore
  );
  const changeNFTDisplayViewStore = useHomeViewStore(
    (state) => state.changeNFTDisplayViewStore
  );

  function close() {
    changeNFTDisplayViewStore(!NFTDisplayViewStore);
  }

  return (
    <div className="w-full h-screen mt-8 overflow-y-scroll">
      <div className="flex justify-center">
        <div
          className="sm:w-[42rem] w-full righ-2 top-4  sm:top-8 font-semibold  flex fixed justify-end cursor-pointer"
          onClick={close}
        >
          ❌
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="mb-4 text-3xl font-bold "> Siv the first </div>

        <Image
          src="/assets/nft1.png"
          alt="NFT"
          width={342}
          height={342}
          className="mt-4 rounded-lg "
        />

        <div className="mt-4 ">
          <div className=" text-center w-[342px] m-0-auto">
            Here goes all the text and details of the heros journey. Here goes
            all the text and details of the heros
          </div>

          <div className="flex flex-col items-center justify-center nft-grad w-[342px] rounded-lg p-4 mt-4">
            <div className="-mt-2">
              <Image
                src="/assets/uci47.png"
                alt="NFT"
                width={72}
                height={72}
                className=" animate-pulse"
              />
            </div>

            <div className="text-center">
              Gives you early access to all of my products - lifetime Starting
              from twe qww MetaRings ss
            </div>
          </div>

          <div className=" text-center py-4  cursor-pointer mt-4 font-semibold text-black bg-white rounded-md w-[342px]  hover:text-white hover:bg-black">
            Mint
          </div>
          <div className="flex justify-between ">
            <div className="mt-2 text-sm">1 Matic</div>
            <div className="mt-2 text-sm">3 / 100 remained</div>
          </div>

          <div className=" mt-8  text-sm  text-left flex  justify-start w-[342px] ">
            No matic? DM me. Ill send you. No wallet? See video to get it for it
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTMain;
