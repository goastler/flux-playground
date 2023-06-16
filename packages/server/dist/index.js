import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
var app = express();
var port = Number(process.env.PORT || 3000);
var websitePath = path.resolve(process.cwd(), process.env.WEBSITE_PATH || './website');
console.log('Website path:', websitePath);
app.use(express.static(websitePath));
app.get('/info', function (req, res) {
    fetch('https://api.ipify.org').then(function (res) { return res.text(); }).then(function (serverIp) {
        var info = {
            clientIp: req.ip,
            serverIp: serverIp
        };
        res.send(info);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});
var listener = app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
process.on('SIGINT', function () {
    console.log('Bye bye!');
    listener.close();
    process.exit();
});
