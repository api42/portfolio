import Image from "next/image";
import React from "react";

interface L3CommonLayoutInterface {
  title: string;
  titleUnderlineColor: string;
  emoji?: string;
  data?: any;
}

interface L3detailysCommonInterface {}

function L3CommonLayout(item: L3CommonLayoutInterface) {
  return (
    <div className="w-[38rem]">
      <div>
        <span className="text-xl font-semibold">{item.title}</span>
        <div
          className={`${item.titleUnderlineColor} w-44 mt-2 h-1  rounded-sm`}
        ></div>
      </div>

      <div className="mt-8">
        {item.data.map(
          (item: {
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
            };
          }) => (
            <div key={item.id} className="mb-8">
              <div className="flex space-x-4 font-semibold">
                <Image src={item.logo} width={72} height={72} alt="" />
                <div className="font-semibold ">
                  {item.title}
                  <div className="text-sm font-normal text-purple-600 ">
                    {item.data.title}
                  </div>
                </div>

                {/* <div className="tracking-widest"> {item.skills} </div> */}
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
