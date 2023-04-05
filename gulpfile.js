const gulp = require("gulp"); //plugin gulp
const sass = require("gulp-sass")(require("sass")); //plugin sass / compress css
const sourcemaps = require("gulp-sourcemaps"); // mapeamento para o navegador enxergar o SCSS
const uglify = require("gulp-uglify"); // comprime os arquivos js
const imagemin = require("gulp-imagemin"); // comprime imagens

function compilaSass() {
    return gulp.src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

function comprimeJavaScript() {
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"));
}

function comprimeImages() {
    return gulp.src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImages));
}
