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
    <div className="w-full h-screen mt-4 overflow-y-scroll sm:mt-8 scroll-smooth hide-scrollbar">
      <div className="flex justify-center">
        <div
          className="sm:w-[42rem] w-full right-4 sm:right-56 top-4  sm:top-8 font-semibold  flex fixed justify-end cursor-pointer"
          onClick={close}
        >
          ❌
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="mb-4 text-2xl font-bold sm:text-3xl "> Siv </div>

        <div className="hidden sm:block">
          <Image
            src="/assets/nft1.png"
            alt="NFT"
            width={342}
            height={342}
            className="mt-4 rounded-lg "
          />
        </div>

        <div className="block w-full px-4  sm:hidden h-[100vw] ">
          <Image
            src="/assets/nft1.png"
            alt="NFT"
            height={1000}
            width={1000}
            layout="responsive"
            className="mt-4 rounded-lg "
          />
        </div>

        <div className="-mt-4 sm:mt-4">
          <div className=" text-center mx-4 sm:mx-0 sm:w-[342px] sm:m-0-auto">
            Here goes all the text and details of the heros journey. Here goes
            all the text and details of the heros
          </div>

          <div className="flex flex-col mx-4 sm:mx-0 items-center justify-center nft-grad sm:w-[342px] rounded-lg p-4 mt-4">
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

          <div className=" text-center py-4 mx-4  sm:mx-0 cursor-pointer mt-4 font-semibold text-black bg-white rounded-md sm:w-[342px]  hover:text-white hover:bg-black border-[1px]  transition-colors border-transparent hover:border-white">
            Mint
          </div>
          <div className="flex justify-between mx-4 font-semibold sm:mx-0 ">
            <div className="mt-2 text-sm ">1 Matic</div>
            <div className="mt-2 text-sm">3 / 100 remained</div>
          </div>

          <div className=" mt-4 sm:mt-8 mx-4  sm:mx-0  text-sm  text-left flex  justify-start sm:w-[342px] ">
            <div className="">
              <div>
                No Matic?
                <span className="mx-1 font-semibold text-purple-600">
                  <a
                    href="https://twitter.com/apimetaring"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DM me.
                  </a>
                </span>
                I&apos;ll send you required Matic for free.
              </div>

              <div className="mt-2">
                No Wallet? download
                <span className="mx-1 font-semibold text-purple-600">
                  <a
                    href="https://metamask.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Metamask
                  </a>
                </span>
                for free.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTMain;
