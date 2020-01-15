const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { pickBy } = require('lodash');
const config = require('../config');
const Task = require('../db/model/task');

const isAuthorized = async (token) => {
    try {
        await jwt.verify(token, config.jwt.secret);

        return true;
    } catch (error) {
        console.error(error);
    }

    return false;
};

const authMiddleware = async (req, res, next) => {
    const token = req.body.token || req.query.token;

    if (!await isAuthorized(token)) {
        return res.send(401, { message: 'Unauthorized' });
    }

    return next();
};

const setupTaskRoutes = (app) => {
    const router = new Router();

    router.post('', async (req, res) => {
        const {
            title,
            description,
            dueDate,
            remindDate,
            isCompleted,
        } = req.body;

        const data = { title, description, dueDate, remindDate, isCompleted };
        const task = await Task.create(data);

        return res.status(201).send({ task });
    });

    router.get('', async (req, res) => {
        const result = await Task.find();

        return res.status(200).send(result);
    });

    router.get('/:id', async (req, res) => {
        const { id } = req.params;

        const result = await Task.findOne({ '_id': id});
        if (!result) {
            return res.status(404).send({ message: 'Not found' });
        }

        return res.status(200).send(result);
    });

    router.delete('/:id', async (req, res) => {
        const { id } = req.params;

        const criteria = { '_id': id};

        const result = await Task.findOne(criteria);
        if (!result) {
            return res.status(404).send({ message: 'Not found' });
        }

        await Task.deleteOne(criteria)

        return res.status(204).send();
    });

    router.put('/:id', async (req, res) => {
        const { id } = req.params;

        const criteria = { '_id': id};

        const result = await Task.findOne(criteria);
        if (!result) {
            return res.status(404).send({ message: 'Not found' });
        }

        const {
            title,
            description,
            dueDate,
            remindDate,
            isCompleted,
        } = req.body;

        const data = pickBy(
            { title, description, dueDate, remindDate, isCompleted },
            value => value !== undefined,
        );

        await Task.updateOne(criteria, data)

        return res.status(200).send({
            ...result,
            ...data,
        });
    });

    app.use('/v1/tasks', authMiddleware, router);
};

module.exports = setupTaskRoutes;
