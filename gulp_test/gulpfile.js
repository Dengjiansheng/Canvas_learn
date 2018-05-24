const gulp = require('gulp');
const changed = require('gulp-changed');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('miniCss', ()=>{
    watch('./css/*.css', ()=>{
        console.log(34)
        console.log(cleanCss)
        gulp.src('./css/*.css')
            // .pipe(changed('./css/'))
            .pipe(cleanCss())
            .pipe(gulp.dest('./css'))
    })
});
gulp.task('sassToCss', ()=>{
    gulp.src('./sass/*.scss')
        .pipe(changed('./sass_change'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(cleanCss({
            compatibility: 'ie7',
            format: 'keep-breaks',
            specialComments: '*'
        }))
        .pipe(sourcemaps.write('./sourcemap'))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ()=>{
    console.log(new Date())
    // gulp.run('sassToCss');
    gulp.watch('./sass/*', ['sassToCss'])
    // gulp.run('miniCss');
    console.log(3)
});