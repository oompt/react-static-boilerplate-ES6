// I can't for the life of me figure out why 
// this file refuses to pass the Babel compile.
// Keep saying 'import is a reserved word'
// ?? 

var cssnext = require('cssnext')

module.exports = {
  title: 'My Static Site',
  routes: [
    '/',
    '/about/'
  ]
}

