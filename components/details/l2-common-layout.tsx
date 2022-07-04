import React from "react";

interface L2CommonLayoutInterface {
  title: string;
  uid: number;
}
// square-shapes
function L2CommonLayout(item: L2CommonLayoutInterface) {
  return (
    <div className="w-96">
      <div>
        <span className="font-semibold ">{item.title}</span>
      </div>
    </div>
  );
}

export default L2CommonLayout;
