import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Slide169ThreeUser from "components/Slide169ThreeUser";

const Slide169ThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat gap-[13px] items-center justify-end mx-auto pt-1.5 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
          <div className="h-[4074px] md:px-5 relative w-full">
            <div className="md:h-[264px] h-[371px] mb-[-107px] mx-auto w-full z-[1]">
              <Img
                className="h-[371px] m-auto object-cover w-full"
                src="images/img_image1_1.png"
                alt="imageone_One"
              />
              <div className="absolute flex flex-col gap-7 h-max inset-y-[0] items-start justify-start left-[12%] my-auto">
                <Text
                  className="text-[15px] text-center text-pink-600 tracking-[0.20px] uppercase"
                  size="txtMontserratRegular15"
                >
                  TurboHealth / BLOG
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-800 tracking-[0.20px]"
                  size="txtMontserratBold40"
                >
                  Blogs
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end mt-auto mx-auto p-[73px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[51px] items-center justify-start mt-[107px] w-[85%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-pink-600 text-xs tracking-[0.72px] uppercase"
                    size="txtMontserratRegular12"
                  >
                    Category
                  </Text>
                  <Text
                    className="leading-[140.00%] mt-[29px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900_02"
                    size="txtMontserratBold52"
                  >
                    <>
                      Guide for designing better
                      <br />
                      mobile apps typography
                    </>
                  </Text>
                  <Slide169ThreeUser className="flex flex-row font-poppins gap-3 items-start justify-start mt-11 w-auto" />
                  <Img
                    className="h-[594px] sm:h-auto mt-[30px] object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_featureimage.png"
                    alt="featureimage"
                  />
                </div>
                <div className="flex md:flex-col flex-row font-segoeui md:gap-10 items-start justify-between w-[98%] md:w-full">
                  <div className="flex flex-col gap-14 items-start justify-start md:mt-0 mt-[27px] w-[69%] md:w-full">
                    <div className="md:h-[1378px] h-[1525px] relative w-full">
                      <div className="absolute bottom-[0] flex flex-col gap-[51px] items-start justify-start left-[0] w-[78%]">
                        <Line className="bg-blue_gray-100 h-px w-full" />
                        <Text
                          className="text-blue_gray-900_01 text-xl"
                          size="txtSegoeUI20"
                        >
                          <span className="text-blue_gray-900_01 font-montserrat text-left font-normal">
                            Good or bad, we’d love to hear your thoughts. Find
                            us on Twitter{" "}
                          </span>
                          <span className="text-blue-A700 font-montserrat text-left font-normal">
                            (@twitter)
                          </span>
                        </Text>
                      </div>
                      <div className="absolute flex flex-col font-montserrat gap-9 h-max inset-[0] items-center justify-center m-auto w-full">
                        <div className="md:h-[671px] h-[759px] relative w-full">
                          <Text
                            className="absolute bottom-[0] inset-x-[0] leading-[59.00px] mx-auto sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900_01 w-full"
                            size="txtMontserratRegular52"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </Text>
                          <Text
                            className="ml-auto mr-[235px] mt-24 text-[22px] text-black-900 sm:text-lg md:text-xl"
                            size="txtSegoeUI22"
                          >
                            .
                          </Text>
                          <Text
                            className="absolute inset-x-[0] leading-[33.00px] mx-auto text-[22px] text-black-900 sm:text-lg md:text-xl top-[0]"
                            size="txtMontserratRegular22"
                          >
                            <>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut et massa mi. Aliquam in hendrerit urna.
                              Pellentesque sit amet sapien fringilla, mattis
                              ligula consectetur, ultrices mauris. Maecenas
                              vitae mattis tellus. Nullam quis imperdiet augue.
                              Vestibulum auctor ornare leo, non suscipit magna
                              interdum eu. Curabitur pellentesque nibh nibh, at
                              maximus ante fermentum sit amet. Pellentesque
                              commodo lacus at sodales sodales.
                              <br />
                              <br />
                              Quisque sagittis orci ut diam condimentum, vel
                              euismod erat placerat. In iaculis arcu eros, eget
                              tempus orci facilisis id.Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit. Ut et massa mi.
                              Aliquam in hendrerit urna. Pellentesque sit amet
                              sapien fringilla, mattis ligula consectetur,
                              ultrices mauris. Maecenas vitae mattis tellus.
                              Nullam quis imperdiet augue. Vestibulum auctor
                              ornare leo, non suscipit magna interdum eu.
                              Curabitur pellentesque nibh nibh, at maximus ante
                              fermentum sit amet.
                              <br />
                              <br />
                              Pellentesque commodo lacus at sodales sodales.
                              Quisque sagittis orci ut diam condimentum, vel
                              euismod erat placerat. In iaculis arcu eros, eget
                              tempus orci facilisis id.Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit. Ut et massa mi.
                              Aliquam in hendrerit urna. Pellentesque sit amet
                              sapien fringilla, mattis ligula consectetur,
                              ultrices mauris. Maecenas vitae mattis tellus.
                            </>
                          </Text>
                        </div>
                        <Text
                          className="leading-[33.00px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                          size="txtMontserratRegular22"
                        >
                          <>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris. Maecenas vitae
                            mattis tellus. Nullam quis imperdiet augue.
                            Vestibulum auctor ornare leo, non suscipit magna
                            interdum eu. Curabitur pellentesque nibh nibh, at
                            maximus ante fermentum sit amet. Pellentesque
                            commodo lacus at sodales sodales.
                            <br />
                            <br />
                            Quisque sagittis orci ut diam condimentum, vel
                            euismod erat placerat. In iaculis arcu eros, eget
                            tempus orci facilisis id.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut et massa mi. Aliquam
                            in hendrerit urna. Pellentesque sit amet sapien
                            fringilla, mattis ligula consectetur, ultrices
                            mauris. Maecenas vitae mattis tellus. Nullam quis
                            imperdiet augue. Vestibulum auctor ornare leo, non
                            suscipit magna interdum eu. Curabitur pellentesque
                            nibh nibh, at maximus ante fermentum sit amet.
                            <br />
                            <br />
                            Pellentesque commodo lacus at sodales sodales.
                            Quisque sagittis orci ut diam condimentum, vel
                            euismod erat placerat. In iaculis arcu eros, eget
                            tempus orci facilisis id.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut et massa mi. Aliquam
                            in hendrerit urna. Pellentesque sit amet sapien
                            fringilla, mattis ligula consectetur, ultrices
                            mauris. Maecenas vitae mattis tellus.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-montserrat items-center justify-start w-[82%] md:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="leading-[21.00px] text-blue_gray-700 text-xs tracking-[0.72px] uppercase w-[52%] sm:w-full"
                          size="txtMontserratRegular12Bluegray700"
                        >
                          Here are some related articles you may find
                          interesting:
                        </Text>
                        <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start mb-[9px] w-[35%] md:w-full">
                            <Img
                              className="h-[203px] md:h-auto object-cover w-full"
                              src="images/img_image.png"
                              alt="image"
                            />
                            <Img
                              className="h-[203px] md:h-auto object-cover w-full"
                              src="images/img_image_203x288.png"
                              alt="imageone"
                            />
                            <Img
                              className="h-[203px] md:h-auto object-cover w-full"
                              src="images/img_image_2.png"
                              alt="imagetwo"
                            />
                            <Img
                              className="h-[203px] md:h-auto object-cover w-full"
                              src="images/img_image_3.png"
                              alt="imagethree"
                            />
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start w-[61%] md:w-full">
                            <div className="flex flex-row items-start justify-start w-2/5 md:w-full">
                              <Text
                                className="text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                size="txtSegoeUI12"
                              >
                                Product
                              </Text>
                              <Text
                                className="ml-[3px] text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                size="txtSegoeUI12"
                              >
                                -
                              </Text>
                              <Text
                                className="ml-6 text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                size="txtMontserratRegular12Bluegray700"
                              >
                                4 Minute Read
                              </Text>
                            </div>
                            <Text
                              className="leading-[31.00px] mt-[9px] text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl w-[97%] sm:w-full"
                              size="txtMontserratRegular24"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                            <Text
                              className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900_01 w-[96%] sm:w-full"
                              size="txtMontserratRegular16"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Etiam eu turpis molestie, dictum est a,
                              mattis tellus. Sed dignissim, metus nec fringilla
                              accumsan, risus sem{" "}
                            </Text>
                            <div className="flex flex-row items-start justify-start mt-[66px] w-2/5 md:w-full">
                              <Text
                                className="text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                size="txtSegoeUI12"
                              >
                                Product
                              </Text>
                              <Text
                                className="ml-[3px] text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                size="txtSegoeUI12"
                              >
                                -
                              </Text>
                              <Text
                                className="ml-6 text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                size="txtMontserratRegular12Bluegray700"
                              >
                                6 Minute Read
                              </Text>
                            </div>
                            <Text
                              className="leading-[31.00px] mt-2.5 text-[22px] text-blue_gray-900_01 sm:text-lg md:text-xl w-[93%] sm:w-full"
                              size="txtMontserratRegular22Bluegray90001"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                            <Text
                              className="leading-[24.00px] mt-[9px] text-[15px] text-blue_gray-900_01 w-full"
                              size="txtMontserratRegular15Bluegray90001"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Etiam eu turpis molestie, dictum est a,
                              mattis tellus. Sed dignissim, metus nec fringilla
                              accumsan,{" "}
                            </Text>
                            <div className="flex flex-row gap-[33px] items-start justify-start mt-[52px] w-[47%] md:w-full">
                              <div className="flex flex-col items-end justify-start">
                                <Text
                                  className="text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                  size="txtMontserratRegular12Bluegray700"
                                >
                                  Productivity
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                  size="txtMontserratRegular12Bluegray700"
                                >
                                  -
                                </Text>
                              </div>
                              <Text
                                className="text-[11px] text-blue_gray-700 tracking-[0.72px] uppercase"
                                size="txtMontserratRegular11"
                              >
                                7 Minute Read
                              </Text>
                            </div>
                            <Text
                              className="leading-[31.00px] mt-2.5 text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl w-[96%] sm:w-full"
                              size="txtMontserratRegular24"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                            <Text
                              className="leading-[24.00px] mt-[41px] text-base text-blue_gray-900_01 w-[96%] sm:w-full"
                              size="txtMontserratRegular16"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Etiam eu turpis molestie, dictum est a,
                              mattis tellus. Sed dignissim, metus nec fringilla
                              accumsan, risus sem
                            </Text>
                            <div className="flex flex-row gap-[33px] items-start justify-start mt-[52px] w-[47%] md:w-full">
                              <div className="flex flex-col items-end justify-start">
                                <Text
                                  className="text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                  size="txtMontserratRegular12Bluegray700"
                                >
                                  Productivity
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                                  size="txtMontserratRegular12Bluegray700"
                                >
                                  -
                                </Text>
                              </div>
                              <Text
                                className="text-[11px] text-blue_gray-700 tracking-[0.72px] uppercase"
                                size="txtMontserratRegular11"
                              >
                                7 Minute Read
                              </Text>
                            </div>
                            <Text
                              className="leading-[31.00px] mt-[9px] text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl w-[92%] sm:w-full"
                              size="txtMontserratRegular24"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                            <Text
                              className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900_01 w-full"
                              size="txtMontserratRegular16"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Etiam eu turpis molestie, dictum est a,
                              mattis tellus. Sed dignissim, metus nec fringilla
                              accumsan, risus sem sollicitudin lacus
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-montserrat gap-8 items-center justify-start w-[22%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-700 text-sm tracking-[0.84px] uppercase"
                          size="txtMontserratRegular14"
                        >
                          Popular Posts
                        </Text>
                        <div className="flex flex-row gap-3 items-center justify-start mt-[22px] w-[95%] md:w-full">
                          <Img
                            className="h-20 md:h-auto object-cover w-20"
                            src="images/img_image_80x80.png"
                            alt="imagefour"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                              size="txtMontserratRegular12Bluegray700"
                            >
                              Product
                            </Text>
                            <Text
                              className="leading-[24.00px] text-[15px] text-blue_gray-900_01 w-full"
                              size="txtMontserratRegular15Bluegray90001"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-900_01 h-px mt-[42px] w-full" />
                        <div className="flex flex-row gap-3 items-start justify-between mt-5 w-full">
                          <Img
                            className="h-20 md:h-auto object-cover w-20"
                            src="images/img_image_2.png"
                            alt="imagefive"
                          />
                          <div className="md:h-12 h-[62px] relative w-[71%]">
                            <Text
                              className="absolute left-[0] text-blue_gray-700 text-xs top-[0] tracking-[0.72px] uppercase"
                              size="txtMontserratRegular12Bluegray700"
                            >
                              Product | Enterprise
                            </Text>
                            <Text
                              className="absolute bottom-[0] inset-x-[0] leading-[24.00px] mx-auto text-[15px] text-blue_gray-900_01 w-full"
                              size="txtMontserratRegular15Bluegray90001"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-900_01 h-px mt-4 w-full" />
                        <div className="flex flex-row gap-3 items-start justify-between mt-[19px] w-[97%] md:w-full">
                          <Img
                            className="h-20 md:h-auto mt-0.5 object-cover w-20"
                            src="images/img_image_80x80.png"
                            alt="imagesix"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                              size="txtMontserratRegular12Bluegray700"
                            >
                              Productivity
                            </Text>
                            <Text
                              className="leading-[24.00px] text-[15px] text-blue_gray-900_01 w-full"
                              size="txtMontserratRegular15Bluegray90001"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-900_01 h-px mt-[23px] w-full" />
                        <div className="flex flex-row gap-3 items-center justify-start mt-[19px] w-[91%] md:w-full">
                          <Img
                            className="h-20 md:h-auto object-cover w-20"
                            src="images/img_image_3.png"
                            alt="imageseven"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-700 text-xs tracking-[0.72px] uppercase"
                              size="txtMontserratRegular12Bluegray700"
                            >
                              Productivity
                            </Text>
                            <Text
                              className="leading-[24.00px] text-[15px] text-blue_gray-900_01 w-full"
                              size="txtMontserratRegular15Bluegray90001"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-900_01 h-px mt-[18px] w-full" />
                      </div>
                    </div>
                    <div className="bg-blue-900 flex flex-col items-center justify-start p-6 sm:px-5 rounded w-full">
                      <Text
                        className="leading-[36.00px] mt-1.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[95%] sm:w-full"
                        size="txtMontserratRegular24WhiteA700"
                      >
                        Get More Done Together With US
                      </Text>
                      <Text
                        className="leading-[33.00px] mt-4 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
                        size="txtMontserratRegular22WhiteA700"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <Button
                        className="cursor-pointer mb-3 min-w-[159px] mt-[55px] rounded-[3px] text-base text-center"
                        color="pink_600"
                        size="lg"
                        variant="fill"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Slide169ThreePage;
