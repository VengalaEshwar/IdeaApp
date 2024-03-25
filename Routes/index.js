//importing the express.js
const express = require('express');

const app = express();

//start the server
app.listen(4455,
    () => {
        console.log("Server started at port 4455");
    });

const route = require("../Routes/ideas.routes.js");
app.use(express.json());
route(app);
     