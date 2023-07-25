/** @type {import("tailwindcss").Config} */
export default {
  content: ["./page1.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      screens: {
        "1bp": { max: "1300px" },
        "2bp": { max: "1034px" },
        "3bp": { max: "790px" },
        "4bp": { max: "672px" },
        "5bp": { max: "590px" },
        "6bp": { max: "406px" },
      },
    },
  },
  plugins: [],
};
