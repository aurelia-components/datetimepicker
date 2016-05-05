var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  pug: appRoot + '**/*.jade', //TODO: rename .jade files to .pug
  //style: 'styles/**/*.css',
  css: appRoot + '**/*.css',
  less: 'less/**/*.less',
  sass: 'scss/**/*.scss',
  output: outputRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
