const express = require("express")

// app is not a function for express
const app = express()

app.get("/", function(req, res){
  res.send("hello")
})

app.get("/contact", function(req, res){
  res.send("Contact me at dzheng@terpmail.com")
})

app.get("/about", function(req, res){
  res.send("My name is David and I am the owner of this website")
})

app.get("/hobbie", function(req, res){
  res.send("Yugioh is my hobby")
})

//listen for anything in local host 3000
app.listen(3000, function(){
  console.log("Server started on port 3000")
});
