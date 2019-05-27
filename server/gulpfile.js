var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

gulp.task('injectHtml', function () {
    return gulp.src('/Users/fortuzar/sites/fjot/proleitTest/src/app/app.component.html')
         .pipe(replace('<!-- injecthere -->', function () {
            var htmlContent = fs.readFileSync('/Users/fortuzar/sites/fjot/fjot-landig/src/app/components/fjot-home/fjot-home.component.html', 'utf8');
            return htmlContent.match(/<div.*[*result.*["']\s*>(.*)<\/div>/g);
         }))
        .pipe(gulp.dest('/Users/fortuzar/sites/fjot/proleitTest/src/app'));
});

