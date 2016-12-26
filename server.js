var express = require("express");

var app = express();

app.set("view engine", "pug");

// hacemos public accesible a todos los usuarios
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("index")
})

app.listen(3000, function(err){
	if(err) return console.log("hubo un error"), process.exit(1);
	console.log("estas en el puerto 3000")
})