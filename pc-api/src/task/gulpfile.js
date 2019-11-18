var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');
var dotenv = require('dotenv');
dotenv.config();

/**
 * Watch the HTML from the tempalte when we create a new Project.
 */
gulp.task('deleteHTMLfromTemplate', () => {
   const text = fs.readFileSync(process.env.HTMLDESTINATION_URL, 'utf8');
   return gulp.src(process.env.HTMLDESTINATION_URL)
      .pipe(replace( text, () => {
         var htmlFromContent = fs.readFileSync(process.env.HTMLFROMCREATOR_URL, 'utf8');
         return htmlFromContent.match(/(?<=\<div\>)(\s*.*\s*)(.|\n)*?(?=\<\/div\>)/gm);
      }))
      .pipe(gulp.dest(process.env.DESTINATION_URL))
});

/**
 * Watch the HTML directory for changes.
 */

gulp.task('injectHTMLfromHome', () => {
   const textHTML = fs.readFileSync(process.env.HTMLCOMPONENTDESTINATION_URL, 'utf8');
   return gulp.src(process.env.HTMLCOMPONENTDESTINATION_URL)
      .pipe(replace(textHTML, () => {
         var htmlContent = fs.readFileSync(process.env.HTMLHOMEFROMCREATOR_URL, 'utf8');
         return htmlContent.match(/(?<=\<nav\>)(\s*.*\s*)(.|\n)*?(?=\<\/nav\>)|(?<=\<body\>)(\s*.*\s*)(.|\n)*?(?=\<\/body\>)|(?<=\<nav\>)(\s*.*\s*)(.|\n)*?(?=\<\/nav\>)/gm);
      }))
      .pipe(gulp.dest(process.env.DESTINATIONTO_URL))
});

/**
 * Watch the Javascript directory for changes.
 */

gulp.task('injectJS', () => {
   return gulp.src(JS)
      .pipe(replace('INJECT', () => {
         var JSfunction = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-client/pc-client/src/app/components/pc-home/pc-home.component.ts', 'utf8');
         return JSfunction.match(/()(?:\/)(?=\/a)(?:\/)((?:\1|[\s\S])*?)(?:\/a)\1/gm)
      }))
      .pipe(gulp.dest(DESTINATION))
});

/**
 * Watch the Sass directory for changes.
 */

gulp.task('injectSCSS', () => {
   const scss = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/demo-app/src/app/components/home/home.component.scss', 'utf8');
   return gulp.src(SCSS)
      .pipe(replace( '// INYEXTk', () => {
         var SCSSfunction = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-client/pc-client/src/app/components/pc-home/pc-home.component.scss', 'utf8');
         return SCSSfunction.match(/()(?:\/)(?=\/a)(?:\/)((?:\1|[\s\S])*?)(?:\/a)\1/gm)
      }))
      .pipe(gulp.dest(DESTINATION))
});


/**
 * Watch the Sass directory for changes.
 */
gulp.task('watch', () => {
    gulp.watch('./sass/*.scss', ['sass']);  // If a file changes, re-run 'sass'
  });



