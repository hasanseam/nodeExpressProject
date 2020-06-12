var bodyParser = require('body-parser')
var express = require('express');
var app = express();

const assetPath = __dirname + '/public'
app.use(express.static(assetPath))

const absolutePath = __dirname + '/views/index.html'
app.get('/', function(req,res){
  res.sendFile(absolutePath)
})
app.use(function middleware(req, res, next) {
  var str = req.method + " " + req.path + " - " + req.ip;
  bodyParser.urlencoded({extended: false});
  console.log(str)
  next();
});
app.route('/name')
     .get((req,res)=>{
  var firstname = req.query.first
  var lastname = req.query.last
  res.json({ name: firstname+' '+lastname})
})
app.get('/:word/echo',(req,res)=>{
  
  res.json({echo:req.params.word})
  
})
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);
app.get('/json', function(req,res){
  var response = ''
  if (process.env.MESSAGE_STYLE === "uppercase") {
     response = "Hello Json".toUpperCase();
  } else {
  response = "Hello json";
   }
  var jsonObj = {"message": response}
  res.json(jsonObj)
  
})

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
