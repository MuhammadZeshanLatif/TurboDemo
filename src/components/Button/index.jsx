import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[13px]",
};
const variants = {
  fill: {
    blue_900: "bg-blue-900 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
    blue_900_19: "bg-blue-900_19 text-gray-800",
    gray_400_19: "bg-gray-400_19 text-gray-800",
    gray_400_02: "bg-gray-400_02 text-white-A700",
    pink_600: "bg-pink-600 text-white-A700",
  },
  outline: { gray_300: "border-b border-gray-300 border-solid text-gray-800" },
};
const sizes = {
  xs: "p-1",
  sm: "px-[5px] py-[7px]",
  md: "p-[9px]",
  lg: "p-3",
  xl: "p-4",
  "2xl": "p-[19px]",
  "3xl": "p-[22px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_900",
    "white_A700",
    "blue_900_19",
    "gray_400_19",
    "gray_400_02",
    "pink_600",
    "gray_300",
  ]),
};

export { Button };
