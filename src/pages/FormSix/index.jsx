import React from "react";

import { Button, Img, Line, List, RatingBar, Text } from "components";
import Header from "components/Header";

const FormSixPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-1.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="md:h-[119px] h-[86px] max-w-[1504px] mt-[33px] mx-auto md:px-5 relative w-full">
              <Img
                className="absolute h-2 inset-x-[0] mx-auto top-[41%] w-4/5"
                src="images/img_frame377_gray_500_8x1504.svg"
                alt="frame377"
              />
              <Img
                className="absolute h-[66px] inset-[0] justify-center m-auto rounded-[50%] w-[66px]"
                src="images/img_ellipse9.png"
                alt="ellipsenine"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[21.87px] items-start justify-start max-w-[1509px] mt-[57px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[17.87px] md:text-[19.87px] text-base text-center tracking-[-0.48px]"
                  shape="square"
                  color="blue_900"
                  size="lg"
                  variant="fill"
                >
                  Plan costs
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[17.87px] md:text-[19.87px] text-base text-center tracking-[-0.48px]"
                  shape="square"
                  color="gray_400_19"
                  size="lg"
                  variant="fill"
                >
                  Doctor visits
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[17.87px] md:text-[19.87px] text-base text-center tracking-[-0.48px]"
                  shape="square"
                  color="gray_400_19"
                  size="lg"
                  variant="fill"
                >
                  Prescriptions
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[17.87px] md:text-[19.87px] text-base text-center tracking-[-0.48px]"
                  shape="square"
                  color="gray_400_19"
                  size="lg"
                  variant="fill"
                >
                  Labs
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[17.87px] md:text-[19.87px] text-base text-center tracking-[-0.48px]"
                  shape="square"
                  color="gray_400_19"
                  size="lg"
                  variant="fill"
                >
                  Hospital
                </Button>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 grid-cols-2 w-[29%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start">
                  <Button
                    className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[17.87px] md:text-[19.87px] text-base text-center tracking-[-0.48px]"
                    shape="square"
                    color="gray_400_19"
                    size="lg"
                    variant="fill"
                  >
                    Other coverage
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[17.87px] md:text-[19.87px] text-base text-center tracking-[-0.48px]"
                    shape="square"
                    color="gray_400_19"
                    size="lg"
                    variant="fill"
                  >
                    Preventive care
                  </Button>
                </div>
              </List>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[17.87px] md:text-[19.87px] text-base text-center tracking-[-0.48px]"
                  shape="square"
                  color="gray_400_19"
                  size="lg"
                  variant="fill"
                >
                  Estimated all-in cost
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[34px] items-start justify-start max-w-[1418px] mt-[97px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Img
                  className="h-[98px] md:h-auto object-cover"
                  src="images/img_image2_98x358.png"
                  alt="imagetwo"
                />
                <Button
                  className="cursor-pointer font-bold mb-14 min-w-[150px] rounded text-[15.89px] text-center tracking-[0.23px]"
                  color="pink_600"
                  size="md"
                  variant="fill"
                >
                  CATASTROPHIC
                </Button>
              </div>
              <Text
                className="sm:text-[32.26px] md:text-[34.26px] text-[36.26px] text-black-900 text-center tracking-[0.28px]"
                size="txtMontserratRegular3626"
              >
                Bronze 60 HMO - HMO
              </Text>
            </div>
            <div className="flex flex-col items-baseline justify-start max-w-[1511px] mt-[50px] mx-auto md:px-5 w-full">
              <div className="sm:h-[1123px] h-[1148px] md:h-[1609px] relative w-full">
                <div className="absolute bg-white-A700 border border-pink-600 border-solid flex flex-col gap-[31px] h-full inset-[0] justify-center m-auto p-0 sm:px-5 rounded-[19px] shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start max-w-[1342px] ml-5 md:ml-[0] mr-[84px] mt-[104px] w-full">
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <Text
                          className="text-[17.5px] sm:text-[18.5px] md:text-[20.5px] text-black-900 tracking-[0.41px] w-auto"
                          size="txtMontserratRegular225Black900"
                        >
                          Monthly premium
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[223px] sm:text-[37.56px] text-[37px] md:text-[43.56px] text-black-900 tracking-[0.41px] w-auto"
                          size="txtMontserratBold4756Black900"
                        >
                          <span className="text-black-900 font-montserrat text-left font-bold">
                            $227.34{" "}
                          </span>
                          <span className="md:text-[30.560000000000002px] sm:text-[28.560000000000002px] text-black-900 font-montserrat text-left text-[32.56px] font-normal">
                            per month{" "}
                          </span>
                          <span className="md:text-[30.560000000000002px] sm:text-[28.560000000000002px] text-pink-600 font-montserrat text-left text-[32.56px] font-normal">
                            was $234.34
                          </span>
                        </Text>
                        <Img
                          className="h-[21px] md:h-auto md:ml-[0] ml-[289px] object-cover w-[21px]"
                          src="images/img_forward.png"
                          alt="forward"
                        />
                      </div>
                      <Text
                        className="text-[17px] sm:text-[18.5px] md:text-[20.5px] text-black-900 tracking-[0.41px] w-auto"
                        size="txtMontserratRegular225Black900"
                      >
                        Your premium is the amount you pay for health insurance
                        each month.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[42px] items-start justify-start mb-3.5 mr-9 w-auto md:w-full">
                    <List
                      className="flex flex-col gap-[34px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                            <Text
                              className="text-[17px] sm:text-[18.5px] md:text-[20.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Deductible
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[305px] sm:text-[37.56px] text-[37px] md:text-[43.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratBold4756Black900"
                            >
                              <span className="text-black-900 font-montserrat text-left font-bold">
                                $6,300{" "}
                              </span>
                              <span className="md:text-[30.560000000000002px] sm:text-[28.560000000000002px] text-black-900 font-montserrat text-left text-[32.56px] font-normal">
                                per person
                              </span>
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[520px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-7 items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-3.5 text-[17px] sm:text-[18.5px] md:text-[20.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Rx deductible
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[273px] sm:text-[37.56px] text-[37px] md:text-[43.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratBold4756Black900"
                            >
                              <span className="text-black-900 font-montserrat text-left font-bold">
                                $500{" "}
                              </span>
                              <span className="md:text-[30.560000000000002px] sm:text-[28.560000000000002px] text-black-900 font-montserrat text-left text-[32.56px] font-normal">
                                per person
                              </span>
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[565px] md:mt-0 mt-[30px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[15px] text-[17px] sm:text-[18.5px] md:text-[20.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Out-of-pocket max
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[213px] sm:text-[37.56px] text-[37px] md:text-[43.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratBold4756Black900"
                            >
                              <span className="text-black-900 font-montserrat text-left font-bold">
                                $9,100{" "}
                              </span>
                              <span className="md:text-[30.560000000000002px] sm:text-[28.560000000000002px] text-black-900 font-montserrat text-left text-[32.56px] font-normal">
                                per person
                              </span>
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[533px] md:mt-0 mt-[29px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-7 items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                            <Text
                              className="text-[17px] sm:text-[18.5px] md:text-[20.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Network type
                            </Text>
                            <Text
                              className="font-bold md:ml-[0] ml-[277px] sm:text-[37.56px] text-[37px] md:text-[43.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratBold4756Black900"
                            >
                              HMO
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[757px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                            <Text
                              className="text-[17px] sm:text-[18.5px] md:text-[20.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Metal tier
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[323px] sm:text-[37.56px] text-[37px] md:text-[43.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratBold4756Black900"
                            >
                              Expanded Bronze
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[436px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                      <div className="flex flex-col gap-[35px] items-start justify-start w-full">
                        <Line className="bg-black-900_6c h-px w-full" />
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[52%] md:w-full">
                          <Text
                            className="sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                            size="txtMontserratRegular225Black900"
                          >
                            Overall rating
                          </Text>
                          <div className="flex flex-row items-start justify-start w-auto">
                            <RatingBar
                              className="flex justify-between w-[283px]"
                              value={5}
                              starCount={5}
                              size={45}
                            ></RatingBar>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[23px] md:gap-[42px] items-end justify-start max-w-[1410px] px-5 w-full">
                      <Line className="bg-black-900_6c h-px w-full" />
                      <Text
                        className="text-[17px] sm:text-[18.5px] md:text-[20.5px] text-black-900 tracking-[0.41px] w-auto"
                        size="txtMontserratRegular225Black900"
                      >
                        Official Document
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="absolute cursor-pointer font-bold left-[0] min-w-[341px] rounded-bl-[5px] rounded-br-[5px] sm:text-[37.56px] text-[41.56px] md:text-[43.56px] text-center top-[0] tracking-[0.41px]"
                  color="pink_600"
                  size="xl"
                  variant="fill"
                >
                  Plan costs
                </Button>
              </div>
              <List
                className="flex flex-col gap-[57px] items-center mt-[57px] w-full"
                orientation="vertical"
              >
                <div className="md:h-[1287px] sm:h-[742px] h-[746px] relative w-full">
                  <div className="absolute bg-white-A700 border border-pink-600 border-solid flex-col h-full hidden inset-[0] items-baseline justify-center m-auto p-8 sm:px-5 rounded-[19px] shadow-bs3 w-full">
                    <Text
                      className="leading-[44.00px] mt-[79px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-[97%] sm:w-full"
                      size="txtMontserratRegular225Black900"
                    >
                      This applies to doctor visits when you have a condition or
                      symptom. For preventive care visits, such as annual
                      checkups, visits are free.
                    </Text>
                    <div className="flex flex-col gap-[42px] items-start justify-start mb-[18px] w-auto md:w-full">
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[42px] justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[435px] w-[66%] md:w-full">
                            <Text
                              className="mb-[9px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Before deductible is met
                            </Text>
                            <Text
                              className="mb-[9px] md:ml-[0] ml-[154px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              After deductible is met
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[172px] md:mt-0 mt-4 object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Primary care visit
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[233px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              Full price
                            </Text>
                            <Text
                              className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              $60
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[378px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Specialist visit
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[270px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              Full price
                            </Text>
                            <Text
                              className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              $95
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[381px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardtwo"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-10 items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-0.5 sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Preventive care visit
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[202px] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              No charge
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[268px] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              No charge
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[267px] md:mt-0 mt-[18px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardthree"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-bold hidden left-[0] min-w-[386px] sm:min-w-full rounded-bl-[5px] rounded-br-[5px] sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-center top-[0] tracking-[0.41px]"
                    color="pink_600"
                    size="xl"
                    variant="fill"
                  >
                    Doctor visits
                  </Button>
                </div>
                <div className="md:h-[1594px] sm:h-[900px] h-[905px] hidden relative w-full">
                  <div className="absolute bg-white-A700 border border-pink-600 border-solid flex flex-col gap-10 h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded-[19px] shadow-bs3 w-full">
                    <Text
                      className="leading-[44.00px] mt-[79px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-[97%] sm:w-full"
                      size="txtMontserratRegular225Black900"
                    >
                      Prescription coverage is based on which category a drug
                      falls into. Note that prior authorization may be required
                      for some prescriptions. Some plans may have a separate Rx
                      deductible. Please confirm details in the Summary of
                      Benefits and Coverages.
                    </Text>
                    <div className="flex flex-col gap-[42px] items-start justify-start mb-[15px] w-auto md:w-full">
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[42px] justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[435px] w-[66%] md:w-full">
                            <Text
                              className="mb-[9px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Before deductible is met
                            </Text>
                            <Text
                              className="mb-[9px] md:ml-[0] ml-[154px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              After deductible is met
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[172px] md:mt-0 mt-4 object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[5px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Generic
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[344px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              Full price
                            </Text>
                            <Text
                              className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              $17
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[388px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[5px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Brand
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[364px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              Full price
                            </Text>
                            <Text
                              className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              40%
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardtwo"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Non-preferred Brand
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[191px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              Full price
                            </Text>
                            <Text
                              className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              40%
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardthree"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Specialty
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[328px] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              up to $500
                            </Text>
                            <Text
                              className="mb-0.5 md:ml-[0] ml-[262px] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              40%
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardfour"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-bold left-[0] min-w-[538px] sm:min-w-full rounded-bl-[5px] rounded-br-[5px] sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-center top-[0] tracking-[0.41px]"
                    color="pink_600"
                    size="xl"
                    variant="fill"
                  >
                    Prescription drugs
                  </Button>
                </div>
                <div className="md:h-[1244px] sm:h-[697px] h-[702px] hidden relative w-full">
                  <div className="absolute bg-white-A700 border border-pink-600 border-solid flex flex-col gap-[46px] h-full inset-[0] justify-center m-auto p-8 sm:px-5 rounded-[19px] shadow-bs3 w-full">
                    <Text
                      className="ml-1.5 md:ml-[0] mr-[670px] mt-[88px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px]"
                      size="txtMontserratRegular225Black900"
                    >
                      These are tests your doctor may run when diagnosing a
                      condition.
                    </Text>
                    <div className="flex flex-col gap-[42px] items-start justify-start mb-[25px] mr-9 w-auto md:w-full">
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[42px] justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[435px] w-[66%] md:w-full">
                            <Text
                              className="mb-[9px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Before deductible is met
                            </Text>
                            <Text
                              className="mb-[9px] md:ml-[0] ml-[154px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              After deductible is met
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[172px] md:mt-0 mt-4 object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              X-rays
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[364px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              Full price
                            </Text>
                            <Text
                              className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              40%
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-1.5 sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Imaging (CT/PET/MRI)
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[179px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              Full price
                            </Text>
                            <Text
                              className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              40%
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardtwo"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                            <Text
                              className="sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Blood work
                            </Text>
                            <Text
                              className="mb-0.5 md:ml-[0] ml-[301px] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              $40
                            </Text>
                            <Text
                              className="mb-0.5 md:ml-[0] ml-[377px] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              $40
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[376px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardthree"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-bold left-[0] min-w-[460px] sm:min-w-full rounded-bl-[5px] rounded-br-[5px] sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-center top-[0] tracking-[0.41px]"
                    color="pink_600"
                    size="xl"
                    variant="fill"
                  >
                    Labs & imaging
                  </Button>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start mt-[57px] w-full">
                <div className="sm:h-[1251px] h-[1267px] md:h-[2543px] hidden relative w-full">
                  <div className="absolute bg-white-A700 border border-pink-600 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded-[19px] shadow-bs3 w-full">
                    <div className="flex flex-col gap-[42px] items-start justify-start mb-[22px] mt-[116px] w-auto md:w-full">
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[42px] justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[435px] w-[66%] md:w-full">
                            <Text
                              className="mb-[9px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Before deductible is met
                            </Text>
                            <Text
                              className="mb-[9px] md:ml-[0] ml-[154px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              After deductible is met
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[172px] md:mt-0 mt-4 object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardone"
                            />
                          </div>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-[41px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                Urgent care
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[296px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                Full price
                              </Text>
                              <Text
                                className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                $60
                              </Text>
                              <Img
                                className="h-[21px] md:h-auto md:ml-[0] ml-[378px] md:mt-0 mt-[21px] object-cover w-[21px]"
                                src="images/img_forward_21x21.png"
                                alt="forward"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                Emergency room
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[233px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                Full price
                              </Text>
                              <Text
                                className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                40%
                              </Text>
                              <Img
                                className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                                src="images/img_forward_21x21.png"
                                alt="forward"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[5px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                Ambulance
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[300px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                Full price
                              </Text>
                              <Text
                                className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                40%
                              </Text>
                              <Img
                                className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                                src="images/img_forward_21x21.png"
                                alt="forward"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                Hospital stay (facility)
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[188px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                Full price
                              </Text>
                              <Text
                                className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                40%
                              </Text>
                              <Img
                                className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                                src="images/img_forward_21x21.png"
                                alt="forward"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                Hospital stay (physician)
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[154px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                Full price
                              </Text>
                              <Text
                                className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                40%
                              </Text>
                              <Img
                                className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                                src="images/img_forward_21x21.png"
                                alt="forward"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                Outpatient procedure (facility)
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[82px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                Full price
                              </Text>
                              <Text
                                className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                40%
                              </Text>
                              <Img
                                className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                                src="images/img_forward_21x21.png"
                                alt="forward"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                Outpatient procedure (physician)
                              </Text>
                              <Text
                                className="ml-12 md:ml-[0] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                Full price
                              </Text>
                              <Text
                                className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                40%
                              </Text>
                              <Img
                                className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                                src="images/img_forward_21x21.png"
                                alt="forward"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                Physical rehabilitation
                              </Text>
                              <Text
                                className="mb-0.5 md:ml-[0] ml-[177px] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                $60
                              </Text>
                              <Text
                                className="mb-0.5 md:ml-[0] ml-[379px] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular3256"
                              >
                                $60
                              </Text>
                              <Img
                                className="h-[21px] md:h-auto md:ml-[0] ml-[378px] md:mt-0 mt-[21px] object-cover w-[21px]"
                                src="images/img_forward_21x21.png"
                                alt="forward"
                              />
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-bold left-[0] min-w-[627px] md:min-w-full rounded-bl-[5px] rounded-br-[5px] sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-center top-[0] tracking-[0.41px]"
                    color="pink_600"
                    size="xl"
                    variant="fill"
                  >
                    Hospital & emergency
                  </Button>
                </div>
              </div>
              <List
                className="flex flex-col gap-[57px] items-center mt-[57px] w-full"
                orientation="vertical"
              >
                <div className="md:h-[1005px] sm:h-[611px] h-[615px] relative w-full">
                  <div className="absolute bg-white-A700 border border-pink-600 border-solid flex-col gap-[34px] h-full hidden inset-[0] items-center justify-center m-auto p-[30px] sm:px-5 rounded-[19px] shadow-bs3 w-full">
                    <Text
                      className="leading-[44.00px] mt-[81px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-[97%] sm:w-full"
                      size="txtMontserratRegular225Black900"
                    >
                      All plans cover behavioral health treatment (such as
                      psychotherapy or counseling), mental and behavioral health
                      inpatient services, and substance use treatment.
                    </Text>
                    <div className="flex flex-col gap-[42px] items-start justify-start mb-[22px] w-auto md:w-full">
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[42px] justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[435px] w-[66%] md:w-full">
                            <Text
                              className="mb-[9px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Before deductible is met
                            </Text>
                            <Text
                              className="mb-[9px] md:ml-[0] ml-[154px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              After deductible is met
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[172px] md:mt-0 mt-4 object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[41px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[3px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Outpatient services
                            </Text>
                            <Text
                              className="mb-[3px] md:ml-[0] ml-[207px] sm:text-[24.56px] md:text-[26.56px] text-[28.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular2856"
                            >
                              first 3 visit(s) $60 then $60
                            </Text>
                            <Text
                              className="mb-[3px] ml-14 md:ml-[0] sm:text-[24.56px] md:text-[26.56px] text-[28.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular2856"
                            >
                              first 3 visit(s) $60 then $60
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[55px] md:mt-0 mt-[17px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Psychiatric hospital stay
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[154px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              Full price
                            </Text>
                            <Text
                              className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              40%
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardtwo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-bold hidden left-[0] min-w-[910px] md:min-w-full rounded-bl-[5px] rounded-br-[5px] sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-center top-[0] tracking-[0.41px]"
                    color="pink_600"
                    size="xl"
                    variant="fill"
                  >
                    Mental health & substance abuse
                  </Button>
                </div>
                <div className="sm:h-[610px] h-[615px] md:h-[857px] relative w-full">
                  <div className="absolute bg-white-A700 border border-pink-600 border-solid flex-col gap-[46px] h-full hidden inset-[0] justify-center m-auto p-[38px] sm:px-5 rounded-[19px] shadow-bs3 w-full">
                    <Text
                      className="mr-[618px] mt-[82px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px]"
                      size="txtMontserratRegular225Black900"
                    >
                      Every plan covers services provided before and after your
                      child is born.
                    </Text>
                    <div className="flex flex-col gap-[42px] items-start justify-start mb-[54px] w-auto md:w-full">
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[42px] justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[435px] w-[66%] md:w-full">
                            <Text
                              className="mb-[9px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Before deductible is met
                            </Text>
                            <Text
                              className="mb-[9px] md:ml-[0] ml-[154px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              After deductible is met
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[172px] md:mt-0 mt-4 object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forward"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-11 items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                            <Text
                              className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Well baby care
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                          <Line className="bg-black-900_6c h-px w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular225Black900"
                            >
                              Labor, delivery, hospital stay
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[107px] md:mt-0 mt-0.5 sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              Full price
                            </Text>
                            <Text
                              className="mb-0.5 ml-72 md:ml-[0] sm:text-[28.560000000000002px] md:text-[30.560000000000002px] text-[32.56px] text-black-900 tracking-[0.41px] w-auto"
                              size="txtMontserratRegular3256"
                            >
                              40%
                            </Text>
                            <Img
                              className="h-[21px] md:h-auto md:ml-[0] ml-[369px] md:mt-0 mt-[21px] object-cover w-[21px]"
                              src="images/img_forward_21x21.png"
                              alt="forwardtwo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-bold hidden left-[0] min-w-[528px] sm:min-w-full rounded-bl-[5px] rounded-br-[5px] sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-center top-[0] tracking-[0.41px]"
                    color="pink_600"
                    size="xl"
                    variant="fill"
                  >
                    Pregnancy & birth
                  </Button>
                </div>
              </List>
              <div className="flex flex-col gap-[57px] items-center justify-start mt-[57px] w-full">
                <div className="h-[1679px] md:h-[1807px] sm:h-[1990px] relative w-full">
                  <div className="absolute bg-white-A700 border border-pink-600 border-solid flex flex-col gap-[22px] h-full inset-[0] items-center justify-center m-auto p-[31px] sm:px-5 rounded-[19px] shadow-bs3 w-full">
                    <Text
                      className="leading-[44.00px] mt-20 sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-[97%] sm:w-full"
                      size="txtMontserratRegular225Black900"
                    >
                      Every plan includes over 74 preventive care services that
                      are completely free on day one. These services keep you
                      healthy before you become sick, including routine
                      check-ups, counseling, screenings, and immunizations.
                    </Text>
                    <div className="flex flex-col gap-[19px] items-center justify-start w-[98%] md:w-full">
                      <div className="gap-[52px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                        <Button
                          className="cursor-pointer flex-1 py-[26px] rounded-[5px] sm:text-[25.56px] md:text-[27.56px] text-[29.56px] text-center tracking-[0.41px] w-full"
                          color="blue_900"
                          variant="fill"
                        >
                          For Adults
                        </Button>
                        <Button
                          className="!text-gray-600 cursor-pointer flex-1 py-[26px] rounded-[5px] sm:text-[25.56px] md:text-[27.56px] text-[29.56px] text-center tracking-[0.41px] w-full"
                          color="blue_900_19"
                          variant="fill"
                        >
                          For Women
                        </Button>
                        <Button
                          className="!text-gray-600 cursor-pointer flex-1 py-[26px] rounded-[5px] sm:text-[25.56px] md:text-[27.56px] text-[29.56px] text-center tracking-[0.41px] w-full"
                          color="blue_900_19"
                          variant="fill"
                        >
                          For Children
                        </Button>
                      </div>
                      <List
                        className="flex flex-col gap-[22px] items-start w-auto"
                        orientation="vertical"
                      >
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Abdominal aortic aneurysm one-time screening
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto sm:mt-0 mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Alcohol misuse screening and counseling
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto sm:mt-0 mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Aspirin use
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Blood pressure screening
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Cholesterol screening
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Colorectal cancer screening
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Depression screening
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Diabetes screening
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Diet counseling
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Falls prevention
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Hepatitis B screening
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  Hepatitis C screening
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                          <div className="flex flex-col items-end justify-start max-w-[1410px] px-5 w-full">
                            <div className="flex flex-col gap-11 items-center justify-start w-full">
                              <Line className="bg-black-900_6c h-px w-full" />
                              <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mb-[7px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                  size="txtMontserratRegular225Black900"
                                >
                                  HIV screening
                                </Text>
                                <Img
                                  className="h-[21px] md:h-auto mt-3.5 object-cover w-[21px]"
                                  src="images/img_forward_21x21.png"
                                  alt="forward"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-bold left-[0] min-w-[586px] sm:min-w-full rounded-bl-[5px] rounded-br-[5px] sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-center top-[0] tracking-[0.41px]"
                    color="pink_600"
                    size="xl"
                    variant="fill"
                  >
                    Free preventive care
                  </Button>
                </div>
                <div className="h-[1023px] sm:h-[1063px] md:h-[1075px] relative w-full">
                  <div className="absolute bg-white-A700 border border-pink-600 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[30px] sm:px-5 rounded-[19px] shadow-bs3 w-full">
                    <Text
                      className="leading-[44.00px] mt-[81px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px]"
                      size="txtMontserratRegular225Black900"
                    >
                      <>
                        We estimate that your total annual out-of-pocket costs
                        will be $2,728, based on:
                        <br />
                        This plan&#39;s monthly premium costs x 12 months
                        <br />
                        Your healthcare usage estimate of Medium applied to this
                        plan&#39;s deductible and copayments.
                      </>
                    </Text>
                    <div className="flex flex-col items-center justify-start mb-4 mt-1 w-[98%] md:w-full">
                      <div className="h-[178px] relative w-full">
                        <div className="absolute bg-pink-600 flex flex-col inset-x-[0] items-end justify-end mx-auto p-7 sm:px-5 rounded-[5px] top-[20%] w-full">
                          <Text
                            className="mr-[115px] mt-[13px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-white-A700 tracking-[0.41px]"
                            size="txtMontserratRegular225"
                          >
                            This plan has the 4th lowest annual out-of-pocket
                            estimate of all 40 plans available to you.
                          </Text>
                        </div>
                        <div className="absolute bg-white-A700 border-2 border-black-900_19 border-solid flex flex-col h-full inset-y-[0] items-center justify-start left-[1%] my-auto p-9 sm:px-5 rounded-[50%] w-[178px]">
                          <Img
                            className="h-[100px] md:h-auto my-[3px] object-cover w-[100px]"
                            src="images/img_getcash.png"
                            alt="getcash"
                          />
                        </div>
                      </div>
                      <Text
                        className="leading-[44.00px] mt-[26px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px]"
                        size="txtMontserratRegular225Black900"
                      >
                        <>
                          Estimate breakdown
                          <br />
                          This does not limit what you can use — it&#39;s just
                          an estimate of what you might use.
                        </>
                      </Text>
                      <List
                        className="flex flex-col gap-[22px] items-start mt-11 w-auto"
                        orientation="vertical"
                      >
                        <div className="flex flex-col items-end justify-between max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-10 items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                              <Text
                                className="sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                12 Monthly premiums
                              </Text>
                              <Text
                                className="sm:text-[25.5px] md:text-[27.5px] text-[29.5px] text-black-900 text-right tracking-[0.41px] w-auto"
                                size="txtMontserratBold295"
                              >
                                $2,728
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-10 items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                              <Text
                                className="sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                00 Minimal healthcare usage
                              </Text>
                              <Text
                                className="sm:text-[25.5px] md:text-[27.5px] text-[29.5px] text-black-900 text-right tracking-[0.41px] w-auto"
                                size="txtMontserratBold295"
                              >
                                $2,728
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-10 items-center justify-start w-full">
                            <Line className="bg-pink-600_6c h-px w-full" />
                            <div className="flex flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                              <Text
                                className="mt-0.5 sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-pink-600 tracking-[0.41px] w-auto"
                                size="txtMontserratBold225"
                              >
                                Annual estimate
                              </Text>
                              <Text
                                className="sm:text-[25.5px] md:text-[27.5px] text-[29.5px] text-pink-600 text-right tracking-[0.41px] w-auto"
                                size="txtMontserratBold295Pink600"
                              >
                                $2,728
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between max-w-[1410px] px-5 w-full">
                          <div className="flex flex-col gap-10 items-center justify-start w-full">
                            <Line className="bg-black-900_6c h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                              <Text
                                className="sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900 tracking-[0.41px] w-auto"
                                size="txtMontserratRegular225Black900"
                              >
                                Monthly estimate (on average)
                              </Text>
                              <Text
                                className="sm:text-[25.5px] md:text-[27.5px] text-[29.5px] text-black-900 text-right tracking-[0.41px] w-auto"
                                size="txtMontserratBold295"
                              >
                                $227 per month
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute bg-pink-600 flex sm:flex-col flex-row gap-2.5 items-center justify-center left-[0] sm:px-5 px-[34px] py-[22px] rounded-bl-[5px] rounded-br-[5px] top-[0] w-auto">
                    <Text
                      className="sm:text-[37.56px] md:text-[43.56px] text-[47.56px] text-white-A700 tracking-[0.41px] w-auto"
                      size="txtMontserratBold4756"
                    >
                      Estimated all-in costs
                    </Text>
                    <div className="bg-blue_gray-100_01 h-1.5 w-[1%]"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[63px] w-2/5 md:w-full">
                <Button
                  className="cursor-pointer font-bold h-20 py-7 text-[19.26px] text-center tracking-[0.28px] w-[600px]"
                  shape="round"
                  color="pink_600"
                  variant="fill"
                >
                  Enroll Now
                </Button>
              </div>
              <Text
                className="mt-[47px] sm:text-[18.5px] md:text-[20.5px] text-[22.5px] text-black-900_6c text-center tracking-[0.41px]"
                size="txtMontserratBold225Black9006c"
              >
                Enrolling takes just 5 minutes!
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[125px] w-full">
              <div className="bg-gray-50 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[260px] w-full">
                <div className="flex flex-col items-start justify-start max-w-[1400px] mx-auto py-[53.33px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[406.67px] items-center justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-[13.33px] items-start justify-start max-w-[678px] w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 tracking-[0.13px] w-auto"
                        size="txtMontserratBold32"
                      >
                        Feel free contact us
                      </Text>
                      <Text
                        className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                        size="txtMontserratMedium1867"
                      >
                        the quick fox jumps over the lazy dog
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[314px]">
                      <Button
                        className="cursor-pointer font-bold min-w-[216px] rounded-md text-[18.67px] text-center tracking-[0.27px]"
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
                <div className="flex flex-col items-start justify-start max-w-[1400px] mx-auto md:px-5 py-[66.67px] w-full">
                  <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-auto md:w-full">
                    <List
                      className="sm:flex-col flex-row gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[67%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[26.67px] items-start justify-start w-[197px]">
                        <Text
                          className="sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                          size="txtMontserratBold2133"
                        >
                          Company Info
                        </Text>
                        <div className="flex flex-col gap-[13.33px] items-start justify-start w-auto">
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            About Us
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            Carrier
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            We are hiring
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            Blog
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[26.67px] items-start justify-start w-[202px]">
                        <Text
                          className="sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                          size="txtMontserratBold2133"
                        >
                          Legal
                        </Text>
                        <div className="flex flex-col gap-[13.33px] items-start justify-start w-auto">
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            About Us
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            Carrier
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            We are hiring
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            Blog
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[26.67px] items-start justify-start w-[197px]">
                        <Text
                          className="sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                          size="txtMontserratBold2133"
                        >
                          Features
                        </Text>
                        <div className="flex flex-col gap-[13.33px] items-start justify-start w-auto">
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            Business Marketing
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            User Analytic
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            Live Chat
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            Unlimited Support
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[26.67px] items-start justify-start w-[202px]">
                        <Text
                          className="sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                          size="txtMontserratBold2133"
                        >
                          Resources
                        </Text>
                        <div className="flex flex-col gap-[13.33px] items-start justify-start w-auto">
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            IOS & Android
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            Watch a Demo
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            Customers
                          </Text>
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                            size="txtMontserratSemiBold1867"
                          >
                            API
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col gap-[26.67px] items-start justify-start w-[428px] sm:w-full">
                      <Text
                        className="sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-blue_gray-900 tracking-[0.13px] w-auto"
                        size="txtMontserratBold2133"
                      >
                        Get In Touch
                      </Text>
                      <div className="flex flex-col gap-[13.33px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[13.33px] items-center justify-start w-auto">
                          <Img
                            className="h-8 w-8"
                            src="images/img_bxbxphone.svg"
                            alt="bxbxphone"
                          />
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-[141px]"
                            size="txtMontserratSemiBold1867"
                          >
                            (480) 555-0103
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[13.33px] items-center justify-start w-auto">
                          <Img
                            className="h-10"
                            src="images/img_linkedin.svg"
                            alt="linkedin"
                          />
                          <Text
                            className="leading-[32.00px] max-w-[273px] md:max-w-full text-[18.67px] text-gray-600 tracking-[0.27px]"
                            size="txtMontserratSemiBold1867"
                          >
                            4517 Washington Ave. Manchester, Kentucky 39495
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[13.33px] items-center justify-start w-auto">
                          <Img
                            className="h-[34px] w-8"
                            src="images/img_carbonsendalt.svg"
                            alt="carbonsendalt"
                          />
                          <Text
                            className="text-[18.67px] text-gray-600 tracking-[0.27px] w-[259px]"
                            size="txtMontserratSemiBold1867"
                          >
                            albert.john@example.com
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[260px] w-full">
                <div className="flex flex-col items-start justify-start max-w-[1400px] mx-auto py-[33.33px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-center justify-between w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start max-w-[800px] w-full">
                      <Text
                        className="text-[18.67px] text-gray-600 tracking-[0.27px] w-auto"
                        size="txtMontserratSemiBold1867"
                      >
                        TurboHealth.US All Right Reserved 2023
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[314px]">
                      <div className="flex flex-row gap-[26.67px] items-center justify-center w-auto">
                        <div className="flex flex-col h-8 items-center justify-start w-8">
                          <Img
                            className="h-8 w-8"
                            src="images/img_antdesignfacebookfilled.svg"
                            alt="antdesignfacebo"
                          />
                        </div>
                        <Img
                          className="h-8 w-8"
                          src="images/img_antdesigninstagramoutlined.svg"
                          alt="antdesigninstag"
                        />
                        <div className="flex flex-col items-center justify-start w-[22%]">
                          <Img
                            className="h-[26px]"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSixPage;
