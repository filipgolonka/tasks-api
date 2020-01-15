const config = require('../config');

const connectToDatabase = () => {
    const mongoose = require('mongoose');
    mongoose.connect(config.db.connectionString, {useNewUrlParser: true});

    return mongoose;
};

module.exports = connectToDatabase;
