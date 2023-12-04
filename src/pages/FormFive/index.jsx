import React from "react";

import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const FormFivePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-1.5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1736px] mx-auto md:px-5 w-full">
          <Header className="flex flex-col items-center justify-center w-full" />
          <div className="md:h-[119px] h-[86px] mt-[33px] relative w-[87%] md:w-full">
            <Img
              className="absolute h-2 inset-x-[0] mx-auto top-[41%] w-[1504px]"
              src="images/img_frame377_gray_500_8x1504.svg"
              alt="frame377"
            />
            <Img
              className="absolute h-[86px] inset-[0] justify-center m-auto rounded-[50%] w-[86px]"
              src="images/img_ellipse9.png"
              alt="ellipsenine"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[134px] items-start justify-between mt-[47px] w-auto md:w-full">
            <Button
              className="cursor-pointer font-semibold sm:text-[21px] md:text-[23px] text-[25px] text-center tracking-[-0.55px] w-[327px]"
              shape="square"
              color="gray_300"
              size="xl"
              variant="outline"
            >
              Recommended Plans
            </Button>
            <Button
              className="cursor-pointer font-semibold sm:text-[21px] md:text-[23px] text-[25px] text-center tracking-[-0.55px] w-[327px]"
              shape="square"
              color="gray_300"
              size="xl"
              variant="outline"
            >
              All Plans
            </Button>
            <Button
              className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[21px] md:text-[23px] text-[25px] text-center tracking-[-0.55px] w-[313px]"
              shape="square"
              color="blue_900_19"
              size="xl"
              variant="fill"
            >
              Lowest Plans
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start mt-36 md:px-5 w-full">
          <div className="overflow-x-auto w-full">
            <div className="flex overflow-auto relative w-full">
              <div className="flex md:flex-col flex-row gap-[19px] items-center justify-start m-auto md:pr-10 sm:pr-5 pr-[430px] w-full">
                <div className="sm:h-[357px] h-[359px] md:h-[568px] relative w-[48%] md:w-full">
                  <div className="absolute bg-white-A700_75 border border-pink-600_75 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded-[16px] shadow-bs4 w-[97%]">
                    <div className="flex flex-col gap-[18px] items-center justify-start mt-2.5 w-[99%] md:w-full">
                      <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-[99%] md:w-full">
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-[31px] w-[34%] md:w-full">
                          <Img
                            className="h-[41px] md:h-auto object-cover w-[82%] sm:w-full"
                            src="images/img_image1_41x234.png"
                            alt="imageone"
                          />
                          <Text
                            className="mt-3 text-[16.81px] text-black-900_75 text-center tracking-[0.24px]"
                            size="txtMontserratBold1681"
                          >
                            Minimum Coverage HMO - HMO
                          </Text>
                          <Line className="bg-black-900_63 h-px mt-2.5 w-[98%]" />
                          <div className="flex flex-row h-5 md:h-auto items-start justify-start mt-5 w-[131px]">
                            <RatingBar
                              className="flex justify-between w-[131px]"
                              value={5}
                              starCount={5}
                              size={20}
                            ></RatingBar>
                          </div>
                          <Button
                            className="cursor-pointer font-bold h-[25px] mt-5 rounded-sm text-[9.79px] text-center tracking-[0.14px] w-[92px]"
                            color="pink_600"
                            size="xs"
                            variant="fill"
                          >
                            CATASTROPHIC
                          </Button>
                        </div>
                        <div className="flex flex-col gap-3.5 justify-start w-[63%] md:w-full">
                          <div className="flex sm:flex-col flex-row gap-[47px] items-start justify-start md:ml-[0] ml-[22px] w-[86%] md:w-full">
                            <div className="bg-pink-600 flex flex-col items-center justify-end p-[13px] rounded-bl rounded-br">
                              <Text
                                className="mt-6 text-[19.63px] text-white-A700 tracking-[0.35px]"
                                size="txtMontserratRegular1963"
                              >
                                Monthly premium
                              </Text>
                              <Text
                                className="sm:text-[31.509999999999998px] md:text-[37.51px] text-[41.51px] text-white-A700 tracking-[0.35px]"
                                size="txtMontserratBold4151"
                              >
                                $198.50
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:mt-0 mt-[35px]">
                              <Text
                                className="text-[19.63px] text-black-900_6c tracking-[0.35px]"
                                size="txtMontserratRegular1963Black9006c"
                              >
                                Health deductible
                              </Text>
                              <Text
                                className="sm:text-[31.509999999999998px] md:text-[37.51px] text-[41.51px] text-black-900 tracking-[0.35px]"
                                size="txtMontserratBold4151Black900"
                              >
                                $10,423
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="leading-[26.00px] sm:mt-0 mt-1.5 text-[13.31px] text-black-900_75 text-right tracking-[0.24px]"
                              size="txtMontserratRegular1331"
                            >
                              <>
                                Your estimated all-in
                                <br />
                                <br />
                                Out-of-pocket max
                              </>
                            </Text>
                            <Text
                              className="leading-[26.00px] sm:mt-0 mt-1.5 text-[13.31px] text-black-900 tracking-[0.24px]"
                              size="txtMontserratBold1331"
                            >
                              <>
                                $2,382
                                <br />
                                <br />
                                $9,450
                              </>
                            </Text>
                            <Line className="bg-black-900_63 h-[88px] sm:h-px sm:w-full w-px" />
                            <Text
                              className="leading-[26.00px] sm:mt-0 mt-1.5 text-[13.31px] text-black-900_75 text-right tracking-[0.24px]"
                              size="txtMontserratRegular1331"
                            >
                              <>
                                Doctor visits
                                <br />
                                <br />
                                Generic drugs
                              </>
                            </Text>
                            <Text
                              className="leading-[26.00px] sm:mt-0 mt-1.5 text-[13.31px] text-black-900 tracking-[0.24px]"
                              size="txtMontserratBold1331"
                            >
                              <span className="text-black-900 font-montserrat text-left font-bold">
                                <>
                                  first 3 visit(s) $0 then
                                  <br />
                                </>
                              </span>
                              <span className="text-black-900 font-montserrat text-left font-bold">
                                <>
                                  $0 after deductible
                                  <br />
                                </>
                              </span>
                              <span className="text-black-900 font-montserrat text-left font-bold">
                                <>
                                  <br />
                                </>
                              </span>
                              <span className="text-black-900 font-montserrat text-left font-bold">
                                No charge after deductible
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row flex-wrap gap-[24.44px] h-[69px] md:h-auto items-start justify-start max-w-[874px] w-full">
                        <Button
                          className="cursor-pointer font-bold h-[69px] rounded-[12px] text-[16.81px] text-center tracking-[0.24px] w-[425px]"
                          color="gray_400_02"
                          size="2xl"
                          variant="fill"
                        >
                          Plan Details
                        </Button>
                        <Button
                          className="cursor-pointer font-bold h-[69px] rounded-[12px] text-[16.81px] text-center tracking-[0.24px] w-[425px]"
                          color="pink_600"
                          size="3xl"
                          variant="fill"
                        >
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[70px] object-cover right-[0] top-[38%] w-[70px]"
                    src="images/img_backarrow.png"
                    alt="backarrow"
                  />
                </div>
                <div className="bg-white-A700 border border-pink-600 border-solid flex md:flex-1 flex-col items-center justify-start pb-[25px] sm:px-5 px-[25px] rounded-[19px] shadow-bs3 w-[53%] md:w-full">
                  <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
                        <Img
                          className="h-[75px] md:h-auto object-cover w-[58%] sm:w-full"
                          src="images/img_image1_75x189.png"
                          alt="imageoneone"
                        />
                        <Text
                          className="mt-2.5 text-[19.26px] text-black-900_75 text-center tracking-[0.28px]"
                          size="txtMontserratBold1926"
                        >
                          Minimum Coverage HMO - HMO
                        </Text>
                        <Line className="bg-black-900_63 h-px mt-3.5 w-[98%]" />
                        <div className="flex flex-row items-start justify-start mt-[23px] w-auto">
                          <RatingBar
                            className="flex justify-between w-[151px]"
                            value={5}
                            starCount={5}
                            size={23}
                          ></RatingBar>
                        </div>
                        <Button
                          className="cursor-pointer font-bold min-w-[105px] mt-6 rounded-sm text-[11.22px] text-center tracking-[0.16px]"
                          color="pink_600"
                          size="sm"
                          variant="fill"
                        >
                          CATASTROPHIC
                        </Button>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-4 justify-start w-[63%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[53px] items-start justify-start md:ml-[0] ml-[26px] w-[86%] md:w-full">
                          <div className="bg-pink-600 flex flex-col items-center justify-end p-[15px] rounded-bl-[5px] rounded-br-[5px]">
                            <Text
                              className="mt-[26px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-white-A700 tracking-[0.41px]"
                              size="txtMontserratRegular225"
                            >
                              Monthly premium
                            </Text>
                            <Text
                              className="sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-white-A700 tracking-[0.41px]"
                              size="txtMontserratBold4756"
                            >
                              $198.50
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:mt-0 mt-[39px]">
                            <Text
                              className="sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900_6c tracking-[0.41px]"
                              size="txtMontserratRegular225Black9006c"
                            >
                              Health deductible
                            </Text>
                            <Text
                              className="sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-black-900 tracking-[0.41px]"
                              size="txtMontserratBold4756Black900"
                            >
                              $10,423
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="leading-[30.00px] text-[15.26px] text-black-900_75 text-right tracking-[0.28px]"
                            size="txtMontserratRegular1526"
                          >
                            <>
                              Your estimated all-in
                              <br />
                              <br />
                              Out-of-pocket max
                            </>
                          </Text>
                          <Text
                            className="leading-[30.00px] text-[15.26px] text-black-900 tracking-[0.28px]"
                            size="txtMontserratBold1526"
                          >
                            <>
                              $2,382
                              <br />
                              <br />
                              $9,450
                            </>
                          </Text>
                          <Line className="bg-black-900_63 h-[101px] sm:h-px sm:w-full w-px" />
                          <Text
                            className="leading-[30.00px] text-[15.26px] text-black-900_75 text-right tracking-[0.28px]"
                            size="txtMontserratRegular1526"
                          >
                            <>
                              Doctor visits
                              <br />
                              <br />
                              Generic drugs
                            </>
                          </Text>
                          <Text
                            className="leading-[30.00px] text-[15.26px] text-black-900 tracking-[0.28px]"
                            size="txtMontserratBold1526"
                          >
                            <span className="text-black-900 font-montserrat text-left font-bold">
                              <>
                                first 3 visit(s) $0 then
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-bold">
                              <>
                                $0 after deductible
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-bold">
                              <>
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-bold">
                              No charge after deductible
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-7 items-start justify-start w-auto md:w-full">
                      <Button
                        className="cursor-pointer font-bold h-20 py-7 text-[19.26px] text-center tracking-[0.28px] w-[487px]"
                        shape="round"
                        color="gray_400_02"
                        variant="fill"
                      >
                        Plan Details
                      </Button>
                      <Button
                        className="cursor-pointer font-bold h-20 py-7 text-[19.26px] text-center tracking-[0.28px] w-[487px]"
                        shape="round"
                        color="pink_600"
                        variant="fill"
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:h-[351px] h-[354px] md:h-[578px] ml-[-413px] my-auto w-2/5 md:w-full z-[1]">
                <Img
                  className="absolute h-[70px] left-[0] object-cover top-[38%] w-[70px]"
                  src="images/img_backarrow_70x70.png"
                  alt="backarrowone"
                />
                <div className="absolute bg-white-A700_75 border border-pink-600_75 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 rounded-[16px] shadow-bs4 w-[97%]">
                  <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between w-[99%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-[34%] md:w-full">
                        <Img
                          className="h-[65px] md:h-auto object-cover w-[58%] sm:w-full"
                          src="images/img_image1_65x164.png"
                          alt="imageonetwo"
                        />
                        <Text
                          className="mt-2 text-[16.81px] text-black-900_75 text-center tracking-[0.24px]"
                          size="txtMontserratBold1681"
                        >
                          Minimum Coverage HMO - HMO
                        </Text>
                        <Line className="bg-black-900_63 h-px mt-3 w-[98%]" />
                        <div className="flex flex-row h-5 md:h-auto items-start justify-start mt-5 w-[131px]">
                          <RatingBar
                            className="flex justify-between w-[131px]"
                            value={5}
                            starCount={5}
                            size={20}
                          ></RatingBar>
                        </div>
                        <Button
                          className="cursor-pointer font-bold h-[25px] mt-5 rounded-sm text-[9.79px] text-center tracking-[0.14px] w-[92px]"
                          color="pink_600"
                          size="xs"
                          variant="fill"
                        >
                          CATASTROPHIC
                        </Button>
                      </div>
                      <div className="flex flex-col gap-3.5 justify-start w-[63%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[47px] items-center justify-start md:ml-[0] ml-[22px] w-[86%] md:w-full">
                          <div className="bg-pink-600 flex flex-col items-center justify-end p-[19px] rounded-bl rounded-br">
                            <Text
                              className="mt-2 text-[19.63px] text-white-A700 tracking-[0.35px]"
                              size="txtMontserratRegular1963"
                            >
                              Monthly premium
                            </Text>
                            <Text
                              className="sm:text-[31.509999999999998px] md:text-[37.51px] text-[41.51px] text-white-A700 tracking-[0.35px]"
                              size="txtMontserratBold4151"
                            >
                              $198.50
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="leading-[38.00px] text-[19.63px] text-black-900_6c tracking-[0.35px] w-full"
                              size="txtMontserratRegular1963Black9006c"
                            >
                              Health deductible
                            </Text>
                            <Text
                              className="sm:text-[31.509999999999998px] md:text-[37.51px] text-[41.51px] text-black-900 tracking-[0.35px]"
                              size="txtMontserratBold4151Black900"
                            >
                              $10,423
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="leading-[26.00px] sm:mt-0 mt-1.5 text-[13.31px] text-black-900_75 text-right tracking-[0.24px]"
                            size="txtMontserratRegular1331"
                          >
                            <>
                              Your estimated all-in
                              <br />
                              <br />
                              Out-of-pocket max
                            </>
                          </Text>
                          <Text
                            className="leading-[26.00px] sm:mt-0 mt-1.5 text-[13.31px] text-black-900 tracking-[0.24px]"
                            size="txtMontserratBold1331"
                          >
                            <>
                              $2,382
                              <br />
                              <br />
                              $9,450
                            </>
                          </Text>
                          <Line className="bg-black-900_63 h-[88px] sm:h-px sm:w-full w-px" />
                          <Text
                            className="leading-[26.00px] sm:mt-0 mt-1.5 text-[13.31px] text-black-900_75 text-right tracking-[0.24px]"
                            size="txtMontserratRegular1331"
                          >
                            <>
                              Doctor visits
                              <br />
                              <br />
                              Generic drugs
                            </>
                          </Text>
                          <Text
                            className="leading-[26.00px] sm:mt-0 mt-1.5 text-[13.31px] text-black-900 tracking-[0.24px]"
                            size="txtMontserratBold1331"
                          >
                            <span className="text-black-900 font-montserrat text-left font-bold">
                              <>
                                first 3 visit(s) $0 then
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-bold">
                              <>
                                $0 after deductible
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-bold">
                              <>
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-bold">
                              No charge after deductible
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-[24.44px] h-[69px] md:h-auto items-start justify-start max-w-[874px] w-full">
                      <Button
                        className="cursor-pointer font-bold h-[69px] rounded-[12px] text-[16.81px] text-center tracking-[0.24px] w-[425px]"
                        color="gray_400_02"
                        size="3xl"
                        variant="fill"
                      >
                        Plan Details
                      </Button>
                      <Button
                        className="cursor-pointer font-bold h-[69px] rounded-[12px] text-[16.81px] text-center tracking-[0.24px] w-[425px]"
                        color="pink_600"
                        size="2xl"
                        variant="fill"
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[168px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default FormFivePage;
