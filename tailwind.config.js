module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
      display: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        indigo: '#581845',
        rubyRed: '#900C3F',
        red: '#C70039',
        orange: '#FF5733',
        yellow: '#FFC30F',
        grey: '#363636',
        white: '#FFFFFF'
      },
      height: theme => ({
        'adjust': 'calc(100vh - 87.62px - 87.62px)',
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
