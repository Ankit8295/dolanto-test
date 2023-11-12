import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03EAEA",
        secondary: "#005FEA",
        blueMain: "#0259FF",
      },
      backgroundColor: {
        lightBLue: "#F1F7FF",
        darkBlue: "#0045AA",
        footerColor: "#001942",
        gradient: "linear-gradient(90deg, #03EAEA 0%, #005FEA 100%)",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(90deg, #03E7EA 0%, #005FEA 100%)",
        "gradient-radial-left":
          "radial-gradient(circle at 0 100%, transparent 7px, #fff 7px)",
        "gradient-radial-right":
          "radial-gradient(circle at 100% 100%, transparent 7px, #fff 7px)",
      },
      boxShadow: {
        outset: "2.71895432472229px 0px 33.98693084716797px 0px #0000001A",
        insetCustom: "0px 0px 10px 0px #0000001A inset",
      },
      backgroundSize: {
        half: "50% 100%",
        full: "100%",
      },
      keyframes: {
        rotate: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        dash: {
          "0%": {
            strokeDasharray: "1, 200",
            strokeDashoffset: "0",
          },
          "50%": {
            strokeDasharray: "90, 200",
            strokeDashoffset: "-35px",
          },

          "100%": {
            strokeDashoffset: "-125px",
          },
        },
      },
      animation: {
        dashOut: "dash 1.5s ease-in-out infinite",
        rotateOut: "rotate 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

background: "linear-gradient(118.72deg, #D5DEF0 -90.13%, #FFFFFF 59.34%, #C4EEF9 207.51%)";
