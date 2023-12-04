import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  SeekBar,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG, SearchSVG } from "../../assets/images";

const FormFourPage = () => {
  const [plandetailsvalue, setPlandetailsvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-1.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="h-[86px] max-w-[1504px] mt-0 mx-auto md:px-5 relative w-[85%] md:w-full">
            <Img
              className="absolute h-2 inset-x-[0] mx-auto top-[41%] w-[1504px]"
              src="images/img_frame377_gray_500_8x1504.svg"
              alt="frame377"
            />
            <Img
              className="absolute h-[66px] inset-[0] justify-center m-auto rounded-[50%] w-[66px]"
              src="images/img_ellipse9.png"
              alt="ellipsenine"
            />
          </div>
          <div className="flex flex-row flex-wrap md:gap-10 gap-[0] items-start justify-between max-w-[960px] mt-[47px] mx-auto md:px-5 w-full">
            <Button
              className="border-b border-blue-900 border-solid cursor-pointer font-semibold sm:text-[21px] md:text-[23px] text-center text-lg tracking-[-0.55px] w-[250px]"
              shape="square"
              color="blue_900_19"
              size="xl"
              variant="fill"
            >
              Recommended Plans
            </Button>
            <Button
              className="cursor-pointer font-semibold sm:text-[21px] md:text-[23px] text-center text-lg tracking-[-0.55px] w-[250px]"
              shape="square"
              color="gray_300"
              size="xl"
              variant="outline"
            >
              All Plans
            </Button>
            <Button
              className="cursor-pointer font-semibold sm:text-[21px] md:text-[23px] text-center text-lg tracking-[-0.55px] w-[250px]"
              shape="square"
              color="gray_300"
              size="xl"
              variant="outline"
            >
              Lowest Plans
            </Button>
          </div>
          <div className="flex md:flex-col flex-row font-roboto md:gap-10 items-start justify-start max-w-[1510px] mt-[47px] mx-auto md:px-5 w-full">
            <div className="bg-gray-600_75 flex md:flex-1 flex-col items-start justify-center mb-[375px] md:ml-[0] ml-[58px] md:mt-0 mt-[21px] p-[31px] sm:px-5 w-[21%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-[13px] w-[99%] md:w-full">
                <Text
                  className="text-blue_gray-700_01 text-sm"
                  size="txtRobotoRomanRegular20Bluegray70001"
                >
                  Monthly premium max
                </Text>
                <SeekBar
                  inputValue={[56.45]}
                  trackColors={["#d3134a", "#ffffff"]}
                  thumbClassName="h-[17px] bg-blue-900 w-[17px] flex justify-center items-center rounded-[50%] outline-none"
                  className="flex h-[17px] mt-[11px] rounded w-full"
                  trackClassName="h-1 flex rounded w-full"
                />{" "}
                <Text
                  className="md:ml-[0] ml-[200px] mt-0.5 text-base text-blue_gray-700_01"
                  size="txtRobotoRomanRegular20Bluegray70001"
                >
                  $533
                </Text>
              </div>
              <Line className="bg-black-900_63 h-px mt-[30px] w-full" />
              <div className="flex flex-col items-start justify-start mt-[31px] w-full">
                <Text
                  className="text-blue_gray-700_01 text-sm"
                  size="txtRobotoRomanRegular20Bluegray70001"
                >
                  Max total deductiblet
                </Text>
                <SeekBar
                  inputValue={[56.45]}
                  trackColors={["#d3134a", "#ffffff"]}
                  thumbClassName="h-[17px] bg-blue-900 w-[17px] flex justify-center items-center rounded-[50%] outline-none"
                  className="flex h-[17px] mt-[13px] rounded w-full"
                  trackClassName="h-1 flex rounded w-full"
                />{" "}
                <Text
                  className="md:ml-[0] ml-[180px] mt-[3px] text-base text-blue_gray-700_01"
                  size="txtRobotoRomanRegular20Bluegray70001"
                >
                  $53,333
                </Text>
              </div>
              <Line className="bg-black-900_63 h-px mt-[37px] w-full" />
              <div className="flex flex-col gap-[23px] items-start justify-start mt-[33px] w-auto">
                <Text
                  className="text-blue_gray-700_01 text-sm w-auto"
                  size="txtRobotoRomanRegular20Bluegray70001"
                >
                  Usage Estimate
                </Text>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="low"
                    id="low"
                    label="Low"
                    size="xs"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="medium"
                    id="medium"
                    label="Medium"
                    size="xs"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="high"
                    id="high"
                    label="High"
                    size="xs"
                  ></CheckBox>
                </div>
              </div>
              <Line className="bg-black-900_63 h-px mt-11 w-full" />
              <div className="flex flex-col gap-[23px] items-start justify-start mt-7 w-auto">
                <Text
                  className="text-blue_gray-700_01 text-sm w-auto"
                  size="txtRobotoRomanRegular20Bluegray70001"
                >
                  Carriers
                </Text>
                <div className="flex flex-col gap-5 items-start justify-start rounded-[5px] w-auto sm:w-full">
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="bluecrossofcali_One"
                    id="bluecrossofcali_One"
                    label="Blue Cross of California (Anthem BC)"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-base text-left"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="caphysiciansser_One"
                    id="caphysiciansser_One"
                    label="CA Physician&#39;s Service dba Blue Shield of CA"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="healthnetofcali_One"
                    id="healthnetofcali_One"
                    label="Health Net of California, Inc"
                    size="xs"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="kaiserfoundatio_One"
                    id="kaiserfoundatio_One"
                    label="Kaiser Foundation Health Plan, Inc."
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="localinitiative_One"
                    id="localinitiative_One"
                    label="Local Initiative Health Authority for Los Angeles County"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="molinahealthcar_One"
                    id="molinahealthcar_One"
                    label="MOLINA HEALTHCARE OF CALIFORNIA"
                  ></CheckBox>
                </div>
              </div>
              <Line className="bg-black-900_63 h-px mt-8 w-full" />
              <div className="flex flex-col gap-[23px] items-start justify-start mt-11 w-auto">
                <Text
                  className="text-blue_gray-700_01 text-sm w-auto"
                  size="txtRobotoRomanRegular20Bluegray70001"
                >
                  Usage Estimate
                </Text>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="catastrophic"
                    id="catastrophic"
                    label="Catastrophic"
                    size="xs"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="expandedbronze"
                    id="expandedbronze"
                    label="Expanded Bronze"
                    size="xs"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="silver"
                    id="silver"
                    label="Silver"
                    size="xs"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="gold"
                    id="gold"
                    label="Gold"
                    size="xs"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="platinum"
                    id="platinum"
                    label="Platinum"
                    size="xs"
                  ></CheckBox>
                </div>
              </div>
              <Line className="bg-black-900_63 h-px mt-[35px] w-full" />
              <div className="flex flex-col gap-[23px] items-start justify-start mb-[452px] mt-[42px] w-auto">
                <Text
                  className="text-blue_gray-700_01 text-sm w-auto"
                  size="txtRobotoRomanRegular20Bluegray70001"
                >
                  Additional Filters
                </Text>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="easypricing"
                    id="easypricing"
                    label="Easy pricing"
                    size="xs"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-sm"
                    inputClassName="!rounded-[5px] border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                    name="eligibleforan"
                    id="eligibleforan"
                    label="Eligible for an HSA"
                    size="xs"
                  ></CheckBox>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-montserrat gap-[31px] items-center justify-start w-[70%] md:w-full">
              <div className="flex md:flex-col flex-row gap-14 md:gap-[37px] items-center justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-gray-600 text-xl tracking-[-0.55px] w-1/5"
                  size="txtMontserratMedium25Gray600"
                >
                  40 Plan(s)
                </Text>
                <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-row gap-[5px] h-[60px] md:h-auto items-center justify-center rounded-[5px] w-[36%]">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-black-900_6c text-xl tracking-[-0.55px] w-auto"
                    size="txtMontserratMedium25Black9006c"
                  >
                    Plan year 2024
                  </Text>
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_expandarrow.png"
                    alt="expandarrow"
                  />
                </div>
                <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-row gap-2 h-[60px] md:h-auto items-center justify-center rounded-[5px] w-[43%]">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-black-900_6c text-xl tracking-[-0.55px] w-auto"
                    size="txtMontserratMedium25Black9006c"
                  >
                    Lowest Premium
                  </Text>
                  <Img
                    className="h-6 md:h-auto object-cover w-6"
                    src="images/img_expandarrow.png"
                    alt="expandarrowone"
                  />
                </div>
              </div>
              <List
                className="flex flex-col gap-[45px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 border border-pink-600 border-solid flex md:flex-1 flex-col items-center justify-start pb-[7px] pr-[18px] px-[18px] rounded-[19px] shadow-bs3 w-[82%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between md:ml-[0] ml-[5px] w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
                        <Img
                          className="h-[55px] md:h-auto object-cover w-[45%] sm:w-full"
                          src="images/img_image1_75x189.png"
                          alt="imageone"
                        />
                        <Text
                          className="mt-2.5 text-black-900_75 text-center text-sm tracking-[0.28px]"
                          size="txtMontserratBold1926"
                        >
                          Minimum Coverage HMO - HMO
                        </Text>
                        <Line className="bg-black-900_63 h-px mt-3.5 w-[98%]" />
                        <div className="flex flex-row items-start justify-start mt-[23px] w-auto">
                          <RatingBar
                            className="flex justify-between text-left"
                            value={5}
                            starCount={5}
                            size={23}
                          ></RatingBar>
                        </div>
                        <Button
                          className="cursor-pointer font-bold min-w-[105px] mt-3 rounded-sm text-[11.22px] text-center tracking-[0.16px]"
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
                              className="mt-[26px] text-[17.5px] sm:text-[18.5px] md:text-[20.5px] text-white-A700 tracking-[0.41px]"
                              size="txtMontserratRegular225"
                            >
                              Monthly premium
                            </Text>
                            <Text
                              className="text-[37.56px] md:text-[43.56px] text-white-A700 tracking-[0.41px]"
                              size="txtMontserratBold4756"
                            >
                              $198.50
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:mt-0 mt-[39px]">
                            <Text
                              className="text-[17.5px] sm:text-[18.5px] md:text-[20.5px] text-black-900_6c tracking-[0.41px]"
                              size="txtMontserratRegular225Black9006c"
                            >
                              Health deductible
                            </Text>
                            <Text
                              className="text-[37.56px] md:text-[43.56px] text-black-900 tracking-[0.41px]"
                              size="txtMontserratBold4756Black900"
                            >
                              $10,423
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="leading-[30.00px] text-[12.26px] text-black-900_75 text-right tracking-[0.28px]"
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
                            className="leading-[30.00px] text-[12.26px] text-black-900 tracking-[0.28px]"
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
                            className="leading-[30.00px] text-[11.26px] text-black-900_75 text-right tracking-[0.28px]"
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
                            className="leading-[21px] text-[12.26px] text-black-900 tracking-[0.28px]"
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
                    <div className="flex md:flex-col flex-row font-montserrat gap-7 items-start justify-start mt-[21px] w-auto md:w-full">
                      <Input
                        name="plan_details"
                        placeholder="Plan Details"
                        value={plandetailsvalue}
                        onChange={(e) => setPlandetailsvalue(e)}
                        className="font-bold p-0 placeholder:bg-gray-400_02 placeholder:text-white-A700 sm:px-5 text-[19.26px] text-center text-white-A700 tracking-[0.28px] w-full"
                        wrapClassName="bg-gray-400_02 flex pl-7 py-[22px] rounded-[13px] w-full"
                        suffix={
                          plandetailsvalue?.length > 0 ? (
                            <CloseSVG
                              className="cursor-pointer h-5 my-auto"
                              onClick={() => setPlandetailsvalue("")}
                              fillColor="#ffffff"
                              height={20}
                              width={20}
                              viewBox="0 0 20 20"
                            />
                          ) : (
                            <SearchSVG
                              fillColor="#ffffff"
                              className="cursor-pointer h-5 my-auto"
                            />
                          )
                        }
                      ></Input>
                      <Button
                        className="cursor-pointer font-bold h-20 py-[22px] text-[19.26px] text-center tracking-[0.28px] w-[447px]"
                        shape="round"
                        color="pink_600"
                        variant="fill"
                      >
                        Enroll Now
                      </Button>
                    </div>
                    <CheckBox
                      className="font-roboto leading-[normal] mt-6 text-left text-sm"
                      inputClassName="border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                      name="compare"
                      id="compare"
                      label="Compare"
                      size="xs"
                    ></CheckBox>
                  </div>
                </div>
                <div className="bg-white-A700 border border-pink-600 border-solid flex-1 flex-col hidden items-center justify-start pb-[18px] px-[18px] rounded-[19px] shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between md:ml-[0] ml-[5px] w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
                        <Img
                          className="h-[75px] md:h-auto object-cover w-[58%] sm:w-full"
                          src="images/img_image1_65x164.png"
                          alt="imageone"
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
                    <div className="flex md:flex-col flex-row font-montserrat gap-7 items-start justify-start mt-[21px] w-auto md:w-full">
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
                    <CheckBox
                      className="font-roboto leading-[normal] mt-6 text-left text-xl"
                      inputClassName="border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                      name="compare"
                      id="compare2"
                      label="Compare"
                      size="xs"
                    ></CheckBox>
                  </div>
                </div>
                <div className="bg-white-A700 border border-pink-600 border-solid flex-1 flex-col hidden items-center justify-start pb-[18px] px-[18px] rounded-[19px] shadow-bs3 w-full">
                  <div className="flex flex-col gap-[21px] items-center justify-start w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-9 w-[34%] md:w-full">
                        <Img
                          className="h-[47px] md:h-auto object-cover w-[82%] sm:w-full"
                          src="images/img_image1_41x234.png"
                          alt="imageone"
                        />
                        <Text
                          className="mt-[18px] text-[19.26px] text-black-900_75 text-center tracking-[0.28px]"
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
                    <div className="flex flex-row font-roboto sm:gap-10 items-start justify-between w-full">
                      <CheckBox
                        className="leading-[normal] text-left text-xl"
                        inputClassName="border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                        name="compare"
                        id="compare3"
                        label="Compare"
                        size="xs"
                      ></CheckBox>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-black-900 text-xl w-auto"
                          size="txtRobotoRomanRegular20Black900"
                        >
                          Benefits
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-pink-600 border-solid flex-1 flex-col hidden items-center justify-start pb-[18px] px-[18px] rounded-[19px] shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between md:ml-[0] ml-[5px] w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
                        <Img
                          className="h-[75px] md:h-auto object-cover w-[58%] sm:w-full"
                          src="images/img_image1_75x189.png"
                          alt="imageone"
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
                    <div className="flex md:flex-col flex-row font-montserrat gap-7 items-start justify-start mt-[21px] w-auto md:w-full">
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
                    <CheckBox
                      className="font-roboto leading-[normal] mt-6 text-left text-xl"
                      inputClassName="border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                      name="compare"
                      id="compare4"
                      label="Compare"
                      size="xs"
                    ></CheckBox>
                  </div>
                </div>
                <div className="bg-white-A700 border border-pink-600 border-solid flex-1 flex-col hidden items-center justify-start pb-[18px] px-[18px] rounded-[19px] shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between md:ml-[0] ml-[5px] w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
                        <Img
                          className="h-[75px] md:h-auto object-cover w-[58%] sm:w-full"
                          src="images/img_image1_75x189.png"
                          alt="imageone"
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
                    <div className="flex md:flex-col flex-row font-montserrat gap-7 items-start justify-start mt-[21px] w-auto md:w-full">
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
                    <CheckBox
                      className="font-roboto leading-[normal] mt-6 text-left text-xl"
                      inputClassName="border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                      name="compare"
                      id="compare5"
                      label="Compare"
                      size="xs"
                    ></CheckBox>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-white-A700 border border-pink-600 border-solid flex flex-col items-center justify-start mt-[45px] pb-[18px] md:px-5 px-[18px] rounded-[19px] shadow-bs3 w-[55%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between md:ml-[0] ml-[5px] w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
                  <Img
                    className="h-[75px] md:h-auto object-cover w-[58%] sm:w-full"
                    src="images/img_image1_75x189.png"
                    alt="imageone"
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
              <div className="flex md:flex-col flex-row font-montserrat gap-7 items-start justify-start mt-[21px] w-auto md:w-full">
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
              <CheckBox
                className="font-roboto leading-[normal] mt-6 text-left text-xl"
                inputClassName="border border-pink-600 border-solid h-[27px] mr-[5px] w-[27px]"
                name="compare"
                id="compare6"
                label="Compare"
                size="xs"
              ></CheckBox>
            </div>
          </div>
          <Footer className="flex font-montserrat items-center justify-center mt-36 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default FormFourPage;
