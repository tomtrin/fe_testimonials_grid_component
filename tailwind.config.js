/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        backgroundImage: {
            quote: "url('assets/images/bg-pattern-quotation.svg')"
        },
        extend: {
            fontFamily: {
              'barlow': ['Barlow Semi Condensed', 'Helvetica']
            },
            colors: {
                'moderate-violet': 'hsl(263, 55%, 52%)',
                'very-dark-grayesh-blue': 'hsl(217, 19%, 35%)',
                'very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
                'light-gray': 'hsl(0, 0%, 81%)',
                'light-grayish-blue': 'hsl(210, 46%, 95%)',
            },
        },
    },
    plugins: [],
};