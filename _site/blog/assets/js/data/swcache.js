const resource = [
  /* --- CSS --- */
  '/blog/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/blog/app.js',
  '/blog/sw.js',

  /* --- HTML --- */
  '/blog/index.html',
  '/blog/404.html',

  
    '/blog/categories/',
  
    '/blog/tags/',
  
    '/blog/archives/',
  
    '/blog/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/blog/assets/img/favicons/android-chrome-72x72.png',
    '/blog/assets/img/favicons/apple-touch-icon.png',
    '/blog/assets/img/favicons/favico.ico',
    '/blog/assets/img/favicons/favico.png',
    '/blog/assets/img/favicons/favicon.ico',
    '/blog/assets/img/favicons/favicon.png',
    '/blog/assets/img/favicons/%C3%98.png',
    '/blog/assets/js/dist/categories.min.js',
    '/blog/assets/js/dist/commons.min.js',
    '/blog/assets/js/dist/home.min.js',
    '/blog/assets/js/dist/misc.min.js',
    '/blog/assets/js/dist/page.min.js',
    '/blog/assets/js/dist/post.min.js',
    '/blog/assets/img/favicons/.DS_Store'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  
    'www.googletagmanager.com',
    'www.google-analytics.com',
  

  'localhost:4001',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

