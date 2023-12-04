import React from "react";

import { Img, Text } from "components";

const Slide169OneShadow = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[201px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
          alt="rectanglefour"
          src={props?.userimage}
        />
        <div className="flex flex-col gap-6 h-full items-start justify-between sm:px-5 px-6 py-8 w-full">
          <div className="flex flex-col gap-6 h-[257px] md:h-auto items-start justify-start w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-center text-pink-600 text-sm tracking-[0.80px] uppercase w-auto"
                size="txtPoppinsSemiBold14"
              >
                {props?.articletext}
              </Text>
              <Text
                className="leading-[140.00%] max-w-[312px] md:max-w-full text-gray-900_02 text-xl"
                size="txtMontserratBold20Gray90002"
              >
                {props?.guidetext}
              </Text>
            </div>
            <Text
              className="leading-[180.00%] max-w-[312px] md:max-w-full text-base text-gray-900_8e"
              size="txtMontserratRegular16Gray9008e"
            >
              {props?.articlecontent}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
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
                {props?.usertime}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Slide169OneShadow.defaultProps = {
  userimage: "images/img_rectangle4.png",
  articletext: "Article",
  guidetext: (
    <>
      Guide for designing better
      <br />
      mobile apps typography
    </>
  ),
  articlecontent:
    "In this article, I won’t talk about the general concepts of typography, which can be used both in print...",
  username: "Kristin Watson",
  usertime: "Jun 27, 2020 · 6 min read",
};

export default Slide169OneShadow;
