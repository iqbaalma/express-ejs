const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) +1;
    res.render('random', {random: num})
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
});