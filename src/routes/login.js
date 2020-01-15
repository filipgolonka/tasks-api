const jwt = require('jsonwebtoken');
const User = require('../db/model/user');
const getConfig = require('../config');
const config = getConfig();

const setupLoginRoutes = (app) => {
    app.post('/v1/login', async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email, password });

            if (!user) {
                return res.status(404).send({message: 'User does not exist'});
            }

            const token = jwt.sign({email}, config.jwt.secret);

            return res.status(200).send({token});
        } catch (error) {
            console.error(error);
            return res.status(500).send({message: 'Internal server error'});
        }
    });
};

module.exports = setupLoginRoutes;
