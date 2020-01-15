const getConfig = require('../config');
const config = getConfig();

const connectToDatabase = async () => {
    const mongoose = require('mongoose');
    return await mongoose.connect(config.db.connectionString, {useNewUrlParser: true});
};

module.exports = connectToDatabase;
