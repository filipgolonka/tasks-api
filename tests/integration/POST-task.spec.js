const request = require('supertest');
const setupServer = require('../../src/server');
const Task = require('../../src/db/model/task');

describe('POST routes/task', () => {
    let server;
    beforeEach(async () => {
        server = await setupServer();
    });

    afterEach(async () => {
        const connection = server.get('database').connection;
        await Task.remove();
        connection.close();
    });

    it('returns 401 when user is not authorized', async () => {
        expect.assertions(2);

        const { status, body} = await request(server)
            .post('/v1/tasks')
            .send({ token: 'this-is-not-valid' });

        expect(status).toBe(401);
        expect(body).toEqual({ message: 'Unauthorized'});
    });

    it('creates task', async () => {
        expect.assertions(2);

        const { status, body} = await request(server)
            .post('/v1/tasks')
            .send({
                title: 'The corsair endures with amnesty, hoist the galley before it rises.',
                description: 'Old malarias lead to the fortune.',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwZ29sb25rYUBnbWFpbC5jb20iLCJpYXQiOjE1NzkwOTE4NDd9.k89bHhEttO3z4rZIiIdpwbSiO9yTtpD1KdZOhPZ5YyE'
            });

        expect(status).toBe(201);
        expect(body.task).toEqual(expect.objectContaining({
            title: 'The corsair endures with amnesty, hoist the galley before it rises.',
            description: 'Old malarias lead to the fortune.',
        }));
    });
});
