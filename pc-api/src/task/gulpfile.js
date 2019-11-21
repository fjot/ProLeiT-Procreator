var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');
var dotenv = require('dotenv');
dotenv.config();

/**
 * Watch the HTML from the tempalte when we create a new Project.
 */
gulp.task('deleteHTMLfromTemplate', () => {
   const text = fs.readFileSync(process.env.DESTINATION_URL + '/demo-app/src/app/app.component.html', 'utf8');
   return gulp.src(process.env.DESTINATION_URL + '/demo-app/src/app/app.component.html')
      .pipe(replace( text, () => {
         var htmlFromContent = fs.readFileSync(process.env.FROM_URL + '/src/app/app.component.html', 'utf8');
         return htmlFromContent.match(/(?<=\<div\>)(\s*.*\s*)(.|\n)*?(?=\<\/div\>)/gm);
      }))
      .pipe(gulp.dest(process.env.DESTINATION_URL + '/demo-app/src/app'))
});

/**
 * Watch the HTML directory for changes.
 */

gulp.task('injectHTMLfromHome', () => {
   const textHTML = fs.readFileSync(process.env.DESTINATION_URL + '/demo-app/src/app/components/home/home.component.html', 'utf8');
   return gulp.src(process.env.DESTINATION_URL + '/demo-app/src/app/components/home/home.component.html')
      .pipe(replace(textHTML, () => {
         var htmlContent = fs.readFileSync(process.env.FROM_URL + '/src/app/components/pc-home/pc-home.component.html', 'utf8');
         return htmlContent.match(/(?<=\<nav\>)(\s*.*\s*)(.|\n)*?(?=\<\/nav\>)|(?<=\<body\>)(\s*.*\s*)(.|\n)*?(?=\<\/body\>)|(?<=\<nav\>)(\s*.*\s*)(.|\n)*?(?=\<\/nav\>)/gm);
      }))
      .pipe(gulp.dest(process.env.DESTINATION_URL + '/demo-app/src/app/components/home'))
});

/**
 * Watch the Javascript directory for changes.
 */

gulp.task('injectJS', () => {
   return gulp.src(process.env.DESTINATION_URL + '/demo-app/src/app/components/home/home.component.ts')
      .pipe(replace('// INJECT', () => {
         var JSfunction = fs.readFileSync(process.env.FROM_URL + '/src/app/components/pc-home/pc-home.component.ts', 'utf8');
         return JSfunction.match(/()(?:\/)(?:\/aqui)(.|\n)*(?:\/)(?:\/aqui)\1/gm)
      }))
      .pipe(gulp.dest(process.env.DESTINATION_URL + '/demo-app/src/app/components/home'))
});

/**
 * Watch the Sass directory for changes.
 */
gulp.task('injectSCSS', () => {
   return gulp.src(process.env.DESTINATION_URL + '/demo-app/src/app/components/home/home.component.scss', 'utf8')
      .pipe(replace( '// INJECT', () => {
         var SCSSfunction = fs.readFileSync(process.env.FROM_URL + '/src/app/components/pc-home/pc-home.component.scss', 'utf8');
         return SCSSfunction.match(/()(?:\/)(?=\/a)(?:\/)((?:\1|[\s\S])*?)(?:\/a)\1/gm)
      }))
      .pipe(gulp.dest(process.env.DESTINATION_URL + '/demo-app/src/app/components/home'))
});


/**
 * Watch the Sass directory for changes.
 */
gulp.task('watch', () => {
    gulp.watch('./sass/*.scss', ['sass']);  // If a file changes, re-run 'sass'
  });



