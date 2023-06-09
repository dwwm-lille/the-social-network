/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.js',
    './assets/**/*.jsx',
    './templates/**/*.html.twig',
    './vendor/symfony/twig-bridge/Resources/views/Form/*.html.twig',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
