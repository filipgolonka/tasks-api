const request = require('supertest');
const setupServer = require('../../src/server');
const User = require('../../src/db/model/user');

describe('GET routes/login', () => {
    let server;
    beforeEach(async () => {
        server = await setupServer();

        await User.create({
            name: 'John Doe',
            email: 'john@doe.com',
            password: 'test',
        });
    });

    afterEach(async () => {
        await User.deleteMany();
    });

    it('returns 404 when user does not exist', async () => {
        expect.assertions(2);

        const { status, body} = await request(server)
            .post('/v1/login')
            .send({ email: 'jane@doe.com', password: 'not-test' });

        expect(status).toBe(404);
        expect(body).toEqual({ message: 'User does not exist'});
    });

    it('returns 400 when data is incomplete', async () => {
        expect.assertions(2);

        const { status, body} = await request(server)
            .post('/v1/login')
            .send({ email: 'john@doe.com' });

        expect(status).toBe(400);
        expect(body).toEqual({});
    });

    it('creates token', async () => {
        expect.assertions(2);

        const { status, body} = await request(server)
            .post('/v1/login')
            .send({ email: 'john@doe.com', password: 'test' });

        expect(status).toBe(200);
        expect(body).toEqual({ token: expect.any(String)});
    });
});
