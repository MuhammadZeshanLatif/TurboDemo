import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-gray-50 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
            <div className="flex flex-col items-start justify-start max-w-[1400px] py-[35px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[450.6700000000001px] items-center justify-start w-auto md:w-full">
                <div className="flex flex-col gap-[13.33px] items-start justify-start max-w-[678px] w-full">
                  <Text
                    className="md:text-3xl text-[25px] sm:text-[28px] text-blue_gray-900 tracking-[0.13px] w-auto"
                    size="txtMontserratBold32"
                  >
                    Feel free contact us
                  </Text>
                  <Text
                    className="text-[14.67px] text-gray-600 tracking-[0.27px] w-auto"
                    size="txtMontserratMedium1867"
                  >
                    the quick fox jumps over the lazy dog
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[314px]">
                  <Button
                    className="!p-5 cursor-pointer font-bold font-montserrat min-w-[200px] rounded-md text-[14.67px] text-center tracking-[0.27px]"
                    color="blue_900"
                    size="3xl"
                    variant="fill"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start pb-0.5 px-0.5 w-full">
            <div className="block flex-col items-start justify-start max-w-[1400px] py-[66.67px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start pl-[100px] pr-5 w-auto md:w-full">
                <div className="flex flex-col gap-[26.67px] items-start justify-start text-base w-[197px]">
                  <Text
                    className="text-[17.33px] md:text-[19.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                    size="txtMontserratBold2133"
                  >
                    Company Info
                  </Text>
                  <ul className="flex flex-col gap-[13.33px] items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="common-pointer text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                        onClick={() => navigate("/slide169two")}
                      >
                        About Us
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        Carrier
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        We are hiring
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        Blog
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[26.67px] items-start justify-start w-[202px]">
                  <Text
                    className="text-[17.33px] md:text-[19.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                    size="txtMontserratBold2133"
                  >
                    Legal
                  </Text>
                  <ul className="flex flex-col gap-[13.33px] items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        About Us
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        Carrier
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        We are hiring
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        Blog
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[26.67px] items-start justify-start w-[197px]">
                  <Text
                    className="text-[17.33px] md:text-[19.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                    size="txtMontserratBold2133"
                  >
                    Features
                  </Text>
                  <ul className="flex flex-col gap-[13.33px] items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        Business Marketing
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        User Analytic
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        Live Chat
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        Unlimited Support
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[26.67px] items-start justify-start w-[202px]">
                  <Text
                    className="text-[17.33px] md:text-[19.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                    size="txtMontserratBold2133"
                  >
                    Resources
                  </Text>
                  <ul className="flex flex-col gap-[13.33px] items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        IOS & Android
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        Watch a Demo
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        Customers
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[14.67px] text-gray-600 tracking-[0.27px]"
                        size="txtMontserratSemiBold1867"
                      >
                        API
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[26.67px] items-start justify-start w-[428px] sm:w-full">
                  <Text
                    className="text-[17.33px] md:text-[19.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                    size="txtMontserratBold2133"
                  >
                    Get In Touch
                  </Text>
                  <ul className="flex flex-col gap-[13.33px] items-center justify-start w-auto md:w-full common-column-list">
                    <li>
                      <div className="flex flex-row gap-[13.33px] items-center justify-start">
                        <Img
                          className="h-[25px] w-[25px]"
                          src="images/img_bxbxphone.svg"
                          alt="bxbxphone"
                        />
                        <Text
                          className="text-[14.67px] text-gray-600 tracking-[0.27px] w-[141px]"
                          size="txtMontserratSemiBold1867"
                        >
                          (480) 555-0103
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-[13.33px] items-center justify-start">
                        <Img
                          className="h-[25px] w-[25px]"
                          src="images/img_linkedin.svg"
                          alt="linkedin"
                        />
                        <Text
                          className="leading-[32.00px] max-w-[700px] md:max-w-full text-gray-600 text-sm tracking-[0.27px]"
                          size="txtMontserratSemiBold1867"
                        >
                          4517 Washington Ave. Manchester, Kentucky 39495
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-[13.33px] items-center justify-start">
                        <Img
                          className="h-[25px] w-[25px]"
                          src="images/img_carbonsendalt.svg"
                          alt="carbonsendalt"
                        />
                        <Text
                          className="text-[14.67px] text-gray-600 tracking-[0.27px] w-[259px]"
                          size="txtMontserratSemiBold1867"
                        >
                          albert.john@example.com
                        </Text>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[260px] w-full">
            <div className="flex flex-col items-start justify-start max-w-[1400px] py-[25px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-center justify-between w-auto md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[800px] w-full">
                  <Text
                    className="text-[14.67px] text-gray-600 tracking-[0.27px] w-auto"
                    size="txtMontserratSemiBold1867"
                  >
                    TurboHealth.US All Right Reserved 2023
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[314px]">
                  <div className="flex flex-row gap-[12.670000000000002px] items-center justify-center w-auto">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <Img
                        className="h-8 w-5"
                        src="images/img_antdesignfacebookfilled.svg"
                        alt="antdesignfacebo"
                      />
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_antdesigninstagramoutlined.svg"
                      alt="antdesigninstag"
                    />
                    <div className="flex flex-col items-center justify-start w-[22%]">
                      <Img
                        className="h-5"
                        src="images/img_antdesigntwitteroutlined.svg"
                        alt="antdesigntwitte"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
