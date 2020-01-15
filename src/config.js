const base = {
    jwt: {
        secret: 'ThisIsNotSoSecret',
    },
    db: {
        connectionString: 'mongodb://localhost:27017/api',
    },
};

const test = {
    ...base,
    db: {
        connectionString: 'mongodb://localhost:27017/api_test',
    }
};

const config = {
    test,
    production: base,
    development: base,
};

module.exports = (environment = process.env.NODE_ENV) => config[environment] || base;
