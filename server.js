const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'Valiko',
        likes: [
            'his family',
            'learning',
            'guitar'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Page does not exist'
    });
});

app.listen(3000);