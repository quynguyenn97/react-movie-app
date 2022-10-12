/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["DM sans", "sans-serif"],
            },
            colors: {
                primary: "bg-gradient-to-r from-purple-500 to-pink-500",
                secondary: "#6F5CF1",
            },
        },
    },
    plugins: [],
};
