/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["DM sans", "sans-serif"],
            },
            colors: {
                primary: "#8b5cf6",
                secondary: "#6F5CF1",
            },
        },
    },
    plugins: [],
};
