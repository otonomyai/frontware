/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary-clr)",
        },
        secondary: {
          DEFAULT: "var(--secondary-clr)",
        },
        textDGray: {
          DEFAULT: "var(--text-d-gray)",
        },
        textLGray: {
          DEFAULT: "var(--text-l-gray)",
        },
        bgInputGray: {
          DEFAULT: "var(--bg-input-gray)",
        },
      },
    },
  },
  plugins: [],
};
