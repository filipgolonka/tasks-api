const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db/index');
const setupLoginRoutes = require('./routes/login');
const setupTaskRoutes = require('./routes/task');

const setupServer = async () => {
    const connection = await connectToDatabase();

    const app = express();
    app.use(bodyParser.json());

    app.set('database', connection);

    setupLoginRoutes(app);
    setupTaskRoutes(app);

    return app;
};

module.exports = setupServer;
