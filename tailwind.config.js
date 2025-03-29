/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#cc4f5e",
          "primary-content": "#0f0203",
          secondary: "#f07738",
          "secondary-content": "#140501",
          accent: "#38b5a7",
          "accent-content": "#010c0a",
          neutral: "#ccc0b7",
          "neutral-content": "#0f0e0c",
          "base-100": "#f2e8e6",
          "base-200": "#e7d6d2",
          "base-300": "#dcc7c2",
          "base-content": "#141313",
          info: "#5eead4",
          "info-content": "#031310",
          success: "#34d399",
          "success-content": "#011008",
          warning: "#fbbf24",
          "warning-content": "#150d00",
          error: "#ef4444",
          "error-content": "#140202",
        },
      },
    ],
  },
};
