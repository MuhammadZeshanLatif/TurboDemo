module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_6c": "#0000006c",
          "900_11": "#00000011",
          "900_19": "#00000019",
          "900_63": "#00000063",
          "900_75": "#00000075",
        },
        gray: {
          50: "#f9f9f9",
          100: "#f5f5f5",
          200: "#f0f0f0",
          300: "#e4e4e4",
          400: "#c0c0c0",
          500: "#9d9d9d",
          600: "#727272",
          800: "#3a3a3a",
          900: "#282828",
          "400_02": "#bababa",
          "900_01": "#1e1e1e",
          "100_02": "#f2f5f9",
          "100_01": "#f4f4f4",
          "400_01": "#c5c5c5",
          "100_03": "#f7f7f7",
          "500_01": "#9f9fa9",
          "400_19": "#c6c6c619",
          "900_02": "#111127",
          "600_01": "#828282",
          "900_8e": "#1211278e",
          "900_14": "#12112714",
          "600_75": "#72727275",
        },
        white: { A700: "#ffffff", A700_75: "#ffffff75" },
        blue_gray: {
          100: "#d6dadc",
          700: "#42526e",
          900: "#252b42",
          "100_01": "#d9d9d9",
          "900_01": "#172b4d",
          "900_02": "#363636",
          "700_01": "#535353",
        },
        blue: {
          900: "#033a89",
          "900_01": "#0f50ae",
          A700: "#136aff",
          "900_d8": "#033a89d8",
          "800_a5": "#1357b8a5",
          "900_19": "#033a8919",
        },
        yellow: { A700: "#ffd600" },
        colors: "#e8d5d5",
        pink: { 600: "#d3134a", "600_6c": "#d3134a6c", "600_75": "#d3134a75" },
      },
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
        poppins: "Poppins",
        segoeui: "Segoe UI",
        amsterdamsignature: "Amsterdam Signature",
      },
      boxShadow: {
        bs1: "0px 4px  55px 0px #00000019",
        bs: "0px 20px  50px 0px #12112714",
        bs3: "0px 27px  25px 0px #00000011",
        bs2: "0px 18.32px  26px 0px #00000011",
        bs4: "0px 23.56px  22px 0px #00000011",
      },
      backgroundImage: {
        gradient: "linear-gradient(167deg ,#033a89d8,#d3134a)",
        gradient1: "linear-gradient(135deg ,#033a89,#0f50ae,#1357b8a5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};