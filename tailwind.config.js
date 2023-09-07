/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-grey-100": "#F2EBEF",
        white: "#FFFF",
        "color-grey-400": "#B2A6AD",
        "color-grey-500": "#998E94",
        "color-grey-600": "#80737A",
        "color-grey-700": "#665C61",
        "color-grey-800": "#262123",
        "color-grey-900": "#1A1618",
        "color-bg-black": "#0D0B0C",
        "color-glassy": "rgba(109, 109, 112, 0.8)",
        "btn-purple": "#8932F6",
        "deep-black": "#000000",
        "tag-bg-color": "#EEEEFC",
        "tag-text-color": "#5559DF",
        "error-red": "#EF2C38",
        "price-banner-bg": "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "hero-mobile": "url('assets/hero-mobile.png')",
        "hero-desk": "url('assets/hero-desk.png')",
        "event-bg": "url('assets/event-glass-bg-desk.png')",
      },
    },
  },
  plugins: [],
};
