const connectToDatabase = require('../src/db/index');
const User = require('../src/db/model/user');

(async () => {
    await connectToDatabase();

    await User.create({
        email: 'john@doe.com',
        password: 'test',
    });

    console.log('User is created!');

    process.exit();
})();
