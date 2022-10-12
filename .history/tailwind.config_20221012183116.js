/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["DM sans", "sans-serif"],
            },
            colors: {
                primary:
                    "linear-gradient(107.61deg, #00A7B4 15.59%, #A4D96C 87.25%);",
                secondary: "#6F5CF1",
            },
        },
    },
    plugins: [],
};
