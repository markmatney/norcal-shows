var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.use('/snapjs', express.static(__dirname + '/../node_modules/snapjs/'));
app.use('/angular', express.static(__dirname + '/../node_modules/angular'));
app.use('/font-awesome', express.static(__dirname + '/../node_modules/font-awesome'));
app.listen(process.env.PORT || 3000);
