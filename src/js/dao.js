var Q = require('q-xhr')(window.XMLHttpRequest, require('q'));

var dao = {
  promise: Q.xhr.post('/api', {
    id: 99
  })
};

module.exports = dao;
