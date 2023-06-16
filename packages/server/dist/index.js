import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();
var port = Number(process.env.PORT || 3000);
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
