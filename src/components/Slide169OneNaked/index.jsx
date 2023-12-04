import React from "react";

import { Text } from "components";

const Slide169OneNaked = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <Text
            className="text-gray-900_02 text-xl w-full"
            size="txtMontserratSemiBold20"
          >
            {props?.payouttimequestion}
          </Text>
          <Text
            className="leading-[180.00%] max-w-[360px] md:max-w-full text-gray-900_8e text-xl"
            size="txtPoppinsRegular20"
          >
            {props?.payouttimedescription}
          </Text>
        </div>
      </div>
    </>
  );
};

Slide169OneNaked.defaultProps = {
  payouttimequestion: "How long do payouts take?",
  payouttimedescription:
    "Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.",
};

export default Slide169OneNaked;
