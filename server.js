var express = require("express");
var app = express();



app.post("/add",function(req,res){
  console.log("data is here")
  res.end("Done")
})


app.listen(1994, function(){
  console.log("I Am Listening to  1994")
})
