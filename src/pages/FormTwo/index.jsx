import React from "react";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const FormTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-1.5 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="h-[86px] max-w-[1504px] mx-auto md:px-5 relative w-full">
          <Img
            className="absolute h-1.5 inset-x-[0] mx-auto top-[41%] w-full"
            src="images/img_frame377_gray_500.svg"
            alt="frame377"
          />
          <Img
            className="absolute h-[65px] inset-[0] justify-center m-auto rounded-[50%] w-[65px]"
            src="images/img_ellipse9.png"
            alt="ellipsenine"
          />
        </div>
        <div className="flex flex-col items-center justify-start mt-12 md:px-5 w-[21%] md:w-full">
          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-base text-center text-gray-800 tracking-[-0.55px]"
              size="txtMontserratSemiBold25"
            >
              Your Household Information
            </Text>
            <Text
              className="leading-[143.50%] sm:text-[21px] md:text-[23px] text-base text-center text-gray-600 tracking-[-0.55px] w-full"
              size="txtMontserratMedium25Gray600"
            >
              Who are you buying health insurance for today?
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[47px] md:px-5 w-[32%] md:w-full">
          <div className="flex flex-col font-roboto md:gap-3.5 gap-[0] items-center justify-start w-full">
            <div className="block flex-col h-[34px] md:h-auto items-center justify-start rounded-[12px] shadow-bs3 w-full">
              <Text
                className="flex items-start text-base text-blue_gray-700_01 w-auto"
                size="txtRobotoRomanSemiBold20Bluegray70001"
              >
                How many people are in your taxhousehold?
              </Text>
            </div>
            <div className="bg-gray-200 border border-blue-900 border-solid flex flex-row gap-[22px] h-20 md:h-auto items-center justify-between md:px-10 sm:px-5 px-[52px] py-[21px] rounded-[12px] shadow-bs3 w-full">
              <Text
                className="cursor-pointer text-blue_gray-700_01 text-xl w-auto"
                size="txtRobotoRomanSemiBold20Bluegray70001"
              >
                -
              </Text>
              <Text
                className="text-blue_gray-700_01 text-xl w-auto"
                size="txtRobotoRomanSemiBold20Bluegray70001"
              >
                01
              </Text>
              <Text
                className="cursor-pointer text-blue_gray-700_01 text-xl w-auto"
                size="txtRobotoRomanSemiBold20Bluegray70001"
              >
                +
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-roboto gap-[0] items-center justify-start mt-7 w-full">
            <div className="block flex-col h-[34px] md:h-auto items-center justify-start rounded-[12px] shadow-bs3 w-full">
              <Text
                className="block text-base text-blue_gray-700_01 w-auto"
                size="txtRobotoRomanSemiBold20Bluegray70001"
              >
                Estimate your 2024 household income (before taxs)
              </Text>
            </div>
            <div className="bg-gray-200 border border-blue-900 border-solid flex flex-row gap-2.5 sm:gap-[22px] h-20 md:h-auto items-center justify-start mt-0 pt-[21px] py-[21px] rounded-[12px] shadow-bs3 w-full">
              <Button
                className="!text-blue_gray-700_01 cursor-pointer font-semibold h-5 leading-[normal] pb-[50px] pt-7 rounded-bl-[10px] rounded-br-none rounded-tl-[10px] rounded-tr-none text-center text-xl w-[70px]"
                shape="square"
                color="white_A700"
                variant="fill"
              >
                $
              </Button>
              <Text
                className="text-blue_gray-700_01 text-xl w-auto"
                size="txtRobotoRomanSemiBold20Bluegray70001"
              >
                15000
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[37px] rounded-[12px] shadow-bs3 w-auto md:w-full">
              <Text
                className="h-[85px] max-w-[700px] md:max-w-full rounded-none text-blue_gray-700_01 text-sm w-full"
                size="txtRobotoRomanLight18"
              >
                <span className="text-gray-600 font-roboto text-left font-light">
                  Include the estimated income of{" "}
                </span>
                <span className="text-gray-600 font-roboto text-left font-bold">
                  anyone
                </span>
                <span className="text-gray-600 font-roboto text-left font-light">
                  <>
                    {" "}
                    you file taxes with or claim on your taxes. If you&#39;d
                    like to know what types of income to include or need help
                    estimating, use our{" "}
                  </>
                </span>
                <span className="text-pink-600 font-roboto text-left font-light">
                  income calculator.
                </span>
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 border border-pink-600 border-solid flex flex-col font-roboto gap-2.5 items-center justify-start mt-[-2px] py-5 rounded-[19px] shadow-bs3 w-full">
            <div className="flex flex-col items-start justify-start p-2.5 w-[120px]">
              <Img
                className="h-20 md:h-auto object-cover text-colors w-20"
                src="images/img_getcash.png"
                alt="getcash"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
              <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                <Text
                  className="text-[25px] sm:text-[31px] md:text-[33px] text-blue-900 w-auto"
                  size="txtRobotoRomanSemiBold35"
                >
                  Great! You may save up to
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mt-1.5 w-auto">
                <div className="flex flex-row items-center justify-evenly w-full">
                  <Text
                    className="md:text-5xl text-6xl text-blue-900 tracking-[-3.21px]"
                    size="txtRobotoRomanSemiBold8024"
                  >
                    $277
                  </Text>
                  <Text
                    className="text-2xl sm:text-[30.15px] md:text-[32.15px] text-blue-900"
                    size="txtRobotoRomanLight3415"
                  >
                    /month
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-2.5 w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                  <Text
                    className="max-w-full text-gray-600_01 text-sm"
                    size="txtRobotoRomanRegular20"
                  >
                    You will see plans for as low as $0 / month
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold font-montserrat h-20 mt-[47px] py-7 text-[15.26px] text-center tracking-[0.28px] w-full"
            shape="round"
            color="pink_600"
            variant="fill"
          >
            Continue to Utilization
          </Button>
          <Button
            className="cursor-pointer font-bold font-montserrat h-[74px] mt-7 py-[25px] text-[15.26px] text-center tracking-[0.28px] w-full"
            shape="round"
            color="gray_400_02"
            variant="fill"
          >
            Go Back
          </Button>
        </div>
        <Footer className="flex items-center justify-center mt-[271px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default FormTwoPage;
