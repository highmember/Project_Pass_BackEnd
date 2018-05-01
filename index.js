const app = require('./config/express');
mongoose = require('./config/mongoose');

port = process.env.PORT || 3000;
app.use(require("./test/test.route"));

app.listen( port );