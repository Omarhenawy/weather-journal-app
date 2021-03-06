// Setup empty JS object to act as endpoint for all routes
 let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000 ;
const server = app.listen(port,()=> {console.log(`running on localhost: ${port}`)})
//GET ROUTE
app.get('/all',function(req,res) {
  res.send(projectData);
});
// POST ROUTE
app.post('/get_data',function(req,res){

console.log(req.body);
  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.content = req.body.content;
res.send(projectData);

});
