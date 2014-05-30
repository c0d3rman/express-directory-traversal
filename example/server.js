edt = require('..');
// normally:
// edt = require('express-directory-traversal');

express = require('express');
servestatic = require('serve-static');

app = express();

app.use(edt('Go away baddies!'));
// for default error message - "403 Forbidden"
// app.use(edt());
app.use(servestatic(__dirname + "/webroot"));

app.listen(8000);
