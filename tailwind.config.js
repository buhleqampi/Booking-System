/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
<<<<<<< HEAD
    // "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  
=======
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
    // './node_modules/preline/dist/*.js',
>>>>>>> 6929655858e650c6f3594136aaa817c083cf3a42
  ],
  theme: {
    extend: {},
  },
  plugins: [
<<<<<<< HEAD
    require('flowbite/plugin'),
    // require('daisyui'),

=======
    require('flowbite/plugin') ,
    // require('preline/plugin'),
    // require('flowbite/plugin') 
    require('daisyui'),
>>>>>>> 6929655858e650c6f3594136aaa817c083cf3a42
  ],
}

