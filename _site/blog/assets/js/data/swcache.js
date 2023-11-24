const resource = [
  /* --- CSS --- */
  '/https://authnull.com/blog/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/https://authnull.com/blog/app.js',
  '/https://authnull.com/blog/sw.js',

  /* --- HTML --- */
  '/https://authnull.com/blog/index.html',
  '/https://authnull.com/blog/404.html',

  
    '/https://authnull.com/blog/categories/',
  
    '/https://authnull.com/blog/tags/',
  
    '/https://authnull.com/blog/archives/',
  
    '/https://authnull.com/blog/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/https://authnull.com/blog/assets/img/favicons/android-chrome-192x192.png',
    '/https://authnull.com/blog/assets/img/favicons/android-chrome-512x512.png',
    '/https://authnull.com/blog/assets/img/favicons/apple-touch-icon.png',
    '/https://authnull.com/blog/assets/img/favicons/favicon-16x16.png',
    '/https://authnull.com/blog/assets/img/favicons/favicon-32x32.png',
    '/https://authnull.com/blog/assets/img/favicons/favicon.ico',
    '/https://authnull.com/blog/assets/img/favicons/mstile-150x150.png'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  '',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

