module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
      secondary: 'Open Sans',
    },
    container: {
      padding: {
        DEFAULT: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1038px',
    },
    extend: {
      colors: {
        primary: {
          100: '#fbbd58',
          200: '#fbbd58',
          300: '#4bacf2',
        },
        neutral: {
          100: '#ffffff',
          200: '#dedee3',
          300: '#c1b8b4',
          400: '#878975',
          500: '#0a283e',
        },
        page: '#fcfcff',
      },
      backgroundImage: {
        banner: "url('/src/assets/img/banner/banner.svg')",
        faq: "url('/src/assets/img/faq/bg.svg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '95%',
      },
    },
  },
  plugins: [],
};
