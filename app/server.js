var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.use('/snapjs', express.static(__dirname + '/../node_modules/snapjs/'));
app.listen(process.env.PORT || 3000);
