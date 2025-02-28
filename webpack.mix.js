const mix = require('laravel-mix');
require('laravel-mix-purgecss');

// Main theme files
mix.js('src/js/lookbook.js', 'assets/')
   .sass('src/scss/sections/section-lookbook.scss', 'assets/')
   .options({
     processCssUrls: false,
     hmrOptions: {
       https: false,
       host: 'localhost',
       port: '8080'
     }
   });

// Add here the components you want to compile separately