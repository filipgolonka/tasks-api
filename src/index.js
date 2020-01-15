(async () => {
    const setupServer = require('./server');

    const app = await setupServer();

    app.get('/', (req, res) => res.send('Hello World!'));

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
})();
