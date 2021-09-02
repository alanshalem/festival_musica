const { series, src, dest, watch } = require('gulp'); //LIBRERIA CON MULTIPLES FUNCIONES, DESTRUCTURING {}
const sass = require('gulp-sass')(require('sass')); //FUNCION (gulp-sass)

//Funcion que compila SASS

function css(done) {
  return src('src/scss/app.scss').pipe(sass({ outputStyle: 'expanded' }));
}

function minificarCSS(done) {
  return src('src/scss/app.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('./build/css'));
}

function watchArchivos() {
  //   watch('src/scss/*.scss', css); // * = La carpeta actual
  watch('src/scss/**/*.scss', css);
}

exports.css = css;
exports.minificarCSS = minificarCSS;
exports.watchArchivos = watchArchivos;
