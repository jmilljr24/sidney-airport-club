// module.exports = {
//   content: [
//     './_drafts/**/*.html',
//     './_includes/**/*.html',
//     './_layouts/**/*.html',
//     './_posts/*.md',
//     './*.md',
//     './*.html',
//   ],
//   theme: {
//     theme: {
//       extend: {},
//     },
//   },
//   plugins: []
// }

module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_includes/**/*.liquid",
    "./_layouts/**/*.html",
    "./_layouts/**/*.liquid",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002856",
      },
    },
  },
  plugins: [],
};
