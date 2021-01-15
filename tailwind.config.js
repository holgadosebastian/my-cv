module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    fontFamily: {
      'display': 'Source Sans Pro',
      'body': 'Roboto',
    },
    extend: {
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  variants: {},
  plugins: [],
}