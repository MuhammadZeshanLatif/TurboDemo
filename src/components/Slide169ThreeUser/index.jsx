import React from "react";

import { Img, Text } from "components";

const Slide169ThreeUser = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-12 items-center justify-start w-12">
          <Img
            className="h-12 md:h-auto rounded-[50%] w-12"
            src="images/img_ellipse4.png"
            alt="ellipsefour"
          />
        </div>
        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
          <Text
            className="text-gray-900_02 text-sm w-auto"
            size="txtPoppinsSemiBold14Gray90002"
          >
            {props?.username}
          </Text>
          <Text
            className="text-gray-900_8e text-xs w-auto"
            size="txtPoppinsRegular12"
          >
            {props?.timestamp}
          </Text>
        </div>
      </div>
    </>
  );
};

Slide169ThreeUser.defaultProps = {
  username: "Kristin Watson",
  timestamp: "Jun 27, 2020 · 6 min read",
};

export default Slide169ThreeUser;
