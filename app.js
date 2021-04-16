var express=require("express");

var formDataApi=require("./api/formdata.js");

const app = express()



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});

 app.use("/api",formDataApi);

 
 const bodyParser = require("body-parser")
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.send('Hello World')
})



if(proces.env.NODE_ENV === 'production' ){
  app.use(express.static("frontend/build"));
}

app.listen(process.env.PORT || 5000,function(err){
    console.log("running on port 5000");
});
