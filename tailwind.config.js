const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
        mono: ["monospace", "SFMono-Regular"],
    },
    extend: {},
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'stark': '#f6f2ed'
    },
  },
  plugins: [],
});