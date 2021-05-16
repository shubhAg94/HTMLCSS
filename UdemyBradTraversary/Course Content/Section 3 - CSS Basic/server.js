// BUt it internally uses HTTP library if NodeJS platform
let express = require("express");

// Create a new web server
let app = express();

app.use(express.static("."));

app.listen(4000, () => console.log("Server Running..."));