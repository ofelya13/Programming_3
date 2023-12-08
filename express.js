var express = require("express");

var app = express();

// app.use(express.static("."));

// app.get("/", function(redirect){
// res.redirect("index.html");
// });

app.listen(3000, function() {
    console.log("Example is running on port 3000");
});
// let Square = require("./square");


// let obj =new Square(4)
// console.log(obj.tviqarakusi());

// var fs = require('fs');

// function create(){
// var file = "hello.txt";

// fs.appendFileSync("t.txt", "Hello worl;joijoij uhud\n");
// }
// create();






// var fs = require('fs');
// function main(){
// fs.writeFile("hello.txt", "Hello world\n", function(err){
// console.log("fs.writeFile ended");
// });
// console.log("fs.writeFile");
// }
// main();



app.get("/", function(req, res, search) {

    search = "tumo"

    res.redirect("http://google.com/search?q=" + search);
});