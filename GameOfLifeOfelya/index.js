// var os = require("os")
// var message = "The platform is";

const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require("constants")

// function main (){
//     console.log(message + os.platform())

// }
// main();
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
// res.send("Hello Tumo child ");
// });

// app.listen(8000, function(){
// console.log("Example is running on port 3000");
// });






var express = require("express");
var app = express();

app.get("/", function(req, res){
res.send("<h1>Hello world</h1>");
});
app.get("/anun/:anun", function(req, res){
var name = req.params.anun;
res.send("<h1>Hello " + name +"</h1>");
});
app.listen(3000, function(){
console.log("Example is running on port 3000");
});