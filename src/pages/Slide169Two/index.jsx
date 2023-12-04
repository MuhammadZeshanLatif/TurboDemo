import React from "react";

import { Button, Img, Input, RatingBar, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const Slide169TwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat gap-[13px] items-center justify-end mx-auto pt-1.5 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-start justify-start w-full">
          <div className="h-[371px] md:px-5 relative w-full">
            <Img
              className="h-[371px] m-auto object-cover w-full"
              src="images/img_image1_371x1920.png"
              alt="imageone"
            />
            <div className="absolute flex flex-col gap-6 items-center justify-start left-[12%] top-[35%]">
              <Text
                className="text-[15px] text-center text-pink-600 tracking-[0.20px] uppercase"
                size="txtMontserratRegular15"
              >
                TurboHealth / About
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-800 tracking-[0.20px]"
                size="txtMontserratBold40"
              >
                About Us
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-end mt-[66px] p-[45px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1489px] mt-[18px] mx-auto w-full">
              <div className="md:h-[421px] h-[596px] relative w-[45%] md:w-full">
                <Img
                  className="absolute h-[421px] left-[0] object-cover rounded-[10px] top-[0] w-[79%]"
                  src="images/img_rectangle278.png"
                  alt="rectangle278"
                />
                <Img
                  className="absolute bottom-[0] h-[350px] object-cover right-[0] rounded-[10px] w-[69%]"
                  src="images/img_rectangle279_350x453.png"
                  alt="rectangle279"
                />
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[44%] md:w-full">
                <Text
                  className="leading-[137.50%] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 tracking-[-1.10px] w-[84%] sm:w-full"
                  size="txtMontserratBold50"
                >
                  Creating a better future for your loved once
                </Text>
                <Text
                  className="leading-[177.00%] mt-[39px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px]"
                  size="txtMontserratMedium24"
                >
                  <>
                    Nullam eu nibh vitae est tempor molest sed ex.
                    <br />
                    Quisque dignissim maximus ipsum, sed rutrum tincidunt et.
                    Sed eget tincidunt ipsum. There are many passages of psum
                    available, but the majority have alteration in some by
                    injected humour, or randomised words look believable.
                  </>
                </Text>
                <div className="flex flex-col items-center justify-start mt-[82px] w-[44%] md:w-full">
                  <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                    <Img
                      className="h-[75px] md:h-auto mt-[9px] rounded-[50%] w-[75px]"
                      src="images/img_ellipse3.png"
                      alt="ellipsethree"
                    />
                    <div className="flex flex-col items-start justify-start mb-[5px]">
                      <Text
                        className="md:text-5xl text-[65px] text-black-900 tracking-[-1.23px]"
                        size="txtAmsterdamSignature65"
                      >
                        David Hardson
                      </Text>
                      <Text
                        className="text-[15px] text-blue-900 tracking-[-0.28px]"
                        size="txtMontserratRegular15Blue900"
                      >
                        Founder of Turbo Health
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-gray-400_01 border-solid border-t flex flex-col items-center justify-start mt-[77px] p-2.5 w-full">
            <div className="flex flex-col items-start justify-start max-w-[1050px] md:px-5 w-full">
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
          <div className="bg-gray-100_02 h-[992px] pt-[145px] md:px-5 relative w-full">
            <Text
              className="leading-[137.50%] mb-[-107px] ml-52 sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 tracking-[-1.10px] w-[34%] sm:w-full z-[1]"
              size="txtMontserratBold50"
            >
              What our happy customers are talking about our insurance company
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-start mb-[-146px] ml-auto mr-[207px] mt-1 rounded-[11px] w-[32%] z-[1]">
              <div
                className="bg-cover bg-no-repeat flex md:h-[260px] h-[311px] sm:h-[460px] justify-end pt-12 relative w-full"
                style={{ backgroundImage: "url('images/img_group572.svg')" }}
              >
                <div className="md:h-[260px] h-[262px] sm:h-[460px] mt-auto mx-auto w-full">
                  <div className="md:h-[260px] h-[262px] sm:h-[460px] m-auto w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-[84%] md:w-full">
                          <div className="flex flex-col gap-[11px] items-start justify-start">
                            <Text
                              className="sm:text-[16.21px] md:text-[18.21px] text-[20.21px] text-black-900 tracking-[-0.38px]"
                              size="txtMontserratBold2021"
                            >
                              Kavin Martin
                            </Text>
                            <Text
                              className="leading-[158.50%] text-[16.84px] text-gray-800 tracking-[-0.32px] w-full"
                              size="txtMontserratMedium1684"
                            >
                              Pellentesque habitant morbi tristique senectus
                              netus et malesuada fames ac turp egestas. Aliquam
                              viverra arcu. Donec aliquet blandit enim feugiat
                              mattis.
                            </Text>
                          </div>
                          <div className="bg-white-A700 flex flex-col items-center justify-start mb-[125px] sm:mt-0 mt-4 p-0.5 rounded-[14px] w-[30%] sm:w-full">
                            <div className="flex flex-row items-center justify-start w-[91%] md:w-full">
                              <RatingBar
                                className="flex justify-between w-32"
                                value={5}
                                starCount={5}
                                size={23}
                              ></RatingBar>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient  flex flex-col items-start justify-end p-[22px] sm:px-5 rounded-bl-[11px] rounded-br-[11px] w-full">
                          <Text
                            className="md:ml-[0] ml-[38px] mt-1.5 text-[16.84px] text-white-A700 tracking-[0.69px] uppercase"
                            size="txtMontserratMedium1684WhiteA700"
                          >
                            CEO & CO Founder
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[18%] h-[132px] right-[7%] rounded-[50%] w-[132px]"
                      src="images/img_ellipse7.png"
                      alt="ellipsesevenone"
                    />
                  </div>
                  <div className="absolute bg-white-A700 bottom-[35%] h-11 right-[26%] rounded-[50%] w-11"></div>
                </div>
                <Text
                  className="absolute bottom-[30%] right-[28%] sm:text-[35.3px] md:text-[37.3px] text-[39.3px] text-pink-600 tracking-[-0.75px]"
                  size="txtMontserratBold393"
                >
                  ”
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[678px] items-center justify-end mt-auto mx-auto p-[120px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group571.png')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[26px] w-[90%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[44%] md:w-full">
                  <Text
                    className="leading-[177.00%] text-2xl md:text-[22px] text-gray-800 sm:text-xl tracking-[-0.46px] w-full"
                    size="txtMontserratMedium24Gray800"
                  >
                    Pellentesque habitant morbi tristique senectus netus et
                    malesuada fames ac turp egestas. Aliquam viverra arcu. Donec
                    aliquet blandit enim feugiat mattis.
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-7 items-center justify-start mt-5 w-[77%] md:w-full">
                    <Button
                      className="flex h-16 items-center justify-center w-16"
                      shape="circle"
                      color="blue_900"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-[31px]"
                        src="images/img_correctsvgrepocom.svg"
                        alt="correctsvgrepoc"
                      />
                    </Button>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl tracking-[-0.46px]"
                      size="txtMontserratMedium24Gray800"
                    >
                      We hire professionalsyou can trust
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-7 items-center justify-start mt-[30px] w-[77%] md:w-full">
                    <Button
                      className="flex h-16 items-center justify-center w-16"
                      shape="circle"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-[31px]"
                        src="images/img_correctsvgrepocom_blue_900.svg"
                        alt="correctsvgrepoc_One"
                      />
                    </Button>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl tracking-[-0.46px]"
                      size="txtMontserratMedium24Gray800"
                    >
                      We hire professionalsyou can trust
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-7 items-center justify-start mt-[30px] w-[77%] md:w-full">
                    <Button
                      className="flex h-16 items-center justify-center w-16"
                      shape="circle"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-[31px]"
                        src="images/img_correctsvgrepocom_blue_900.svg"
                        alt="correctsvgrepoc_Two"
                      />
                    </Button>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl tracking-[-0.46px]"
                      size="txtMontserratMedium24Gray800"
                    >
                      We hire professionalsyou can trust
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start mb-[42px] md:mt-0 mt-[59px] rounded-[11px] w-2/5 md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex md:h-[260px] h-[311px] sm:h-[460px] justify-end pt-12 relative w-full"
                    style={{
                      backgroundImage: "url('images/img_group572.svg')",
                    }}
                  >
                    <div className="md:h-[260px] h-[262px] sm:h-[460px] mt-auto mx-auto w-full">
                      <div className="md:h-[260px] h-[262px] sm:h-[460px] m-auto w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-[84%] md:w-full">
                              <div className="flex flex-col gap-[11px] items-start justify-start">
                                <Text
                                  className="sm:text-[16.21px] md:text-[18.21px] text-[20.21px] text-black-900 tracking-[-0.38px]"
                                  size="txtMontserratBold2021"
                                >
                                  Kavin Martin
                                </Text>
                                <Text
                                  className="leading-[158.50%] text-[16.84px] text-gray-800 tracking-[-0.32px] w-full"
                                  size="txtMontserratMedium1684"
                                >
                                  Pellentesque habitant morbi tristique senectus
                                  netus et malesuada fames ac turp egestas.
                                  Aliquam viverra arcu. Donec aliquet blandit
                                  enim feugiat mattis.
                                </Text>
                              </div>
                              <div className="bg-white-A700 flex flex-col items-center justify-start mb-[125px] sm:mt-0 mt-4 p-0.5 rounded-[14px] w-[30%] sm:w-full">
                                <div className="flex flex-row items-center justify-start w-[91%] md:w-full">
                                  <RatingBar
                                    className="flex justify-between w-32"
                                    value={5}
                                    starCount={5}
                                    size={23}
                                  ></RatingBar>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient  flex flex-col items-start justify-end p-[22px] sm:px-5 rounded-bl-[11px] rounded-br-[11px] w-full">
                              <Text
                                className="md:ml-[0] ml-[38px] mt-1.5 text-[16.84px] text-white-A700 tracking-[0.69px] uppercase"
                                size="txtMontserratMedium1684WhiteA700"
                              >
                                CEO & CO Founder
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[18%] h-[132px] right-[7%] rounded-[50%] w-[132px]"
                          src="images/img_ellipse7.png"
                          alt="ellipseseven"
                        />
                      </div>
                      <div className="absolute bg-white-A700 bottom-[35%] h-11 right-[26%] rounded-[50%] w-11"></div>
                    </div>
                    <Text
                      className="absolute bottom-[30%] right-[28%] sm:text-[35.3px] md:text-[37.3px] text-[39.3px] text-pink-600 tracking-[-0.75px]"
                      size="txtMontserratBold393"
                    >
                      ”
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[219px] sm:h-[349px] md:h-[427px] max-w-[1509px] mt-[130px] mx-auto md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start ml-auto my-auto w-[32%]">
              <Img
                className="h-[219px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_image216.png"
                alt="image216"
              />
            </div>
            <div className="absolute bg-gradient1  flex flex-col gap-[21px] h-full inset-[0] items-center justify-center m-auto p-[45px] md:px-10 sm:px-5 rounded-[10px] shadow-bs1 w-full">
              <Text
                className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-center text-white-A700 tracking-[0.26px]"
                size="txtMontserratBold35"
              >
                Find Your Insurance Plan
              </Text>
              <div className="flex md:flex-col flex-row gap-[27px] items-center justify-center mb-[9px] w-[54%] md:w-full">
                <Input
                  name="group346"
                  placeholder="Enter your zIP code"
                  className="capitalize p-0 placeholder:text-gray-500 text-[15px] text-center tracking-[0.26px] w-full"
                  wrapClassName="border border-gray-800 border-solid w-[67%] md:w-full"
                  type="number"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="cursor-pointer font-bold h-[54px] min-w-[229px] rounded-[10px] text-center text-sm tracking-[0.20px]"
                  color="pink_600"
                  size="2xl"
                  variant="fill"
                >
                  Find medicare plans
                </Button>
              </div>
            </div>
          </div>
          <div className="ml-52 md:ml-[0] mt-[130px] overflow-x-auto w-[90%]">
            <div className="md:h-[1166px] h-[1510px] sm:h-[2007px] overflow-auto md:px-5 relative w-full">
              <div className="absolute bottom-[0] md:h-[1166px] h-[1301px] sm:h-[2007px] inset-x-[0] mx-auto w-full">
                <div className="absolute bg-gray-100_01 bottom-[0] h-[999px] inset-x-[0] mx-auto rounded-[35px] w-full"></div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-end my-auto p-12 md:px-10 sm:px-5 right-[0] w-[86%]"
                  style={{ backgroundImage: "url('images/img_group549.png')" }}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec non erat eros. Fusce mattis sed nulla ultricies
                        sodales.{" "}
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
              <div className="absolute bottom-[5%] flex flex-col md:gap-10 gap-[106px] items-start justify-start left-[5%] w-[34%]">
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
              <div className="absolute flex flex-col items-center justify-start left-[28%] top-[0]">
                <Text
                  className="leading-[150.00%] sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-900_01 tracking-[-1.10px]"
                  size="txtMontserratBold50"
                >
                  <>
                    Meet our experienced
                    <br />
                    team people
                  </>
                </Text>
              </div>
              <Img
                className="absolute bottom-[5%] h-[331px] object-cover right-[0] rounded-[10px] w-[17%]"
                src="images/img_rectangle272.png"
                alt="rectangle275"
              />
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-[177px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Slide169TwoPage;
