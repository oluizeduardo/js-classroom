var _app = require('express')();
_app.set('view engine', 'ejs');
_app.set('views', './views');

module.exports = function() {
    return _app;
};
