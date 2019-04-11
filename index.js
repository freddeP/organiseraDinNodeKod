const express = require("express");
const bodyParser = require("body-parser");




const app = express();
app.use(bodyParser.urlencoded({extended:false}));
// skicka app till routes.js
require("./routes.js")(app);









app.listen(1337);