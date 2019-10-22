var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

// TODO: install dotenv


const HTML = '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app/app.component.html';
const JS ='/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app/app.component.ts';
const SCSS = '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app/app.component.scss'; 
const DESTINATION = '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app';

/**
 * Watch the Sass directory for changes.
 */
gulp.task('deleteHTML', () => {
   const htmlContent = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app/app.component.html', 'utf8');
   return gulp.src(HTML)
      .pipe(replace( htmlContent, () => {
         var htmlContent = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-client/pc-client/src/app/app.component.html', 'utf8');
         return htmlContent.match(/(?<=\<div\>)(\s*.*\s*)(.|\n)*?(?=\<\/div\>)/gm);
      }))
      .pipe(gulp.dest(DESTINATION))
});

/**
 * Watch the Sass directory for changes.
 */

gulp.task('injectHTML', () => {
   return gulp.src(HTML)
      .pipe(replace('INJECT', () => {
         var htmlContent = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-client/src/app/components/pc-home/pc-home.component.html', 'utf8');
         return htmlContent.match(/(?<=\<body\>)(\s*.*\s*)(.|\n)*?(?=\<\/body\>)/gm);
      }))
      .pipe(gulp.dest(DESTINATION))
});

/**
 * Watch the Sass directory for changes.
 */

gulp.task('injectJS', () => {
   return gulp.src(JS)
      .pipe(replace('INJECT', () => {
         var JSfunction = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-client/src/app/components/pc-home/pc-home.component.ts', 'utf8');
         return JSfunction.match(/()(?:\/)(?=\/a)(?:\/)((?:\1|[\s\S])*?)(?:\/a)\1/gm)
      }))
      .pipe(gulp.dest(DESTINATION))
});

/**
 * Watch the Sass directory for changes.
 */

gulp.task('injectSCSS', () => {
   return gulp.src(SCSS)
      .pipe(replace('INJECT', () => {
         var SCSSfunction = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-client/src/app/components/pc-home/pc-home.component.scss', 'utf8');
         return SCSSfunction.match(/()(?:\/)(?=\/a)(?:\/)((?:\1|[\s\S])*?)(?:\/a)\1/gm)
      }))
      .pipe(gulp.dest(DESTINATION))
});


/**
 * Watch the Sass directory for changes.
 */
gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass']);  // If a file changes, re-run 'sass'
  });



