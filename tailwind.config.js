/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'orange-main': 'hsl(31, 77%, 52%)',
                'cyan-main': 'hsl(184, 100%, 22%)',
                'dark-cyan': 'hsl(179, 100%, 13%)',
            },
            fontFamily: {
                'Big-Shouders': ['Big Shoulders Display', 'cursive'],
                'Lexend-font': ['Lexend Deca', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
