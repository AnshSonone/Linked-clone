/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
        screens: {
      'sm': '784px',
      // => @media (min-width: 640px) { ... }
      'md': '1130px',
      // => @media (min-width: 978px) { ... }
      'lg': '1150px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    // gridTemplateColumns: {
    //   '2': 'repeat(2, minmax(1fr))',
    //   // Simple 16 column grid
    //   '16': 'repeat(16, minmax(0, 1fr))',

    //   // Complex site-specific column configuration
    //   'footer': '200px minmax(900px, 1fr) 100px',
    // },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     screens: {
//       'tablet': '640px',
//       // => @media (min-width: 640px) { ... }

//       'laptop': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'desktop': '1280px',
//       // => @media (min-width: 1280px) { ... }
//     },
//   }
// }