const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/random', (req, res) => {
    res.render('random')
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
});