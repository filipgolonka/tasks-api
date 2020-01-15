const jwt = require('jsonwebtoken');
const User = require('../db/model/user');
const config = require('../config');

const setupLoginRoutes = (app) => {
    app.post('/v1/login', (req, res) => {
        const { email, password } = req.body;

        User.findOne(
            { email, password },
            function (err, user) {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ message: 'Internal server error' });
                }

                if (!user) {
                    return res.status(400).send({ message: 'User does not exist' });
                }

                const token = jwt.sign({ email }, config.jwt.secret);

                return res.status(200).send({ token });
            }
        );
    });
};

module.exports = setupLoginRoutes;
