module.exports = {
  purge: {
    content: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    options: {
      safelist: ['md:w-2/12', 'md:w-3/12', 'md:w-6/12', 'md:w-7/12', 'md:w-9/12', 'print:w-2/12', 'print:w-3/12', 'print:w-6/12', 'print:w-7/12', 'print:w-9/12'],
    },
  },
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