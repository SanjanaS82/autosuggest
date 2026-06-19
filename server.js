const express = require("express");
const app = express();
// port is variable 
const port = process.env.PORT || 6700;

// To inform app where static files (html/css/js) are stored
app.use(express.static("frontend"));

// what is listen for?
app.listen(port,function(){
    console.log("App running on http://localhost:" + port);
});