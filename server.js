var express = require("express");
var app = express()

app.get('/', function (req, res) {
	console.log("connection to home");
	res.send("Hello world");
})

app.listen(3000, 'localhost', function(err) {
	if(err) {
		console.log("Error starting server: " + err);
	} else {
		console.log("Listening on port 3000");
	}
});
