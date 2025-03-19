const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#31a4fb",
        "primary-dark": "#0088ee",
        "primary-light": "#65bbfc",
        secondary: "#0f143c",
        "light-gray": "#f6f6f6",
        skeleton: colors.slate[300],
      },
      typography: {
        fontFamily: {
          sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        },
        DEFAULT: {
          css: {
            blockquote: {
              borderColor: "#31a4fb80",
            },
            li: {
              "&::marker": {
                color: "#65bbfc",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
