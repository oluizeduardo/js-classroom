var express = require('./config/express');
var expressStatic = require('express-static');
var _app = express();
var _port = 3000;
require('./routes/rt_students')(_app);
require('./routes/rt_classroom')(_app);
require('./routes/rt_home')(_app);

_app.use('/controllers', expressStatic('controllers'));
_app.use('/services', expressStatic('services'));

_app.listen(_port, function(){
  console.log("js-classroom server is running at "+_port);
});
