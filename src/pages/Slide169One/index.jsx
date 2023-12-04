import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import Slide169OneNaked from "components/Slide169OneNaked";
import Slide169OneShadow from "components/Slide169OneShadow";

const Slide169OnePage = () => {
  const slide169OneShadowPropList = [
    {},
    {
      articletext: "video",
      articlecontent:
        "Dashboard is the hub for millions of businesses to take action. We’ve launched dozens of new features in the Dashboard...",
      guidetext: "New Dashboard features to save you time",
      userimage: "images/img_rectangle4_201x360.png",
    },
    {
      articletext: "Case study",
      articlecontent:
        "The health platform boosted acceptance rates and expanded global coverage by switching to Dlex",
      guidetext: "Noom sees an 8% increase in authorization rates with Dlex",
      userimage: "images/img_rectangle4_201x360.png",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat gap-[13px] items-center justify-end mx-auto pt-1.5 w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center p-[21px] sm:px-5 w-full">
            <div className="header-row my-px">
              <Img
                className="h-[76px]"
                src="images/img_navbarbrand.svg"
                alt="navbarbrand"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col sm:hidden items-start justify-end md:ml-[0] ml-[39px] sm:pr-5 pr-[21px] py-[21px] w-[24%] md:w-full">
              <div className="flex flex-row gap-[27.58px] items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[19%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-[18.38px] text-center text-gray-800 tracking-[0.26px]"
                      size="txtMontserratSemiBold1838"
                    >
                      Home
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[19%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-[18.38px] text-center text-gray-800 tracking-[0.26px]"
                      size="txtMontserratSemiBold1838"
                    >
                      About
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[14%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-[18.38px] text-center text-gray-800 tracking-[0.26px]"
                      size="txtMontserratSemiBold1838"
                    >
                      Blog
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-center justify-start md:ml-[0] ml-[331px] w-[31%] md:w-full">
              <a
                href="javascript:"
                className="text-[18.38px] text-gray-800 text-right tracking-[0.26px]"
              >
                <Text size="txtMontserratBold1838">Sign in</Text>
              </a>
              <div className="flex flex-col items-center justify-start ml-[26px] w-[15%] sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <a
                    href="javascript:"
                    className="text-[18.38px] text-gray-800 text-right tracking-[0.26px]"
                  >
                    <Text size="txtMontserratBold1838">Sign up</Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-[59px] w-[56%] sm:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[289px] rounded-md"
                  rightIcon={
                    <div className="mt-[5px] mb-1 ml-[19px] bg-white-A700">
                      <Img src="images/img_arrowleft.svg" alt="arrow_left" />
                    </div>
                  }
                  color="blue_900"
                  size="3xl"
                  variant="fill"
                >
                  <div className="font-bold text-[18.38px] text-center tracking-[0.26px]">
                    Become a member
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="md:h-[810px] sm:h-[908px] h-[950px] mx-auto w-full">
              <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                <div className="h-[810px] sm:h-[908px] mx-auto w-full">
                  <Img
                    className="h-[810px] m-auto object-cover w-full"
                    src="images/img_image1.png"
                    alt="imageone"
                  />
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[11%] my-auto w-[46%]">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-800 tracking-[0.20px]"
                      size="txtMontserratBold40"
                    >
                      Your One-stop Shop for Health Insurance
                    </Text>
                    <Text
                      className="mt-11 sm:text-[21px] md:text-[23px] text-[25px] text-gray-800 tracking-[0.20px]"
                      size="txtMontserratMedium25"
                    >
                      Select the insurance you need, provide your ZIP, and see
                      plans fast!
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[27px] w-[81%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start w-[82%] md:w-full">
                        <Button
                          className="!text-pink-600 border-pink-600 border-solid border-t-2 capitalize cursor-pointer font-bold min-w-[125px] rounded-tl-[10px] rounded-tr-[10px] text-[18.38px] text-center tracking-[0.26px]"
                          color="white_A700"
                          size="2xl"
                          variant="fill"
                        >
                          Medicare
                        </Button>
                        <Button
                          className="capitalize cursor-pointer font-medium min-w-[234px] rounded-tl-[10px] rounded-tr-[10px] text-[18.38px] text-center tracking-[0.26px]"
                          color="white_A700"
                          size="2xl"
                          variant="fill"
                        >
                          Individuals & family
                        </Button>
                        <Button
                          className="capitalize cursor-pointer font-medium min-w-[194px] rounded-tl-[10px] rounded-tr-[10px] text-[18.38px] text-center tracking-[0.26px]"
                          color="white_A700"
                          size="2xl"
                          variant="fill"
                        >
                          Dental & Vission
                        </Button>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-start justify-start p-[31px] sm:px-5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] shadow-bs1 w-full">
                        <div className="flex flex-col items-start justify-start mb-[22px] mt-4 w-[91%] md:w-full">
                          <Text
                            className="capitalize text-[18.38px] text-center text-gray-800 tracking-[0.26px]"
                            size="txtMontserratBold1838"
                          >
                            Compare Medicare plans and enroll online. easy. fast
                          </Text>
                          <Text
                            className="capitalize mt-7 text-[18.38px] text-center text-gray-800 tracking-[0.26px]"
                            size="txtMontserratRegular1838"
                          >
                            Enter your zIP code
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between mt-5 w-full">
                            <Input
                              name="rectanglefive"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="border border-gray-800 border-solid flex sm:flex-1 h-[54px] sm:w-full"
                              shape="round"
                              color="white_A700"
                              variant="fill"
                            ></Input>
                            <Button
                              className="cursor-pointer font-bold h-[54px] min-w-[225px] rounded-[10px] text-center text-sm tracking-[0.20px]"
                              color="pink_600"
                              size="2xl"
                              variant="fill"
                            >
                              Find medicare plans
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] mt-16 w-[58%] md:w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-end p-0.5 rounded-[3px] w-[24%] sm:w-full">
                        <Img
                          className="h-11 md:h-auto object-cover w-[89%]"
                          src="images/img_image214.png"
                          alt="image214"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-[5px] rounded-[3px] w-[36%] sm:w-full">
                        <Img
                          className="h-[39px] md:h-auto object-cover w-[96%]"
                          src="images/img_image212.png"
                          alt="image212"
                        />
                      </div>
                      <Img
                        className="h-[50px] md:h-auto object-cover rounded-[3px] w-[34%] sm:w-full"
                        src="images/img_image215.png"
                        alt="image215"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-blue-900 h-[159px] mt-[-27px] mx-auto w-full z-[1]"></div>
              </div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start max-w-[1050px] mx-auto w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start py-[50px] w-auto md:w-full">
                  <Img
                    className="h-[34px] w-[153px]"
                    src="images/img_colmd2.svg"
                    alt="colmdtwo"
                  />
                  <Img
                    className="h-[59px] w-[146px]"
                    src="images/img_colmd2_white_a700.svg"
                    alt="colmdtwoone"
                  />
                  <Img
                    className="h-[75px] w-[152px]"
                    src="images/img_colmd2_white_a700_75x152.svg"
                    alt="colmdtwotwo"
                  />
                  <Img
                    className="h-[42px] w-[151px]"
                    src="images/img_colmd2_white_a700_42x151.svg"
                    alt="colmdtwothree"
                  />
                  <Img
                    className="h-[62px] w-[151px]"
                    src="images/img_colmd2_white_a700_62x151.svg"
                    alt="colmdtwofour"
                  />
                  <div className="flex flex-col items-center justify-start w-[147px]">
                    <Img
                      className="h-[72px] w-[76px]"
                      src="images/img_fabrandsredditalien.svg"
                      alt="fabrandsreddita"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end mt-[-8px] mx-auto p-[65px] md:px-10 sm:px-5 w-full z-[1]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-6 w-[85%] md:w-full">
                <div className="flex flex-col gap-[38px] items-start justify-start w-[44%] md:w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 tracking-[-1.10px]"
                    size="txtMontserratBold50"
                  >
                    Who we are
                  </Text>
                  <div className="flex flex-col relative w-full">
                    <Text
                      className="leading-[150.00%] mx-auto text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px] w-full"
                      size="txtMontserratMedium24"
                    >
                      <span className="text-blue-900 font-montserrat text-left font-bold">
                        TurboHealth.us
                      </span>
                      <span className="text-gray-600 font-montserrat text-left font-medium">
                        <>
                          {" "}
                          is here to simplify the process for you. We&#39;re
                          your trusted partner in finding the perfect healthcare
                          coverage tailored to your needs. Whether you&#39;re an
                          individual, family, or business,{" "}
                        </>
                      </span>
                      <span className="text-blue-900 font-montserrat text-left font-bold">
                        TurboHealth.us
                      </span>
                      <span className="text-gray-600 font-montserrat text-left font-medium">
                        <>
                          {" "}
                          has the right insurance solution for you. Let&#39;s
                          embark on a journey to secure your well-being and
                          peace of mind.
                        </>
                      </span>
                    </Text>
                    <Button
                      className="cursor-pointer font-bold h-[54px] min-w-[157px] mt-[-15px] rounded-[10px] text-center text-sm tracking-[0.20px] z-[1]"
                      color="pink_600"
                      size="2xl"
                      variant="fill"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="md:h-[421px] h-[596px] relative w-[45%] md:w-full">
                  <Img
                    className="absolute h-[421px] left-[0] object-cover rounded-[10px] top-[0] w-[79%]"
                    src="images/img_rectangle278.png"
                    alt="rectangle278"
                  />
                  <Img
                    className="absolute bottom-[0] h-[350px] object-cover right-[0] rounded-[10px] w-[69%]"
                    src="images/img_rectangle279.png"
                    alt="rectangle279"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[697px] mt-[108px] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 tracking-[-1.10px]"
            size="txtMontserratBold50"
          >
            What is TurboHealth
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[62px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1513px] mt-[105px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex sm:flex-1 flex-col items-start justify-start w-[462px] sm:w-full">
              <div className="bg-white-A700 flex flex-col gap-[14.09px] items-start justify-start md:px-10 sm:px-5 px-[56.37px] py-[49.32px] shadow-bs2 w-[462px] sm:w-full">
                <Img
                  className="h-[55px] w-[67px]"
                  src="images/img_icnresizeicnmd.svg"
                  alt="icnresizeicnmd"
                />
                <Text
                  className="sm:text-[29.82px] md:text-[31.82px] text-[33.82px] text-blue_gray-900 tracking-[0.14px] w-auto"
                  size="txtMontserratBold3382"
                >
                  Peace of Mind
                </Text>
                <Text
                  className="leading-[28.00px] text-[19.73px] text-gray-600 tracking-[0.28px]"
                  size="txtMontserratMedium1973"
                >
                  <>
                    the quick fox jumps over the <br />
                    lazy dog
                  </>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col items-start justify-start w-[463px] sm:w-full">
              <div className="bg-white-A700 flex flex-col gap-[14.09px] items-start justify-start md:px-10 sm:px-5 px-[56.37px] py-[49.32px] shadow-bs2 w-[462px] sm:w-full">
                <Img
                  className="h-[55px] w-[67px]"
                  src="images/img_icnresizeicnmd.svg"
                  alt="icnresizeicnmd"
                />
                <Text
                  className="sm:text-[29.82px] md:text-[31.82px] text-[33.82px] text-blue_gray-900 tracking-[0.14px] w-auto"
                  size="txtMontserratBold3382"
                >
                  Set For Life
                </Text>
                <Text
                  className="leading-[28.00px] text-[19.73px] text-gray-600 tracking-[0.28px]"
                  size="txtMontserratMedium1973"
                >
                  <>
                    the quick fox jumps over the <br />
                    lazy dog
                  </>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col items-start justify-start w-[463px] sm:w-full">
              <div className="bg-blue-900 flex flex-col gap-[14.09px] items-start justify-start md:px-10 sm:px-5 px-[56.37px] py-[49.32px] shadow-bs2 w-[462px] sm:w-full">
                <Img
                  className="h-[55px] w-[67px]"
                  src="images/img_icnresizeicnmd_white_a700.svg"
                  alt="icnresizeicnmd"
                />
                <Text
                  className="sm:text-[29.82px] md:text-[31.82px] text-[33.82px] text-white-A700 tracking-[0.14px] w-auto"
                  size="txtMontserratBold3382WhiteA700"
                >
                  100% Satisfaction
                </Text>
                <Text
                  className="leading-[28.00px] text-[19.73px] text-white-A700 tracking-[0.28px]"
                  size="txtMontserratMedium1973WhiteA700"
                >
                  <>
                    the quick fox jumps over the <br />
                    lazy dog
                  </>
                </Text>
              </div>
            </div>
          </List>
          <div className="bg-gray-100 flex flex-col items-end justify-start mt-[225px] md:pl-10 sm:pl-5 pl-[136px] pt-[136px] w-full">
            <div className="flex flex-col items-center justify-start w-[83%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 tracking-[-1.10px]"
                size="txtMontserratBold50"
              >
                How it works
              </Text>
              <Text
                className="mt-[25px] text-[19.73px] text-center text-gray-600 tracking-[0.28px]"
                size="txtMontserratMedium1973"
              >
                the quick fox jumps over the lazy dog
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[105px] w-full">
                <div className="h-[1346px] md:h-[3234px] md:mt-0 mt-[41px] relative w-[71%] md:w-full">
                  <List
                    className="absolute flex flex-col gap-[134px] inset-[0] items-center justify-center m-auto w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                      <div className="bg-white-A700 h-[191px] mb-[45px] rounded-[95px] w-[191px]"></div>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-2 w-[71%] md:w-full">
                        <div className="bg-pink-600 h-12 mb-[117px] md:mt-0 mt-[63px] rounded-[50%] w-12"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Button
                            className="cursor-pointer font-semibold min-w-[173px] rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center tracking-[-0.55px]"
                            color="pink_600"
                            size="md"
                            variant="fill"
                          >
                            See what{" "}
                          </Button>
                          <Text
                            className="mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-gray-800 tracking-[-0.55px]"
                            size="txtMontserratSemiBold25"
                          >
                            See what savings you qualify for
                          </Text>
                          <Text
                            className="leading-[143.50%] mt-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600 tracking-[-0.55px] w-full"
                            size="txtMontserratMedium25Gray600"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec non erat eros. Fusce mattis sed nulla
                            ultricies sodales.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                      <div className="bg-white-A700 h-[191px] mb-[45px] rounded-[95px] w-[191px]"></div>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-2 w-[71%] md:w-full">
                        <div className="bg-pink-600 h-12 mb-[117px] md:mt-0 mt-[63px] rounded-[50%] w-12"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Button
                            className="cursor-pointer font-semibold min-w-[173px] rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center tracking-[-0.55px]"
                            color="pink_600"
                            size="md"
                            variant="fill"
                          >
                            See what{" "}
                          </Button>
                          <Text
                            className="mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-gray-800 tracking-[-0.55px]"
                            size="txtMontserratSemiBold25"
                          >
                            See what savings you qualify for
                          </Text>
                          <Text
                            className="leading-[143.50%] mt-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600 tracking-[-0.55px] w-full"
                            size="txtMontserratMedium25Gray600"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec non erat eros. Fusce mattis sed nulla
                            ultricies sodales.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                      <div className="bg-white-A700 h-[191px] mb-[45px] rounded-[95px] w-[191px]"></div>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-2 w-[71%] md:w-full">
                        <div className="bg-pink-600 h-12 mb-[117px] md:mt-0 mt-[63px] rounded-[50%] w-12"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Button
                            className="cursor-pointer font-semibold min-w-[173px] rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center tracking-[-0.55px]"
                            color="pink_600"
                            size="md"
                            variant="fill"
                          >
                            See what{" "}
                          </Button>
                          <Text
                            className="mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-gray-800 tracking-[-0.55px]"
                            size="txtMontserratSemiBold25"
                          >
                            See what savings you qualify for
                          </Text>
                          <Text
                            className="leading-[143.50%] mt-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600 tracking-[-0.55px] w-full"
                            size="txtMontserratMedium25Gray600"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec non erat eros. Fusce mattis sed nulla
                            ultricies sodales.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                      <div className="bg-white-A700 h-[191px] mb-[45px] rounded-[95px] w-[191px]"></div>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-2 w-[71%] md:w-full">
                        <div className="bg-pink-600 h-12 mb-[117px] md:mt-0 mt-[63px] rounded-[50%] w-12"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Button
                            className="cursor-pointer font-semibold min-w-[173px] rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center tracking-[-0.55px]"
                            color="pink_600"
                            size="md"
                            variant="fill"
                          >
                            See what{" "}
                          </Button>
                          <Text
                            className="mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-gray-800 tracking-[-0.55px]"
                            size="txtMontserratSemiBold25"
                          >
                            See what savings you qualify for
                          </Text>
                          <Text
                            className="leading-[143.50%] mt-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-600 tracking-[-0.55px] w-full"
                            size="txtMontserratMedium25Gray600"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec non erat eros. Fusce mattis sed nulla
                            ultricies sodales.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <Img
                  className="h-[1576px] md:h-auto object-cover"
                  src="images/img_bg.png"
                  alt="bg"
                />
              </div>
            </div>
          </div>
          <div className="bg-blue-900 flex flex-col items-center justify-end p-[76px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1242px] mt-4 mx-auto w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start">
                <Text
                  className="md:text-5xl text-[101.76px] text-center text-white-A700 tracking-[0.41px]"
                  size="txtMontserratBold10176"
                >
                  $224+
                </Text>
                <Text
                  className="sm:text-[34.93px] md:text-[36.93px] text-[38.93px] text-center text-white-A700 tracking-[0.16px]"
                  size="txtMontserratMedium3893"
                >
                  SAVINGS
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-center justify-start">
                <Text
                  className="md:text-5xl text-[101.76px] text-center text-white-A700 tracking-[0.41px]"
                  size="txtMontserratBold10176"
                >
                  72 M+
                </Text>
                <Text
                  className="sm:text-[34.93px] md:text-[36.93px] text-[38.93px] text-center text-white-A700 tracking-[0.16px]"
                  size="txtMontserratMedium3893"
                >
                  MEMBERS
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-center justify-start">
                <Text
                  className="md:text-5xl text-[101.76px] text-center text-white-A700 tracking-[0.41px]"
                  size="txtMontserratBold10176"
                >
                  24 Hr
                </Text>
                <Text
                  className="sm:text-[34.93px] md:text-[36.93px] text-[38.93px] text-center text-white-A700 tracking-[0.16px]"
                  size="txtMontserratMedium3893"
                >
                  SUPPORT
                </Text>
              </div>
            </div>
          </div>
          <div className="ml-52 md:ml-[0] mt-[187px] overflow-x-auto w-[90%]">
            <div className="flex flex-col md:gap-10 gap-[92px] justify-start overflow-auto w-full">
              <div className="flex flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[558px] md:px-5">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 tracking-[-1.10px]"
                  size="txtMontserratBold50"
                >
                  How it works
                </Text>
                <Text
                  className="text-[19.73px] text-center text-gray-600 tracking-[0.28px]"
                  size="txtMontserratMedium1973"
                >
                  the quick fox jumps over the lazy dog
                </Text>
              </div>
              <div className="md:h-[1166px] h-[1301px] sm:h-[2007px] md:px-5 relative w-full">
                <div className="absolute md:h-[1166px] h-[1301px] sm:h-[2007px] inset-y-[0] left-[0] my-auto w-[94%] md:w-full">
                  <div className="absolute bg-gray-100_01 bottom-[0] h-[999px] inset-x-[0] mx-auto rounded-[35px] w-full"></div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-end my-auto p-12 md:px-10 sm:px-5 right-[0] w-[86%]"
                    style={{
                      backgroundImage: "url('images/img_group549.png')",
                    }}
                  >
                    <div className="flex flex-col md:gap-10 gap-[139px] justify-start mt-[345px] w-3/4 md:w-full">
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[342px] w-[61%] md:w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-gray-800 tracking-[-0.88px]"
                          size="txtMontserratBold40"
                        >
                          Albert John
                        </Text>
                        <Text
                          className="mt-[26px] text-3xl sm:text-[26px] md:text-[28px] text-gray-800 tracking-[-0.66px]"
                          size="txtMontserratSemiBold30"
                        >
                          See what savings you qualify for
                        </Text>
                        <Text
                          className="leading-[143.50%] mt-7 sm:text-[21px] md:text-[23px] text-[25px] text-gray-600 tracking-[-0.55px] w-full"
                          size="txtMontserratMedium25Gray600"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec non erat eros. Fusce mattis sed nulla
                          ultricies sodales.{" "}
                        </Text>
                        <div className="flex flex-row gap-[22px] items-center justify-start md:ml-[0] ml-[5px] mt-[54px] w-[14%] md:w-full">
                          <Img
                            className="h-[31px] w-[31px]"
                            src="images/img_arrowleft_gray_400.svg"
                            alt="arrowleft"
                          />
                          <Img
                            className="h-[31px] w-[31px]"
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Img
                          className="h-[331px] md:h-auto object-cover rounded-[10px]"
                          src="images/img_rectangle272.png"
                          alt="rectangle272"
                        />
                        <Img
                          className="h-[331px] md:h-auto object-cover rounded-[10px]"
                          src="images/img_rectangle272.png"
                          alt="rectangle273"
                        />
                        <Img
                          className="h-[331px] md:h-auto object-cover rounded-[10px]"
                          src="images/img_rectangle272.png"
                          alt="rectangle274"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[106px] h-max inset-y-[0] items-start justify-start left-[4%] my-auto w-[32%]">
                  <Img
                    className="h-[665px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle270.png"
                    alt="rectangle270"
                  />
                  <Img
                    className="h-[331px] md:h-auto object-cover rounded-[10px] w-1/2"
                    src="images/img_rectangle272.png"
                    alt="rectangle271"
                  />
                </div>
                <Img
                  className="absolute bottom-[6%] h-[331px] object-cover right-[0] rounded-[10px] w-[16%]"
                  src="images/img_rectangle272.png"
                  alt="rectangle275"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1440px] mt-[158px] mx-auto pl-5 md:pr-5 pt-5 w-full">
            <div className="flex flex-col items-center justify-start mt-5 w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-800"
                size="txtMontserratBold50Gray800"
              >
                Frequently asked questions
              </Text>
              <Text
                className="mt-5 text-center text-gray-900_8e text-xl"
                size="txtMontserratMedium20"
              >
                Get the best services at the lowest price
              </Text>
              <div className="flex flex-col items-center justify-start mt-[78px] w-full">
                <div className="md:gap-5 gap-[182px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {new Array(6).fill({}).map((props, index) => (
                    <React.Fragment key={`Slide169OneNaked${index}`}>
                      <Slide169OneNaked
                        className="flex flex-1 flex-col gap-5 items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1017px] sm:h-[1063px] md:h-[1362px] mt-[193px] md:px-5 relative w-full">
            <div className="absolute bg-blue-900 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[126px] md:px-10 sm:px-5 top-[0] w-full">
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start mb-[219px] w-auto md:w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start py-[50px] w-[602px] md:w-full">
                  <Text
                    className="leading-[57.00px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[0.20px]"
                    size="txtMontserratBold40WhiteA700"
                  >
                    <>
                      We Have Branches All <br />
                      Over The World
                    </>
                  </Text>
                  <Text
                    className="leading-[34.00px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[0.20px]"
                    size="txtMontserratMedium25WhiteA700"
                  >
                    <>
                      The gradual accumulation of information about atomic and{" "}
                      <br />
                      small-scale behaviour during the first quarter of the 20th{" "}
                      <br />
                      century, which gave some indications about how small
                      things <br />
                      do behave, produced an increasing confusion which was{" "}
                      <br />
                      Heisenberg, and Born.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-[50px] w-[416px] sm:w-full">
                  <Img
                    className="h-[169px] sm:h-auto object-cover w-[414px] md:w-full"
                    src="images/img_pngwing1.png"
                    alt="pngwingone"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[58%]">
              <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-center w-[52%] md:w-full">
                <Button
                  className="!text-pink-600 border-pink-600 border-solid border-t-2 capitalize cursor-pointer font-bold min-w-[125px] rounded-tl-[10px] rounded-tr-[10px] text-[18.38px] text-center tracking-[0.26px]"
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                >
                  Medicare
                </Button>
                <Button
                  className="capitalize cursor-pointer font-medium min-w-[234px] rounded-tl-[10px] rounded-tr-[10px] text-[18.38px] text-center tracking-[0.26px]"
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                >
                  Individuals & family
                </Button>
                <Button
                  className="capitalize cursor-pointer font-medium min-w-[194px] rounded-tl-[10px] rounded-tr-[10px] text-[18.38px] text-center tracking-[0.26px]"
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                >
                  Dental & Vission
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-12 md:px-10 sm:px-5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] shadow-bs1 w-full">
                <Text
                  className="capitalize text-center text-gray-800 text-xl tracking-[0.26px]"
                  size="txtMontserratBold20"
                >
                  Compare Medicare plans and enroll online. easy. fast
                </Text>
                <Text
                  className="capitalize mt-5 text-center text-gray-800 text-xl tracking-[0.26px]"
                  size="txtMontserratRegular20"
                >
                  Enter your zIP code
                </Text>
                <div className="bg-white-A700 border border-gray-800 border-solid h-[54px] mt-[33px] rounded-[10px] w-[66%]"></div>
                <Button
                  className="cursor-pointer font-bold h-[54px] min-w-[229px] mt-[31px] rounded-[10px] text-center text-sm tracking-[0.20px]"
                  color="blue_900"
                  size="2xl"
                  variant="fill"
                >
                  Find medicare plans
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-end mt-[41px] p-[97px] md:px-10 sm:px-5 w-full">
            <Text
              className="mt-[9px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-800"
              size="txtMontserratBold50Gray800"
            >
              Lates News & Articles
            </Text>
            <Text
              className="mt-[25px] text-center text-gray-900_8e text-xl"
              size="txtMontserratMedium20"
            >
              Get the best services at the lowest price
            </Text>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-28 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1304px] mt-[82px] mx-auto w-full"
              orientation="horizontal"
            >
              {slide169OneShadowPropList.map((props, index) => (
                <React.Fragment key={`Slide169OneShadow${index}`}>
                  <Slide169OneShadow
                    className="bg-white-A700 flex flex-col h-[566px] md:h-auto items-start justify-start rounded-[12px] shadow-bs w-[360px]"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
          <Footer className="flex items-center justify-center mt-[41px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Slide169OnePage;
