/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["DM sans", "sans-serif"],
            },
            colors: {
                primary: "#d946ef",
                secondary: "#6F5CF1",
            },
        },
    },
    plugins: [],
};
