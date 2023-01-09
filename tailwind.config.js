module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
      'node_modules/preline/dist/*.js',
    ],
    theme: {
      
      theme: {
        
        extend: {},
      },
    },
    plugins: [require('preline/plugin'),
    require('flowbite-typography'),]
  }