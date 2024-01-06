/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#F99F1C",
                secondary: "#FD6011",
                mainBg: "#EEEFF0",
                textMain: "#0C1B2B",
            },
        },
    },
    plugins: [require("daisyui")],
};
