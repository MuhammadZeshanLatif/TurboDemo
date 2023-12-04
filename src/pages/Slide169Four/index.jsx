import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Radio,
  RadioGroup,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const Slide169FourPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-1.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start max-w-[1504px] mt-[33px] mx-auto md:px-5 w-full">
            <div className="bg-pink-600 h-2 mb-[43px] md:mt-0 mt-[35px] rounded w-[16%]"></div>
            <div className="bg-pink-600 h-2 mb-[43px] md:mt-0 mt-[35px] rounded w-[16%]"></div>
            <div className="h-[86px] relative w-[33%] md:w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[41%] w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                  <div className="bg-pink-600 h-2 rounded w-[48%]"></div>
                  <div className="bg-pink-600 h-2 rounded w-[48%]"></div>
                </div>
              </div>
              <div className="absolute bg-blue_gray-100_01 h-[86px] inset-[0] justify-center m-auto rounded-[50%] w-[86px]"></div>
            </div>
            <div className="bg-pink-600 h-2 mb-[43px] md:mt-0 mt-[35px] rounded w-[16%]"></div>
            <div className="bg-pink-600 h-2 mb-[43px] md:mt-0 mt-[35px] rounded w-[16%]"></div>
          </div>
          <Text
            className="mt-[51px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-800 tracking-[-0.55px]"
            size="txtMontserratSemiBold25"
          >
            See what savings you qualify for
          </Text>
          <Text
            className="leading-[143.50%] mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-600 tracking-[-0.55px] w-[28%] sm:w-full"
            size="txtMontserratMedium25Gray600"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
          <div className="flex flex-col items-center justify-start mt-[90px] md:px-5 w-[31%] md:w-full">
            <div className="bg-white-A700 border border-pink-600 border-solid flex flex-col font-roboto items-start justify-center p-10 sm:px-5 rounded-[19px] shadow-bs3 w-full">
              <div className="flex flex-row gap-4 items-center justify-start mt-[5px] w-[21%] md:w-full">
                <div className="bg-gray-100_03 flex flex-row h-[60px] items-center justify-end p-[11px] rounded-[50%] w-[60px]">
                  <Img
                    className="h-[21px] my-[7px]"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                  <Text
                    className="text-[15px] text-pink-600"
                    size="txtRobotoRomanSemiBold15"
                  >
                    +
                  </Text>
                </div>
                <Text
                  className="text-pink-600 text-xl"
                  size="txtRobotoRomanSemiBold20"
                >
                  ME
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start ml-1 md:ml-[0] mt-[33px] w-[99%] md:w-full">
                <Text
                  className="text-[15px] text-gray-500_01"
                  size="txtRobotoRomanRegular15"
                >
                  Date of Birth
                </Text>
                <Input
                  name="rectangleone"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-14 rounded-md w-full"
                  color="gray_200"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start ml-1 md:ml-[0] mt-[23px] w-[18%] md:w-full">
                <Text
                  className="text-[15px] text-gray-500_01"
                  size="txtRobotoRomanRegular15"
                >
                  Gender
                </Text>
                <RadioGroup
                  className="flex flex-col w-full"
                  name="radiogroupmale"
                >
                  <Radio
                    value="Male"
                    className="leading-[normal] mr-4 text-[15px] text-blue_gray-900_02 text-left"
                    inputClassName="bg-white-A700 border border-blue-900 border-solid h-[26px] mr-[5px] rounded-[13px] w-[26px]"
                    checked={false}
                    name="radiogroupmale"
                    label="Male"
                    id="Male"
                  ></Radio>
                  <Radio
                    value="Female"
                    className="leading-[normal] mt-4 text-[15px] text-blue_gray-900_02 text-left"
                    inputClassName="bg-white-A700 border border-blue-900 border-solid h-[26px] mr-[5px] rounded-[13px] w-[26px]"
                    checked={false}
                    name="radiogroupmale"
                    label="Female"
                    id="Female"
                  ></Radio>
                </RadioGroup>
              </div>
              <CheckBox
                className="leading-[normal] mb-3.5 ml-1 md:ml-[0] mt-[43px] text-[15px] text-left"
                inputClassName="border border-pink-600 border-solid h-[17px] mr-[5px] w-[17px]"
                name="imatobaccouser"
                id="imatobaccouser"
                label="I’m a Tobacco User"
                size="xs"
              ></CheckBox>
            </div>
            <div className="bg-gray-200 border border-blue-900 border-solid flex flex-row font-roboto gap-[37px] items-center justify-start mt-[90px] p-[21px] sm:px-5 rounded-[12px] shadow-bs3 w-full">
              <div className="flex flex-row items-start justify-center mb-[5px] ml-[30px] w-[6%]">
                <Img
                  className="h-[21px] mt-[3px]"
                  src="images/img_lock_blue_gray_700_01.svg"
                  alt="lockone"
                />
                <Text
                  className="text-[15px] text-blue_gray-700_01"
                  size="txtRobotoRomanSemiBold15Bluegray70001"
                >
                  +
                </Text>
              </div>
              <Text
                className="my-[3px] text-blue_gray-700_01 text-xl"
                size="txtRobotoRomanSemiBold20Bluegray70001"
              >
                ADD SPOUSE
              </Text>
            </div>
            <div className="bg-gray-200 border border-blue-900 border-solid flex flex-row font-roboto gap-[37px] items-center justify-start mt-[55px] p-[21px] sm:px-5 rounded-[12px] shadow-bs3 w-full">
              <div className="flex flex-row items-start justify-center mb-[5px] ml-[30px] w-[6%]">
                <Img
                  className="h-[21px] mt-[3px]"
                  src="images/img_lock_blue_gray_700_01.svg"
                  alt="locktwo"
                />
                <Text
                  className="text-[15px] text-blue_gray-700_01"
                  size="txtRobotoRomanSemiBold15Bluegray70001"
                >
                  +
                </Text>
              </div>
              <Text
                className="my-[3px] text-blue_gray-700_01 text-xl"
                size="txtRobotoRomanSemiBold20Bluegray70001"
              >
                ADD SPOUSE
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold font-montserrat h-[74px] min-w-[402px] sm:min-w-full mt-[90px] py-[25px] text-[19.26px] text-center tracking-[0.28px]"
              shape="round"
              color="pink_600"
              variant="fill"
            >
              Continue to Household Size
            </Button>
            <Button
              className="cursor-pointer font-bold font-montserrat h-[74px] min-w-[190px] mt-[33px] py-[25px] text-[19.26px] text-center tracking-[0.28px]"
              shape="round"
              color="gray_400_02"
              variant="fill"
            >
              Go Back
            </Button>
          </div>
          <Footer className="flex items-center justify-center mt-[209px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Slide169FourPage;
