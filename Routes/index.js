//importing the express.js
const express = require('express');

const app = express();

//start the server
app.listen(4455,
    () => {
        console.log("Server started at port 4455");
    });
     