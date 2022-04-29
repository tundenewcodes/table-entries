module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '450px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            blue: '#1fb6ff',
            white: '#fff',
            pink: '#ff49db',
            orange: '#ff7849',
            aliceblue: '#F0F8FF',
            lightgray: '#D3D3D3',
            chocolate: '#D2691E',
            green: '#13ce66',
            'gray-dark': '#273444',
            gray: '#8492a6',
            'gray-light': '#d3dce6',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {},
    },
    plugins: [],
}