const app = require('../index');

test('home page returns status 200', async () => {
    const server = app.listen(0);

    try {
        const address = server.address();
        const response = await fetch(
            `http://localhost:${address.port}/`
        );

        expect(response.status).toBe(200);
        expect(await response.text()).toBe(
            'Hello, IS117! Your web server is working.'
        );
    } finally {
        await new Promise((resolve) => server.close(resolve));
    }
});
test('about page returns status 200', async () => {
    const server = app.listen(0);

    try {
        const address = server.address();
        const response = await fetch(
            `http://localhost:${address.port}/about`
        );

        expect(response.status).toBe(200);
        expect(await response.text()).toBe(
            'A web server receives a request and sends a response.'
        );
    } finally {
        await new Promise((resolve) => server.close(resolve));
    }
});
test('missing page returns status 404', async () => {
    const server = app.listen(0);

    try {
        const address = server.address();
        const response = await fetch(
            `http://localhost:${address.port}/missing-page`
        );

        expect(response.status).toBe(404);
        expect(await response.text()).toBe(
            'Page not found.'
        );
    } finally {
        await new Promise((resolve) => server.close(resolve));
    }
});