import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface L3CommonLayoutInterface {
  title: string;
  titleUnderlineColor: string;
  emoji?: string;
  titleArray?: Array<string>;
  data?: any;
  animation?: string;
}

function L3CommonLayout(item: L3CommonLayoutInterface) {
  return (
    <div className="sm:w-[40rem]">
      <div>
        <span className="text-base font-semibold sm:text-xl">{item.title}</span>
        <div
          className={`${item.titleUnderlineColor} w-44 mt-4 h-1  rounded-sm`}
        ></div>
      </div>

      <div className="flex justify-between mt-8 sm:mt-12">
        {item.data.map(
          (item: {
            riveComponent: React.ReactNode;
            experience: number;
            AnimationX: number | undefined;
            AnimationY: number | undefined;
            uid: React.Key | null | undefined;
            logo: string;
            skills: string;
            id: React.Key | null | undefined;
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            data: {
              AnimationX: string | number | undefined;
              AnimationY: string | number | undefined;

              titleArray: Array<string>;
              title: Array<string>;
            };
          }) => (
            <div
              key={item.id}
              className="relative mb-8 rounded-lg common-bg-color  h-[20rem] w-48"
            >
              <div className="items-start justify-start font-semibold ">
                <motion.div
                  animate={{ scale: 1.03 }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div className="-mt-4 -ml-4">
                    <Image src={item.logo} width={42} height={42} alt="" />
                  </div>
                </motion.div>

                <div className="mt-4 ml-4 space-x-2 " data-tip="Skill Level">
                  {Array.from({ length: item.experience }, (_, i) => (
                    <span key={i}>
                      <Image
                        src="/assets/coin-star-gold.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </span>
                  ))}
                </div>
                <div className="-ml-4">{item.riveComponent}</div>

                <div className="px-4 py-4 font-normal ">
                  {item.data.titleArray.map((items) => (
                    <div key={items}>{items}</div>
                  ))}{" "}
                </div>

                {/* <div className="tracking-widest"> {item.skills} </div> */}
              </div>
              <div className="absolute flex justify-around text-sm font-normal text-center text-purple-600 w-44 bottom-6 ">
                {item.data.title.map((item) => (
                  <div
                    key={item}
                    className="cursor-pointer project-title-color-1"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4"></div>

              {/* {projects_for_fullstack_data.map((item) => (
              <div key={item.id}>{item.title}</div>
            ))} */}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default L3CommonLayout;
