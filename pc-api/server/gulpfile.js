var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

gulp.task('injectHtml', function () {
    return gulp.src('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app/app.component.html')
         .pipe(replace('<!-- injecthere -->', function () {
            var htmlContent = fs.readFileSync('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/frontend/src/app/components/pc-home/pc-home.component.html', 'utf8');
            return htmlContent.match(/(?<=\<body\>)(\s*.*\s*)(.|\n)*?(?=\<\/body\>)/gm);
         }))
        .pipe(gulp.dest('/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app/src/app'));
});

