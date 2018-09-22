var _app = require('./config/express')();
var _routStudents = require('./routes/rt_students')(_app);
var _routClassroom = require('./routes/rt_classroom')(_app);
var _routHome = require('./routes/rt_home')(_app);
var _port = 3000;

_app.listen(_port, function(){
  console.log("js-classroom server is running at "+_port);
});
