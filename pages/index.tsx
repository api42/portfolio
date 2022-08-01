import { useEffect, useState } from "react";

import AllHobbies from "../components/details/hobbies/all-hobbies";
import Blockchain from "../components/details/skills/blockchain";
import CurrentProjects from "../components/details/projects/current-projects";
import Design from "../components/details/skills/design";
import FullStackDev from "../components/details/skills/full-stack-dev";
import Head from "next/head";
import Image from "next/image";
import NFTMain from "../components/details/NFT/main";
import type { NextPage } from "next";
import PersonalStory from "../components/details/story/personal-story";
import PreviousProjects from "../components/details/projects/previous-projects";
import ProfessionalStory from "../components/details/story/professional-story";
import RightSideLayout from "../components/details/right-side-layout";
import Try from "../components/details/NFT/try";
import { useHomeViewStore } from "../ViewStore/homeViewStore";

interface L1 {
  id: number;
  name: string;
  emoji: string;
  color: string;
  forL2: any;
}

interface L2 {
  id: number;
  name: string;
  details_id: number;
  emoji?: string;
  bg?: string;
}

const Home: NextPage = () => {
  const StopDMAnimation = useHomeViewStore((state) => state.StopDMAnimation);

  const changeStopDMAnimation = useHomeViewStore(
    (state) => state.changeStopDMAnimation
  );

  const [dmsOpenHook, setDmsOpenHook] = useState(StopDMAnimation);

  const dmsOpen = dmsOpenHook ? "animate-bounce" : "animate-none";

  const L2OptionsForSkills = [
    {
      id: 0,
      name: "Full stack dev",
      details_id: 0,
      emoji: "🧑‍💻",
      bg: " yelllow-red-grad",
    },
    {
      id: 1,
      name: "Design",
      details_id: 1,
      emoji: "🎨",
      bg: "yelllow-red-grad",
    },
    {
      id: 2,
      name: "Blockchain",
      details_id: 2,
      emoji: "⛓",
      bg: "yelllow-red-grad",
    },
  ];

  const L2OptionsForProjects = [
    { id: 0, name: "Current ", details_id: 3, bg: "blue-blue-grad" },
    { id: 1, name: "Previous ", details_id: 4, bg: "blue-blue-grad" },
  ];

  const L2OptionsForHobbies = [
    { id: 0, name: "All ", details_id: 5, bg: "red-ping-grad" },
  ];

  const L2OptionsForStory = [
    { id: 0, name: "Brief ", details_id: 6, bg: "green-green-grad" },
  ];

  const L1Options = [
    {
      id: 0,
      name: "Story",
      emoji: "🎢",
      color: "green-green-grad",
      forL2: L2OptionsForStory,
    },
    {
      id: 1,
      name: "Skills",
      emoji: "🍳",
      color: "yelllow-red-grad",
      forL2: L2OptionsForSkills,
    },
    {
      id: 2,
      name: "Projects",
      emoji: "🗺",
      color: "blue-blue-grad",
      forL2: L2OptionsForProjects,
    },
    {
      id: 3,
      name: "Hobbies",
      emoji: "🧗‍♂️",
      color: "red-ping-grad",
      forL2: L2OptionsForHobbies,
    },
  ];

  const L3Options = [
    { id: 0, name: "Brief", component: <PersonalStory /> },
    { id: 1, name: "Full stack dev", component: <FullStackDev /> },
    { id: 2, name: "Design", component: <Design /> },
    { id: 3, name: "Blockchain", component: <Blockchain /> },
    { id: 4, name: "Current Projects", component: <CurrentProjects /> },
    { id: 5, name: "Previous Projects", component: <PreviousProjects /> },
    { id: 6, name: "All Hobbies ", component: <AllHobbies /> },
    { id: 7, name: "Personal Story", component: <PersonalStory /> },
    { id: 8, name: "Professional Story", component: <NFTMain /> },
    { id: 9, name: "NFT Details", componenet: <NFTMain /> },
    { id: 10, name: "NFT Details2", componenet: <Try /> },
  ];

  const L3Selection = useHomeViewStore((state) => state.L3Selection);

  const changeL3Selection = useHomeViewStore(
    (state) => state.changeL3Selection
  );

  const NFTDisplayViewStore = useHomeViewStore(
    (state) => state.NFTDisplayViewStore
  );
  const changeNFTDisplayViewStore = useHomeViewStore(
    (state) => state.changeNFTDisplayViewStore
  );

  //hook states

  const [L1SelectionHook, setL1SelectionHook] = useState(0);
  const [L2SelectionHook, setL2SelectionHook] = useState(0);
  const [L3SelectionHook, setL3SelectionHook] = useState(L3Selection);
  const [NFTDisplay, setNFTDisplay] = useState(NFTDisplayViewStore);

  //Handle clicks

  useEffect(() => {
    changeStopDMAnimation(StopDMAnimation);
    setDmsOpenHook(StopDMAnimation);
    changeL3Selection(L3Selection);

    setL3SelectionHook(L3Selection);
    console.log("lr changed", L3Selection);
  }, [StopDMAnimation, L3Selection, L1SelectionHook]);

  useEffect(() => {
    setNFTDisplay(NFTDisplayViewStore);
  }, [NFTDisplayViewStore]);

  function changeL1State(id: number) {
    setL1SelectionHook(id);

    setL2SelectionHook(0);

    switch (id) {
      case 0:
        changeL3Selection(0);
        setL3SelectionHook(0);

        break;
      case 1:
        changeL3Selection(3);
        setL3SelectionHook(3);

        break;
      case 2:
        changeL3Selection(5);
        setL3SelectionHook(5);

        break;
      case 3:
        changeL3Selection(6);
        setL3SelectionHook(6);

        break;

      default:
        break;
    }
  }

  function changeL2State(id: number, detailsID: number) {
    setL2SelectionHook(id);
    setL3SelectionHook(detailsID);
  }

  function L1Squares(item: L1) {
    const squarShapeCSSClass =
      "h-10 w-10 rounded-md  flex-center flex cursor-pointer" +
      " " +
      item.color +
      " ";

    return (
      <div
        key={item.id}
        className={`  "cursor-pointer flex-col mb-3 flex  items-center justify-center"  hover:scale-105 w-14 `}
        onClick={() => changeL1State(item.id)}
      >
        <div
          className={` ${squarShapeCSSClass} + " " + ${
            L1SelectionHook == item.id ? " text-white " : " opacity-60"
          }  `}
        >
          <span className="text-3xl">{item.emoji}</span>
        </div>
        <div
          className={`${
            L1SelectionHook == item.id ? " text-white " : " text-gray-400"
          }  mt-2 text-xs font-semibold sm:text-base cursor-pointer`}
        >
          {item.name}
        </div>
      </div>
    );
  }

  function L2Lists(item: L2) {
    const listCSSClass =
      " square-shapes     w-36 rounded-md   text-center flex justify-center items-center   font-normal";

    return (
      <div
        className="pl-4 text-center cursor-pointer sm:mb-8 sm:space-x-4 sm:w-auto sm:items-center sm:flex hover:scale-105"
        onClick={() => changeL2State(item.id, item.details_id)}
      >
        <div
          className={` ${listCSSClass} + " " + ${
            L2SelectionHook == item.id ? "   " : "  opacity-60 "
          }    my-0 mx-auto sm:my-1 sm:mx-0 ${item.bg} `}
        >
          <span className="text-3xl ">{item.emoji}</span>
        </div>
        <div
          className={` ${
            L2SelectionHook == item.id ? "text-white" : "text-gray-400"
          }  font-semibold sm:text-base text-xs sm:mt-0 mt-2 `}
        >
          {item.name}
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Head>
        <title>Apurva Raj </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Meta Rings | Build Web3 and Metaverse apps. A fun and utility NFT
          project for building web3 and metaverse apps"
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="preload"
          href="/fonts/Gilroy/Gilroy-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Gilroy/Gilroy-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Gilroy/Gilroy-Medium.ttf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Gilroy/Gilroy-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className="h-screen overflow-hidden sm:overflow-auto">
        {NFTDisplay ? (
          <div className="absolute z-50 w-full h-full backdrop-blur-lg">
            {/* <div className="absolute w-full h-full bg-black opacity-95"></div> */}
            <NFTMain />
          </div>
        ) : (
          <></>
        )}
        <div className="relative h-full pb-4 mt-4 overflow-hidden sm:mt-8 sm:main-fixed-size sm:m-0-auto">
          {/* Header: Start  */}

          <div
            id="header"
            className="flex items-center justify-between mx-4 text-base font-bold sm:mx-0 sm:mt-8 sm:text-lg"
          >
            {/* <div className="font-bold cursor-pointer ">
              <div className="text-xl "></div>
            </div> */}
            <div className="relative ">
              <div className="absolute z-0 opacity-30 -inset-1 transitiona-all rounded-xl blur-lg filter all-color-bg"></div>
              <div className="text-base sm:text-xl ">Apurva Raj</div>
            </div>
            <a
              href="https://twitter.com/apimetaring"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <div className="">
                  <span className="hidden sm:block">
                    <Image
                      src="/assets/twitter.png"
                      alt="Twitter LOGO"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="block sm:hidden">
                    <Image
                      src="/assets/twitter.png"
                      alt="Twitter LOGO"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
                <div
                  className={` ${dmsOpen} text-xs rounded-sm  title-gradient-2`}
                >
                  {" "}
                  DMs Open
                </div>
              </div>
            </a>
          </div>

          {/* Header: End  */}

          {/* Body: Starts  */}
          <div className="block">
            <div className="absolute flex items-center w-full mt-8 space-x-4 justify-evenly sm:justify-center sm:space-x-8 sm:relative bottom-16 sm:bottom-0">
              {L1Options.map((item) => (
                <div key={item.id}>{L1Squares(item)}</div>
              ))}
            </div>
          </div>

          <div className="mt-4 sm:mt-12 ">
            <div className="flex items-start ">
              {/* L2 Selection Bar : Left */}
              <div className="w-full mx-4 sm:mx-0 sm:w-44">
                {L1Options.filter((object) => object.id == L1SelectionHook).map(
                  (items) => (
                    <div key={items.id} className="flex justify-start sm:block">
                      {items.forL2.map((item) => (
                        <div key={item.id}>{L2Lists(item)}</div>
                      ))}
                    </div>
                  )
                )}
              </div>

              {/* L3 View  */}

              <div className="hidden ml-16 sm:block ">
                {L3Options.filter((object) => object.id == L3SelectionHook).map(
                  (items) => (
                    <div key={items.id}>{items.component}</div>
                  )
                )}
              </div>
            </div>

            <div className="block mx-4 mt-4 sm:hidden">
              {L3Options.filter((object) => object.id == L3SelectionHook).map(
                (items) => (
                  <div key={items.id}>{items.component}</div>
                )
              )}
            </div>

            {/* Right pannel view  */}
          </div>

          <div className="absolute right-0 hidden top-[16rem] sm:block">
            <RightSideLayout />
          </div>

          <div className="absolute right-0 block mr-4 sm:hidden bottom-40">
            <RightSideLayout />
          </div>
          {/* Body: End  */}
          <div className="absolute sm:block hidden text-center left-1/2 ml-[-12rem] w-96 bottom-8 ">
            <span className="">
              {" "}
              🏗 Built using no code with{" "}
              <span className="font-semibold cursor-pointer title-gradient-2">
                <a
                  href="https://metarings.xyz"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  MetaRings
                </a>
              </span>
            </span>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
