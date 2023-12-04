import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center p-[21px] sm:px-5 w-[78%] md:w-full">
          <div className="header-row my-px">
            <Img
              className="min-w-[200px]"
              src="images/img_navbarbrand.svg"
              alt="navbarbrand"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col sm:hidden items-start justify-end md:ml-[0] ml-[39px] sm:pr-5 pr-[21px] py-[21px] w-[24%] md:w-full">
            <div className="flex flex-row gap-[27.58px] items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-[27%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="cursor-pointer text-[14.38px] text-center text-gray-800 tracking-[0.26px]"
                    size="txtMontserratSemiBold1838"
                  >
                    Home
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[28%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-[14.38px] text-center text-gray-800 tracking-[0.26px]"
                    size="txtMontserratSemiBold1838"
                  >
                    About
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[21%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-[14.38px] text-center text-gray-800 tracking-[0.26px]"
                    size="txtMontserratSemiBold1838"
                  >
                    Blog
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:hidden items-center justify-start md:ml-[0] ml-[331px] w-2/5 md:w-full">
            <Text
              className="cursor-pointer min-w-[60px] text-[14.38px] text-gray-800 text-right tracking-[0.26px]"
              size="txtMontserratBold1838"
            >
              Sign in
            </Text>
            <div className="flex flex-col items-center justify-start ml-[26px] w-[15%] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="cursor-pointer min-w-[70px] text-[14.38px] text-gray-800 text-right tracking-[0.26px]"
                  size="txtMontserratBold1838"
                >
                  Sign up
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-[59px] w-[56%] sm:w-full">
              <Button
                className="!p-4 cursor-pointer flex items-center justify-center min-w-[230px] rounded-md"
                rightIcon={
                  <div className="mt-[5px] mb-1 ml-[19px] bg-white-A700">
                    <Img src="images/img_arrowleft.svg" alt="arrow_left" />
                  </div>
                }
                color="blue_900"
                size="3xl"
                variant="fill"
              >
                <div className="font-bold font-montserrat text-[14.38px] text-center tracking-[0.26px]">
                  Become a member
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
