import React from "react";

import { Button, CheckBox, Img, Radio, RadioGroup, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const FormOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-1.5 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="h-1 md:h-[119px] max-w-[1504px] mt-[33px] mx-auto md:px-5 relative w-[85%] md:w-full">
          <Img
            className="absolute h-1.5 inset-x-[0] mx-auto top-[41%] w-[96%]"
            src="images/img_frame377.svg"
            alt="frame377"
          />
          <Img
            className="absolute h-[66px] inset-[0] justify-center m-auto rounded-[50%] w-[66px]"
            src="images/img_ellipse9.png"
            alt="ellipseNine"
          />
        </div>
        <div className="flex flex-col items-center justify-start mt-[51px] md:px-5 w-[21%] md:w-full">
          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-center text-gray-800 text-lg tracking-[-0.55px]"
              size="txtMontserratSemiBold25"
            >
              Let’s add members to your plan.
            </Text>
            <Text
              className="leading-[143.50%] sm:text-[21px] md:text-[23px] text-center text-gray-600 text-lg tracking-[-0.55px] w-[97%] sm:w-full"
              size="txtMontserratMedium25Gray600"
            >
              Who are you buying health insurance for today?
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-11 items-center justify-start mt-[90px] md:px-5 w-[32%] md:w-full">
          <div className="bg-white-A700 border border-pink-600 border-solid flex flex-col font-roboto items-center justify-end p-11 md:px-10 sm:px-5 rounded-[19px] shadow-bs3 w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start min-w-full w-auto sm:w-full">
              <div className="flex flex-row gap-1.5 items-center justify-start w-[30%] md:w-full">
                <div className="bg-gray-100_03 flex flex-row items-start justify-end min-h-[40px] min-w-[40px] p-[11px] rounded-[50%]">
                  <Img
                    className="h-[19px] my-0"
                    src="images/img_lock_blue_900.svg"
                    alt="lock"
                  />
                  <Text
                    className="text-[15px] text-blue-900"
                    size="txtRobotoRomanSemiBold15Blue900"
                  >
                    +
                  </Text>
                </div>
                <Text
                  className="text-[22px] sm:text-[31px] md:text-[33px] text-blue-900"
                  size="txtRobotoRomanSemiBold35"
                >
                  ME
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Text
                  className="text-[15px] text-gray-500_01"
                  size="txtRobotoRomanRegular15"
                >
                  Date of Birth
                </Text>
                <div className="bg-gray-200 flex flex-col items-start justify-start rounded-md w-auto sm:w-full">
                  <Img
                    className="h-[22px] md:h-auto object-cover w-[22px]"
                    src="images/img_calendar.png"
                    alt="calendar"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start w-[31%] md:w-full">
                <Text
                  className="text-[15px] text-gray-500_01"
                  size="txtRobotoRomanRegular15"
                >
                  Gender
                </Text>
                <RadioGroup
                  className="flex flex-col w-full"
                  name="radiogroupmale2"
                >
                  <Radio
                    value="Male"
                    className="leading-[normal] sm:pr-5 text-blue_gray-900_02 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue-900 border-solid h-4 mr-[5px] rounded-[13px] w-4"
                    checked={false}
                    name="radiogroupmale2"
                    label="Male"
                    id="Male"
                  ></Radio>
                  <Radio
                    value="Female"
                    className="leading-[normal] mt-4 sm:pr-5 text-blue_gray-900_02 text-left text-sm"
                    inputClassName="bg-pink-600 border-[5px] border-blue-900 border-solid h-4 mr-[5px] rounded-[13px] w-4"
                    checked={false}
                    name="radiogroupmale2"
                    label="Female"
                    id="Female"
                  ></Radio>
                </RadioGroup>
              </div>
              <CheckBox
                className="leading-[normal] text-left text-sm"
                inputClassName="border border-pink-600 border-solid h-[18px] mr-[5px] w-[18px]"
                name="imatobaccouser"
                id="imatobaccouser"
                label="I’m a Tobacco User"
                size="xs"
              ></CheckBox>
            </div>
          </div>
          <div className="bg-gray-200 border border-blue-900 border-solid flex flex-row font-roboto gap-[22px] h-[65px] md:h-auto items-center justify-start min-w-full md:px-10 sm:px-5 px-[52px] py-[21px] rounded-[12px] shadow-bs3 md:w-full">
            <div className="flex flex-row items-start justify-center w-[6%]">
              <Img
                className="h-[17px] mt-[3px]"
                src="images/img_lock_blue_gray_700_01.svg"
                alt="lock_One"
              />
              <Text
                className="text-[15px] text-blue_gray-700_01"
                size="txtRobotoRomanSemiBold15Bluegray70001"
              >
                +
              </Text>
            </div>
            <Text
              className="text-base text-blue_gray-700_01 w-auto"
              size="txtRobotoRomanSemiBold20Bluegray70001"
            >
              ADD SPOUSE
            </Text>
          </div>
          <div className="bg-gray-200 border border-blue-900 border-solid flex flex-row font-roboto gap-[22px] h-[65px] md:h-auto items-center justify-start min-w-full md:px-10 sm:px-5 px-[52px] py-[21px] rounded-[12px] shadow-bs3 md:w-full">
            <div className="flex flex-row items-start justify-center w-[6%]">
              <Img
                className="h-[17px] mt-[3px]"
                src="images/img_lock_blue_gray_700_01.svg"
                alt="lock_Two"
              />
              <Text
                className="text-[15px] text-blue_gray-700_01"
                size="txtRobotoRomanSemiBold15Bluegray70001"
              >
                +
              </Text>
            </div>
            <Text
              className="text-base text-blue_gray-700_01 w-auto"
              size="txtRobotoRomanSemiBold20Bluegray70001"
            >
              ADD DEPENDENT
            </Text>
          </div>
          <Button
            className="cursor-pointer font-bold font-montserrat h-[65px] min-w-full py-7 text-[15.26px] text-center tracking-[0.28px]"
            shape="round"
            color="pink_600"
            variant="fill"
          >
            Continue to Household Size
          </Button>
          <Button
            className="cursor-pointer font-bold font-montserrat h-[65px] min-w-full py-[25px] text-[15.26px] text-center tracking-[0.28px]"
            shape="round"
            color="gray_400_02"
            variant="fill"
          >
            Go Back
          </Button>
        </div>
        <Footer className="flex items-center justify-center mt-[283px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default FormOnePage;
