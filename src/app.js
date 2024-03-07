const express = require('express');
const app = express();
const indexRouter = require('./routes/index.routes');

app.use(express.static('public'));

const port = 3010;

app.use('/', indexRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));

