/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["DM sans", "sans-serif"],
            },
            colors: {
                primary: "bg-gradient-to-r from-cyan-500 to-blue-500",
                secondary: "#6F5CF1",
            },
        },
    },
    plugins: [],
};
