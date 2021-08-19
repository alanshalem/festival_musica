const { series, parallel } = require('gulp');

function css(done) {
  console.log('Compilando... SASS');

  done();
}

function javascript(done) {
  console.log('Compilando Javascript');

  done(); //SEÑALIZO CUANDO TERMINA LA EJECUCION
}

function minificarHTML(done) {
  console.log('Minificando...');
  done();
}

exports.css = css; //EXPORTO CSS, LO LLAMO COMO 'gulp css'
exports.javascript = javascript;
exports.tareas = series(css, javascript); //EJECUTA CSS Y DESPUES JAVASCRIPT EN UN PIPELINE
exports.default = series(css, javascript, minificarHTML); //EJECUTA TODO EN UN PIPELINE POR DEFAULT, ES DECIR, LO EJECUTO SOLO ESCRIBIENDO 'gulp'
// exports.default = parallel(css, javascript, minificarHTML); //LAS EJECUTA EN PARALELO
