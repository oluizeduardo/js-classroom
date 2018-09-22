// Loads Filesystem library.
var fs = require('fs');

module.exports = function(app) {
    // When a GET is required to home address.
    app.get("/students",function(req, res) {

      // Sets the response code and the response type.
      res.writeHead(200, {'Content-Type':'text/html'});

      // Loads a page for the /students request.
      fs.readFile('./views/students.html', function(error, data){
        if(error){
          res.writeHead(404);
          res.write('File not found!');
        }else{
          // If there were no errors, send the page loaded.
          res.write(data);
        }
        res.end();
      });
    });
}
