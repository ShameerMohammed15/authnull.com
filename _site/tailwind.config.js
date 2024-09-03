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
    darkMode: 'selector',
    theme: {
      
      theme: {
        
        extend: {},
      },
    },
  
    plugins: [
    require("daisyui"),
    require('preline/plugin'),
    require('flowbite-typography'),
   ]
    
  }

  