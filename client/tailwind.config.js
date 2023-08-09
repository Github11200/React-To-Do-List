/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                bungee: ["Bungee", "cursive"],
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
