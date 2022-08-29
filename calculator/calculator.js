const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// parse data from html form
// allow you to go into req.body( the parse version)
app.use(bodyParser.urlencoded({extended:true}))

// __dirname gives you the entire pathname to the folder
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res){
  //console.log(req.body.num1)
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is: " + result)
})

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req,res){
  var weight = parseFloat((req.body.weight))
  var height = parseFloat((req.body.height))
  var bmi = weight/(height*height)

  res.send("Your BMI is : " + bmi)
})

app.listen(3000, function(){
  console.log("Server is running on port 3000")
})
