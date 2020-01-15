const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db/index');
const setupLoginRoutes = require('./routes/login');
const setupTaskRoutes = require('./routes/task');

const app = express();
app.use( bodyParser.json() );

connectToDatabase();

setupLoginRoutes(app);
setupTaskRoutes(app);

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
