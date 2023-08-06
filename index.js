const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/slotgacor', (req, res) => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const num3 = Math.floor(Math.random() * 10);
    const num4 = Math.floor(Math.random() * 10);
    res.render('slotgacor', {num1, num2, num3, num4})
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
});