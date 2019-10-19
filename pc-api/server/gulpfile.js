var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

gulp.task('injectHTML', () => {
   return gulp.src('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app/app.component.html')
      .pipe(replace('', () => {
         var htmlContent = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-client/src/app/components/pc-home/pc-home.component.html', 'utf8');
         return htmlContent.match(/(?<=\<body\>)(\s*.*\s*)(.|\n)*?(?=\<\/body\>)/gm);
      }))
      .pipe(gulp.dest('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app'))
});

gulp.task('injectJS', () => {
   return gulp.src('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app/app.component.ts')
      .pipe(replace('', () => {
         var JSfunction = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-client/src/app/components/pc-home/pc-home.component.ts', 'utf8');
         return JSfunction.match(/()(?:\/)(?=\/a)(?:\/)((?:\1|[\s\S])*?)(?:\/a)\1/gm)
      }))
      .pipe(gulp.dest('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app'))
});

gulp.task('injectSCSS', () => {
   return gulp.src('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app/app.component.scss')
      .pipe(replace('', () => {
         var SCSSfunction = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-client/src/app/components/pc-home/pc-home.component.scss', 'utf8');
         return SCSSfunction.match(/()(?:\/)(?=\/a)(?:\/)((?:\1|[\s\S])*?)(?:\/a)\1/gm)
      }))
      .pipe(gulp.dest('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app'))
});



