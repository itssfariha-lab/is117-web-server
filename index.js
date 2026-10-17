const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, IS117! Your web server is working.');
});
app.get('/about', (req, res) => {
    res.send('A web server receives a request and sends a response.');
});
app.use((req, res) => {
    res.status(404).send('Page not found.');
});
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app;