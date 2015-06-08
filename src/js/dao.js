var Q = require('q-xhr')(window.XMLHttpRequest, require('q'));

var dao = {

  getText: function(id, func) {
    Q.xhr.post('/api', {
      id: id
    }).then(func);
  }
};

module.exports = dao;
