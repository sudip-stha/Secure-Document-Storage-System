/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        textPrimaryColor: "#e8e8f0",
        textSecondaryColor: "#a0a0b5",
        textTertiaryColor: "#6b6b7e",
        textDisabledColor: "#3a3a4a",
        textInverseColor: "#0a0a0f",

        baseSurfaceColor: "#0A0A0F",
        raisedSurfaceColor: "#111118",
        overlaySurfaceColor: "#18181F",
        elevatedSurfaceColor: "#202028",
        topSurfaceColor: "#28283A",

        subtleBorderColor: "rgba(255, 255, 255, 0.05)",
        defaultBorderColor: "rgba(255,255,255,0.1)",
        strongBorderColor: "rgba(255,255,255,0.18)",
        focusBorderColor: "#3A3A4A",

        actionPrimaryColor: "#2563EB",
        actionPrimaryHoverColor: "#1A4FD8",
        actionSecondaryColor: "#18181F",
        actionDestructiveColor: "#E8263D",
        actionConfirmColor: "#12A870",
      },
    },
  },
  plugins: [],
};
