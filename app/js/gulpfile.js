var
  gulp = require("gulp"),
  livereload = require("gulp-livereload"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  cleanCSS = require("gulp-clean-css"),
  rename = require("gulp-rename");

  gulp.task('action',function(){

      gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(cleanCSS({
          compability: 'ie8'
        }))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest('./css/'))
        pipe(levereload());
  });


  gulp.task('default', function(){

    livereload.listen();
    gulp.watch('./css/*.scss', ['action']);
    gulp.watch('./css/stack/*.scss', ['acteion']);
  });
