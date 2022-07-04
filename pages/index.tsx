import { Component, ReactFragment, useEffect, useState } from "react";

import Blockchain from "../components/details/skills/blockchain";
import Design from "../components/details/skills/design";
import FullStackDev from "../components/details/skills/full-stack-dev";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import ProjectsDetails from "../components/details/projects";
import RightSideLayout from "../components/details/right-side-layout";
import SkillsDetails from "../components/details/skills";
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
}

const Home: NextPage = () => {
  const L2OptionsForSkills = [
    { id: 0, name: "Full stack dev", details_id: 0, emoji: "🧑‍💻" },
    { id: 1, name: "Design", details_id: 1, emoji: "🎨" },
    { id: 2, name: "Blockchain", details_id: 2, emoji: "⛓" },
  ];

  const L2OptionsForProjects = [{ id: 0, name: "Design ", details_id: 0 }];

  const L2OptionsForHobbies = [{ id: 0, name: "All ", details_id: 0 }];

  const L2OptionsForStory = [
    { id: 0, name: "Personal ", details_id: 0 },
    { id: 1, name: "Professional ", details_id: 0 },
  ];

  const L1Options = [
    {
      id: 0,
      name: "Skills",
      emoji: "🍳",
      color: "bg-yellow-300",
      forL2: L2OptionsForSkills,
    },
    {
      id: 1,
      name: "Projects",
      emoji: "🗺",
      color: "bg-blue-500",
      forL2: L2OptionsForProjects,
    },
    {
      id: 2,
      name: "Hobbies",
      emoji: "🧗‍♂️",
      color: "bg-red-500",
      forL2: L2OptionsForHobbies,
    },
    {
      id: 3,
      name: "Story",
      emoji: "🎢",
      color: "bg-green-500",
      forL2: L2OptionsForStory,
    },
  ];

  const L3Options = [
    { id: 0, name: "Full stack dev", component: <FullStackDev /> },
    { id: 1, name: "Design", component: <Design /> },
    { id: 2, name: "Blockchain", component: <Blockchain /> },
    { id: 3, name: "Story" },
  ];

  // Redux Values

  const L1Selection = useHomeViewStore((state) => state.L1Selection);
  const changeL1Selection = useHomeViewStore(
    (state) => state.changeL1Selection
  );

  const L2Selection = useHomeViewStore((state) => state.L2Selection);
  const changeL2Selection = useHomeViewStore(
    (state) => state.changeL2Selection
  );

  const L3Selection = useHomeViewStore((state) => state.L3Selection);
  const changeL3Selection = useHomeViewStore(
    (state) => state.changeL3Selection
  );

  //hook states

  const [L1SelectionHook, setL1SelectionHook] = useState(0);
  const [L2SelectionHook, setL2SelectionHook] = useState(0);
  const [L3SelectionHook, setL3SelectionHook] = useState(0);

  //Handle clicks

  function changeL1State(id: number) {
    changeL1Selection(id);
    changeL2Selection(0);
  }

  function changeL2State(id: number, detailsID: number) {
    changeL2Selection(id);
    changeL3Selection(detailsID);
  }

  // Handle new renders
  useEffect(() => {
    setL1SelectionHook(L1Selection);
  }, [L1Selection]);

  useEffect(() => {
    setL2SelectionHook(L2Selection);
    setL3SelectionHook(L3Selection);
  }, [L2Selection]);

  function L1Squares(item: L1) {
    const squarShapeCSSClass =
      "h-10 w-10 rounded-md  flex-center flex cursor-pointer" +
      " " +
      item.color +
      " ";

    return (
      <div
        key={item.id}
        className={`  " flex-col mb-3 flex  items-center justify-center" `}
        onClick={() => changeL1State(item.id)}
      >
        <div
          className={` ${squarShapeCSSClass} + " " + ${
            L1SelectionHook == item.id
              ? "border-white border-[1px]"
              : "border-0 border-transparent"
          } `}
        >
          <span className="text-3xl">{item.emoji}</span>
        </div>
        <div className="mt-2 text-base text-gray-300 ">{item.name}</div>
      </div>
    );
  }

  function L2Lists(item: L2) {
    const listCSSClass =
      " square-shapes border-[0.5px]   w-36 rounded-md   text-center flex justify-center items-center   font-normal";

    return (
      <div
        className="flex items-center mb-8 space-x-2 cursor-pointer"
        onClick={() => changeL2State(item.id, item.details_id)}
      >
        <div
          className={` ${listCSSClass} + " " + ${
            L2SelectionHook == item.id
              ? " bg-yellow-500  "
              : "  text-gray-400 bg-yellow-200"
          } `}
        >
          <span className="text-3xl ">{item.emoji}</span>
        </div>
        <div
          className={` ${
            L2SelectionHook == item.id ? "text-white" : "text-gray-400"
          } `}
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

      <main className="h-screen ">
        <div className="relative h-full pb-4 mt-8 overflow-hidden sm:main-fixed-size sm:m-0-auto">
          {/* Header: Start  */}

          <div
            id="header"
            className="flex items-center justify-between text-base font-bold sm:mt-8 sm:text-lg"
          >
            {/* <div className="font-bold cursor-pointer ">
              <div className="text-xl "></div>
            </div> */}
            <div className="relative hidden sm:block">
              <div className="absolute z-0 opacity-30 -inset-1 transitiona-all rounded-xl blur-lg filter all-color-bg"></div>
              <div className="text-xl ">Apurva Raj</div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <a
                  href="https://twitter.com/metaringsxyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/twitter.png"
                    alt="Twitter LOGO"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Header: End  */}

          {/* Body: Starts  */}
          <div className="flex items-center justify-center mt-8 space-x-8 ">
            {L1Options.map((item) => (
              <div key={item.id}>{L1Squares(item)}</div>
            ))}
          </div>

          <div className="mt-12 ">
            <div className="flex items-start ">
              {/* L1 Selection Bar : Left */}
              {/* <div className="grid w-32 grid-cols-2 ">
                {L1Options.map((item) => (
                  <div key={item.id}>{L1Squares(item)}</div>
                ))}
              </div> */}

              {/* L2 Selection Bar : Left */}
              <div className="w-40 ">
                {L1Options.filter((object) => object.id == L1Selection).map(
                  (items) => (
                    <div key={items.id}>
                      {items.forL2.map((item) => (
                        <div key={item.id}>{L2Lists(item)}</div>
                      ))}
                    </div>
                  )
                )}
              </div>

              {/* L3 View  */}

              <div className="ml-20 ">
                {L3Options.filter((object) => object.id == L3SelectionHook).map(
                  (items) => (
                    <div key={items.id}>{items.component}</div>
                  )
                )}
              </div>
            </div>

            {/* Right pannel view  */}
          </div>

          <div className="absolute right-0 top-56 ">
            <RightSideLayout />
          </div>

          {/* Body: End  */}
          <div className="absolute text-center bottom-8 m-0-auto">
            Made using no code with MetaRings
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
