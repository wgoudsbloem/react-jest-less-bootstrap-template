var Q = require('q-xhr')(window.XMLHttpRequest, require('q'));

var dao = {
  promise: Q.xhr.get('http://echo.jsontest.com/text/yo')
};

module.exports = dao;
