/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Hind", "sans-serif"],
            },
            colors: {
                primary: "#FC2872",
                secondary: "#6F5CF1",
            },
        },
    },
    plugins: [],
};
